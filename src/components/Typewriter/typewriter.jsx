import Typewriter from "typewriter-effect";
import "./typewriter.css";
import "./scrollbar.css";

export default function Typewritr() {
  const handleClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };
  return (
    <div class="app__landing-page app__container app__flex text-center px-5">
      <Typewriter
        options={{
          strings: [
            'NSS IITD presents <strong class="text-gradient">Kaizen\'23<strong/>',
            'be the light in the <strong class="text-gradient">darkness<strong/>',
          ],
          autoStart: true,
          loop: true,
        }}
      />

<i  onClick={handleClick} class="fa-regular fa-lg fa-circle-down scroll-down-button"></i>

    </div>
  );
}
