"use client"

import { Product } from "@/types/Product"
import { Carousel } from "@/components/home/carousel"
import ProductCard from "@/components/home/product-card"

interface ProductCarouselProps {
    products: Product[]
    title?: string
    ariaLabel?: string
    className?: string
}

export function ProductCarousel({ 
    products, 
    title, 
    ariaLabel = "productos",
    className 
}: ProductCarouselProps) {
    const productsForCarousel = [...products] // Create a copy to avoid read-only issues

    return (
        <Carousel
            items={productsForCarousel}
            renderItem={(product) => <ProductCard product={product} />}
            title={title}
            ariaLabel={ariaLabel}
            className={className}
        />
    )
}
