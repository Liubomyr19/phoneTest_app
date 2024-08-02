import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { PhonePage } from './pages/PhonesPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { CartPage } from './pages/CartPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { GlobalProvider } from './Context/GlobalContext';
import { PageNotFound } from './pages/PageNotFound';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { Provider } from 'react-redux';
import './firebase';
import { store } from './store';

export const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="phones">
                <Route index element={<PhonePage />} />
                <Route path=":productId" element={<ProductDetailsPage />} />
              </Route>
              <Route path="favourites" element={<FavoritesPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </GlobalProvider>
      </Router>
    </Provider>
  );
};
