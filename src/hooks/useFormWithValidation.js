import { useState, useCallback, useMemo } from "react";

export function useFormWithValidation(defaultValues, validationRules = {}) {
  const [values, setValues] = useState(defaultValues);

  const getFieldError = useCallback(
    (name, value) => {
      const rule = validationRules[name];
      if (!rule) return "";

      if (typeof rule === "function") {
        return rule(value) || "";
      }

      if (rule.required && (!value || value.trim() === "")) {
        return rule.requiredMessage || "This field is required";
      }

      if (rule.pattern && value && !rule.pattern.test(value)) {
        return rule.patternMessage || "Invalid format";
      }

      if (rule.validate && value) {
        const error = rule.validate(value);
        if (error) return error;
      }

      return "";
    },
    [validationRules],
  );

  const [errors, setErrors] = useState({});

  const initialIsValid = useMemo(() => {
    return Object.keys(defaultValues).every((fieldName) => {
      return !getFieldError(fieldName, defaultValues[fieldName]);
    });
  }, [defaultValues, getFieldError]);

  const [isValid, setIsValid] = useState(initialIsValid);

  const validateField = useCallback(
    (name, value) => {
      return getFieldError(name, value);
    },
    [getFieldError],
  );

  // Validate all fields
  const validateForm = useCallback(() => {
    const newErrors = {};
    let formIsValid = true;

    Object.keys(defaultValues).forEach((fieldName) => {
      const error = validateField(fieldName, values[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        formIsValid = false;
      }
    });

    setErrors(newErrors);
    setIsValid(formIsValid);
    return formIsValid;
  }, [values, defaultValues, validateField]);

  // Handle change event
  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);

    setErrors((prevErrors) => {
      if (prevErrors[name]) {
        const remainingErrors = { ...prevErrors };
        delete remainingErrors[name];
        return remainingErrors;
      }
      return prevErrors;
    });

    const formIsValid = Object.keys(defaultValues).every((fieldName) => {
      return !validateField(fieldName, nextValues[fieldName]);
    });
    setIsValid(formIsValid);
  };

  // Handle blur event for validation
  const handleBlur = (event) => {
    const { name } = event.target;
    const error = validateField(name, values[name]);
    const newErrors = { ...errors, [name]: error };

    setErrors(newErrors);
    setIsValid(Object.values(newErrors).every((err) => !err));
  };

  // Reset form values and errors
  const resetForm = useCallback(() => {
    setValues(defaultValues);
    setErrors({});

    const formIsValid = Object.keys(defaultValues).every((fieldName) => {
      return !validateField(fieldName, defaultValues[fieldName]);
    });

    setIsValid(formIsValid);
  }, [defaultValues, validateField]);

  return {
    values,
    setValues,
    errors,
    setErrors,
    isValid,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
  };
}
