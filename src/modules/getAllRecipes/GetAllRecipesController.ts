import { APIGatewayProxyEvent } from 'aws-lambda';
import {
  IGetAllRecipesController,
  IGetAllRecipesService,
} from './types/functions';
import { controllerResponse } from '../../util/controllerResponse';

export function GetAllRecipesController(
  getAllRecipesService: IGetAllRecipesService
): IGetAllRecipesController {
  return {
    handler: async (event: APIGatewayProxyEvent) => {
      const { ingredients } = event.queryStringParameters;

      const { recipes } = await getAllRecipesService.execute(
        ingredients.split(',')
      );

      return controllerResponse<any>({
        statusCode: 200,
        body: {
          message: 'Get All Recipes',
          data: recipes,
        },
      });
    },
  };
}
