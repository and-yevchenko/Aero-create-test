import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { CreateTest } from '../../pages/CreateTest/CreateTest';
import { ShowTest } from '../../pages/ShowTest/ShowTest';

export const router = createBrowserRouter([
  {
    path: '/Aero-create-test/',
    element: <Home />,
    children: [
      {
        path: '/Aero-create-test/create-test',
        element: <CreateTest />,
      },
      {
        path: '/Aero-create-test/show-test',
        element: <ShowTest />,
      },
    ],
  },
]);
