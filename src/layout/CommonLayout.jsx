 
import { Outlet } from "react-router-dom";


const CommonLayout = () => {
  return (
    <div>
     
      <main className="min-h-screen">
         <Outlet />
      </main>
    </div>
  );
};

export default CommonLayout;
