import { UseQueryResult } from 'graphql-hooks';
import { createContext } from 'react';

import { Game } from '../../../common/models/game.model';

export const GamePageContext = createContext<UseQueryResult<{ game?: Game }>>(
  null
);
