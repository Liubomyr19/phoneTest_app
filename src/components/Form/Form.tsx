import { FC, useState } from 'react';
import './Form.scss'; // Імплементуйте стилі в окремому файлі SCSS

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className="form">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="email"
        className="form__input"
      />
      <input
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
        placeholder="password"
        className="form__input"
      />
      <button onClick={() => handleClick(email, pass)} className="form__button">
        {title}
      </button>
    </div>
  );
};

export { Form };
