


export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

export const validateCPF = (cpf) => {
    // Simple CPF validation, can be improved
    const re = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return re.test(cpf);
  };

export const validatePhone = (phone) => {
    // Simple phone validation, can be improved
    const re = /^\d{11}$/;
    return re.test(phone);
  };