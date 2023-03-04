import Events from "../Events/Events"
import Timeline from "../timeline/timeline"
import Carousel from '../Carousel/Carousel'
export default function Home(){
    return(
        <>
      <Events/>
      <Timeline/>
      <div
        style={{
          width: "100%",
          margin: "2rem 0",
        }}
        className="Carousel-container"
      >
        <Carousel />
      </div></>
    )
}