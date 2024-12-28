export interface CateringFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  location: string;
  notes: string;
}

export interface FieldProps {
  register: any;
  errors: Record<string, any>;
}