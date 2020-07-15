import * as sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export const sendVerificationEmail = (
  toAddress: string,
  verificationToken: string
) => {
  const email: sendgrid.MailDataRequired = {
    to: toAddress,
    from: 'welcome@scoretrac.kr',
    subject: '👋  Welcome to Scoretrackr! Confirm your email',
    text: `Your token is ${verificationToken}`
  };

  sendgrid.send(email);
};
