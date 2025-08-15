"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MobileDrawerProps {
    isOpen: boolean
    onClose: () => void
    navLinks: Array<{ href: string; label: string }>
}

export function MobileDrawer({ isOpen, onClose, navLinks }: MobileDrawerProps) {
    if (!isOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div 
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={onClose}
            />
            
            {/* Drawer */}
            <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden">
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-200">
                        <h2 className="text-lg font-semibold text-slate-900">Menú</h2>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onClose}
                            className="text-slate-500 hover:text-slate-700"
                        >
                            <X className="size-5" />
                        </Button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 p-4">
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="block px-4 py-3 text-slate-700 hover:text-[#2b3a8a] hover:bg-slate-50 rounded-lg transition-colors"
                                        onClick={onClose}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Footer */}
                    <div className="p-4 border-t border-slate-200">
                        <div className="text-sm text-slate-500">
                            © 2025 Botiforma
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
