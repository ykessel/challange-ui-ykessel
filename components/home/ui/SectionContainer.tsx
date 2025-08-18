import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionContainerProps {
    children: ReactNode
    className?: string
    containerClassName?: string
    background?: "light" | "dark" | "none"
}

const backgroundClasses = {
    light: "bg-background",
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
            "py-6 sm:py-8 lg:py-10",
            backgroundClasses[background],
            className
        )}>
            <div className={cn(
                "mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]",
                containerClassName
            )}>
                {children}
            </div>
        </section>
    )
}
