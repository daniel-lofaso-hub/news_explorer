import "./RegistrationCompleteModal.css";

const RegistrationCompleteModal = ({ isOpen, onClose, onLoginClick }) => {
  return (
    <div
      className={`registration-complete-modal ${isOpen ? "registration-complete-modal_opened" : ""}`}
    >
      <div className="registration-complete-modal__content">
        <h2 className="registration-complete-modal__title">
          Registration successfully completed!
        </h2>
        <button
          onClick={onLoginClick}
          className="registration-complete-modal__login-btn"
        >
          Sign in
        </button>
        <button
          onClick={onClose}
          className="registration-complete-modal__close-btn"
        ></button>
      </div>
    </div>
  );
};

export default RegistrationCompleteModal;
