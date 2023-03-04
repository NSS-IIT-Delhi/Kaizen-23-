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
    strings: ['NSS IITD Presents Kaizen\'23', 'Be the light in their darkness','COMING SOON!'],
    autoStart: true,
    loop: true,
  }}
/>
</div>
);
}