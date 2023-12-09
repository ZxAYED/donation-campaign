import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";

export default function Root() {
  return (
    <div>

        <Navbar></Navbar>
        <Outlet />
        
    
    </div>
  );
}