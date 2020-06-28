import {
  Arg,
  FieldResolver,
  ResolverInterface,
  Root,
  Resolver,
  Query
} from 'type-graphql';

import { Game, Track } from '@scoretrackr/data-access-entities';

@Resolver((of) => Game)
export class GameResolver implements ResolverInterface<Game> {
  @Query((returns) => Game)
  async game(@Arg('id') id: string) {
    return await Game.findOne(id);
  }

  @FieldResolver()
  async tracks(@Root() game: Game) {
    return await Track.find({ game: { id: game.id } });
  }
}
