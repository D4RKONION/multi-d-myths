import { useRef } from "react";
import "../../scss/components/SpeechBubble.scss";
import ReactMarkdown from 'react-markdown';

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
      <span className="Timestamp">{
        mythIndex !== 0 && !isNaN(mythIndex) && (type === "question" || type === "option") ? `Myth #${mythIndex}`
        : mythIndex !== 0 && !isNaN(mythIndex) && type === "answer" ? `Truth #${mythIndex}`
        : hoursAndMinutes.current
      }</span>
    </div>
  )

}


export default SpeechBubble;