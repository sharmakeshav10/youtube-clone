import moment from "moment/moment";
import { RxDotFilled } from "react-icons/rx";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="w-72 m-2">
      <img className="rounded-lg" src={thumbnails.medium.url} />
      <div className="ml-2 flex flex-col">
        <h1 className="font-semibold text-md mt-2 mb-1">{title}</h1>
        <p className="text-sm">{channelTitle}</p>
        <div className="flex items-center text-sm">
          <p>{viewCount}views</p> <RxDotFilled />
          <p>{moment(publishedAt).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
