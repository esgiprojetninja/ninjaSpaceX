export interface ApiError extends Object{
  hasError: true;
  error: any;
  message: string;
}

