'use client'

import { useState, useEffect } from "react"
import { ChevronDown, Grid2x2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Category } from "@/types/Category"
import { fetchCategoriesClient } from "@/lib/api"

interface CategorySearchCombinedClientProps {
    defaultCategory?: string
}

export function CategorySearchCombinedClient({ defaultCategory = "Categorías" }: CategorySearchCombinedClientProps) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [category, setCategory] = useState(defaultCategory);
    const [q, setQ] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                setLoading(true);
                const data = await fetchCategoriesClient();
                setCategories(data);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch categories');
                // Fallback categories
                setCategories([
                    { id: "vitaminas", label: "Vitaminas", icon: "Pill" },
                    { id: "analgesicos", label: "Analgésicos", icon: "Bone" },
                    { id: "antialergicos", label: "Antialérgicos", icon: "HeartPulse" }
                ]);
            } finally {
                setLoading(false);
            }
        };

        loadCategories();
    }, []);

    function onSearch(e: React.FormEvent) {
        e.preventDefault()
        // no-op; wire to your search endpoint
    }

    if (loading) {
        return (
            <div className="flex-1 hidden md:flex">
                <div className="flex items-center w-full rounded-lg bg-slate-100/80 ring-1 ring-slate-200 h-10">
                    <div className="h-10 px-4 bg-slate-300 animate-pulse rounded-none border-r border-white/20 w-32" />
                    <div className="flex-1 h-10 bg-slate-200 animate-pulse" />
                </div>
            </div>
        );
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
                        {error && (
                            <DropdownMenuItem disabled className="text-red-500 text-xs">
                                Error: {error}
                            </DropdownMenuItem>
                        )}
                        {categories.map((c) => (
                            <DropdownMenuItem key={c.id} onClick={() => setCategory(c.label)}>
                                {c.label}
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
