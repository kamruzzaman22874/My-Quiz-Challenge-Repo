import './App.css';
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Main from './layout/Main';
import Home from './component/Home/Home';
import About from './component/About/About';
import Cart from './component/Cart/Cart';
import ErrorElement from './component/ErrorElement/ErrorElement';
import Product from './component/Product/Product';
function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      errorElement : <ErrorElement></ErrorElement>,
      element : <Main></Main>,
      children : [
        {
          path : '/' , element : <Home></Home>
        },
        {
          path : 'home',element: <Home></Home>
        },
        {
          path : 'product',
          loader : ()=> fetch('product.json'), 
          element : <Product></Product>

        },
        {
          path: 'about',element: <About></About>
        },
        {
          path : 'cart', element : <Cart></Cart>
        }
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
