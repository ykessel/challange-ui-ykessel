"use client"

import { useState } from "react"
import { ChevronDown, Grid2x2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface CategorySearchCombinedProps {
    categories: string[]
    defaultCategory: string
}

export function CategorySearchCombined({ categories, defaultCategory }: CategorySearchCombinedProps) {
    const [category, setCategory] = useState(defaultCategory)
    const [q, setQ] = useState("")

    function onSearch(e: React.FormEvent) {
        e.preventDefault()
        // no-op; wire to your search endpoint
    }

    return (
        <form onSubmit={onSearch} className="flex-1 hidden md:flex">
            <div className="flex items-center w-full rounded-lg bg-slate-100/80 ring-1 ring-slate-200 focus-within:ring-slate-300 overflow-hidden">
                {/* Categories selector */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button 
                            className="h-10 px-4 bg-[#2b3a8a] hover:bg-[#233170] text-white rounded-none border-r border-white/20"
                            aria-label={`Seleccionar categoría. Categoría actual: ${category}`}
                        >
                            <Grid2x2 className="mr-2 size-4" />
                            <span className="text-sm">{category}</span>
                            <ChevronDown className="ml-2 size-4 text-white/80" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        {categories.map((c) => (
                            <DropdownMenuItem key={c} onClick={() => setCategory(c)}>
                                {c}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Search input */}
                <div className="flex items-center flex-1">
                    <Search className="ml-3 size-4 text-slate-500" aria-hidden />
                    <Input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Busca productos, categorías o marcas…"
                        className={cn(
                            "h-10 border-0 bg-transparent focus-visible:ring-0 text-sm",
                            "placeholder:text-slate-400",
                        )}
                    />
                </div>
            </div>
        </form>
    )
}
