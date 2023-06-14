import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

export interface IGetAllRecipesService {
  execute: (ingredients: string[]) => Promise<{ [x: string]: string[] }>;
}

export interface IGetAllRecipesController {
  handler: (event: APIGatewayEvent) => Promise<APIGatewayProxyResult>;
}
