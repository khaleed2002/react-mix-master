import CocktailCard from './CocktailCard'
const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h2 style={{ textAlign: 'center' }}>No Matching Cocktails Found...</h2>
    )
  }
  const formattedDrinks = drinks.map((item) => {
    return {
      id: item.idDrink,
      alcoholic: item.strAlcoholic,
      glass: item.strGlass,
      name: item.strDrink,
      image: item.strDrinkThumb,
    }
  })
  return (
    <div className='cocktail-list'>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />
      })}
    </div>
  )
}
export default CocktailList
