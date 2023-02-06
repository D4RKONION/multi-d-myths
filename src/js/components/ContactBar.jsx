import '../../scss/components/ContactBar.scss';
import FriendAvatar from '../../images/friend.png';
import HeartIcon from '../../images/heart.svg';
import HelpIcon from '../../images/help.svg';
import { useNavigate } from 'react-router-dom';

const ContactBar = ({setConversationHistory}) => {

  const navigate = useNavigate();
  return(
    <div className="ContactBar">
      {/* <img src={LeftArrow} className="icon" alt="Back Button" /> */}
      <img src={FriendAvatar} className="avatar" alt="Friend's Avatar" />
      <div>
        <h1>Multi-D Myths</h1>
        <p>Online</p>
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