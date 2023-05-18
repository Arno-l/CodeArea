export interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
    showRegistrationForm: () => void;
    removeForm: () => void;
}

export interface RegistrationFormProps {
    onRegister: (email: string, password: string, passwordConfirm: string) => void;
    handleLoginClick: () => void;
    setDirectionState: React.Dispatch<React.SetStateAction<string>>;
}
