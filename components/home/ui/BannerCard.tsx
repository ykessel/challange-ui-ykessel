import Image from "next/image"
import { cn } from "@/lib/utils"

interface BannerCardProps {
    src: string
    alt: string
    className?: string
    imageClassName?: string
    height?: string
    href?: string
    children?: React.ReactNode
    priority?: boolean
}

export function BannerCard({ 
    src, 
    alt, 
    className, 
    imageClassName = "object-cover",
    height = "h-[277px]",
    href,
    children,
    priority = false
}: BannerCardProps) {
    const CardWrapper = href ? 'a' : 'div'
    const cardProps = href ? { href } : {}

    return (
        <CardWrapper
            {...cardProps}
            className={cn(
                "relative rounded-2xl overflow-hidden",
                height,
                className
            )}
        >
            <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                fetchPriority={priority ? "high" : "auto"}
                className={imageClassName}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {children}
        </CardWrapper>
    )
}
