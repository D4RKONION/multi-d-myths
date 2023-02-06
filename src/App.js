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
const [responsesShown, setResponsesShown] = useState(false);

useEffect(() => {
  setSearchValue("");
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: "smooth"
  });
  setTimeout(() => {
    setResponsesShown(true)
  }, "3000");
  
}, [conversationHistory])

useEffect(() => {
  if (responsesShown && conversationHistory.length < MYTHS.length -1 ) {
    document.getElementById("ResponseInstructions").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  } else {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth"
    });
  }
  
}, [responsesShown])

  return (
    <div className="App">
      <ContactBar
        conversationHistory={conversationHistory}
        setConversationHistory={(mythIndex) => {setConversationHistory([...conversationHistory, mythIndex]); setResponsesShown(false)}}
      />
      <div className="Conversation">
        
        <SpeechBubble 
          type={"answer"}
          text={"Did you hear? Our school might become multi-denomanational!"}
          fade={'first'}
        />
        <SpeechBubble 
          type={"question"}
          text={"Oh I don't like the sound of that..."}
          fade={'second'}
        />
        {conversationHistory.map(messageKey =>
          <React.Fragment key={`${messageKey} qna`}>
            <SpeechBubble
              type={"question"}
              text={MYTHS[messageKey].myth}
              mythIndex={MYTHS[messageKey].index}
              fade={'first'}
            />
            <SpeechBubble
              type={"answer"}
              text={MYTHS[messageKey].answer}
              mythIndex={MYTHS[messageKey].index}
              fade={'second'}
            />
          </React.Fragment>
        )}

        {
          responsesShown && conversationHistory.length >= MYTHS.length -1 ? 
            <>
              <SpeechBubble
                type={"question"}
                text={"You've convinced me! Multi Denominational really are amazing. I'm excited for our school to become one now!"}
                fade={'first'}
              />
              <SpeechBubble
                type={"answer"}
                text={"I hope you enjoyed the experience! Please share it with your friends, family and fellow staff members (if you work in a school)."}
                fade={'second'}
              />
            </>
          : responsesShown ? 
          <ResponseOptions
            searchValue={searchValue}
            conversationHistory={conversationHistory}
            setConversationHistory={(mythIndex) => {setConversationHistory([...conversationHistory, mythIndex]); setResponsesShown(false)}}
          />
          : null
        }
      </div>
      <SearchBar
        value={searchValue}
        onChange={e => {setSearchValue(e.target.value.toLowerCase())}}
      />
    </div>
  );
}

export default App;
