import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebarMenu } from "../utils/slices/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeSidebarMenu());
  }, []);
  return (
    <div className="w-full m-4">
      <iframe
        className="w-2/3 rounded-lg"
        height="550"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
