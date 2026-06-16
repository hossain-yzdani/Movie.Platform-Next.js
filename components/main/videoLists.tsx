import VideoListWrapper from "./videoListWrapper";

const VideoLists = () => {
  return (
    <div className="">
      <VideoListWrapper title="Trending" link="/" />
      <VideoListWrapper title="International Movies" link="/" />
      <VideoListWrapper title="Iranian Series" link="/" />
      <VideoListWrapper title="Animation & Anime" link="/" />
    </div>
  );
}
 
export default VideoLists;