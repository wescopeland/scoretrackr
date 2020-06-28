(function (e, a) {
  for (var i in a) e[i] = a[i];
})(
  exports,
  /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {}
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter
        });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
      value,
      mode
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === 'object' &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, 'default', {
        enumerable: true,
        value: value
      });
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function (key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ './apps/api/src/connections/local.ts':
        /*!*******************************************!*\
  !*** ./apps/api/src/connections/local.ts ***!
  \*******************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', { value: true });
          exports.local = {
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'wescopeland',
            password: 'wescopeland',
            database: 'scoretrackr',
            synchronize: true,
            logging: false
          };

          /***/
        },

      /***/ './apps/api/src/main.ts':
        /*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', { value: true });
          __webpack_require__(/*! reflect-metadata */ 'reflect-metadata');
          const typeorm_1 = __webpack_require__(/*! typeorm */ 'typeorm');
          const apollo_server_1 = __webpack_require__(
            /*! apollo-server */ 'apollo-server'
          );
          const type_graphql_1 = __webpack_require__(
            /*! type-graphql */ 'type-graphql'
          );
          const local_1 = __webpack_require__(
            /*! ./connections/local */ './apps/api/src/connections/local.ts'
          );
          const data_access_entities_1 = __webpack_require__(
            /*! @scoretrackr/data-access-entities */ './libs/data-access-entities/src/index.ts'
          );
          const game_resolver_1 = __webpack_require__(
            /*! ./resolvers/game.resolver */ './apps/api/src/resolvers/game.resolver.ts'
          );
          const recent_submissions_resolver_1 = __webpack_require__(
            /*! ./resolvers/recent-submissions.resolver */ './apps/api/src/resolvers/recent-submissions.resolver.ts'
          );
          const score_resolver_1 = __webpack_require__(
            /*! ./resolvers/score.resolver */ './apps/api/src/resolvers/score.resolver.ts'
          );
          const track_resolver_1 = __webpack_require__(
            /*! ./resolvers/track.resolver */ './apps/api/src/resolvers/track.resolver.ts'
          );
          const track_leaderboard_resolver_1 = __webpack_require__(
            /*! ./resolvers/track-leaderboard.resolver */ './apps/api/src/resolvers/track-leaderboard.resolver.ts'
          );
          const startServer = async () => {
            const schema = await type_graphql_1.buildSchema({
              resolvers: [
                game_resolver_1.GameResolver,
                recent_submissions_resolver_1.RecentSubmissionsResolver,
                score_resolver_1.ScoreResolver,
                track_resolver_1.TrackResolver,
                track_leaderboard_resolver_1.TrackLeaderboardResolver
              ]
            });
            const server = new apollo_server_1.ApolloServer({ schema });
            typeorm_1.createConnection(
              Object.assign(Object.assign({}, local_1.local), {
                entities: [
                  data_access_entities_1.Game,
                  data_access_entities_1.Score,
                  data_access_entities_1.Track
                ]
              })
            );
            await server.listen(4000);
            console.log('Server has started!');
          };
          startServer();

          /***/
        },

      /***/ './apps/api/src/resolvers/game.resolver.ts':
        /*!*************************************************!*\
  !*** ./apps/api/src/resolvers/game.resolver.ts ***!
  \*************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          var _a;
          Object.defineProperty(exports, '__esModule', { value: true });
          const tslib_1 = __webpack_require__(/*! tslib */ 'tslib');
          const type_graphql_1 = __webpack_require__(
            /*! type-graphql */ 'type-graphql'
          );
          const data_access_entities_1 = __webpack_require__(
            /*! @scoretrackr/data-access-entities */ './libs/data-access-entities/src/index.ts'
          );
          let GameResolver = class GameResolver {
            async game(id) {
              return await data_access_entities_1.Game.findOne(id);
            }
            async tracks(game) {
              return await data_access_entities_1.Track.find({
                game: { id: game.id }
              });
            }
          };
          tslib_1.__decorate(
            [
              type_graphql_1.Query((returns) => data_access_entities_1.Game),
              tslib_1.__param(0, type_graphql_1.Arg('id')),
              tslib_1.__metadata('design:type', Function),
              tslib_1.__metadata('design:paramtypes', [String]),
              tslib_1.__metadata('design:returntype', Promise)
            ],
            GameResolver.prototype,
            'game',
            null
          );
          tslib_1.__decorate(
            [
              type_graphql_1.FieldResolver(),
              tslib_1.__param(0, type_graphql_1.Root()),
              tslib_1.__metadata('design:type', Function),
              tslib_1.__metadata('design:paramtypes', [
                typeof (_a =
                  typeof data_access_entities_1.Game !== 'undefined' &&
                  data_access_entities_1.Game) === 'function'
                  ? _a
                  : Object
              ]),
              tslib_1.__metadata('design:returntype', Promise)
            ],
            GameResolver.prototype,
            'tracks',
            null
          );
          GameResolver = tslib_1.__decorate(
            [type_graphql_1.Resolver((of) => data_access_entities_1.Game)],
            GameResolver
          );
          exports.GameResolver = GameResolver;

          /***/
        },

      /***/ './apps/api/src/resolvers/recent-submissions.resolver.ts':
        /*!***************************************************************!*\
  !*** ./apps/api/src/resolvers/recent-submissions.resolver.ts ***!
  \***************************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', { value: true });
          const tslib_1 = __webpack_require__(/*! tslib */ 'tslib');
          const type_graphql_1 = __webpack_require__(
            /*! type-graphql */ 'type-graphql'
          );
          const date_fns_1 = __webpack_require__(/*! date-fns */ 'date-fns');
          const data_access_common_models_1 = __webpack_require__(
            /*! @scoretrackr/data-access-common-models */ './libs/data-access-common-models/src/index.ts'
          );
          const data_access_entities_1 = __webpack_require__(
            /*! @scoretrackr/data-access-entities */ './libs/data-access-entities/src/index.ts'
          );
          let RecentSubmissionsResolver = class RecentSubmissionsResolver {
            async recentSubmissions(limitToDays) {
              const scores = await data_access_entities_1.Score.find({
                take: 60,
                order: { submittedAt: 'DESC' }
              });
              const returnSubmissionBlobs = [];
              const datesTracked = [];
              let currentSubmissionBlob = {
                date: null,
                submissions: []
              };
              scores.forEach((score) => {
                const parsedDate = date_fns_1.fromUnixTime(
                  score.submittedAt.getTime() / 1000
                );
                const formattedSubmittedAtDate = date_fns_1.format(
                  parsedDate,
                  'yyyy-MM-dd'
                );
                if (datesTracked.includes(formattedSubmittedAtDate)) {
                  // Fall into this case if we're already building a
                  // submission blob for this date.
                  currentSubmissionBlob.submissions.push(score);
                } else if (datesTracked.length < limitToDays) {
                  // Fall into this case if we're not building a submission blob for
                  // this date, but we still have room to do so.
                  // Finish off the previous submission blob if it's there.
                  if (currentSubmissionBlob.date) {
                    returnSubmissionBlobs.push(currentSubmissionBlob);
                    currentSubmissionBlob = { date: null, submissions: [] };
                  }
                  datesTracked.push(formattedSubmittedAtDate); // => ['2016-05-05T04:00:00.000Z']
                  // Start building the new blob.
                  currentSubmissionBlob.date = parsedDate.toISOString();
                  currentSubmissionBlob.submissions.push(score);
                }
              });
              // We just finished building the last submission blob.
              // Make sure it ends up in the response payload.
              if (currentSubmissionBlob.date) {
                returnSubmissionBlobs.push(currentSubmissionBlob);
              }
              return returnSubmissionBlobs;
            }
          };
          tslib_1.__decorate(
            [
              type_graphql_1.Query((returns) => [
                data_access_common_models_1.SubmissionBlob
              ]),
              tslib_1.__param(0, type_graphql_1.Arg('limitToDays')),
              tslib_1.__metadata('design:type', Function),
              tslib_1.__metadata('design:paramtypes', [Number]),
              tslib_1.__metadata('design:returntype', Promise)
            ],
            RecentSubmissionsResolver.prototype,
            'recentSubmissions',
            null
          );
          RecentSubmissionsResolver = tslib_1.__decorate(
            [type_graphql_1.Resolver()],
            RecentSubmissionsResolver
          );
          exports.RecentSubmissionsResolver = RecentSubmissionsResolver;

          /***/
        },

      /***/ './apps/api/src/resolvers/score.resolver.ts':
        /*!**************************************************!*\
  !*** ./apps/api/src/resolvers/score.resolver.ts ***!
  \**************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          var _a, _b, _c;
          Object.defineProperty(exports, '__esModule', { value: true });
          const tslib_1 = __webpack_require__(/*! tslib */ 'tslib');
          const type_graphql_1 = __webpack_require__(
            /*! type-graphql */ 'type-graphql'
          );
          const typeorm_1 = __webpack_require__(/*! typeorm */ 'typeorm');
          const data_access_entities_1 = __webpack_require__(
            /*! @scoretrackr/data-access-entities */ './libs/data-access-entities/src/index.ts'
          );
          const create_db_timestamp_1 = __webpack_require__(
            /*! ../utils/create-db-timestamp */ './apps/api/src/utils/create-db-timestamp.ts'
          );
          const filter_scores_by_player_top_1 = __webpack_require__(
            /*! ../utils/filter-scores-by-player-top */ './apps/api/src/utils/filter-scores-by-player-top.ts'
          );
          let ScoreResolver = class ScoreResolver {
            async score(id) {
              return await data_access_entities_1.Score.findOne(id);
            }
            async track(score) {
              return await data_access_entities_1.Track.findOne(score.track);
            }
            async game(score) {
              return await data_access_entities_1.Game.findOne(score.game);
            }
            async position(score, onDate) {
              var _a;
              const cutoffDate = onDate
                ? create_db_timestamp_1.createDbTimestamp(onDate)
                : create_db_timestamp_1.createDbTimestamp();
              const track = await data_access_entities_1.Track.findOne(
                score.track
              );
              const allTrackScores = await data_access_entities_1.Score.find({
                where: {
                  track,
                  submittedAt: typeorm_1.LessThanOrEqual(cutoffDate)
                },
                order: { finalScore: 'DESC' }
              });
              const filteredScores = filter_scores_by_player_top_1.filterScoresByPlayerTop(
                allTrackScores
              );
              const positions = [];
              let tieCounter = 1;
              for (const [index, filteredScore] of filteredScores.entries()) {
                if (index === 0) {
                  positions[index] = {
                    position: 1,
                    score: filteredScore.finalScore
                  };
                } else if (
                  positions[index - 1].score === filteredScore.finalScore
                ) {
                  // Fall into this block if this score ties the previous one.
                  tieCounter += 1;
                  positions[index] = {
                    position: positions[index - 1].position,
                    score: filteredScore.finalScore
                  };
                } else {
                  // Fall into this block if we're not tied.
                  positions[index] = {
                    position: positions[index - 1].position + tieCounter,
                    score: filteredScore.finalScore
                  };
                  tieCounter = 1; // In case the previous record was a tie.
                }
              }
              // All the position records have been built. Try to find the
              // input score in the list of records.
              const positionRecord = positions.find(
                (p) => p.score === score.finalScore
              );
              return (_a =
                positionRecord === null || positionRecord === void 0
                  ? void 0
                  : positionRecord.position) !== null && _a !== void 0
                ? _a
                : null;
            }
          };
          tslib_1.__decorate(
            [
              type_graphql_1.Query((returns) => data_access_entities_1.Score),
              tslib_1.__param(0, type_graphql_1.Arg('id')),
              tslib_1.__metadata('design:type', Function),
              tslib_1.__metadata('design:paramtypes', [String]),
              tslib_1.__metadata('design:returntype', Promise)
            ],
            ScoreResolver.prototype,
            'score',
            null
          );
          tslib_1.__decorate(
            [
              type_graphql_1.FieldResolver(),
              tslib_1.__param(0, type_graphql_1.Root()),
              tslib_1.__metadata('design:type', Function),
              tslib_1.__metadata('design:paramtypes', [
                typeof (_a =
                  typeof data_access_entities_1.Score !== 'undefined' &&
                  data_access_entities_1.Score) === 'function'
                  ? _a
                  : Object
              ]),
              tslib_1.__metadata('design:returntype', Promise)
            ],
            ScoreResolver.prototype,
            'track',
            null
          );
          tslib_1.__decorate(
            [
              type_graphql_1.FieldResolver(),
              tslib_1.__param(0, type_graphql_1.Root()),
              tslib_1.__metadata('design:type', Function),
              tslib_1.__metadata('design:paramtypes', [
                typeof (_b =
                  typeof data_access_entities_1.Score !== 'undefined' &&
                  data_access_entities_1.Score) === 'function'
                  ? _b
                  : Object
              ]),
              tslib_1.__metadata('design:returntype', Promise)
            ],
            ScoreResolver.prototype,
            'game',
            null
          );
          tslib_1.__decorate(
            [
              type_graphql_1.FieldResolver((returns) => Number, {
                nullable: true
              }),
              tslib_1.__param(0, type_graphql_1.Root()),
              tslib_1.__param(
                1,
                type_graphql_1.Arg('onDate', { nullable: true })
              ),
              tslib_1.__metadata('design:type', Function),
              tslib_1.__metadata('design:paramtypes', [
                typeof (_c =
                  typeof data_access_entities_1.Score !== 'undefined' &&
                  data_access_entities_1.Score) === 'function'
                  ? _c
                  : Object,
                String
              ]),
              tslib_1.__metadata('design:returntype', Promise)
            ],
            ScoreResolver.prototype,
            'position',
            null
          );
          ScoreResolver = tslib_1.__decorate(
            [type_graphql_1.Resolver((of) => data_access_entities_1.Score)],
            ScoreResolver
          );
          exports.ScoreResolver = ScoreResolver;

          /***/
        },

      /***/ './apps/api/src/resolvers/track-leaderboard.resolver.ts':
        /*!**************************************************************!*\
  !*** ./apps/api/src/resolvers/track-leaderboard.resolver.ts ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', { value: true });
          const tslib_1 = __webpack_require__(/*! tslib */ 'tslib');
          const type_graphql_1 = __webpack_require__(
            /*! type-graphql */ 'type-graphql'
          );
          const typeorm_1 = __webpack_require__(/*! typeorm */ 'typeorm');
          const data_access_entities_1 = __webpack_require__(
            /*! @scoretrackr/data-access-entities */ './libs/data-access-entities/src/index.ts'
          );
          const create_db_timestamp_1 = __webpack_require__(
            /*! ../utils/create-db-timestamp */ './apps/api/src/utils/create-db-timestamp.ts'
          );
          const filter_scores_by_player_top_1 = __webpack_require__(
            /*! ../utils/filter-scores-by-player-top */ './apps/api/src/utils/filter-scores-by-player-top.ts'
          );
          let TrackLeaderboardResolver = class TrackLeaderboardResolver {
            async trackLeaderboard(trackId, onDate) {
              const cutoffDate = onDate
                ? create_db_timestamp_1.createDbTimestamp(onDate)
                : create_db_timestamp_1.createDbTimestamp();
              const track = await data_access_entities_1.Track.findOne({
                id: trackId
              });
              const trackScores = await data_access_entities_1.Score.find({
                where: {
                  track,
                  submittedAt: typeorm_1.LessThanOrEqual(cutoffDate)
                },
                order: { finalScore: 'DESC' }
              });
              const onlyPersonalBestScores = filter_scores_by_player_top_1.filterScoresByPlayerTop(
                trackScores
              );
              return onlyPersonalBestScores;
            }
          };
          tslib_1.__decorate(
            [
              type_graphql_1.Query((returns) => [data_access_entities_1.Score]),
              tslib_1.__param(0, type_graphql_1.Arg('trackId')),
              tslib_1.__param(
                1,
                type_graphql_1.Arg('onDate', { nullable: true })
              ),
              tslib_1.__metadata('design:type', Function),
              tslib_1.__metadata('design:paramtypes', [String, String]),
              tslib_1.__metadata('design:returntype', Promise)
            ],
            TrackLeaderboardResolver.prototype,
            'trackLeaderboard',
            null
          );
          TrackLeaderboardResolver = tslib_1.__decorate(
            [type_graphql_1.Resolver((of) => data_access_entities_1.Score)],
            TrackLeaderboardResolver
          );
          exports.TrackLeaderboardResolver = TrackLeaderboardResolver;

          /***/
        },

      /***/ './apps/api/src/resolvers/track.resolver.ts':
        /*!**************************************************!*\
  !*** ./apps/api/src/resolvers/track.resolver.ts ***!
  \**************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          var _a;
          Object.defineProperty(exports, '__esModule', { value: true });
          const tslib_1 = __webpack_require__(/*! tslib */ 'tslib');
          const type_graphql_1 = __webpack_require__(
            /*! type-graphql */ 'type-graphql'
          );
          const data_access_entities_1 = __webpack_require__(
            /*! @scoretrackr/data-access-entities */ './libs/data-access-entities/src/index.ts'
          );
          let TrackResolver = class TrackResolver {
            async tracksByGameId(gameId) {
              return await data_access_entities_1.Track.find({
                game: { id: gameId }
              });
            }
            async submissionCount(track) {
              const [
                scores,
                count
              ] = await data_access_entities_1.Score.findAndCount({ track });
              return count;
            }
          };
          tslib_1.__decorate(
            [
              type_graphql_1.Query((returns) => [data_access_entities_1.Track]),
              tslib_1.__param(0, type_graphql_1.Arg('gameId')),
              tslib_1.__metadata('design:type', Function),
              tslib_1.__metadata('design:paramtypes', [String]),
              tslib_1.__metadata('design:returntype', Promise)
            ],
            TrackResolver.prototype,
            'tracksByGameId',
            null
          );
          tslib_1.__decorate(
            [
              type_graphql_1.FieldResolver((returns) => Number),
              tslib_1.__param(0, type_graphql_1.Root()),
              tslib_1.__metadata('design:type', Function),
              tslib_1.__metadata('design:paramtypes', [
                typeof (_a =
                  typeof data_access_entities_1.Track !== 'undefined' &&
                  data_access_entities_1.Track) === 'function'
                  ? _a
                  : Object
              ]),
              tslib_1.__metadata('design:returntype', Promise)
            ],
            TrackResolver.prototype,
            'submissionCount',
            null
          );
          TrackResolver = tslib_1.__decorate(
            [type_graphql_1.Resolver((of) => data_access_entities_1.Track)],
            TrackResolver
          );
          exports.TrackResolver = TrackResolver;

          /***/
        },

      /***/ './apps/api/src/utils/create-db-timestamp.ts':
        /*!***************************************************!*\
  !*** ./apps/api/src/utils/create-db-timestamp.ts ***!
  \***************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', { value: true });
          const date_fns_1 = __webpack_require__(/*! date-fns */ 'date-fns');
          exports.createDbTimestamp = (date) => {
            // We are using sqlite in Jest for an in-memory database.
            // sqlite does not natively support the timestamp type,
            // so those values must be converted to strings.
            if (!process.env.JEST_WORKER_ID) {
              return date ? new Date(date) : new Date();
            } else {
              return date
                ? date_fns_1.format(new Date(date), 'yyyy-MM-dd')
                : date_fns_1.format(new Date(), 'yyyy-MM-dd');
            }
          };

          /***/
        },

      /***/ './apps/api/src/utils/filter-scores-by-player-top.ts':
        /*!***********************************************************!*\
  !*** ./apps/api/src/utils/filter-scores-by-player-top.ts ***!
  \***********************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', { value: true });
          // For the sake of position tracking, we only care
          // about a player's top scores. eg: If Player A has
          // scores of 800 and 700, we only care about the 800
          // and want to throw the 700 point score away.
          exports.filterScoresByPlayerTop = (scores) => {
            const filteredScores = [];
            const trackedPlayerAliases = [];
            scores.forEach((score) => {
              const { playerAlias } = score;
              if (!trackedPlayerAliases.includes(playerAlias)) {
                trackedPlayerAliases.push(playerAlias);
                filteredScores.push(score);
              }
            });
            return filteredScores;
          };

          /***/
        },

      /***/ './libs/data-access-common-models/src/index.ts':
        /*!*****************************************************!*\
  !*** ./libs/data-access-common-models/src/index.ts ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', { value: true });
          const tslib_1 = __webpack_require__(/*! tslib */ 'tslib');
          tslib_1.__exportStar(
            __webpack_require__(
              /*! ./lib/game-drawer-width */ './libs/data-access-common-models/src/lib/game-drawer-width.ts'
            ),
            exports
          );
          tslib_1.__exportStar(
            __webpack_require__(
              /*! ./lib/store-defaults.model */ './libs/data-access-common-models/src/lib/store-defaults.model.ts'
            ),
            exports
          );
          tslib_1.__exportStar(
            __webpack_require__(
              /*! ./lib/submission-blob.model */ './libs/data-access-common-models/src/lib/submission-blob.model.ts'
            ),
            exports
          );

          /***/
        },

      /***/ './libs/data-access-common-models/src/lib/game-drawer-width.ts':
        /*!*********************************************************************!*\
  !*** ./libs/data-access-common-models/src/lib/game-drawer-width.ts ***!
  \*********************************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', { value: true });
          exports.gameDrawerWidth = 260;

          /***/
        },

      /***/ './libs/data-access-common-models/src/lib/store-defaults.model.ts':
        /*!************************************************************************!*\
  !*** ./libs/data-access-common-models/src/lib/store-defaults.model.ts ***!
  \************************************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', { value: true });

          /***/
        },

      /***/ './libs/data-access-common-models/src/lib/submission-blob.model.ts':
        /*!*************************************************************************!*\
  !*** ./libs/data-access-common-models/src/lib/submission-blob.model.ts ***!
  \*************************************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', { value: true });
          const tslib_1 = __webpack_require__(/*! tslib */ 'tslib');
          const type_graphql_1 = __webpack_require__(
            /*! type-graphql */ 'type-graphql'
          );
          const data_access_entities_1 = __webpack_require__(
            /*! @scoretrackr/data-access-entities */ './libs/data-access-entities/src/index.ts'
          );
          let SubmissionBlob = class SubmissionBlob {};
          tslib_1.__decorate(
            [
              type_graphql_1.Field(() => String),
              tslib_1.__metadata('design:type', String)
            ],
            SubmissionBlob.prototype,
            'date',
            void 0
          );
          tslib_1.__decorate(
            [
              type_graphql_1.Field(() => [data_access_entities_1.Score]),
              tslib_1.__metadata('design:type', Array)
            ],
            SubmissionBlob.prototype,
            'submissions',
            void 0
          );
          SubmissionBlob = tslib_1.__decorate(
            [type_graphql_1.ObjectType()],
            SubmissionBlob
          );
          exports.SubmissionBlob = SubmissionBlob;

          /***/
        },

      /***/ './libs/data-access-entities/src/index.ts':
        /*!************************************************!*\
  !*** ./libs/data-access-entities/src/index.ts ***!
  \************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', { value: true });
          const tslib_1 = __webpack_require__(/*! tslib */ 'tslib');
          tslib_1.__exportStar(
            __webpack_require__(
              /*! ./lib/game.entity */ './libs/data-access-entities/src/lib/game.entity.ts'
            ),
            exports
          );
          tslib_1.__exportStar(
            __webpack_require__(
              /*! ./lib/score.entity */ './libs/data-access-entities/src/lib/score.entity.ts'
            ),
            exports
          );
          tslib_1.__exportStar(
            __webpack_require__(
              /*! ./lib/track.entity */ './libs/data-access-entities/src/lib/track.entity.ts'
            ),
            exports
          );

          /***/
        },

      /***/ './libs/data-access-entities/src/lib/game.entity.ts':
        /*!**********************************************************!*\
  !*** ./libs/data-access-entities/src/lib/game.entity.ts ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', { value: true });
          const tslib_1 = __webpack_require__(/*! tslib */ 'tslib');
          const typeorm_1 = __webpack_require__(/*! typeorm */ 'typeorm');
          const type_graphql_1 = __webpack_require__(
            /*! type-graphql */ 'type-graphql'
          );
          const track_entity_1 = __webpack_require__(
            /*! ./track.entity */ './libs/data-access-entities/src/lib/track.entity.ts'
          );
          let Game = class Game extends typeorm_1.BaseEntity {};
          tslib_1.__decorate(
            [
              type_graphql_1.Field(() => type_graphql_1.ID),
              typeorm_1.PrimaryColumn('text'),
              tslib_1.__metadata('design:type', String)
            ],
            Game.prototype,
            'id',
            void 0
          );
          tslib_1.__decorate(
            [
              type_graphql_1.Field(() => String),
              typeorm_1.Column('text'),
              tslib_1.__metadata('design:type', String)
            ],
            Game.prototype,
            'name',
            void 0
          );
          tslib_1.__decorate(
            [
              type_graphql_1.Field(() => String),
              typeorm_1.Column('text'),
              tslib_1.__metadata('design:type', String)
            ],
            Game.prototype,
            'color',
            void 0
          );
          tslib_1.__decorate(
            [
              type_graphql_1.Field(() => [track_entity_1.Track]),
              typeorm_1.OneToMany(
                (type) => track_entity_1.Track,
                (track) => track.game
              ),
              tslib_1.__metadata('design:type', Array)
            ],
            Game.prototype,
            'tracks',
            void 0
          );
          Game = tslib_1.__decorate(
            [typeorm_1.Entity(), type_graphql_1.ObjectType()],
            Game
          );
          exports.Game = Game;

          /***/
        },

      /***/ './libs/data-access-entities/src/lib/score.entity.ts':
        /*!***********************************************************!*\
  !*** ./libs/data-access-entities/src/lib/score.entity.ts ***!
  \***********************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          var _a, _b, _c;
          Object.defineProperty(exports, '__esModule', { value: true });
          const tslib_1 = __webpack_require__(/*! tslib */ 'tslib');
          const typeorm_1 = __webpack_require__(/*! typeorm */ 'typeorm');
          const type_graphql_1 = __webpack_require__(
            /*! type-graphql */ 'type-graphql'
          );
          const game_entity_1 = __webpack_require__(
            /*! ./game.entity */ './libs/data-access-entities/src/lib/game.entity.ts'
          );
          const track_entity_1 = __webpack_require__(
            /*! ./track.entity */ './libs/data-access-entities/src/lib/track.entity.ts'
          );
          let Score = class Score extends typeorm_1.BaseEntity {};
          tslib_1.__decorate(
            [
              type_graphql_1.Field(() => type_graphql_1.ID),
              typeorm_1.PrimaryGeneratedColumn('uuid'),
              tslib_1.__metadata('design:type', String)
            ],
            Score.prototype,
            'id',
            void 0
          );
          tslib_1.__decorate(
            [
              type_graphql_1.Field(() => Number),
              typeorm_1.Column('integer'),
              tslib_1.__metadata('design:type', Number)
            ],
            Score.prototype,
            'finalScore',
            void 0
          );
          tslib_1.__decorate(
            [
              type_graphql_1.Field(() => String),
              typeorm_1.Column('text'),
              tslib_1.__metadata('design:type', String)
            ],
            Score.prototype,
            'platform',
            void 0
          );
          tslib_1.__decorate(
            [
              type_graphql_1.Field(() => String),
              typeorm_1.Column('text'),
              tslib_1.__metadata('design:type', String)
            ],
            Score.prototype,
            'playerAlias',
            void 0
          );
          tslib_1.__decorate(
            [
              type_graphql_1.Field(() => Date),
              typeorm_1.Column('timestamp'),
              tslib_1.__metadata(
                'design:type',
                typeof (_a = typeof Date !== 'undefined' && Date) === 'function'
                  ? _a
                  : Object
              )
            ],
            Score.prototype,
            'submittedAt',
            void 0
          );
          tslib_1.__decorate(
            [
              type_graphql_1.Field(() => game_entity_1.Game),
              typeorm_1.ManyToOne(
                (type) => game_entity_1.Game,
                (game) => game.id
              ),
              tslib_1.__metadata(
                'design:type',
                typeof (_b =
                  typeof game_entity_1.Game !== 'undefined' &&
                  game_entity_1.Game) === 'function'
                  ? _b
                  : Object
              )
            ],
            Score.prototype,
            'game',
            void 0
          );
          tslib_1.__decorate(
            [
              type_graphql_1.Field(() => track_entity_1.Track),
              typeorm_1.ManyToOne(
                (type) => track_entity_1.Track,
                (track) => track.id
              ),
              tslib_1.__metadata(
                'design:type',
                typeof (_c =
                  typeof track_entity_1.Track !== 'undefined' &&
                  track_entity_1.Track) === 'function'
                  ? _c
                  : Object
              )
            ],
            Score.prototype,
            'track',
            void 0
          );
          Score = tslib_1.__decorate(
            [typeorm_1.Entity(), type_graphql_1.ObjectType()],
            Score
          );
          exports.Score = Score;

          /***/
        },

      /***/ './libs/data-access-entities/src/lib/track.entity.ts':
        /*!***********************************************************!*\
  !*** ./libs/data-access-entities/src/lib/track.entity.ts ***!
  \***********************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';

          var _a;
          Object.defineProperty(exports, '__esModule', { value: true });
          const tslib_1 = __webpack_require__(/*! tslib */ 'tslib');
          const typeorm_1 = __webpack_require__(/*! typeorm */ 'typeorm');
          const type_graphql_1 = __webpack_require__(
            /*! type-graphql */ 'type-graphql'
          );
          const game_entity_1 = __webpack_require__(
            /*! ./game.entity */ './libs/data-access-entities/src/lib/game.entity.ts'
          );
          let Track = class Track extends typeorm_1.BaseEntity {};
          tslib_1.__decorate(
            [
              type_graphql_1.Field(() => type_graphql_1.ID),
              typeorm_1.PrimaryGeneratedColumn('uuid'),
              tslib_1.__metadata('design:type', String)
            ],
            Track.prototype,
            'id',
            void 0
          );
          tslib_1.__decorate(
            [
              type_graphql_1.Field(() => String),
              typeorm_1.Column('text'),
              tslib_1.__metadata('design:type', String)
            ],
            Track.prototype,
            'name',
            void 0
          );
          tslib_1.__decorate(
            [
              type_graphql_1.Field(() => String),
              typeorm_1.Column('text'),
              tslib_1.__metadata('design:type', String)
            ],
            Track.prototype,
            'friendlyId',
            void 0
          );
          tslib_1.__decorate(
            [
              type_graphql_1.Field(() => game_entity_1.Game),
              typeorm_1.ManyToOne(
                (type) => game_entity_1.Game,
                (game) => game.id
              ),
              tslib_1.__metadata(
                'design:type',
                typeof (_a =
                  typeof game_entity_1.Game !== 'undefined' &&
                  game_entity_1.Game) === 'function'
                  ? _a
                  : Object
              )
            ],
            Track.prototype,
            'game',
            void 0
          );
          Track = tslib_1.__decorate(
            [typeorm_1.Entity(), type_graphql_1.ObjectType()],
            Track
          );
          exports.Track = Track;

          /***/
        },

      /***/ 0:
        /*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          module.exports = __webpack_require__(
            /*! /Users/wescopeland/Documents/GitHub/scoretrackr/apps/api/src/main.ts */ './apps/api/src/main.ts'
          );

          /***/
        },

      /***/ 'apollo-server':
        /*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
        /*! no static exports found */
        /***/ function (module, exports) {
          module.exports = require('apollo-server');

          /***/
        },

      /***/ 'date-fns':
        /*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
        /*! no static exports found */
        /***/ function (module, exports) {
          module.exports = require('date-fns');

          /***/
        },

      /***/ 'reflect-metadata':
        /*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
        /*! no static exports found */
        /***/ function (module, exports) {
          module.exports = require('reflect-metadata');

          /***/
        },

      /***/ tslib:
        /*!************************!*\
  !*** external "tslib" ***!
  \************************/
        /*! no static exports found */
        /***/ function (module, exports) {
          module.exports = require('tslib');

          /***/
        },

      /***/ 'type-graphql':
        /*!*******************************!*\
  !*** external "type-graphql" ***!
  \*******************************/
        /*! no static exports found */
        /***/ function (module, exports) {
          module.exports = require('type-graphql');

          /***/
        },

      /***/ typeorm:
        /*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
        /*! no static exports found */
        /***/ function (module, exports) {
          module.exports = require('typeorm');

          /***/
        }

      /******/
    }
  )
);
//# sourceMappingURL=main.js.map
