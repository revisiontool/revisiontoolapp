import { useState } from 'react';


const Popup = ({ children, buttonText, buttonStyle, textStyle }) => {
  const [showPopup, setShowPopup,] = useState(false);

  const togglePopup = () => setShowPopup(!showPopup);


  return (
    <div className='z-50'>
      <button className={buttonStyle} onClick={togglePopup}><span className={textStyle}>{buttonText}</span></button>
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close" onClick={togglePopup}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black"/>
              </svg>
            </button>
            {children}
          </div>
        </div>
      )}
      <style jsx>{`
        .popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .popup-inner {
          position: relative;
          background-color: #fff;
          padding: 0px;
          border-radius: 5px;
          width: 95%;
          height: 95%;
          overflow: auto;
          z-index: 999;
        }
        .close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 32px;
          height: 32px;
          border-radius: 16px;
          border: none;
          font-size: 20px;
          cursor: pointer;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Popup;
