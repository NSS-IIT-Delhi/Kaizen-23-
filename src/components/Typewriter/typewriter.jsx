import Typewriter from "typewriter-effect";

export default function Typewritr() {
  return (
    <div
      class="text-center px-5"
      style={{
        position: "relative",
        "min-height": "100vh",
        "padding-top": "10.5rem",
        color: "white",
        "font-size": "4rem",
      }}
    >
      <Typewriter
        options={{
          strings: [
            'NSS IITD Presents <span class="head-text" style="color:aquamarine;">Kaizen\'23</span>',
            'Be the <span class="head-text accent" style="color:aquamarine;">light</span> in the <span class="head-text accent underline"style="color:black;">darkness</span>',
            '<span class="head-text" style="color:aquamarine;">Coming Soon !!</span>',
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
