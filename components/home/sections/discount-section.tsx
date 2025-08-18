import Image from "next/image"

export function DiscountSection() {
    return (
        <section className="relative flex items-center h-[85px] bg-background">
            <div className="absolute flex justify-start items-center gap-2 bg-[#F9E2BF] rounded-sm w-full h-[85px] overflow-hidden z-[0]">
                <div className="left-0 text-center md:text-left ml-8 z-[1]">
                    <h2 className="text-xl md:text-2xl font-bold text-accent mb-1">¡Ahorra en tu
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
                <Image
                    src="/images/products/30a9d05b6114b0028b05b5d729e7046c7c0e7576.png"
                    alt="Maxivit supplement"
                    width={100}
                    height={100}
                    className="w-12 h-12 md:w-25 md:h-25 object-contain flex-shrink-0"
                    sizes="(max-width: 768px) 48px, 100px"
                />
                <Image
                    src="/images/products/mentol.png"
                    alt="Medicine bottle"
                    width={100}
                    height={100}
                    className="w-12 h-12 md:w-25 md:h-25 object-contain flex-shrink-0"
                    sizes="(max-width: 768px) 48px, 100px"
                />
                <Image
                    src="/images/products/tonwas.png"
                    alt="Red medicine box"
                    width={100}
                    height={100}
                    className="w-12 h-12 md:w-25 md:h-25 object-contain flex-shrink-0"
                    sizes="(max-width: 768px) 48px, 100px"
                />
                <Image
                    src="/images/products/medox.png"
                    alt="Yellow medicine box"
                    width={100}
                    height={100}
                    className="w-12 h-12 md:w-25 md:h-25 object-contain flex-shrink-0"
                    sizes="(max-width: 768px) 48px, 100px"
                />
                <Image
                    src="/images/products/dominal.png"
                    alt="Dominal medicine"
                    width={112}
                    height={112}
                    className="w-12 h-12 md:w-28 md:h-28 object-contain flex-shrink-0"
                    sizes="(max-width: 768px) 48px, 112px"
                />

                <Image
                    src="/images/products/citramag.png"
                    alt="Blue medicine box"
                    width={100}
                    height={100}
                    className="w-12 h-12 md:w-25 md:h-25 object-contain flex-shrink-0"
                    sizes="(max-width: 768px) 48px, 100px"
                />
            </div>
        </section>
    )
}
