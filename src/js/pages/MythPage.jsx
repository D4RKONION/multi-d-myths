import { useParams } from "react-router-dom";
import SpeechBubble from "../components/SpeechBubble";
import MYTHS from "../constants/Myths";

const MythPage = () => {
  let {mythIndex} = useParams();
  return(
    <div className="Conversation">
      <SpeechBubble
        type={"question"}
        text={MYTHS[mythIndex].myth}
      />
      <SpeechBubble 
        type={"answer"}
        text={MYTHS[mythIndex].answer}
      />
    </div>
  )
}

export default MythPage;