import React, { useEffect } from "react";
import "./style.scss";

const Modal = ({ showModal, setShowModal }) => {
  useEffect(() => {
    const handleCloseKeyPress = (e) => {
      if (e.keyCode === 27) {
        setShowModal(false);
      }
    };
    document.addEventListener("keyup", handleCloseKeyPress);
    return () => {
      window.removeEventListener("keyup", handleCloseKeyPress);
    };
  }, []);

  return (
    <div className={`modal ${showModal && "show"}`}>
      <div className="modal-box">
        <div className="modal-header">
          <div className="modal-title">Modal</div>
          <div className="modal-close-btn" onClick={() => setShowModal(false)}>
            X
          </div>
        </div>
        <div className="modal-body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, nulla!
        </div>
        <div className="modal-footer">
          <button
            className="footer-close-btn"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      </div>
      <div className="modal-mask" onClick={() => setShowModal(false)}></div>
    </div>
  );
};

export default Modal;
