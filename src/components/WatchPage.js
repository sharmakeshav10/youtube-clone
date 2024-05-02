import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebarMenu } from "../utils/slices/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebarMenu());
  }, []);
  return <div>WatchPage</div>;
};

export default WatchPage;
