import '../../scss/components/ContactBar.scss';
import LeftArrow from '../../images/left-arrow.svg';
import FriendAvatar from '../../images/friend.png';
import HelpIcon from '../../images/help.svg';
import MYTHS from '../constants/Myths';

const ContactBar = ({setConversationHistory}) => {
  return(
    <div className="ContactBar">
      <img src={LeftArrow} className="icon" alt="Back Button" />
      <img src={FriendAvatar} className="avatar" alt="Friend's Avatar" />
      <div>
        <h1>Multi-D Myths</h1>
        <p>Online</p>
      </div>
      <img
        src={HelpIcon}
        className="icon helpIcon"
        alt="Help Button" 
        onClick={() => {setConversationHistory(0)}}
      />

    </div>
  )
}

export default ContactBar;