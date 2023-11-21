import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  About,
  Error,
  Cocktail,
  HomeLayout,
  Newsletter,
  Landing,
  SinglePageError,
} from './pages'
import { loader as landingLoader } from './pages/Landing'
import { loader as singleCocktailLoader } from './pages/Cocktail'
import { action as newsletterAction } from './pages/Newsletter'
const App = ({ queryClient }) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoader(queryClient),
          errorElement: <SinglePageError />,
        },
        {
          path: 'cocktail/:id',
          element: <Cocktail />,
          errorElement: <SinglePageError />,
          loader: singleCocktailLoader(queryClient),
        },
        {
          path: 'newsletter',
          element: <Newsletter />,
          action: newsletterAction,
        },
        {
          path: 'about',
          element: <About />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}
export default App
