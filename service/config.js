const devBaseURL = "http://localhost:8000/api/changan";
const proBaseURL = "http://140.249.176.146:6789/api/changan";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;