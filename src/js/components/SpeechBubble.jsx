import { useRef } from "react";
import "../../scss/components/SpeechBubble.scss";
import ReactMarkdown from 'react-markdown';
import HeartIcon from '../../images/heart.svg';
import GitIcon from '../../images/git.svg';
import HomeIcon from '../../images/home.svg';
import TwitterIcon from '../../images/twitter.svg';

const SpeechBubble = ({type, text, mythIndex, fade, onClick}) => {

  const padtoTwoDigits = (num) => {
    return String(num).padStart(2, '0');
  }
  const now = new Date();
  const hoursAndMinutes = useRef(`${padtoTwoDigits(now.getHours())}:${padtoTwoDigits(now.getMinutes())}`);

  return(
    <div
      className={`SpeechBubble ${type} ${fade && "fade"}`}
      style={fade === "second" ? {animationDelay: "1.6s"} : null}
      onClick={onClick}
    >
      <ReactMarkdown linkTarget="_blank" >{text}</ReactMarkdown>
      {mythIndex === 0 && type === "answer" &&
      <>
      <hr></hr>
        <div className="creditsBar">
          <a href="https://teacherbuilt.me"><img src={HomeIcon} /></a>
          <a href="https://twitter.com/D4RK_ONION" target="_blank"><img src={TwitterIcon} /></a>
          <a href="https://www.paypal.com/paypalme/fullmeter" target="_blank"><img src={HeartIcon} /></a>
          <a href="https://github.com/D4RKONION/multi-d-myths" target="_blank"><img src={GitIcon} /></a>
        </div>
        </>
      }
      <span className="Timestamp">{
        mythIndex !== 0 && !isNaN(mythIndex) && (type === "question" || type === "option") ? `Myth #${mythIndex}`
        : mythIndex !== 0 && !isNaN(mythIndex) && type === "answer" ? `Truth #${mythIndex}`
        : hoursAndMinutes.current
      }</span>
    </div>
  )

}


export default SpeechBubble;