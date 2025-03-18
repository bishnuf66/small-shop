import SearchBar from "./SearchBar";

function HomeBanner() {
  return (
    <div
      className="w-full  h-[50vh] flex items-center justify-center bg-cover bg-center relative flex-col"
      style={{ backgroundImage: "url('/images/home-banner.jpg')" }}
    >
      <div className="w-400 h-400 m-4"></div>
      <div className="w-full h-full  mb-4">
        <SearchBar />
      </div>
    </div>
  );
}

export default HomeBanner;
