export interface User {
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  middleName: string;
  avatar: string;
  username: string;
  jwtToken: string;
  expiresIn: number;
}
