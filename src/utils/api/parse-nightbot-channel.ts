import { NightbotChannel } from '~/models/nightbot-channel.model';

export const parseNightbotChannel = (
  channelParams: string
): NightbotChannel => {
  const params = new URLSearchParams(channelParams);

  return {
    name: params.get('name'),
    displayName: params.get('displayName'),
    provider: params.get('provider'),
    providerId: params.get('providerId')
  };
};
