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
  options={{
    strings: ['NSS IITD Presents <span style="color:aquamarine;">Kaizen\'23</span>', 'Be the <span style="color:aquamarine;">light</span> in their <span style="color:black;">darkness</span>','<span style="color:aquamarine;">COMING SOON!</span>'],
    autoStart: true,
    loop: true,
  }}
/>
</div>
);
}