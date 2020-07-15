import * as argon2 from 'argon2';
import { randomBytes } from 'crypto';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { UserEntity, UserRole, VerificationTokenEntity } from 'common/entities';
import { sendVerificationEmail } from 'common/utils/send-verification-email';

passport.use(
  'signup',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    async (req, email, password, done) => {
      try {
        const { username } = req.body;

        if (password.length < 10) {
          throw new Error('Password must be at least 10 characters in length');
        }

        const newUser = new UserEntity();
        newUser.username = username;
        newUser.email = email;
        newUser.createdAt = new Date();
        newUser.role = UserRole.Member;
        newUser.isVerified = false;
        newUser.password = await argon2.hash(password, {
          type: argon2.argon2id
        });

        const verificationToken = new VerificationTokenEntity();
        verificationToken.token = randomBytes(64).toString('hex');

        newUser.verificationToken = verificationToken;

        await VerificationTokenEntity.save(verificationToken);
        await UserEntity.save(newUser);

        sendVerificationEmail(newUser.email, verificationToken.token);

        return done(null, newUser);
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await UserEntity.findOne({ where: { email } });

        if (!user) {
          // The user doesn't exist in the database.
          return done(null, false, { message: 'Invalid credentials' });
        }

        // Validate the password. If the passwords match, return true.
        const isValid = await argon2.verify(user.password, password, {
          type: argon2.argon2id
        });

        if (!isValid) {
          return done(null, false, { message: 'Invalid credentials' });
        }

        // Send the user information to the next middleware.
        return done(null, user, { message: 'Logged in successfully' });
      } catch (err) {
        return done(err);
      }
    }
  )
);
