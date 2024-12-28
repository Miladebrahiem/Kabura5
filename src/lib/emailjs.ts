import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

interface CallbackData {
  name: string;
  phone: string;
  email: string;
  contactPreference: 'phone' | 'email';
}

export const sendEmail = async (data: EmailData) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};

export const sendCallbackRequest = async (data: CallbackData) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      contact_preference: data.contactPreference,
      message: `Callback request from ${data.name}
        Phone: ${data.phone}
        Email: ${data.email}
        Preferred contact method: ${data.contactPreference}`,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};