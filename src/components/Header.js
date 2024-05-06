import {
  faBars,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/slices/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/config/app_config";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API Call - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    console.log(json);
  };

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

      <div className="col-span-8">
        <div className="flex justify-center">
          <input
            className="w-1/2 border border-gray-400 rounded-full rounded-r-none p-2"
            placeholder="Search"
            type="type"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSearchSuggestions(true)}
            onBlur={() => setShowSearchSuggestions(false)}
          />
          <button className="border border-gray-400 bg-gray-500 p-2 px-6 rounded-full rounded-l-none text-white">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div className="px-56 py-1">
          {showSearchSuggestions && (
            <div className="fixed bg-white w-[32rem] py-2 shadow-lg border border-gray-200 rounded-lg">
              <ul>
                {searchSuggestions.map((suggestion) => (
                  <li className="py-1 hover:bg-gray-100 px-6 cursor-pointer">
                    <span className="mr-3">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-2 flex justify-end">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
};

export default Header;
