"use client"

import type React from "react"

import {useState} from "react"
import {Mail, Phone, AtSign} from "lucide-react"
import {cn} from "@/lib/utils"

export function Footer({className = ""}: { className?: string }) {
    const [email, setEmail] = useState("")

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        if (ok) setEmail("")
    }

    return (
        <footer className={cn("bg-[#2b3a8a] text-white", className)}>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Left: copy and contact */}
                    <div>
                        <h2 className="text-white font-extrabold text-xl sm:text-2xl leading-snug">
                            {"Suscríbete aquí para conocer"} <br className="hidden sm:block"/>
                            {"más de nuestras ofertas"}
                        </h2>
                        <p className="mt-2 text-white/80 text-sm max-w-prose">
                            Regístrate ahora para recibir las últimas actualizaciones sobre promociones y cupones.{" "}
                            {"No te preocupes, no enviamos spam!"}
                        </p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <div className="flex items-start gap-3">
                                <Phone className="mt-0.5 size-5 text-[#f7b500]"/>
                                <div className="text-sm leading-relaxed">
                                    <div className="text-white/80">Lunes a viernes: 08 a. m. a 9 p. m.</div>
                                    <div className="font-semibold">0 800 300-353</div>
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

                    {/* Right: newsletter form */}
                    <div className="flex flex-col justify-center">
                        <form onSubmit={onSubmit} className="flex w-full max-w-[520px] items-center">
                            <div
                                className="flex w-full overflow-hidden rounded-full bg-white/95 shadow-sm ring-1 ring-white/20">
                                <div className="pl-4 pr-2 grid place-items-center text-slate-500">
                                    <Mail className="size-4" aria-hidden/>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                        </form>

                        <p className="mt-3 text-xs text-white/80 max-w-[520px]">
                            Al suscribirte aceptas nuestros{" "}
                            <a href="#" className="underline underline-offset-2 decoration-white/60 hover:text-white">
                                Términos y condiciones
                            </a>{" "}
                            y{" "}
                            <a href="#" className="underline underline-offset-2 decoration-white/60 hover:text-white">
                                Política de privacidad y cookies
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
