export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface ValidationResults {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateName(name: string): ValidationResult {
  if (!name.trim()) {
    return { isValid: false, error: 'Имя обязательно для заполнения' };
  }
  
  if (name.trim().length < 2) {
    return { isValid: false, error: 'Имя должно содержать минимум 2 символа' };
  }
  
  if (name.trim().length > 50) {
    return { isValid: false, error: 'Имя не должно превышать 50 символов' };
  }
  
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s-']+$/;
  if (!nameRegex.test(name.trim())) {
    return { isValid: false, error: 'Имя может содержать только буквы, пробелы, дефисы и апострофы' };
  }
  
  if (/^\s|\s$/.test(name)) {
    return { isValid: false, error: 'Имя не должно начинаться или заканчиваться пробелом' };
  }
  
  if (/\s{2,}/.test(name)) {
    return { isValid: false, error: 'Имя не должно содержать двойные пробелы' };
  }
  
  if (/^[\s\-']+$/.test(name.trim())) {
    return { isValid: false, error: 'Имя должно содержать буквы' };
  }
  
  return { isValid: true };
}

export function validatePhone(phone: string): ValidationResult {
  if (!phone.trim()) {
    return { isValid: false, error: 'Номер телефона обязателен для заполнения' };
  }
  
  const cleanPhone = phone.replace(/\D/g, '');
  
  if (cleanPhone.length < 10) {
    return { isValid: false, error: 'Номер телефона слишком короткий' };
  }
  
  if (cleanPhone.length > 12) {
    return { isValid: false, error: 'Номер телефона слишком длинный' };
  }
  
  if (cleanPhone.startsWith('8') && cleanPhone.length === 11) {
    if (!cleanPhone.startsWith('89')) {
      return { isValid: false, error: 'Российский номер должен начинаться с 8 или +7' };
    }
  } else if (cleanPhone.startsWith('7') && cleanPhone.length === 11) {
    if (!cleanPhone.startsWith('79')) {
      return { isValid: false, error: 'Российский номер должен начинаться с +79' };
    }
  } else if (cleanPhone.length === 10) {
    if (!cleanPhone.startsWith('9')) {
      return { isValid: false, error: 'Номер должен начинаться с 9 (без кода страны)' };
    }
  } else {
    return { isValid: false, error: 'Некорректный формат номера телефона' };
  }
  
  const phoneRegex = /^(\+?7|8)?[\s\-\(\)]?\d{3}[\s\-\(\)]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
  if (!phoneRegex.test(phone.trim())) {
    return { isValid: false, error: 'Введите корректный номер телефона' };
  }
  
  return { isValid: true };
}export function validateEmail(email: string): ValidationResult {
  if (!email.trim()) {
    return { isValid: false, error: 'Email обязателен для заполнения' };
  }
  
  if (email.length > 254) {
    return { isValid: false, error: 'Email слишком длинный' };
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.trim())) {
    return { isValid: false, error: 'Введите корректный email адрес' };
  }
  
  const localPart = email.split('@')[0];
  if (localPart.length > 64) {
    return { isValid: false, error: 'Некорректный email адрес' };
  }
  
  if (email.includes('..') || email.startsWith('.') || email.endsWith('.')) {
    return { isValid: false, error: 'Email содержит недопустимые символы' };
  }
  
  if (email.includes('@.') || email.includes('.@')) {
    return { isValid: false, error: 'Некорректный формат email адреса' };
  }
  
  const domain = email.split('@')[1];
  if (domain && domain.split('.').some(part => part.length === 0)) {
    return { isValid: false, error: 'Некорректный домен email адреса' };
  }
  
  const disposableEmails = ['tempmail.org', '10minutemail.com', 'guerrillamail.com', 'mailinator.com'];
  if (disposableEmails.some(disposable => domain?.toLowerCase().includes(disposable))) {
    return { isValid: false, error: 'Одноразовые email адреса не допускаются' };
  }
  
  return { isValid: true };
}

export function validateAllFields(formData: {
  name: string;
  phone: string;
  email: string;
  service: string;
  privacyConsent: boolean;
}): ValidationResults {
  const errors: Record<string, string> = {};
  
  const nameValidation = validateName(formData.name);
  if (!nameValidation.isValid) {
    errors.name = nameValidation.error!;
  }
  
  const phoneValidation = validatePhone(formData.phone);
  if (!phoneValidation.isValid) {
    errors.phone = phoneValidation.error!;
  }
  
  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error!;
  }
  
  if (!formData.service) {
    errors.service = 'Пожалуйста, выберите вариант услуги';
  }
  
  if (!formData.privacyConsent) {
    errors.privacyConsent = 'Необходимо согласие на обработку персональных данных';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}