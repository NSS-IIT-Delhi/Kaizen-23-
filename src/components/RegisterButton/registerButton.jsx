import './registerButton.css'
import { useNavigate } from 'react-router-dom';
function RegisterButton ({id,link}) {

console.log(link);

    let navigate = useNavigate(); 
    const form = (id) =>{ 
      let path = `/form/${id}`; 
      navigate(path);
    }

    return (
        <button class="btn-anim" onClick={()=>{link===null?{}:location.href = link;link===null?form(id):{}}}>
            Register Now
        </button>
    );
}

export default RegisterButton