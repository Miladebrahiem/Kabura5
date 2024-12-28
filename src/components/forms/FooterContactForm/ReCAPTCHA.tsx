import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface ReCAPTCHAProps {
  onChange: (token: string | null) => void;
}

export const ReCaptcha: React.FC<ReCAPTCHAProps> = ({ onChange }) => {
  return (
    <div className="mt-4">
      <ReCAPTCHA
        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        onChange={onChange}
        theme="dark"
      />
    </div>
  );
};