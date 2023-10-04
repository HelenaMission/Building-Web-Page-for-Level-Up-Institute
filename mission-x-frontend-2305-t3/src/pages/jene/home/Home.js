import HomePYM from "./home-pym/HomePYM";
import HomeNAV from "./home-nav/HomeNAV";
import HomeHOP from "./home-hop/HomeHOP";
import HomeTKP from "./home-tkp/HomeTKP";
import HomeWWO from "./home-wwo/HomeWWO";
import HomeFOO from "./home-foo/HomeFOO";
import HomeWAY from "./home-way/HomeWAY";

export default function HomePage() {
  return (
    <div>
      <HomeNAV />
      <HomePYM />
      <HomeWWO />
      <HomeTKP />
      <HomeHOP />
      <HomeWAY />
      <HomeFOO />
    </div>
  );
}
