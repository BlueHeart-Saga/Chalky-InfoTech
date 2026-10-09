import Swal from 'sweetalert2';

/**
 * Custom SweetAlert configuration matching Chalky Infotech design theme (#7A1F5C)
 */

export const showValidationError = (message: string, title = 'Validation Error') => {
  return Swal.fire({
    icon: 'warning',
    title: `<span style="color: #1A1A1A; font-weight: 700;">${title}</span>`,
    html: `<p style="color: #555555; font-size: 15px; margin-top: 5px;">${message}</p>`,
    confirmButtonText: 'Got it',
    confirmButtonColor: '#7A1F5C',
    customClass: {
      popup: 'rounded-3xl border border-gray-100 shadow-2xl p-6',
      confirmButton: 'px-6 py-2.5 rounded-full font-bold text-sm tracking-wide',
    },
  });
};

export const showSuccessAlert = (message: string, title = 'Submitted Successfully!') => {
  return Swal.fire({
    icon: 'success',
    title: `<span style="color: #1A1A1A; font-weight: 700;">${title}</span>`,
    html: `<p style="color: #555555; font-size: 15px; margin-top: 5px;">${message}</p>`,
    confirmButtonText: 'Great!',
    confirmButtonColor: '#7A1F5C',
    customClass: {
      popup: 'rounded-3xl border border-gray-100 shadow-2xl p-6',
      confirmButton: 'px-6 py-2.5 rounded-full font-bold text-sm tracking-wide',
    },
  });
};

export const showErrorAlert = (message: string, title = 'Submission Failed') => {
  return Swal.fire({
    icon: 'error',
    title: `<span style="color: #1A1A1A; font-weight: 700;">${title}</span>`,
    html: `<p style="color: #555555; font-size: 15px; margin-top: 5px;">${message}</p>`,
    confirmButtonText: 'Try Again',
    confirmButtonColor: '#7A1F5C',
    customClass: {
      popup: 'rounded-3xl border border-gray-100 shadow-2xl p-6',
      confirmButton: 'px-6 py-2.5 rounded-full font-bold text-sm tracking-wide',
    },
  });
};

// ─── VALIDATION HELPER FUNCTIONS ──────────────────────────────────────────────

/**
 * Validates text fields (checks empty, whitespace-only, and minimum length)
 */
export const validateText = (
  value: string,
  fieldName: string,
  minLength = 2,
  required = true
): string | null => {
  const trimmed = (value || '').trim();
  if (required && !trimmed) {
    return `${fieldName} is required and cannot be empty or blank.`;
  }
  if (trimmed && trimmed.length < minLength) {
    return `${fieldName} must be at least ${minLength} characters long.`;
  }
  return null;
};

/**
 * Validates email address format
 */
export const validateEmail = (email: string, required = true): string | null => {
  const trimmed = (email || '').trim();
  if (required && !trimmed) {
    return 'Email address is required.';
  }
  if (trimmed) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) {
      return 'Please enter a valid email address (e.g. name@company.com).';
    }
  }
  return null;
};

/**
 * Validates phone numbers (checks digits, length, plus prefix, spaces)
 */
export const validatePhone = (phone: string, required = false): string | null => {
  const trimmed = (phone || '').trim();
  if (required && !trimmed) {
    return 'Phone number is required.';
  }
  if (trimmed) {
    // Check basic phone structure (digits, +, -, (), spaces)
    const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
    const digitCount = trimmed.replace(/\D/g, '').length;
    
    if (!phoneRegex.test(trimmed) || digitCount < 7 || digitCount > 15) {
      return 'Please enter a valid phone number with 7 to 15 digits (e.g. +44 20 1234 5678 or +91 98765 43210).';
    }
  }
  return null;
};

/**
 * Validates number fields
 */
export const validateNumber = (
  value: string | number,
  fieldName: string,
  min = 0,
  max = Infinity,
  required = true
): string | null => {
  if (value === '' || value === null || value === undefined) {
    if (required) return `${fieldName} is required.`;
    return null;
  }
  const num = Number(value);
  if (isNaN(num)) {
    return `${fieldName} must be a valid number.`;
  }
  if (num < min) {
    return `${fieldName} must be at least ${min}.`;
  }
  if (num > max) {
    return `${fieldName} cannot exceed ${max}.`;
  }
  return null;
};

/**
 * Validates file attachments (file extension, file size)
 */
export const validateFile = (
  file: File | null,
  required = false,
  allowedExtensions = ['.pdf', '.doc', '.docx', '.txt'],
  maxMB = 10
): string | null => {
  if (required && !file) {
    return 'Please select a file to upload.';
  }
  if (file) {
    const ext = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!allowedExtensions.includes(ext)) {
      return `Invalid file type "${ext}". Allowed types: ${allowedExtensions.join(', ')}`;
    }
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxMB) {
      return `File size (${fileSizeMB.toFixed(1)} MB) exceeds the maximum limit of ${maxMB} MB.`;
    }
  }
  return null;
};
