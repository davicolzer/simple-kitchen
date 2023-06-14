import { GetAllRecipesService } from './GetAllRecipesService';
import { GetAllRecipesController } from './GetAllRecipesController';
import { SpoonacularApi } from 'src/services/SpoonacularApi';

const spoonacularApi = SpoonacularApi({ key: process.env.SPOONACULAR_KEY });

const getAllRecipesService = GetAllRecipesService({ spoonacularApi });
const getAllRecipesController = GetAllRecipesController(getAllRecipesService);
const { handler } = getAllRecipesController;

export { handler };
