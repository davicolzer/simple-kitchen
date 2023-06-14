import axios from 'axios';

export interface ISpoonacularApi {
  getAll: (search: string[]) => Promise<any>;
}

export function SpoonacularApi({ key }): ISpoonacularApi {
  return {
    getAll: async (ingredients) => {
      const formatedIngredients = ingredients.join(',+');
      try {
        const response = await axios({
          method: 'get',
          url: `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key}&ingredients=${formatedIngredients}`,
        });

        return response.data;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  };
}
