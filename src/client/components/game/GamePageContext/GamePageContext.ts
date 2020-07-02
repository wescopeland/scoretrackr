import { UseQueryResult } from 'graphql-hooks';
import { createContext } from 'react';

import { Game } from 'common/entities';

export const GamePageContext = createContext<UseQueryResult<{ game?: Game }>>(
  null
);
