import './index.css'
import Login from "./components/login";
import Startpage from "./components/startpage";
import Register from "./components/register";
import MovieDetails from "./components/movieDetails";
import PrimeHome from './components/primeHome';
import Payment from './components/payment';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/App.css";
import Wishlist from './components/wishlist';



function App() {

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Startpage />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/wishlist",
      element: <Wishlist/>
    },
    {
      path: "/payment",
      element: <Payment/>
    },

    {
      path: "/primepage",
      element: <PrimeHome />,
    },
    {
      path: "/details/:id",
      element: <MovieDetails />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
