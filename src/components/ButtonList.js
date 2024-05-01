const ButtonList = () => {
  const list = ["All", "Javascript", "Music", "Movies", "Football", "Trailers"];
  return (
    <div>
      {list.map((btn) => (
        <button className="px-4 py-1 m-2 bg-gray-200 rounded-lg">{btn}</button>
      ))}
    </div>
  );
};

export default ButtonList;
