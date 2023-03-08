import Typewriter from "typewriter-effect";
import "./typewriter.css";

export default function Typewritr() {
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
    </div>
  );
}
