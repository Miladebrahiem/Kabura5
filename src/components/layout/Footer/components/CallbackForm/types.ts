export interface CallbackFormData {
  name: string;
  phone: string;
  email: string;
  contactPreference: 'phone' | 'email';
}

export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  label: string;
  error?: string;
  options?: Array<{
    value: string;
    label: string;
  }>;
};