import './App.css';
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Main from './layout/Main';
import Home from './component/Home/Home';
import Topic from './component/Topic/Topic';
import Blog from './component/Blog/Blog';
import ErrorElement from './component/ErrorElement/ErrorElement';
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
          path:'/topic/:topicId',
          loader:({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
          element:<Topic></Topic>
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
