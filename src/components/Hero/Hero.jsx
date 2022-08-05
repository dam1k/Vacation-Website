import {Button} from "../Button/Button"
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-container">
        {/* <video src="../../../public/videos/video-1.mp4" autoPlay loop muted/> */}
        <h1>Your dream awaits!</h1>
        <p>Why are you wasting your time?</p>
        <div className="hero-btns">
            <Button 
            className="btn"
            buttonStyle="btn-outline"
            buttonSize="btn-large"
            >
                GET STARTED
            </Button>

            <Button 
            className="btn"
            buttonStyle="btn-primary"
            buttonSize="btn-large"
            >
               WATCH TRAILER <i className="far fa-play-circle"/>
            </Button>
        </div>
    </div>
  )
}

export default Hero