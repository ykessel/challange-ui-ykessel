"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

interface MobileLocationSelectorProps {
    municipalities: string[]
    defaultLocation: string
}

export function MobileLocationSelector({ municipalities, defaultLocation }: MobileLocationSelectorProps) {
    const [location, setLocation] = useState(defaultLocation)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-[#2b3a8a] p-0 h-auto"
                    aria-label={`Seleccionar ubicación. Ubicación actual: ${location}`}
                >
                    <MapPin className="size-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <div className="p-2">
                    <div className="text-xs font-medium text-slate-500 mb-2 px-2">
                        Seleccionar ubicación
                    </div>
                    {municipalities.map((loc) => (
                        <DropdownMenuItem 
                            key={loc} 
                            onClick={() => setLocation(loc)}
                            className="cursor-pointer"
                        >
                            {loc}
                        </DropdownMenuItem>
                    ))}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
