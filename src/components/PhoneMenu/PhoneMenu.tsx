import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './PhoneMenu.scss';
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn({
    'uppercase-text-style': true,
    side_link: true,
    'side_link--active': isActive,
  });

export const PhoneMenu = () => {
  const { isMobMenuVisible, setIsMobMenuVisible } = useContext(GlobalContext);

  return (
    <aside
      className={cn('side_menu', {
        'side_menu--visible': isMobMenuVisible,
      })}
    >
      <div className="side_box">
        <ul className="side_list">
          <li className="side_item">
            <NavLink
              to="/phones"
              className={getLinkClass}
              onClick={() => setIsMobMenuVisible(false)}
            >
              PHONES
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};
