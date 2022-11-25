export enum ApiMessage {
    Success = "Success",
    Failure = "Error: something went wrong",
}

export interface ApiResponse<T = unknown> {
    success: boolean;
    message: string;
    data?: T;
}

export class ErrorResponse<T = unknown> implements ApiResponse<T> {
    success = false;
    message: string;
    data: T | undefined = undefined;

    constructor(message: string) {
        this.message = message;
    }
}

export class SuccessResponse<T = unknown> implements ApiResponse<T> {
    success = true;
    message = ApiMessage.Success;
    data?: T;

    constructor(data?: T) {
        this.data = data;
    }
}
