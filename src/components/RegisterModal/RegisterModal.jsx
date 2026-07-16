import { useState } from "react";
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
      patternMessage: "Invalid email address",
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
  const [submitError, setSubmitError] = useState("");

  const handleOpen = () => {
    resetForm();
    setSubmitError("");
    setIsSubmitted(false);
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    setSubmitError("");
    setIsSubmitted(true);
    if (validateForm()) {
      try {
        await onRegister(values);
        setIsSubmitted(false);
        return;
      } catch (error) {
        setIsSubmitted(false);
        const message =
          typeof error === "string"
            ? error
            : error?.message || "Something went wrong";
        setSubmitError(message);
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
      onOpen={handleOpen}
      disabled={!isValid || isSubmitted}
      submitError={submitError}
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
          required
          type="email"
          className={`modal__input${errors.email ? " modal__input_error" : ""}`}
          name="email"
          id="login-email"
          placeholder="Enter email"
          value={values.email}
          onChange={(event) => {
            setSubmitError("");
            handleChange(event);
          }}
          onBlur={(event) => {
            setSubmitError("");
            handleBlur(event);
          }}
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
      <label htmlFor="login-username" className="modal__label">
        Username
        <input
          required
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
