"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function MobileSearch() {
    const [q, setQ] = useState("")

    function onSearch(e: React.FormEvent) {
        e.preventDefault()
        // no-op; wire to your search endpoint
    }

    return (
        <form onSubmit={onSearch} className="flex md:hidden">
            <div className="flex items-center w-full rounded-lg bg-slate-100/80 ring-1 ring-slate-200 focus-within:ring-slate-300 overflow-hidden">
                <div className="flex items-center flex-1">
                    <Search className="ml-3 size-4 text-slate-500" aria-hidden />
                    <Input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Busca productos, categorías o marcas…"
                        className="h-10 border-0 bg-transparent focus-visible:ring-0 text-sm placeholder:text-slate-400"
                    />
                </div>
                <Button 
                    type="submit" 
                    className="h-10 px-4 bg-[#2b3a8a] hover:bg-[#233170] text-white rounded-none"
                    aria-label="Buscar productos"
                >
                    <Search className="size-4 text-white" />
                </Button>
            </div>
        </form>
    )
}
