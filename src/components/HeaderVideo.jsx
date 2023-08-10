import "./css/videoBackground.css";
import video from "../assets/ocean-storm.mp4";

export default function HeaderVideo() {
  return (
    <div className="wrapper">
      <video autoPlay muted loop className="video-bg">
        <source src={video} type="video/mp4"></source>
      </video>
    </div>
  );
}
