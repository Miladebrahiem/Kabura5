// Simple admin authentication
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123' // In production, use proper authentication
};

export const authenticate = (username: string, password: string) => {
  return username === ADMIN_CREDENTIALS.username && 
         password === ADMIN_CREDENTIALS.password;
};