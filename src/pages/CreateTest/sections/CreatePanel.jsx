import { Link } from 'react-router-dom';
import { ControlPanel } from '../../../components/ui/ControlPanel/ControlPanel';
import { Play, Shuffle, Trash2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

const CreatePanel = ({ open, forms, ...props }) => {
  const btnShuffle = useRef(null);
  useEffect(() => {
    btnShuffle.current.style.color = props.shuffle ? '#ff0000' : '#00000083';
  }, [props.shuffle]);

  return (
    <ControlPanel title={'Creation'}>
      <div className="control-panel__buttons">
        <button
          onClick={open}
          className="control-panel__open"
          title="reset all"
        >
          <Trash2 />
        </button>
        <button
          onClick={props.setShuffle}
          ref={btnShuffle}
          className="control-panel__shuffle"
          title="shuffle"
        >
          <Shuffle />
        </button>
        {forms.length > 0 && (
          <Link
            className="control-panel__play"
            to={'/Aero-create-test/show-test'}
            title="show test"
          >
            <Play />
          </Link>
        )}
      </div>
    </ControlPanel>
  );
};

export default CreatePanel;
