import { Link } from 'react-router-dom';
import { Login } from '../components/Login/Login';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1 className="login-page__title">Login</h1>
      <Login />
      <p className="login-page__link">
        Or <Link to="/register">register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
