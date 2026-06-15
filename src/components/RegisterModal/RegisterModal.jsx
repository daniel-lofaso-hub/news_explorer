import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onLoginClick, onClose }) => {
  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      name="signup"
      isOpen={isOpen}
      onClose={onClose}
      secondaryButton={
        <button
          onClick={onLoginClick}
          type="button"
          className="modal__secondary-btn"
        >
          or <span className="modal__secondary-btn_main-text">Sign in</span>
        </button>
      }
    >
      <label htmlFor="login-email" className="modal__label">
        Email
        <input
          type="email"
          className={`modal__input`}
          name="email"
          id="login-email"
          placeholder="Enter email"
        />
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password
        <input
          type="password"
          className={`modal__input`}
          name="password"
          id="login-password"
          placeholder="Enter password"
        />
      </label>
      <label htmlFor="login-username" className="modal__label">
        Username
        <input
          type="username"
          className={`modal__input`}
          name="username"
          id="login-username"
          placeholder="Enter username"
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
