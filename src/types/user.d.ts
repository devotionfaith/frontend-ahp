export interface DecodedToken {
  id: string;
  role: string;
  iat: number;
  exp: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}
