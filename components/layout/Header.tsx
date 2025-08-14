"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, MapPin, Grid2x2, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import Link from "next/link";

const navLinks = [
    { href: "#", label: "Catálogo" },
    { href: "#", label: "Quiénes somos" },
    { href: "#", label: "Entregas" },
    { href: "#", label: "Pagos" },
    { href: "#", label: "Preguntas frecuentes" },
]

export function Header() {
    const [location, setLocation] = useState("Plaza de la Revolución")
    const [category, setCategory] = useState("Categorías")
    const [q, setQ] = useState("")

    function onSearch(e: React.FormEvent) {
        e.preventDefault()
        // no-op; wire to your search endpoint
    }

    return (
        <header className="w-full bg-white shadow-sm">
            {/* Top bar */}
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3 sm:gap-4 py-3">
                    {/* Brand */}
                    <Link href="/" className="shrink-0 text-xl sm:text-2xl font-extrabold text-slate-900">
                        {"Mi Nombre"}
                    </Link>

                    {/* Controls (wrap on mobile) */}
                    <div className="flex-1 flex flex-col gap-2 sm:gap-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                            {/* Location pill */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="hidden md:inline-flex rounded-full h-10 px-3 sm:px-4 border-slate-200 bg-transparent"
                                    >
                                        <MapPin className="mr-2 size-4 text-[#243b78]" />
                                        <span className="text-sm text-slate-700">{location}</span>
                                        <ChevronDown className="ml-2 size-4 text-slate-500" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start">
                                    {["Plaza de la Revolución", "Centro", "Zona Norte"].map((loc) => (
                                        <DropdownMenuItem key={loc} onClick={() => setLocation(loc)}>
                                            {loc}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* Categories pill */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="rounded-full h-10 px-4 bg-[#2b3a8a] hover:bg-[#233170] text-white">
                                        <Grid2x2 className="mr-2 size-4" />
                                        <span className="text-sm">{category}</span>
                                        <ChevronDown className="ml-2 size-4 text-white/80" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start">
                                    {["Vitaminas", "Analgésicos", "Antialérgicos", "Infantiles"].map((c) => (
                                        <DropdownMenuItem key={c} onClick={() => setCategory(c)}>
                                            {c}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* Search */}
                            <form onSubmit={onSearch} className="flex-1 hidden md:flex">
                                <div className="flex items-center w-full rounded-full bg-slate-100/80 ring-1 ring-slate-200 focus-within:ring-slate-300">
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
                            </form>

                            {/* Avatar */}
                            <Avatar className="ml-auto">
                                <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Perfil" />
                                <AvatarFallback>
                                    <User className="size-4" />
                                </AvatarFallback>
                            </Avatar>
                        </div>

                        {/* Mobile search below controls */}
                        <form onSubmit={onSearch} className="flex md:hidden">
                            <div className="flex items-center w-full rounded-full bg-slate-100/80 ring-1 ring-slate-200 focus-within:ring-slate-300">
                                <Search className="ml-3 size-4 text-slate-500" aria-hidden />
                                <Input
                                    value={q}
                                    onChange={(e) => setQ(e.target.value)}
                                    placeholder="Busca productos, categorías o marcas…"
                                    className="h-10 border-0 bg-transparent focus-visible:ring-0 text-sm placeholder:text-slate-400"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Secondary nav */}
            <div className="bg-[#2b3a8a]">
                <nav className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                    <ul className="flex items-center gap-6 overflow-x-auto py-2 text-sm text-white/90">
                        {navLinks.map((l) => (
                            <li key={l.label}>
                                <a href={l.href} className="whitespace-nowrap hover:text-white underline-offset-4 hover:underline">
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
