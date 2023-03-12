import './timeline.css'
import { events } from '../../Events/events'


function element_list(){
    let is_top = true;
    return Object.entries(events)
    .sort((a,b) => 
        {return a[1].rank - b[1].rank;}
    ).map((event)=>{
        let return_element;
        if (is_top){
            
            return_element = (
            <div className="timeline-event timeline-event-top">
                {/* <div>{event[1].rank}</div> */}
                <div>{event[1].title}</div>
                <div>{event[1].date}</div>
                <div>{event[1].time}</div>
                <div className="timeline-dot timeline-dot-top"></div>
            </div>
            )
        }
        else{
            return_element = (
            <div className="timeline-event timeline-event-bottom">
                {/* <div>{event[1].rank}</div> */}
                <div>{event[1].title}</div>
                <div>{event[1].date}</div>
                <div>{event[1].time}</div>
                <div className="timeline-dot timeline-dot-bottom"></div>
            </div>
            )    
        }
        is_top = !is_top;
        return return_element;
    })
}

export default function Timeline() {


    return(

    <div className="timeline app__container app__flex">
        <div className="timeline-heading">
            <h2 className='head-text text-gradient'>Glimpse of the <span className='accent'>Timeline</span></h2>
        </div>
        <div className="timeline-container scrollbar-hidden">
            <div className="timeline-line"></div>
            <div className="timeline-event-box">
                {element_list()}
            </div>
        </div>
    </div>
    )

}