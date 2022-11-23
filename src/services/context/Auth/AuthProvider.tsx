import { createContext, useEffect, useState } from 'react';
import {
 AuthContextData,
 AuthProps,
 AuthProviderProps,
 AuthUserProps,
} from './types';

export const AuthContext = createContext<AuthContextData>(
 {} as AuthContextData
);

function AuthProvider({ children }: AuthProviderProps) {
 const [user, setUser] = useState<AuthUserProps>({} as AuthUserProps);
 const [token, setToken] = useState('');

 useEffect(() => {
  const tokenJson = window.localStorage.getItem('@token');
  const userJson = window.localStorage.getItem('@user');
  if (tokenJson && userJson) {
   setToken(tokenJson);
   setUser(JSON.parse(userJson));
  }
 }, []);

 const onSingIn = (userData: AuthProps) => {
  setUser(userData.usuario);
  setToken(userData.token);
  window.localStorage.setItem('@token', userData.token);
  window.localStorage.setItem('@user', JSON.stringify(userData.usuario));
 };

 const getUser = () => {
  return user;
 };
 const getToken = () => {
  return token;
 };

 const onSingOut = () => {
  setUser({} as AuthUserProps);
  setToken('');
  localStorage.removeItem('@token');
  localStorage.removeItem('@user');
 };

 return (
  <AuthContext.Provider
   // eslint-disable-next-line react/jsx-no-constructed-context-values
   value={{ onSingIn, getUser, onSingOut, getToken }}
  >
   {children}
  </AuthContext.Provider>
 );
}

export default AuthProvider;
