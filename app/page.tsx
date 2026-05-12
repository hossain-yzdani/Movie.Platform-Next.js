import Header from "@/components/main/header";
import BannderSwiper from "@/components/main/bannerSwiper";
import VideoLists from "@/components/main/videoLists";

export default function Home() {
  return (
    <div className="px-5">
      <Header />
      {/* <BannderSwiper /> */}
      <VideoLists />
    </div>
  );
}