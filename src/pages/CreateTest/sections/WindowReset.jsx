import { Modal } from "../../../components/ui/Modal/Modal"
import { useAddForms } from "../../../store/store"


const WindowReset = ({...props}) => {

    const clearAll = useAddForms(state => state.clearAll)
    const onClear = () => {
        clearAll()
        props.onClose()
    }

    return (
        <Modal {...props}>
            <Modal.Title>Warnings!</Modal.Title>
            <Modal.Text>Clear all content?</Modal.Text>
            <Modal.Buttons>
                <button onClick={props.onClose}>no</button>
                <button onClick={onClear}>yes</button>
            </Modal.Buttons>
        </Modal>
    )
}

export default WindowReset