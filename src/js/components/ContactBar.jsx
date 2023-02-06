import '../../scss/components/ContactBar.scss';
import FriendAvatar from '../../images/friend.png';
import HelpIcon from '../../images/help.svg';
import { useEffect, useState } from 'react';

const ContactBar = ({conversationHistory, setConversationHistory}) => {

  const [friendStatus, setFriendStatus] = useState("Online")

  useEffect(() => {
    console.log(conversationHistory.length)
    if (conversationHistory.length !== 0) {
      setFriendStatus("Typing...")
      setTimeout(() => {
        setFriendStatus("Online")
      }, "1700");
    }
    
  }, [conversationHistory])

  return(
    <div className="ContactBar">
      {/* <img src={LeftArrow} className="icon" alt="Back Button" /> */}
      <img src={FriendAvatar} className="avatar" alt="Friend's Avatar" />
      <div>
        <h1>Multi-D Myths</h1>
        <p>{friendStatus}</p>
      </div>
      <div className='iconContainer'>
        <img
          src={HelpIcon}
          className="icon"
          alt="Help Button" 
          onClick={() => {setConversationHistory(0)}}
        />
      </div>
      

    </div>
  )
}

export default ContactBar;