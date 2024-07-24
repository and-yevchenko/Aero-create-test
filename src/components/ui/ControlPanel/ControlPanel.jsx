import './ControlPanel.scss'

export const ControlPanel = ({title, children}) => {

    return (
        <div className='control-panel'>
            <h2 className='control-panel__title'>{title}</h2>
            {children}
        </div>
    )
}