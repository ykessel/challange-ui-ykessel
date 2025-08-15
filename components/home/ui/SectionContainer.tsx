import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionContainerProps {
    children: ReactNode
    className?: string
    containerClassName?: string
    background?: "light" | "dark" | "none"
}

const backgroundClasses = {
    light: "bg-[#eaf0fb]",
    dark: "bg-[#2b3a8a]",
    none: ""
}

export function SectionContainer({ 
    children, 
    className, 
    containerClassName,
    background = "light" 
}: SectionContainerProps) {
    return (
        <section className={cn(
            "py-4 sm:py-6",
            backgroundClasses[background],
            className
        )}>
            <div className={cn(
                "mx-auto px-4 sm:px-6 lg:px-8",
                containerClassName
            )}>
                {children}
            </div>
        </section>
    )
}
