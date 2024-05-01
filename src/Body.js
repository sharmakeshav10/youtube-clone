import MainContainer from "./MainContainer";
import SideBar from "./Sidebar";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
