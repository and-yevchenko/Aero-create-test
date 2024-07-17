import './HeadPanel.scss'

export const HeadPanel = ({children}) => {

    return (
        <div className='head-panel'>
            <h2 className='head-panel__title'>Creation</h2>
            <div className='head-panel__buttons'>{children}</div>
        </div>
    )
}