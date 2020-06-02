import { Box, Typography } from '@material-ui/core';
import { formatDistanceToNow, isToday, isYesterday, parseISO } from 'date-fns';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { RecentSubmission } from '../RecentSubmission';

const donkeyKong = {
  name: 'Donkey Kong',
  friendlyId: 'dkong',
  color: '#ba3448'
};

const donkeyKongJr = {
  name: 'Donkey Kong Jr.',
  friendlyId: 'dkongjr',
  color: '#3451ba'
};

const recentSubmissions = [
  {
    date: '2020-06-02T16:27:06.461Z',
    submissions: [
      {
        game: donkeyKong,
        track: 'Factory settings',
        playerAlias: 'Justin Elliott',
        score: 1230000,
        position: 3
      },
      {
        game: donkeyKong,
        track: 'Factory settings',
        playerAlias: 'Wes Copeland',
        score: 1218000,
        position: 4
      }
    ]
  },
  {
    date: '2020-06-01T16:27:06.461Z',
    submissions: [
      {
        game: donkeyKongJr,
        track: 'Factory settings',
        playerAlias: 'Ben Falls',
        score: 1420000,
        position: 1
      }
    ]
  },
  {
    date: '2020-05-14T16:27:06.461Z',
    submissions: [
      {
        game: donkeyKong,
        track: 'No hammer',
        playerAlias: 'John Smith',
        score: 700000,
        position: 2
      },
      {
        game: donkeyKongJr,
        track: 'Factory settings',
        playerAlias: 'John Doe',
        score: 680000,
        position: 38
      },
      {
        game: donkeyKong,
        track: 'Factory settings',
        playerAlias: 'Jane Doe',
        score: 417200,
        position: 212
      }
    ]
  }
];

export const MostRecentSubmissions = () => {
  const { t } = useTranslation('common');

  const getDateDistanceText = (date: string) => {
    const parsedDate = parseISO(date);

    if (isToday(parsedDate)) {
      return t('today');
    } else if (isYesterday(parsedDate)) {
      return t('yesterday');
    }

    return formatDistanceToNow(parsedDate, { addSuffix: true });
  };

  return (
    <>
      {recentSubmissions.map((recentSubmission, index) => (
        <div key={recentSubmission.date}>
          <Typography
            variant="subtitle1"
            className={`mb-1 ${index !== 0 && 'mt-5'}`}
          >
            {getDateDistanceText(recentSubmission.date)}
          </Typography>

          {recentSubmission.submissions.map((submission) => (
            <Box
              key={`${submission.game} ${submission.playerAlias} ${submission.score}`}
              marginBottom={2}
            >
              <RecentSubmission
                gameColor={submission.game.color}
                gameFriendlyId={submission.game.friendlyId}
                gameName={submission.game.name}
                trackName={submission.track}
                playerAlias={submission.playerAlias}
                score={submission.score}
                position={submission.position}
              />
            </Box>
          ))}
        </div>
      ))}
    </>
  );
};
