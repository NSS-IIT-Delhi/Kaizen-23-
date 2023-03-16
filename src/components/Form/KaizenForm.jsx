import React, {useState} from "react";
import "./Form.css";
import {collection, setDoc, doc} from 'firebase/firestore'
import db from '../Firebase/firebaseConfig'
import { useNavigate, useParams } from "react-router-dom";
import {events} from '../../Events/events'
// import { scroller,animateScroll } from "react-scroll";

// import Header from "./navbar.jsx";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import logo from "./kaizen logo.png";
import Background from "../background/background";

export default function KaizenForm () {

    const { id } = useParams(); 

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Number, setNumber] = useState('')
    const [College, setCollege] = useState('')    
    
    let navigate = useNavigate(); 
    const home = () =>{ 
      let path = `/registersuccess`; 
      navigate(path); 
    }

    const submit = async () => {  
        await setDoc(doc(db.db, id,`${Email}`), {
            'Name': Name,
            'Email': Email,
            'Number': Number,
            'College': College
            });                     
        setName('');
        setEmail('');
        setNumber('');
        setCollege(''); 
        home();
    }
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "Name"){setName(value);}
        if(id === "Mobile"){setNumber(value);}
        if(id === "Email"){setEmail(value);}
        if(id === "College"){setCollege(value);}
    }

    return (
        <>
        <Background/>
            <section className="wrapper text-center" id="formSec">
                <div className="formDiv">
                    <h2 className="subtitle">
                        Register For {events[`${id}`]['title']}
                    </h2>
                    <br/>
                    <div className="content" id="bod">
                        <form
                            className="gform"
                            id="my-form"
                            onSubmit={(e) => {e.preventDefault();submit()}}
                            >
                            <fieldset>
                                <div class="container">
                                    <label htmlFor="Name">
                                        Your Name<span style={{"color":"red"}}>*</span>:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        id="Name"
                                        name="Name"
                                    
                                        required
                                        onChange = {(e) => handleInputChange(e)}
                                    />
                                </div>
                            </fieldset>
                            <fieldset>
                                <div class="container">
                                    <label htmlFor="Mobile">
                                        Contact Number(WhatsApp)<span style={{"color":"red"}}>*</span>:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        id="Mobile"
                                        name="Mobile"
                                    
                                        pattern="[\s]{0,}[+0-9]{10,}[\s]{0,}"
                                        required
                                        onChange= {(e) => handleInputChange(e)}
                                    />
                                </div>
                            </fieldset>
                            <fieldset>
                                <div class="container">
                                    <label htmlFor="email">
                                        E-mail ID<span style={{"color":"red"}}>*</span>:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        id="Email"
                                        name="Email"
                                        pattern="[\s]{0,}[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}[\s]{0,}$"
                                    
                                        required
                                        onChange={(e) => handleInputChange(e)}
                                    />
                                </div>
                            </fieldset>
                            <fieldset>
                                <div class="container">
                                    <label htmlFor="College">
                                        College Name<span style={{"color":"red"}}>*</span>:
                                    </label>
                                    <br />
                                    <input type="text" name="college name" id="College" required onChange={(e) => handleInputChange(e)} />
                                </div>
                            </fieldset>

                            {events[`${id}`]['fields'].map((data,key)=>{                                
                                return(
                            <fieldset>
                                <div class="container">
                                    <label htmlFor="College">
                                        {data.title}{data.small_text ? <span style={{"fontSize":"14px","color":"grey"}}>{" "}{data.small_text}</span>:<></>}{data.required?<span style={{"color":"red"}}>*</span>:<></>}
                                    </label>
                                    <br />
                                    <input type="text" name="college name" id="College" required={data.required} onChange={(e) => handleInputChange(e)}/>
                                </div>
                            </fieldset>
                                );
                            })}

                            <fieldset style={{ placeItems: "center" }}>
                                <input
                                    className="formSub"
                                    type="Submit"
                                    defaultValue="Register"
                                    id="sub"
                                />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section >
        </>
    )

}
