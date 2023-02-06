import '../../scss/components/ScrollToBottomButton.scss'

const ScrollToBottomButton = () => {
  return(
    <div
      className="ScrollToBottomButton"
      onClick={() => document.getElementById("ResponseInstructions").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}
    >
      <span>⯬</span>
    </div>
  )
}

export default ScrollToBottomButton;

