import './App.scss';
import SpeechBubble from './js/components/SpeechBubble';
import SearchBar from './js/components/SearchBar';
import React, { useEffect, useState } from 'react';
import ResponseOptions from './js/components/ResponseOptions';
import MYTHS from './js/constants/Myths';

const App = () => {
  
const [searchValue, setSearchValue] = useState("");
const [conversationHistory, setConversationHistory] = useState([]);
const [selectedMyth, setSelectedMyth] = useState(-1);
const [responsesShown, setResponsesShown] = useState(false);

useEffect(() => {
  setTimeout(() => {
    setResponsesShown(true)
  }, "3000")
  window.scrollTo(0, document.body.scrollHeight);
  
}, [conversationHistory])

useEffect(() => {
  window.scrollTo(0, document.body.scrollHeight);
}, [responsesShown])

  return (
    <div className="App">
            
      <div className="Conversation">
        {selectedMyth}
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
