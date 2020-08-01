import { NightbotUser } from '~/models/nightbot-user.model';

export const parseNightbotUser = (userParams: string): NightbotUser => {
  const params = new URLSearchParams(userParams);

  return {
    name: params.get('name'),
    displayName: params.get('displayName'),
    provider: params.get('provider'),
    providerId: params.get('providerId'),
    userLevel: params.get('userLevel')
  };
};
