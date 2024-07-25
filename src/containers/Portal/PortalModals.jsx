import { createPortal } from 'react-dom';

export const PortalModals = ({ children, target }) => {
  return createPortal(children, document.getElementById(target));
};
