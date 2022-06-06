import { useState } from 'react'

const useMenuMobile = () => {

    const [mobileOpen, setMobileOpen] = useState(false)
    
    const changeState = () => setMobileOpen(!mobileOpen)
    const closeMenuOpen = () => setMobileOpen(false)

    return [mobileOpen, changeState, closeMenuOpen]
}

export { useMenuMobile }