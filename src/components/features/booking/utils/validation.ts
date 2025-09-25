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
  
  // Российские операторы: 9xx (мобильные)
  const validRussianMobilePrefixes = ['90', '91', '92', '93', '94', '95', '96', '97', '98', '99'];
  
  let operatorCode = '';
  
  if (cleanPhone.startsWith('8') && cleanPhone.length === 11) {
    operatorCode = cleanPhone.substring(1, 3);
  } else if (cleanPhone.startsWith('7') && cleanPhone.length === 11) {
    operatorCode = cleanPhone.substring(1, 3);
  } else if (cleanPhone.length === 10) {
    operatorCode = cleanPhone.substring(0, 2);
  } else {
    return { isValid: false, error: 'Некорректная длина номера телефона' };
  }
  
  if (!validRussianMobilePrefixes.includes(operatorCode)) {
    return { isValid: false, error: 'Некорректный код оператора' };
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
  
  if (!formData.privacyConsent) {
    errors.privacyConsent = 'Необходимо согласие на обработку персональных данных';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}