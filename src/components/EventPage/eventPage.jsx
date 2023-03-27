import React from 'react';
import Tilt from 'react-parallax-tilt'
import EventDescription from '../EventDescription/EventDescription'
import './eventPage.css'
import { useParams } from "react-router-dom";
import { events } from '../../Events/events';
import RegisterButton from '../RegisterButton/registerButton'
import Background from '../background/background';


export default function Event() {
  const { id } = useParams();

  const ev = events[`${id}`]
  const date = ev["date"];
  const time = ev["time"];
  const link = ev["register"];
  const wa = ev["wa"];
  const contact = ev["contact"];
  const deadline = ev["deadline"];
  const reg_text = ev["register-text"];
  const rulebook = ev["rulebook"];
  const venue = ev["venue"];
  const title = ev["title"];
  const image = ev["image"];
  const content = ev["content"];
  const sections = ev["sections"];
  const description = ev["description"];

  return (
    <>
      <Background/>
      <div class="head" id="head">
        <h2 class="Title text-gradient">{title}</h2>
        <h3 class="px-5 desc" style={{"font-weight": "900" }}>{description}</h3>
      </div>

      <main style={{ "position": "relative" }} class="pt-5">

        <div class="row justify-content-center p-3">
          <div class="reg col-xl-5 col-lg-5 col-md-7 col-sm-8 col-12 flex-column">
            
            <div class="image">
              <div class="up"></div>
              <div class="Border">
                <img src={image} class="p3" />
              </div>
              <div class="down"></div>
            </div>
            <div class="p-5">
              {rulebook?
              <a className="rulebook-btn" href={rulebook}>
                Rulebook
              </a>
              :<></>}
            </div>


          </div>

          <div className='reg col-xl-6 col-lg-6 col-md-5 col-sm-12 col-12 flex-column'>
            <div class="pb-5 pt-3"><RegisterButton id={id} link={link} text={reg_text}/></div>
            <div class="py-4 px-5">
              <h4 class="px-3" style={{ "color": "white" }}>
                <svg width="24" height="24" fill="var(--primary-blue)" class="bi bi-calendar-event" viewBox="0 0 16 16">
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>    
                {` ${date}`}
              </h4>
              <h4 class="px-3" style={{ "color": "white" }}>          
                <svg width="24" height="24" fill="var(--primary-blue)" class="bi bi-clock" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                </svg>
                {` ${time} `}
              </h4>
              {venue ?
              <h4 class="px-3" style={{ "color": "white" }}>          
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--primary-blue)" class="bi bi-pin-map" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                  <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                </svg>
                {` ${venue} `}
              </h4>
              :<></>}
              {wa ?
              <h4 class="px-3">          
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--primary-blue)" class="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                <a href={wa} style={{"color":"var(--primary-blue)"}}>{" "}Join the WA group</a>
              </h4>
              :<></>} 
              {deadline ?
              <h4 class="px-3" style={{ "color": "white" }}>          
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--primary-blue)" class="bi bi-pen" viewBox="0 0 16 16">
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                </svg>
                {` Registrer By: ${deadline} `}
              </h4>
              :<></>}              
              {contact ?
              <h4 class="px-3" style={{ "color": "white" }}>          
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--primary-blue)" class="bi bi-telephone" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                {` CONTACT`}
                {contact.map((data, key) => { 
                  return(<div>{` ${data}`}</div>);
                 })}              
              </h4>
              :<></>}                           
            </div>
            <Tilt className="each-event pt-5 mt-5" style={{ backgroundColor: "transparent" }}>
              <EventDescription title={title} content={content} />
            </Tilt>
          </div>
        </div>
      </main>

      <div className="sections-container">
        {sections.map((data, key) => {
          
          if (data.type==="TS"){
            return(
              <div class="pt-5 text-center" style={{"color":"white"}}>
                <div class="row py-4 px-3 justify-content-center text-center">
                <h2 className='family' style={{"color":'var(--primary-blue)',"position":"relative"}}>{data.title}</h2>
                    {data.data.map((card, key2) => { return (
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 p-4">
                            <Tilt className="Card p-4 mx-auto">
                                <h3 class="pt-3 px-3" style={{"font-family": "Lobster, cursive","font-size":"25px"}}>{card.title}</h3>
                                <hr></hr>
                                <h4 class="pt-4 px-3" style={{"font-size":"20px"}}>{card.subtitle}</h4>
                            </Tilt>   
                        </div>
                    );}
                    )}  
                </div>         
              </div>          
            );
          }
          else if (data.type==="PTS"){
            return(
              <div class="pt-5 text-center" style={{"color":"white"}}>
                <div class="row py-4 justify-content-center text-center">
                <h2 className='family'style={{"color":'var(--primary-blue)',"position":"relative"}}>{data.title}</h2>
                    {data.data.map((card, key2) => { return (
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 p-4">
                            <Tilt className="Card p-4 mx-auto">
                                <img style={{"border-radius":"50%","height":"80px"}} src={card.picture} />
                                <h3 class="py-3 px-3" style={{"font-family": "Lobster, cursive","font-size":"25px"}}>{card.title}</h3>
                                <h4 class="pt-3 px-3" style={{"font-size":"20px"}}>{card.subtitle}</h4>
                            </Tilt>   
                        </div>
                    );}
                    )}  
                </div>         
              </div>          
            );
          }
          

        })}
      </div>

    </>
  )
}
