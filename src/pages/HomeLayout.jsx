import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useNavigation } from 'react-router-dom'
const HomeLayout = () => {
  const { state } = useNavigation()
  return (
    <div>
      <Navbar />
      <section className="page">
        {state === 'loading' ? <div className="loading" /> : <Outlet />}
      </section>
    </div>
  )
}
export default HomeLayout
