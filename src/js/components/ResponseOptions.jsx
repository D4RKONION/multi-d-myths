import MYTHS from "../constants/Myths";
import SpeechBubble from "./SpeechBubble";

// https://stackoverflow.com/a/5767357/5510348
// remove an item from an array
function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

// https://stackoverflow.com/a/61078260/5510348
// Chooses k unique random elements from pool.
function sample(initialPool, k, destructive, conversationHistory) {
  //remove the welcome message from the pool
  let introRemovedPool = initialPool.slice(1)
  //remove the previously selected messages from the pool
  let pool = [];
  introRemovedPool.forEach(mythEntry => {
    if (!conversationHistory.includes(mythEntry.index)) {
      pool.push(mythEntry)
    }
  })

  var n = pool.length;
  
  if (k < 0 || k > n) {
    k = n
  }
  
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
  const threeRandomUnusedMyths = sample(MYTHS, 3, false, conversationHistory)
  // const threeRandomUnusedMyths = [MYTHS[0], MYTHS[1], MYTHS[2]]

  return(
    <>
      <div
        id="ResponseInstructions"
        onClick={() => document.getElementById("ResponseInstructions").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}
      >
        {
          conversationHistory.length === 0 || conversationHistory[conversationHistory.length - 1] === 0
            ? "SELECT A MYTH" : "TRY ANOTHER MYTH"
        }
      </div>
      {searchValue ?
        MYTHS.filter(mythEntry =>
          mythEntry.myth.toLowerCase().includes(searchValue) && mythEntry.index !== 0
        ).map(mythEntry =>
          <SpeechBubble
            type={"option"}
            key={mythEntry.index + "key"}
            text={mythEntry.myth}
            mythIndex={mythEntry.index}
            onClick={() => {setConversationHistory(mythEntry.index);}}
          />
        )
      : threeRandomUnusedMyths.map((randomMyth) => 
          <SpeechBubble
            type={"option"}
            key={randomMyth.index + "key"}
            text={randomMyth.myth}
            mythIndex={randomMyth.index}
            onClick={() => {setConversationHistory(randomMyth.index);}}
          />
        )
      }
    </>
  )
}

export default ResponseOptions;