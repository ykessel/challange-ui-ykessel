"use client"

import Image from "next/image"
import { Carousel } from "@/components/home/carousel"

const productImages = [
    {
        src: "/images/products/30a9d05b6114b0028b05b5d729e7046c7c0e7576.png",
        alt: "Maxivit supplement"
    },
    {
        src: "/images/products/mentol.png",
        alt: "Medicine bottle"
    },
    {
        src: "/images/products/tonwas.png",
        alt: "Red medicine box"
    },
    {
        src: "/images/products/medox.png",
        alt: "Yellow medicine box"
    },
    {
        src: "/images/products/dominal.png",
        alt: "Dominal medicine"
    },
    {
        src: "/images/products/citramag.png",
        alt: "Blue medicine box"
    }
]

export function DiscountSection() {
    return (
        <section className="relative bg-background px-4 sm:px-6 lg:px-8">
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center h-[85px]">
                <div className="relative flex justify-start items-center gap-2 bg-[#F9E2BF] rounded-sm w-full h-[85px] overflow-hidden z-[0]">
                    <div className="left-0 text-left ml-8 z-[1]">
                        <h2 className="text-2xl font-bold text-accent mb-1">¡Ahorra en tu
                            Cuidado!</h2>
                        <p className="text-primary text-sm">
                            Aprovecha las ofertas que tenemos este mes.{" "}
                            <span className="underline cursor-pointer text-primary font-bold">Revisar ofertas</span>
                        </p>
                    </div>
                    <span
                        className="text-9xl font-bold bg-gradient-to-b from-[#E79F0000] to-[#E79F0066] bg-clip-text text-transparent">
                    -50%
                </span>
                </div>

                <div className="absolute right-0 flex items-end justify-end gap-1 z-[1]">
                    {productImages.map((product, index) => (
                        <Image
                            key={index}
                            src={product.src}
                            alt={product.alt}
                            width={100}
                            height={100}
                            className="w-25 h-25 object-contain flex-shrink-0"
                            sizes="100px"
                        />
                    ))}
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden ">
                {/* Promotional Text */}
                <div className="relative bg-[#F9E2BF] rounded-lg p-4 mb-4 h-[188px] overflow-hidden">
                    <div className="text-left">
                        <h2 className="text-xl font-bold text-accent mb-1">¡Ahorra en tu
                            Cuidado!</h2>
                        <p className="text-primary text-sm">
                            Aprovecha las ofertas que tenemos este mes.{" "}
                            <span className="underline cursor-pointer text-primary font-bold">Revisar ofertas</span>
                        </p>
                    </div>
                    <div className="absolute -bottom-6 right-auto left-auto text-center">
                        <span className="text-9xl font-bold bg-gradient-to-b from-[#E79F0000] to-[#E79F0066] bg-clip-text text-transparent">
                            -50%
                        </span>
                    </div>
                </div>

                {/* Product Carousel */}
                <div className="mb-4">
                    <Carousel
                        items={productImages}
                        renderItem={(product) => (
                            <div className="flex justify-center">
                                <Image
                                    src={product.src}
                                    alt={product.alt}
                                    width={80}
                                    height={80}
                                    className="w-20 h-20 object-contain"
                                    sizes="80px"
                                />
                            </div>
                        )}
                        ariaLabel="productos en oferta"
                        gapPx={16}
                    />
                </div>
            </div>
        </section>
    )
}
