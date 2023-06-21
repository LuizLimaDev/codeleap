
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from 'src/Pages/Dashboard/Dashboard';
import Login from 'src/Pages/Login/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/dashboard/:username',
        element: <Dashboard />
    }
]);

export default router;