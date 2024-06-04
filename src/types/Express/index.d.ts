declare namespace Express {
  interface Request {
    userId: number;
    roleUser: string;
    sub: string;
  }
}
