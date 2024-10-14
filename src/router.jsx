import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import BirthdayGreeting from "./components/bdayGreeting";
import PhotoGallery from "./components/photoGallary";
import CakePage from "./components/cakePage";
import Fireworks from "./components/fireworks";




const router = createBrowserRouter([
  
  {
    path: "/",
    element: <CommonLayout/>,
    children: [
      {
        children: [
          { path: "", element: <BirthdayGreeting /> }, // Main task management page
          { path: "/gallery", element: <PhotoGallery/> },
          
          { path: "/cake", element: <CakePage/> }, 
          { path: "/fireworks", element: <Fireworks/> }, // Route to edit a task
        ],
      },
    ],
  },
]);

export default router;
