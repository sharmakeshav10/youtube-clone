import MainContainer from "./MainContainer";
import SideBar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <SideBar />
      <div className="m-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
