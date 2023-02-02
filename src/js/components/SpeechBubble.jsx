import "../../scss/components/SpeechBubble.scss"

const SpeechBubble = ({type, text, fade, onClick}) => {

  const padtoTwoDigits = (num) => {
    return String(num).padStart(2, '0');
  }
  const now = new Date();
  const hoursAndMinutes = padtoTwoDigits(now.getHours()) + ':' + padtoTwoDigits(now.getMinutes());

  return(
    <div
      className={`SpeechBubble ${type} ${fade && "fade"}`}
      onClick={onClick}
    >
      {text}
      <span className="Timestamp">{hoursAndMinutes}</span>
    </div>
  )

}


export default SpeechBubble;