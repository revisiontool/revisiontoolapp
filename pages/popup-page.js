import Popup from '../components/popups/popup';
import ReferralPopupContent from '../components/popups/referralpopupcontent'
import LoginPopup from '../components/popups/loginpopup'
import SignUpPopup from '../components/popups/signuppopup'

const MyPage = () => (
  <div>
    <h1>Welcome to my page!</h1>
    <Popup buttonText="Open popup">
      <ReferralPopupContent />
    </Popup>
    <Popup buttonText="Sign-in Popup">
      <SignUpPopup />
    </Popup>
    <Popup buttonText="Login Popup">
      <LoginPopup />
    </Popup>
  </div>
);

export default MyPage;
