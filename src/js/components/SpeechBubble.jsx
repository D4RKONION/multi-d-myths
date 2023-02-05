import "../../scss/components/SpeechBubble.scss"

const SpeechBubble = ({type, text, mythIndex, fade, onClick}) => {

  const padtoTwoDigits = (num) => {
    return String(num).padStart(2, '0');
  }
  const now = new Date();
  const hoursAndMinutes = padtoTwoDigits(now.getHours()) + ':' + padtoTwoDigits(now.getMinutes());

  return(
    <div
      className={`SpeechBubble ${type} ${fade && "fade"}`}
      style={fade === "second" ? {animationDelay: "1.6s"} : null}
      onClick={onClick}
    >
      {text}
      <span className="Timestamp">{
        !isNaN(mythIndex) && (type === "question" || type === "option") ? `Myth #${mythIndex}`
        : !isNaN(mythIndex) && type === "answer" ? `Truth #${mythIndex}`
        : hoursAndMinutes
      }</span>
    </div>
  )

}


export default SpeechBubble;