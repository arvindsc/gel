export interface AuthState {
    loading: boolean;
    result: string[];
}

export const initialAuthState: AuthState = {
    loading: false,
    result: []
}