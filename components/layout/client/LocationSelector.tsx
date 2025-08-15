"use client"

import { useState } from "react"
import { ChevronDown, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

interface LocationSelectorProps {
    municipalities: string[]
    defaultLocation: string
}

export function LocationSelector({ municipalities, defaultLocation }: LocationSelectorProps) {
    const [location, setLocation] = useState(defaultLocation)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="hidden md:inline-flex rounded-lg h-10 px-3 sm:px-4 border-slate-200 bg-transparent"
                    aria-label={`Seleccionar ubicación. Ubicación actual: ${location}`}
                >
                    <MapPin className="mr-2 size-4 text-[#243b78]" />
                    <span className="text-sm text-slate-700">{location}</span>
                    <ChevronDown className="ml-2 size-4 text-slate-500" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                {municipalities.map((loc) => (
                    <DropdownMenuItem key={loc} onClick={() => setLocation(loc)}>
                        {loc}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
