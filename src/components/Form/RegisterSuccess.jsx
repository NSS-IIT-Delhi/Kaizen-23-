import './Form.css'
import {useNavigate} from "react-router-dom";
import { scroller } from "react-scroll";

export default function RegisterSuccess () {
   
    let navigate = useNavigate(); 
    const events = async () =>{ 
      let path = `/events`; 
      await navigate(path);
      await scroller.scrollTo('head', {
        duration: 1500,
        offset: 0,
      });
    }

    return (
        <>
            <div class="row justify-content-center text-center" style={{"position":"relative"}}>
                <div class="col" style={{"color":'white',"padding-top":"10rem"}}>
                    <h1>Registered Sucessfully</h1>
                </div>
            </div>
            <div class="row justify-content-center text-center" style={{"position":"relative"}}>
                <div class="col" style={{"color":'#bbbbbb',"padding-top":"1rem","padding-bottom":"10rem"}}>
                    <h3>Register for more events <a onClick={events} style={{"color":"aquamarine","cursor":"pointer"}}>here</a></h3>
                </div>
            </div>
        </>
    )

}
