import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';

const router = createBrowserRouter(AppRoutes)


function App() {
  return (<RouterProvider router={router} />);
}

export default App;
