import './registerButton.css'
import { useNavigate } from 'react-router-dom';
import { scroller } from "react-scroll";



function RegisterButton ({id,link}) {

    let navigate = useNavigate(); 
    const form = async (id) =>{ 
      let path = `/form/${id}`; 
      await navigate(path);
      await scroller.scrollTo("formSec", {
        duration: 1500,
        offset: 0,
      });
    }

    return (
        <button class="btn-anim" onClick={()=>{link===null?{}:location.href = link;link===null?form(id):{}}}>
            Register Now
        </button>
    );
}

export default RegisterButton