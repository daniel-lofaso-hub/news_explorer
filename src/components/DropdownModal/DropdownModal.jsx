import "./DropdownModal.css";
import Navigation from "../Navigation/Navigation";

function DropdownModal({
  isOpen,
  isLoggedIn,
  onLoginClick,
  onClose,
  onLogout,
}) {
  return (
    <div
      className={`modal modal_type_dropdown ${isOpen ? "modal_opened" : ""}`}
    >
      <div className="dropdown__content">
        <div className="dropdown__header">
          <h2 className="dropdown__title">NewsExplorer</h2>
          <button onClick={onClose} className="dropdown__close"></button>
        </div>
        <div className="dropdown__nav">
          <Navigation
            isLoggedIn={isLoggedIn}
            onLoginClick={onLoginClick}
            onLogout={onLogout}
          />
        </div>
      </div>
    </div>
  );
}

export default DropdownModal;
