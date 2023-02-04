import './App.scss';
import SpeechBubble from './js/components/SpeechBubble';
import SearchBar from './js/components/SearchBar';
import React, { useEffect, useState } from 'react';
import ResponseOptions from './js/components/ResponseOptions';
import MYTHS from './js/constants/Myths';
import ContactBar from './js/components/ContactBar';

const App = () => {
  
const [searchValue, setSearchValue] = useState("");
const [conversationHistory, setConversationHistory] = useState([]);
const [selectedMyth, setSelectedMyth] = useState(-1);
const [responsesShown, setResponsesShown] = useState(false);

useEffect(() => {
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: "smooth"
  })
  setTimeout(() => {
    setResponsesShown(true)
  }, "3000")
  
}, [conversationHistory])

useEffect(() => {
  if (responsesShown) {
    document.getElementById("ResponseInstructions").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  
}, [responsesShown])

  return (
    <div className="App">
      <ContactBar
      
      />
      <div className="Conversation">
        
        <SpeechBubble 
          type={"answer"}
          text={"Did you hear? Our school might become multi-denomanational!"}  
        />
        <SpeechBubble 
          type={"question"}
          text={"Oh I don't like the sound of that..."} 
        />
        {conversationHistory.map(messageKey =>
          <React.Fragment key={`${messageKey} qna`}>
            <SpeechBubble
              type={"question"}
              text={MYTHS[messageKey].myth}
              fade={true}
            />
            <SpeechBubble
              type={"answer"}
              text={MYTHS[messageKey].answer}
              fade={true}
            />
          </React.Fragment>
        )}

        {responsesShown && 
          <ResponseOptions
            searchValue={searchValue}
            conversationHistory={conversationHistory}
            setConversationHistory={(mythIndex) => {setConversationHistory([...conversationHistory, mythIndex]); setResponsesShown(false)}}
          />
        }
      </div>
      <SearchBar
        value={searchValue}
        onChange={e => {setSearchValue(e.target.value)}}
      />
    </div>
  );
}

export default App;
