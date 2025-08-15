"use client"

import Link from "next/link"
import type {LucideIcon} from "lucide-react"
import {cn} from "@/lib/utils"

type CategoryCardProps = {
    id: string
    label: string
    Icon: LucideIcon
    selected?: boolean
    onSelect?: (id: string) => void
    className?: string
    href?: string
}

export function CategoryCard({id, label, Icon, selected = false, onSelect, className, href}: CategoryCardProps) {
    return (
        <button
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onSelect?.(id)}
            className={cn(
                "relative h-[159px] w-[137px] rounded-xl transition-colors",
                "border text-center flex flex-col items-center justify-center gap-2",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                selected ? "bg-white border-transparent" : "bg-secondary border-transparent hover:bg-[#e6ebf5]",
                className,
            )}
        >
            {/* top-right accent when selected */}
            {selected && (
                <span aria-hidden
                      className="absolute right-[-0.5px] top-[-0.5px] h-8 w-8 rounded-bl-[45px] rounded-tr-[calc(var(--radius)_+_10px)] bg-accent/60">
                   <span aria-hidden className="absolute bg-accent right-0 top-0 h-6.5 w-6.5 rounded-bl-[45px] rounded-tr-[calc(var(--radius)_+_10px)]"/>
                </span>
            )}

            <Icon className={cn("size-7", selected ? "text-accent" : "text-primary")}/>
            {href ? (
                <Link
                    href={href}
                    className={cn(
                        "text-[12px] leading-tight max-w-[120px] hover:underline",
                        selected ? "text-accent font-medium" : "text-primary",
                    )}
                >
                    {label}
                </Link>
            ) : (
                <span
                    className={cn(
                        "text-[12px] leading-tight max-w-[120px]",
                        selected ? "text-accent font-medium" : "text-primary",
                    )}
                >
                    {label}
                </span>
            )}
        </button>
    )
}
