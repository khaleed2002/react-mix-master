import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import { useQuery } from '@tanstack/react-query'

const cocktailSearch =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url) // to get searchTerm value from params

    const searchTerm = url.searchParams.get('search') || ''
    await queryClient.ensureQueryData({
      queryKey: ['search', searchTerm || 'all'],
      queryFn: async () => {
        const response = await axios.get(`${cocktailSearch}${searchTerm}`)
        return response.data.drinks
      },
    })
    return { searchTerm }
  }
const Landing = () => {
  const { searchTerm } = useLoaderData()

  const { data: drinks } = useQuery({
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearch}${searchTerm}`)
      return response.data.drinks
    },
  })
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  )
}
export default Landing
