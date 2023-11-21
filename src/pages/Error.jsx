import { Link, useRouteError } from 'react-router-dom'
import errorImg from '../assets/not-found.svg'
const Error = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return (
      <div className="error">
        <div>
          <img src={errorImg} alt="Error 404" />
          <h3>Ohh!</h3>
          <p>We can't seem to find page you are looking for</p>
          <Link to="/">back home</Link>
        </div>
      </div>
    )
  }
  return <div>Something went wrong</div>
}
export default Error
