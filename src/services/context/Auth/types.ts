export interface AuthProviderProps {
 children: React.ReactNode;
}

export interface AuthContextData {
 onSingIn: (userData: AuthProps) => void;
 onSingOut: () => void;
 getUser: () => AuthUserProps;
 getToken: () => string;
}

export type AuthProps = {
 token: string;
 usuario: AuthUserProps;
};

export type AuthUserProps = {
 id: number;
 email: string;
 perfil: string;
 nome: string;
};
