import { useState } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onRegisterClick, onLogin, onClose }) => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const validationRules = {
    email: {
      required: true,
      requiredMessage: "Email is required",
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      patternMessage: "Invalid email address",
    },
    password: {
      required: true,
      requiredMessage: "Password is required",
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

  const handleOpen = () => {
    resetForm();
    setIsSubmitted(false);
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log("Submitted");
    setIsSubmitted(true);
    if (validateForm()) {
      try {
        await onLogin(values);
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
      title="Sign in"
      buttonText="Sign in"
      name="login"
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
      onOpen={handleOpen}
      disabled={!isValid || isSubmitted}
      secondaryButton={
        <button
          onClick={onRegisterClick}
          type="button"
          className="modal__secondary-btn"
        >
          or <span className="modal__secondary-btn_main-text">Sign up</span>
        </button>
      }
    >
      <label htmlFor="login-email" className="modal__label">
        Email
        <input
          required
          type="email"
          className={`modal__input${errors.email ? " modal__input_error" : ""}`}
          name="email"
          id="login-email"
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password
        <input
          required
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
    </ModalWithForm>
  );
};

export default LoginModal;
