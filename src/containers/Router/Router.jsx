import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { CreateTest } from '../../pages/CreateTest/CreateTest';
import { ShowTest } from '../../pages/ShowTest/ShowTest';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/create-test',
        element: <CreateTest />,
      },
      {
        path: '/show-test',
        element: <ShowTest />,
      },
    ],
  },
]);
