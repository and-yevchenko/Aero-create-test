import './Logo.scss';

export const Logo = ({ link }) => {
  return (
    <div className="logo-aero">
      <a href={link}>
        <img src="/Aero-create-test/Aero.svg" alt="Logo Aero" />
      </a>
    </div>
  );
};
