"use client"

import type React from "react"
import Image from "next/image"

import {CreditCard, MapPinned, Truck} from "lucide-react"
import {cn} from "@/lib/utils"

type InfoItem = {
    title: string
    description: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

type InfoSectionProps = {
    className?: string
    headline?: string
    items?: InfoItem[]
}

const defaultItems: InfoItem[] = [
    {
        title: "Paga desde donde estés",
        description: "Paga con tarjeta de débito o crédito desde cualquier parte del mundo donde te encuentres.",
        icon: CreditCard,
    },
    {
        title: "Envío gratis desde $50 USD",
        description: "Con solo estar registrado, tienes envíos gratis para un grupo de productos.",
        icon: Truck,
    },
    {
        title: "Entregas en todo el país",
        description: "Llevamos tu pedido seguro y con garantía hasta la puerta de tu casa.",
        icon: MapPinned,
    },
]

export function InfoSection({
                                className,
                                headline = "Lo que Necesitas,\nCuando lo Necesitas.",
                                items = defaultItems,
                            }: InfoSectionProps) {
    return (

                <section className={cn("relative bg-[#2b3a8a] text-white w-full", className)}>
               <div aria-hidden className="pointer-events-none absolute inset-0 overflow-visible z-10">
                   {/* Top left capsule */}
                   <div className="absolute left-20 -top-5 rotate-272 blur-[2px]">
                       <Image
                           src="/images/pill.png"
                           alt=""
                           width={44}
                           height={44}
                       />
                   </div>
                   
                   {/* Top right capsule */}
                   <div className="absolute right-8 -top-4 blur-[1px]">
                       <Image
                           src="/images/pill.png"
                           alt=""
                           width={44}
                           height={44}
                       />
                   </div>
                   
                   {/* Bottom center capsule */}
                   <div className="absolute left-1/6 -bottom-8 blur-[1px]">
                       <Image
                           src="/images/pill.png"
                           alt=""
                           width={74}
                           height={74}
                       />
                   </div>
                   
               </div>
        <div className="relative z-0">

            <div className="relative w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid gap-6 lg:grid-cols-12">
                        {/* Headline */}
                        <div className="lg:col-span-5 flex items-center mb-6 lg:mb-0">
                            <h2 className="font-extrabold text-2xl sm:text-3xl leading-tight whitespace-pre-line">{headline}</h2>
                        </div>

                        {/* Cards */}
                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {items.map(({title, description, icon: Icon}, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-2xl bg-white text-slate-800 p-4 sm:p-5 shadow-sm"
                                    role="article"
                                    aria-label={title}
                                >
                                    <div
                                        className="mb-3 inline-grid place-items-center rounded-full bg-[#f7b500] text-white size-8">
                                        <Icon className="size-4"/>
                                    </div>
                                    <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                                    <p className="mt-1 text-[12px] leading-snug text-slate-600">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
