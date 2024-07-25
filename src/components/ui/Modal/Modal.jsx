import { PortalModals } from '../../../containers/Portal/PortalModals';
import { ModalTitle } from './ModalTitle';
import { ModalText } from './ModalText';
import { ModalButtons } from './ModalButtons';
import './Modal.scss';

const ModalComponent = ({ children, ...props }) => {
  if (!props.open) return null;

  return (
    <PortalModals target="modals-root">
      <div
        onClick={props.onClose}
        className={props.animation === 'out' ? 'modal out' : 'modal in'}
      >
        <div onClick={(e) => e.stopPropagation()} className="modal__content">
          {children}
        </div>
      </div>
    </PortalModals>
  );
};

export const Modal = Object.assign(ModalComponent, {
  Title: ModalTitle,
  Text: ModalText,
  Buttons: ModalButtons,
});
