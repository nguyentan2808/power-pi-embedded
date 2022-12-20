import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
