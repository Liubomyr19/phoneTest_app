import { useAppSeelector } from './redux-hooks';

export function useAuth() {
  const { email, token, id } = useAppSeelector(state => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
