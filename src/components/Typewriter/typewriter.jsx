import Typewriter from 'typewriter-effect';

export default function Typewritr(){
return(
    <div class="text-center px-5" style={{
        "position":"relative",
        "min-height":"100vh",
        "padding-top":"10.5rem",
        "color":"white",
        "font-size":"4rem",
        }}>
<Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Hello World!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
</div>
);
}