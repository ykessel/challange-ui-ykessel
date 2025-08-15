import { cn } from "@/lib/utils"

interface SectionTitleProps {
    children: React.ReactNode
    className?: string
}

export function SectionTitle({ children, className }: SectionTitleProps) {
    return (
        <h2 className={cn(
            "text-slate-800 text-base sm:text-lg font-semibold mb-4 sm:mb-6",
            className
        )}>
            {children}
        </h2>
    )
}
