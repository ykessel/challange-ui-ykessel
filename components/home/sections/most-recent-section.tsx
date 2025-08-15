"use client"

import {Product} from "@/types/Product";
import { SectionContainer, SectionTitle, BannerCard, ProductCarousel } from "@/components/home/ui";
import ProductCard from "@/components/home/product-card";

type RecentWithHeroProps = {
    products: Product[]
    title?: string
}

export function MostRecentSection({products, title = "De lo más reciente"}: RecentWithHeroProps) {
    const firstRowProducts = products.slice(0, 3)
    const secondRowProducts = products.slice(3, 8)

    return (
        <SectionContainer className="py-6 sm:py-8">
            <SectionTitle>{title}</SectionTitle>

            {/* Mobile layout: promo banner as unique card, then products carousel */}
            <div className="md:hidden space-y-6">
                {/* Promo banner as unique card */}
                <BannerCard
                    src="/images/banners/promo-banner.png"
                    alt="Promo banner"
                    height="h-[277px]"
                    priority={true}
                />
                
                {/* Products carousel */}
                <ProductCarousel
                    products={products}
                    ariaLabel="productos más recientes"
                />
            </div>

            {/* Desktop layout: 5-column grid with promo spanning 2 columns */}
            <div className="hidden md:grid md:grid-cols-5 gap-5">
                {/* First row */}
                <BannerCard
                    src="/images/banners/promo-banner.png"
                    alt="Promo banner"
                    className="md:col-span-2"
                    height="h-full"
                    priority={true}
                />
                {firstRowProducts.map((p) => (
                    <ProductCard key={p.id} product={p}/>
                ))}

                {/* Second row */}
                {secondRowProducts.map((p) => (
                    <ProductCard key={p.id} product={p}/>
                ))}
            </div>
        </SectionContainer>
    )
}
