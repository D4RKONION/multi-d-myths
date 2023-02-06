import '../../scss/components/ScrollToBottomButton.scss'
import ScrollToBottomArrow from "../../images/ScrollToBottomArrow.png"

const ScrollToBottomButton = () => {
  return(
    <div
      className="ScrollToBottomButton"
      onClick={() => document.getElementById("ResponseInstructions").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}
    >
      <img src={ScrollToBottomArrow} />
    </div>
  )
}

export default ScrollToBottomButton;

