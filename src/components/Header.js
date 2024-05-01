import {
  faBars,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/slices/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const sideBarMenuToggleHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg px-4 py-3">
      <div className="flex col-span-2">
        <FontAwesomeIcon
          icon={faBars}
          onClick={sideBarMenuToggleHandler}
          className="cursor-pointer"
        />
        <img
          className="h-9 mx-3"
          src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
        />
      </div>
      <div className="col-span-8 flex justify-center">
        <input
          className="w-1/2 border border-gray-400 rounded-full rounded-r-none p-2"
          placeholder="Search"
          type="type"
        />
        <button className="border border-gray-400 bg-gray-500 p-2 px-6 rounded-full rounded-l-none text-white">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="col-span-2 flex justify-end">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
};

export default Header;
