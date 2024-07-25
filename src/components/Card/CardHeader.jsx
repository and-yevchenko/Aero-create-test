import { Settings, X } from 'lucide-react';

export const CardHeader = ({ ...props }) => {
  return (
    <div className="card__header">
      <div className="card__title">Question {props.index + 1}</div>
      <div className="card__buttons">
        <button onClick={(e) => props.handleOpenSettings(e, props.el.id)}>
          <Settings />
        </button>
        <button onClick={(e) => props.handleDeleteForm(e, props.el.id)}>
          <X />
        </button>
      </div>
    </div>
  );
};
