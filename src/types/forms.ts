export interface FormSubmission {
  id: string;
  form_type: string;
  name: string;
  email: string;
  message?: string;
  submitted_at: string;
  status: 'pending' | 'processed' | 'archived';
}

export interface CallbackRequest {
  id: string;
  name: string;
  phone: string;
  email: string;
  preferred_date?: string;
  preferred_time?: string;
  contact_preference: 'phone' | 'email';
  submitted_at: string;
  status: 'pending' | 'processed' | 'archived';
}