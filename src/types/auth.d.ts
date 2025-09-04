export type Step = "EMAIL" | "CODE";

export interface LoginFormProps {
  toggleMode: () => void;
  isLoading: boolean;
}

export interface EmailResponse {
  success: boolean;
  message?: string;
}

export interface CodeResponse {
  success: boolean;
  data?: {
    token: string;
  };
  message?: string;
}
