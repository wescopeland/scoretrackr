import { UseQueryResult } from 'graphql-hooks';
import { createContext } from 'react';

import { Game } from '@scoretrackr/data-access-entities';

export const GamePageContext = createContext<UseQueryResult<{ game?: Game }>>(
  null
);
