import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="font-poppins"> 
            
            <Outlet />
        </div>
    );
};

export default MainLayout;
