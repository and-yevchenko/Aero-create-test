import { useEffect, useState } from "react"


export const useModal = () => {
    const [visible, setVisible] = useState(false)
    const [animation, setAnimation] = useState('in')
    
    const handleOpenModal = () => setVisible(true)
    const handleCloseModal = () => {
        setAnimation('out')
        setTimeout(() => setVisible(false), 200)
    }

    useEffect(() => {
        if (visible) {
            setAnimation('in')
        }
        document.body.style.overflow = visible ? 'hidden' : 'auto'
    }, [visible])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                handleCloseModal()
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])
    
    return {
        open: visible, 
        onOpen: handleOpenModal, 
        onClose: handleCloseModal,
        animation
    }
}