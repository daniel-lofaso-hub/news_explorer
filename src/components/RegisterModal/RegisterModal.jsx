import { useEffect, useState } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onLoginClick, onRegister, onClose }) => {
  const defaultValues = {
    email: "",
    password: "",
    username: "",
  };

  const validationRules = {
    email: {
      required: true,
      requiredMessage: "Email is required",
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      patternMessage: "(this is not a email address)",
    },
    password: {
      required: true,
      requiredMessage: "Password is required",
    },
    username: {
      required: true,
      requiredMessage: "Username is required",
    },
  };

  const {
    values,
    errors,
    isValid,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
  } = useFormWithValidation(defaultValues, validationRules);

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      resetForm();
      validateForm();
      setIsSubmitted(false);
    }
  }, [isOpen]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    setIsSubmitted(true);
    if (validateForm()) {
      try {
        await onRegister(values);
        setIsSubmitted(false);
        return;
      } catch (error) {
        setIsSubmitted(false);
        return typeof error === "string"
          ? error
          : error?.message || "Something went wrong";
      }
    }
  }
  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      name="signup"
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
      disabled={!isValid || isSubmitted}
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
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
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
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
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
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
