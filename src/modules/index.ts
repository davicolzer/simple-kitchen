import { handlerPath } from 'src/util/handler-resolver';

export const modules = {
  getAllRecipes: {
    handler: `${handlerPath(__dirname)}/getAllRecipes/index.handler`,
    events: [
      {
        http: {
          method: 'get',
          path: '/recipes/',
        },
      },
    ],
  },
};
