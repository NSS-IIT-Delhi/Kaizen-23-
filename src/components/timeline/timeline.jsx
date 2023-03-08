import './timeline.css'

export default function Timeline() {
    return (
        <div className="timeline app__container app__flex">
            <div className="timeline-heading">
                <h2 className='head-text text-gradient'>Glimpse of the <span className='accent'>Timeline</span></h2>
            </div>
            <div className="timeline-container scrollbar-hidden">
                <div className="timeline-line"></div>
                <div className="timeline-event-box">
                    <div className="timeline-event timeline-event-top">
                        <div>Women Empowerment Panel</div>
                        <div>30-March 4PM-7PM</div>
                        <div className="timeline-dot timeline-dot-top"></div>
                    </div>
                    <div className="timeline-event timeline-event-bottom">
                        <div>Inaugural</div>
                        <div>31-March 5PM-9PM</div>
                        <div className="timeline-dot timeline-dot-bottom"></div>
                    </div>
                    <div className="timeline-event timeline-event-top">
                        <div>Quizzing</div>
                        <div>1-April 10AM-2PM</div>
                        <div className="timeline-dot timeline-dot-top"></div>
                    </div>
                    <div className="timeline-event timeline-event-bottom">
                        <div>Social Convocation</div>
                        <div>1-April 10AM-2PM</div>
                        <div className="timeline-dot timeline-dot-bottom"></div>
                    </div>
                    <div className="timeline-event timeline-event-top">
                        <div>Soch Workshop</div>
                        <div>1-April 2PM-4PM</div>
                        <div className="timeline-dot timeline-dot-top"></div>
                    </div>
                    <div className="timeline-event timeline-event-bottom">
                        <div>Sakshi Workshop</div>
                        <div>1-April 3PM-5PM</div>
                        <div className="timeline-dot timeline-dot-bottom"></div>
                    </div>
                    <div className="timeline-event timeline-event-top">
                        <div>YuvaChetna Panel Discussion</div>
                        <div>1-April 5PM-8PM</div>
                        <div className="timeline-dot timeline-dot-top"></div>
                    </div>
                    <div className="timeline-event timeline-event-bottom">
                        <div>Fashion Show</div>
                        <div>1-April 6PM-10PM</div>
                        <div className="timeline-dot timeline-dot-bottom"></div>
                    </div>
                    <div className="timeline-event timeline-event-top">
                        <div>Case Samadhan</div>
                        <div>2-April 9AM-1PM</div>
                        <div className="timeline-dot timeline-dot-top"></div>
                    </div>
                    <div className="timeline-event timeline-event-bottom">
                        <div>Shiksha Talk</div>
                        <div>2-April 9AM-10AM</div>
                        <div className="timeline-dot timeline-dot-bottom"></div>
                    </div>
                    <div className="timeline-event timeline-event-top">
                        <div>Goonj Workshop</div>
                        <div>2-April 12PM-3PM</div>
                        <div className="timeline-dot timeline-dot-top"></div>
                    </div>
                    <div className="timeline-event timeline-event-bottom">
                        <div>Sociopreneur Samvad</div>
                        <div>2-April 1PM-4PM</div>
                        <div className="timeline-dot timeline-dot-bottom"></div>
                    </div>
                    <div className="timeline-event timeline-event-top">
                        <div>Parody Compitition</div>
                        <div>2-April 3:30PM-5:30PM</div>
                        <div className="timeline-dot timeline-dot-top"></div>
                    </div>
                    <div className="timeline-event timeline-event-bottom">
                        <div>Closing Ceremony</div>
                        <div>2-April 5PM-9PM</div>
                        <div className="timeline-dot timeline-dot-bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    )

}