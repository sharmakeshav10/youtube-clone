import MainContainer from "./MainContainer";
import SideBar from "./Sidebar";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <SideBar />
      <div className="m-2">
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
