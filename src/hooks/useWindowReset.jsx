import { useEffect, useState } from "react"


export const useWindowReset = () => {
    const [visible, setVisible] = useState(false)
    const [animation, setAnimation] = useState('in')
    
    const handleOpenWindowReset = () => setVisible(true)
    const handleCloseWindowReset = () => {
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
                handleCloseWindowReset()
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])
    
    return {
        open: visible, 
        onOpen: handleOpenWindowReset, 
        onClose: handleCloseWindowReset,
        animation
    }
}