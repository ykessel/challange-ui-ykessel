"use client"

import { Product } from "@/types/Product"
import { SectionContainer, ProductCarousel } from "@/components/home/ui"

type CarouselProps = {
    products: Product[]
    title?: string
    className?: string
}

export function MostSoldSection({ products, title = "Lo más vendido", className }: CarouselProps) {
    return (
        <SectionContainer className={className}>
            <ProductCarousel
                products={products}
                title={title}
                ariaLabel="productos más vendidos"
            />
        </SectionContainer>
    )
}
