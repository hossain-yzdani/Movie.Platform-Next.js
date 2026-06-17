import VideoListWrapper from "./videoListWrapper";

export default function Home() {
  return (
    <main className="min-h-screen py-8 space-y-10">
      <VideoListWrapper
        title="Trending Now"
        link="/trending"
        icon="trending"
        autoplay={true}
        delay={4000}
      />

      <VideoListWrapper
        title="Top Rated"
        link="/top-rated"
        icon="top"
        autoplay={false}
      />

      <VideoListWrapper
        title="Hot Picks"
        link="/hot"
        icon="hot"
        autoplay={true}
        delay={3000}
      />

      <VideoListWrapper
        title="New Releases"
        link="/new"
        icon="new"
        autoplay={true}
        delay={5000}
      />
    </main>
  );
}
