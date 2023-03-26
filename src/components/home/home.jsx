import Events from "../Events/Events";
import Timeline from "../timeline/timeline";
import Carousel from "../Carousel/Carousel";
import Typewritr from "../Typewriter/typewriter";
// import Sponsers from "../Sponsers/Sponsers";

export default function Home() {
  return (
    <div id="HOME">
      <Typewritr />
      <Events />
      <Timeline />
      <div
        style={{ width: "100%", margin: "2rem 0" }}
        className="Carousel-container"
      >
        <Carousel />
        {/* <Sponsers /> */}
      </div>
    </div>
  );
}
