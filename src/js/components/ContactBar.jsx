import '../../scss/components/ContactBar.scss';
import LeftArrow from '../../images/left-arrow.svg';
import FriendAvatar from '../../images/friend.png';

const ContactBar = () => {
  return(
    <div className="ContactBar">
      <img src={LeftArrow} className="leftArrow" alt="Back Button" />
      <img src={FriendAvatar} className="avatar" alt="Friend's Avatar" />
      <div>
        <h1>Multi-D Myths</h1>
        <p>Online</p>
      </div>

    </div>
  )
}

export default ContactBar;