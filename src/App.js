import './App.css';
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Main from './layout/Main';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import ErrorElement from './component/ErrorElement/ErrorElement';
import Topics from './component/Topics/Topics';
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
          path : 'home',
          loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
      {
         path : '/topics/:topicsId',
         loader : ({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicsId}`),
         element : <Topics></Topics>
      },     
        {
          path : 'blog', element : <Blog></Blog>
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
