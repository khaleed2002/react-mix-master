import { Link } from 'react-router-dom'
const CocktailCard = ({ id, alcoholic, glass, name, image }) => {
  return (
    <div className="cocktail-card">
      <div className="img-container">
        <img src={image} alt={`${name} image`} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{alcoholic}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          Details
        </Link>
      </div>
    </div>
  )
}
export default CocktailCard
