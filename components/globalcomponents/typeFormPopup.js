import React, { useState } from 'react';
import { Popup } from '@typeform/embed-react';

function TypeformPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleOpen}
      >
        Submit Feedback
      </button>

      {isOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg z-50">
          <Popup 
            id="01HH7ZQTAHXJAC39MY47D19XTC"
            onClose={handleClose}
            autoClose={true}
            autoOpen={true}
          />
          <button 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default TypeformPopup;
