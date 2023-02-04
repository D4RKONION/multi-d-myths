import MYTHS from "../constants/Myths";
import SpeechBubble from "./SpeechBubble";

// https://stackoverflow.com/a/61078260/5510348
// Chooses k unique random elements from pool.
function sample(pool, k, destructive) {
  var n = pool.length;
  
  if (k < 0 || k > n)
      throw new RangeError("Sample larger than population or is negative");
  
  if (destructive || n <= (k <= 5 ? 21 : 21 + Math.pow(4, Math.ceil(Math.log(k*3) / Math.log(4))))) {
      if (!destructive)
          pool = Array.prototype.slice.call(pool);
      for (var i = 0; i < k; i++) { // invariant: non-selected at [i,n)
          var j = i + Math.random() * (n - i) | 0;
          var x = pool[i];
          pool[i] = pool[j];
          pool[j] = x;
      }
      pool.length = k; // truncate
      return pool;
  } else {
      var selected = new Set();
      while (selected.add(Math.random() * n | 0).size < k) {}
      return Array.prototype.map.call(selected, i => pool[i]);
  }
}

const ResponseOptions = ({searchValue, conversationHistory, setConversationHistory}) => {
  // const threeRandomUnusedMyths = sample(MYTHS, 3, false)
  const threeRandomUnusedMyths = [MYTHS[0], MYTHS[1], MYTHS[2]]

  return(
    <>
      <div
        id="ResponseInstructions"
        onClick={() => document.getElementById("ResponseInstructions").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}
      >
        {conversationHistory.length === 0 ? "SELECT A MYTH" : "TRY ANOTHER MYTH"}
      </div>
      {threeRandomUnusedMyths.map((randomMyth) => 
        <SpeechBubble
          type={"option"}
          key={randomMyth.index + "key"}
          text={randomMyth.myth}
          mythIndex={randomMyth.index}
          onClick={() => {setConversationHistory(randomMyth.index);}}
          // onClick={() => {setConversationHistory(2);}}
        />
      )}
    </>
  )
}

export default ResponseOptions;