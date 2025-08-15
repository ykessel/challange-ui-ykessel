import Image from "next/image"
import {cn} from "@/lib/utils";

type PromoCardProps = {
    className?: string
    imageSrc?: string
    priority?: boolean
}

export function PromoCard({
                              className = "",
                              imageSrc = "/images/banners/promo-banner.png",
                              priority = false
                          }: PromoCardProps) {
    return (
        <div
            className={cn('relative overflow-hidden rounded-2xl min-h-[200px] sm:min-h-[230px]', className)}>
            <a
                href="#"
                className="group relative overflow-hidden rounded-2xl h-full w-full"
                aria-label="¡Salud al Mejor Precio!"
            >
                <Image
                    src={imageSrc}
                    alt="Promo banner"
                    className="object-cover"
                    fill
                    priority={priority}
                    fetchPriority={priority ? "high" : "auto"}
                />
            </a>
        </div>
    )
}
