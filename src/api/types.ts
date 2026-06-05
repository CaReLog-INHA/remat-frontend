export interface ResponseStatus {
  statusCode: string;
  message: string;
  description?: string; 
}

export interface ApiResponse<T> {
  status: ResponseStatus;
  body: T;
}
