import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonList = () => {
  const list = [
    "All",
    "Javascript",
    "Music",
    "Movies",
    "Football",
    "Trailers",
    "Cricket",
    "DSA",
    "Gym",
    "Tvf",
    "Backend",
    "Frontend",
    "Home Tour",
    "Cars",
    // "Veg Recipes",
  ];
  return (
    <div>
      {list.map((btn) => (
        <button className="px-4 py-1 m-2 bg-gray-200 rounded-lg">{btn}</button>
      ))}
      <FontAwesomeIcon icon={faAngleRight} />
    </div>
  );
};

export default ButtonList;
