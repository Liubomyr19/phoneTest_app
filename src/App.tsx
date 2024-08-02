import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { GlobalContext } from './Context/GlobalContext';
import { useAuth } from './hooks/use-auth';
import './App.scss';

const App = () => {
  const { isMobMenuVisible } = useContext(GlobalContext);
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Перенаправити на сторінку входу, якщо не авторизований
    if (!isAuth) {
      navigate('/register');
    }
  }, [isAuth, navigate]);

  return (
    <div
      className={cn('App', {
        'no-scroll': isMobMenuVisible,
      })}
    >
      <Header />
      <main
        className={cn('main', {
          'main--blur': isMobMenuVisible,
        })}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
