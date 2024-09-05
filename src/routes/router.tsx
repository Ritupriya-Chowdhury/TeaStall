import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import About from "../pages/About";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Home />
        },
        
      ]
    },
    {
      path: '/about',
      element: <App />,
      children: [
        {
          path: '',
          element: <About />
        },
        
      ]
    }
  ]);
  
  export default router;