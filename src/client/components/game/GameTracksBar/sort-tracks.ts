import { Track } from 'common/entities';

export const sortTracks = (tracks: Track[]) => {
  return tracks.sort((a, b) => {
    if (a.submissionCount < b.submissionCount) return 1;
    if (a.submissionCount > b.submissionCount) return -1;

    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });
};
