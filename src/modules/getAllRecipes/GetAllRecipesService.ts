import { ISpoonacularApi } from 'src/services/SpoonacularApi';
import { IGetAllRecipesService } from './types/functions';

interface IService {
  spoonacularApi: ISpoonacularApi;
}
export function GetAllRecipesService({
  spoonacularApi,
}: IService): IGetAllRecipesService {
  return {
    execute: async (ingredients) => {
      const recipes = await spoonacularApi.getAll(ingredients);
      return {
        recipes,
      };
    },
  };
}
