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

const ResponseOptions = ({searchValue, setConversationHistory}) => {
  const threeRandomUnusedMyths = sample(MYTHS, 3, false)

  return(
    <>
      <div className="ResponseInstructions">
        SELECT A MYTH
      </div>
      {threeRandomUnusedMyths.map((randomMyth) => 
        <SpeechBubble
          type={"question"}
          key={randomMyth.index + "key"}
          text={randomMyth.myth}
          answer={randomMyth.answer}
          onClick={() => {setConversationHistory(randomMyth.index);}}
        />
      )}
    </>
  )
}

export default ResponseOptions;