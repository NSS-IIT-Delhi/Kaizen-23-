import './timeline.css'

export default function Timeline() {
    return (
        <div className="timeline app__container app__flex">
            <div className="timeline-heading">
                <h2 className='head-text'>Glimpse of the <span className='accent'>Timeline</span></h2>
            </div>
            <div className="timeline-container scrollbar-hidden">
                <div className="timeline-line"></div>
                <div className="timeline-event-box">
                    <div className="timeline-event timeline-event-top">
                        <div>Registration Deadline</div>
                        <div>18-March</div>
                        <div className="timeline-dot timeline-dot-top"></div>
                    </div>
                    <div className="timeline-event timeline-event-bottom">
                        <div>Round-1 Quiz</div>
                        <div>18-March</div>
                        <div className="timeline-dot timeline-dot-bottom"></div>
                    </div>
                    <div className="timeline-event timeline-event-top">
                        <div>First Day of Kaizen</div>
                        <div>19-March</div>
                        <div className="timeline-dot timeline-dot-top"></div>
                    </div>
                    <div className="timeline-event timeline-event-bottom">
                        <div>Inauguration Ceremony</div>
                        <div>19-March</div>
                        <div className="timeline-dot timeline-dot-bottom"></div>
                    </div>
                    <div className="timeline-event timeline-event-top">
                        <div>Event Date</div>
                        <div>19-March</div>
                        <div className="timeline-dot timeline-dot-top"></div>
                    </div>
                    <div className="timeline-event timeline-event-bottom">
                        <div>Registration Deadline</div>
                        <div>20-March</div>
                        <div className="timeline-dot timeline-dot-bottom"></div>
                    </div>
                    <div className="timeline-event timeline-event-top">
                        <div>Finish Date</div>
                        <div>20-April</div>
                        <div className="timeline-dot timeline-dot-top"></div>
                    </div>
                </div>
            </div>
        </div>
    )

}