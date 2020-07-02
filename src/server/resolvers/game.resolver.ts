import {
  Arg,
  FieldResolver,
  Query,
  Resolver,
  ResolverInterface,
  Root
} from 'type-graphql';

import { GameEntity, TrackEntity } from 'common/entities';

@Resolver((of) => GameEntity)
export class GameResolver implements ResolverInterface<GameEntity> {
  @Query((returns) => GameEntity)
  async game(@Arg('id') id: string) {
    return GameEntity.findOne(id);
  }

  @FieldResolver()
  async tracks(@Root() game: GameEntity) {
    return TrackEntity.find({ game: { id: game.id } });
  }
}
