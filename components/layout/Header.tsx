import type React from "react"
import { User } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { LocationSelector } from "./client/LocationSelector"
import { CategorySearchCombined } from "./client/CategorySearchCombined"
import { MobileSearch } from "./client/MobileSearch"
import { MobileNavigation } from "./client/MobileNavigation"
import { MobileLocationSelector } from "./client/MobileLocationSelector"
import { fetchCategories } from "@/lib/api"

const navLinks = [
    { href: "#", label: "Catálogo" },
    { href: "#", label: "Quiénes somos" },
    { href: "#", label: "Entregas" },
    { href: "#", label: "Pagos" },
    { href: "#", label: "Preguntas frecuentes" },
]

const havanaMunicipalities = [
    "Plaza de la Revolución",
    "Centro Habana", 
    "La Habana Vieja",
    "La Habana del Este",
    "Regla",
    "Guanabacoa",
    "San Miguel del Padrón",
    "Diez de Octubre",
    "Cerro",
    "Marianao",
    "La Lisa",
    "Boyeros",
    "Arroyo Naranjo",
    "Cotorro",
    "Playa"
]

export async function Header() {
    const categories = await fetchCategories();
    return (
        <header className="w-full bg-white shadow-sm">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                {/* Desktop Layout */}
                <div className="hidden md:flex items-center !gap-[8rem] sm:gap-4 py-3">
                    <Link href="/" className="shrink-0 text-xl sm:text-2xl font-extrabold text-slate-900">
                        {"Botiforma"}
                    </Link>

                    <div className="flex-1 flex flex-col gap-2 sm:gap-3 max-w-[1000px]">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <LocationSelector 
                                municipalities={havanaMunicipalities}
                                defaultLocation="Plaza de la Revolución"
                            />

                            <CategorySearchCombined 
                                categories={categories}
                                defaultCategory="Categorías"
                            />
                        </div>
                    </div>

                    <Avatar className="ml-auto">
                        <AvatarFallback>
                            <User className="size-4" />
                        </AvatarFallback>
                    </Avatar>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden py-3">
                    <div className="flex items-center justify-between mb-3">
                        {/* Left side: Hamburger + Name */}
                        <div className="flex items-center gap-3">
                            <MobileNavigation navLinks={navLinks} />
                            <span className="font-bold text-slate-700">Mi Nombre</span>
                        </div>

                        {/* Right side: Location + Avatar */}
                        <div className="flex items-center gap-3">
                            <MobileLocationSelector 
                                municipalities={havanaMunicipalities}
                                defaultLocation="Plaza de la Revolución"
                            />
                            <Avatar className="size-8">
                                <AvatarFallback>
                                    <User className="size-4" />
                                </AvatarFallback>
                            </Avatar>
                        </div>
                    </div>

                    {/* Mobile search */}
                    <MobileSearch />
                </div>
            </div>

            <div className="bg-[#2b3a8a] hidden md:block">
                <nav className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                    <ul className="flex items-center gap-6 overflow-x-auto py-2 text-sm text-white/90">
                        {navLinks.map((l) => (
                            <li key={l.label}>
                                <a href={l.href}
                                   className="whitespace-nowrap hover:text-white underline-offset-4 hover:underline">
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
