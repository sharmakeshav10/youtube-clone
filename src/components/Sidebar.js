import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="border border-black w-56 mx-1">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subs</li>
      </ul>
      <h1 className="font-bold pt-3">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Trending</li>
        <li>Trending</li>
        <li>Trending</li>
      </ul>
      <h1 className="font-bold pt-3">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Trending</li>
        <li>Trending</li>
        <li>Trending</li>
      </ul>
    </div>
  );
};

export default SideBar;
