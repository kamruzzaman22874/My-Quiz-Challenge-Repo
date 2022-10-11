import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Blog from './component/Blog/Blog';
import Topics from './component/Topics/Topics';
import Statistics from './component/Statistics/Statistics';
import Home from './component/Home/Home'
import ErrorElement from './component/ErrorElement/ErrorElement';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorElement></ErrorElement>,
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>

        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/home/:topicsId',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${ params.topicsId }`),
          element: <Topics></Topics>
        },
        {
          path: 'blog', element: <Blog></Blog>
        }
      ]
    }

  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
