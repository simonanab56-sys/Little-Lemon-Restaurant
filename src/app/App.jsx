import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from 'sonner';
import './styles/App.css';
function App() {
  return <>
      <RouterProvider router={router} />
      <Toaster position="top-center" richColors />
    </>;
}
export default App;