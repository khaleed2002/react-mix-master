import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link, Navigate, useLoaderData } from 'react-router-dom'
const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
export const loader = (queryClient) => async (data) => {
  const id = data.params.id
  await queryClient.ensureQueryData({
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const response = await axios.get(`${singleCocktailUrl}${id}`)
      return response
    },
  })
  return { id }
}

const Cocktail = () => {
  const { id } = useLoaderData()
  const { data: response } = useQuery({
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const response = await axios.get(`${singleCocktailUrl}${id}`)
      return response
    },
  })
  // handle output

  const drink = response.data.drinks.map((item) => {
    const {
      idDrink,
      strCategory,
      strGlass,
      strDrink,
      strAlcoholic,
      strInstructions,
      strDrinkThumb,
    } = item
    const ingredientList = []
    let i = 1
    while (i <= 15) {
      if (item[`strIngredient${i}`]) {
        ingredientList.push(item[`strIngredient${i}`])
        i += 1
      } else {
        break
      }
    }
    return {
      id: idDrink,
      name: strDrink,
      category: strCategory,
      glass: strGlass,
      alcoholic: strAlcoholic,
      instractions: strInstructions,
      image: strDrinkThumb,
      ingredientList,
    }
  })
  if (!drink) {
    return <Navigate to={'/'} /> // to go to the home page if the user enter a wrong id
  }
  const {
    name,
    category,
    image,
    glass,
    alcoholic,
    instractions,
    ingredientList,
  } = drink[0]
  let ingredients = ''
  for (let i = 0; i < ingredientList.length - 1; i++) {
    ingredients = ingredients + ingredientList[i] + ', '
  }
  ingredients += ingredientList[ingredientList.length - 1]
  return (
    <div className="single-cocktail-page">
      <header>
        <Link to={'/'} className="btn">
          back home
        </Link>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span> {name}
          </p>
          <p>
            <span className="drink-data">category: </span> {category}
          </p>
          <p>
            <span className="drink-data">info: </span> {alcoholic}
          </p>
          <p>
            <span className="drink-data">glass: </span> {glass}
          </p>
          <p>
            <span className="drink-data">ingredient: </span>
            {ingredients}
          </p>
          <p>
            <span className="drink-data">Instructions : </span> {instractions}
          </p>
        </div>
      </div>
    </div>
  )
}
export default Cocktail
