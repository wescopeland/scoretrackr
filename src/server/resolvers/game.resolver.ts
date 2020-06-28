import {
  Arg,
  FieldResolver,
  Query,
  Resolver,
  ResolverInterface,
  Root
} from 'type-graphql';

import { Game, Track } from 'common/entity';

@Resolver((of) => Game)
export class GameResolver implements ResolverInterface<Game> {
  @Query((returns) => Game)
  async game(@Arg('id') id: string) {
    return Game.findOne(id);
  }

  @FieldResolver()
  async tracks(@Root() game: Game) {
    return Track.find({ game: { id: game.id } });
  }
}
