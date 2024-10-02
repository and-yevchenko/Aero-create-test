import { Logo } from '../../ui/Logo/Logo';
import './Header.scss';

export const Header = ({ children }) => {
  return (
    <header className="header">
      <Logo link={'/Aero-create-test/'} />
      {children}
    </header>
  );
};
