import "./ModalWithForm.css";
import { useEffect, useState, useRef } from "react";

function ModalWithForm({
  children,
  buttonText,
  title,
  name,
  isOpen,
  secondaryButton,
  disabled,
  onClose,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen]);

  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content" ref={modalRef}>
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} className="modal__close"></button>
        <form className="modal__form">
          {children}
          <div className="modal__buttons">
            <button
              type="submit"
              className={`modal__submit modal__submit_type_${name} ${disabled ? "modal__submit_disabled" : ""}`}
              disabled={disabled}
            >
              {buttonText}
            </button>
            {secondaryButton}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
