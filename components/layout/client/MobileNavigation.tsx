"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { MobileDrawer } from "./MobileDrawer"

interface MobileNavigationProps {
    navLinks: Array<{ href: string; label: string }>
}

export function MobileNavigation({ navLinks }: MobileNavigationProps) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const openDrawer = () => setIsDrawerOpen(true)
    const closeDrawer = () => setIsDrawerOpen(false)

    return (
        <>
            <button 
                onClick={openDrawer}
                className="text-[#2b3a8a] md:hidden"
                aria-label="Abrir menú de navegación"
            >
                <Menu className="size-6" />
            </button>

            <MobileDrawer 
                isOpen={isDrawerOpen}
                onClose={closeDrawer}
                navLinks={navLinks}
            />
        </>
    )
}
