import { PortalModals } from '../../../containers/Portal/PortalModals'
import { useAddForms } from '../../../store/store'
import { Button } from '../Buttons/Button'
import './WindowReset.scss'

export const WindowReset = ({ open, onClose, animation }) => {

    const clearAll = useAddForms(state => state.clearAll)
    const onClear = () => {
        clearAll()
        onClose()
    }

    if (!open) return null
    return (
        <PortalModals target="modals-root">
            <div onClick={onClose} className={animation === 'out' ? 'window-reset out' : 'window-reset in'}>
                <div onClick={(e) => e.stopPropagation()} className='window-reset__content'>
                    <h3 className='window-reset__title'>Warnings!</h3>
                    <p className='window-reset__text'>Clear all content?</p>
                    <div className='window-reset__buttons'>
                        <Button onClick={onClose}>no</Button>
                        <Button onClick={onClear}>yes</Button>
                    </div>
                </div>
            </div>
        </PortalModals>
    )
}