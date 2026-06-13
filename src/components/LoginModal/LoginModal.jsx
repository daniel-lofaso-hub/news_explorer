import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen }) => {
  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      name="login"
      isOpen={isOpen}
      secondaryButton={
        <button type="button" className="modal__secondary-btn">
          or <span clasName="modal__secondary-btn_main-text">Sign up</span>
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
    </ModalWithForm>
  );
};

export default LoginModal;
