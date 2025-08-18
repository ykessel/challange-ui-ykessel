import Image from "next/image"
import {cn} from "@/lib/utils";
import { fetchBanners } from "@/lib/api";

type PromoCardProps = {
    className?: string
    imageSrc?: string
    priority?: boolean
}

export async function PromoCard({
                              className = "",
                              imageSrc,
                              priority = false
                          }: PromoCardProps) {
    // If imageSrc is provided, use it; otherwise fetch from API
    let finalImageSrc = imageSrc;
    let alt = "Promo banner";
    let ariaLabel = "¡Salud al Mejor Precio!";
    let href = "#";

    if (!imageSrc) {
        try {
            const bannerData = await fetchBanners();
            if (bannerData.promoBanner) {
                finalImageSrc = bannerData.promoBanner.src;
                alt = bannerData.promoBanner.alt;
                ariaLabel = bannerData.promoBanner.ariaLabel || ariaLabel;
                href = bannerData.promoBanner.href || href;
            } else {
                finalImageSrc = "/images/banners/promo-banner.png";
            }
        } catch (error) {
            console.error('Error fetching promo banner:', error);
            finalImageSrc = "/images/banners/promo-banner.png";
        }
    }

    return (
        <div
            className={cn('relative overflow-hidden rounded-2xl min-h-[200px] sm:min-h-[230px]', className)}>
            <a
                href={href}
                className="group relative overflow-hidden rounded-2xl h-full w-full"
                aria-label={ariaLabel}
            >
                <Image
                    src={finalImageSrc}
                    alt={alt}
                    className="object-cover"
                    fill
                    priority={priority}
                    fetchPriority={priority ? "high" : "auto"}
                />
            </a>
        </div>
    )
}
