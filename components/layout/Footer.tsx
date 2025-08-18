import type React from "react"
import {Mail, Phone, AtSign} from "lucide-react"
import {cn} from "@/lib/utils"
import { SectionContainer } from "../home/ui/SectionContainer"

export function Footer({className = ""}: { className?: string }) {
    return (
        <SectionContainer className={cn("bg-[#2b3a8a] text-white", className)}>
            {/* Desktop Layout */}
            <div className="hidden lg:flex justify-between items-start max-w-[1440px] mx-auto">
                {/* Left: Title, Description and Contact */}
                <div className="flex-1 pr-10">
                    <h2 className="text-white font-extrabold text-2xl leading-snug mb-4">
                    {"Subscríbete aquí para conocer"}<br/>{"más de nuestras ofertas"}
                    </h2>
                    <p className="text-white/80 text-base max-w-prose mb-8">
                    {"Regístrese ahora para recibir las últimas actualizaciones sobre "}<br/>{"promociones y cupones. ¡No te preocupes, no enviamos spam!"}
                    </p>

                    {/* Contact Information */}
                    <div className="flex gap-4 pt-8">
                        <div className="flex items-start gap-3">
                            <Phone className="mt-0.5 size-5 text-[#f7b500]"/>
                            <div className="text-sm leading-relaxed">
                                <div className="text-white/80">Lunes a viernes: 08 a. m. a 9 p. m.</div>
                                <div className="font-semibold text-lg">0 800 300-353</div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <AtSign className="mt-0.5 size-5 text-[#f7b500]"/>
                            <div className="text-sm leading-relaxed">
                                <div className="text-white/80">¿Necesitas ayuda con tu pedido?</div>
                                <div className="font-semibold break-all">info@example.com</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="flex flex-col items-end gap-6">
                    {/* Email Form */}
                    <div className="flex w-full max-w-[400px] items-center">
                        <div className="flex w-full overflow-hidden rounded-full bg-white/95 shadow-sm ring-1 ring-white/20">
                            <div className="pl-4 pr-2 grid place-items-center text-slate-500">
                                <Mail className="size-4" aria-hidden/>
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                className="flex-1 bg-transparent py-3 text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none"
                                aria-label="Correo electrónico"
                                required
                            />
                            <button
                                type="submit"
                                className="rounded-full bg-[#f7b500] px-5 py-2.5 text-sm font-semibold text-white hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#f7b500] focus-visible:ring-offset-[#2b3a8a]"
                            >
                                Enviar
                            </button>
                        </div>
                    </div>

                    {/* Terms */}
                    <p className="text-xs text-white/80 max-w-[400px] text-right">
                        Al suscribirte aceptas nuestros{" "}
                        <a href="#" className="underline underline-offset-2 decoration-[#f7b500] text-[#f7b500] hover:text-white">
                            Términos y condiciones
                        </a>{" "}
                        y{" "}
                        <a href="#" className="underline underline-offset-2 decoration-[#f7b500] text-[#f7b500] hover:text-white">
                            Política de privacidad y cookies
                        </a>
                        .
                    </p>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden max-w-[1440px] mx-auto">
                {/* Top: Subscription Form */}
                <div className="text-left mb-8">
                    <h2 className="text-white font-bold text-xl leading-snug mb-4 text-left">
{"Subscríbete aquí para conocer"}<br/>{"más de nuestras ofertas"}
                    </h2>
                    <p className="text-white/80 text-sm mb-6 text-left">
{"Regístrese ahora para recibir las últimas actualizaciones sobre  promociones y cupones. ¡No te preocupes, no enviamos spam!"}
                    </p>

                    <div className="flex w-full max-w-[520px] items-center mx-auto mb-4">
                        <div className="flex w-full overflow-hidden rounded-full bg-white/95 shadow-sm ring-1 ring-white/20">
                            <div className="pl-4 pr-2 grid place-items-center text-slate-500">
                                <Mail className="size-4" aria-hidden/>
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                className="flex-1 bg-transparent py-3 text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none"
                                aria-label="Correo electrónico"
                                required
                            />
                            <button
                                type="submit"
                                className="rounded-full bg-[#f7b500] px-5 py-2.5 text-sm font-semibold text-white hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#f7b500] focus-visible:ring-offset-[#2b3a8a]"
                            >
                                Enviar
                            </button>
                        </div>
                    </div>

                    <p className="text-xs text-white/80 max-w-[520px] mx-auto">
                        Al suscribirte aceptas nuestros{" "}
                        <a href="#" className="underline underline-offset-2 decoration-[#f7b500] text-[#f7b500] hover:text-white">
                            Términos y condiciones
                        </a>{" "}
                        y{" "}
                        <a href="#" className="underline underline-offset-2 decoration-[#f7b500] text-[#f7b500] hover:text-white">
                            Política de privacidad y cookies
                        </a>
                        .
                    </p>
                </div>

                {/* Bottom: Contact Information */}
                <div className="text-center">
                    <div className="flex flex-col gap-6 items-start">
                        <div className="flex items-center gap-3 justify-center">
                            <Phone className="mt-0.5 size-5 text-[#f7b500]"/>
                            <div className="text-sm leading-relaxed text-left">
                                <div className="text-white/80">Lunes a viernes: 08 a. m. a 9 p. m.</div>
                                <div className="font-semibold text-lg">0 800 300-353</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 justify-center">
                            <AtSign className="mt-0.5 size-5 text-[#f7b500]"/>
                            <div className="text-sm leading-relaxed text-left">
                                <div className="text-white/80">¿Necesitas ayuda con tu pedido?</div>
                                <div className="font-semibold break-all">info@example.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}
