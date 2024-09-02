export declare enum ToastType {
    Success = "success",
    Error = "error"
}
export interface Toast {
    type: ToastType;
    message: string;
}
