import { TrackWithSubmissionCount } from '~/models/track-with-submission-count.model';

export const sortTracks = (tracks: TrackWithSubmissionCount[]) => {
  return tracks.sort((a, b) => {
    if (a.submissionCount < b.submissionCount) return 1;
    if (a.submissionCount > b.submissionCount) return -1;

    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });
};
