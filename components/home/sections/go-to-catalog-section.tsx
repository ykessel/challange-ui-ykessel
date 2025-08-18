import Image from "next/image"

export function GoToCatalogSection() {
    return (
        <section className="relative bg-background px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-xl overflow-hidden bg-[#F9E2BF]">
                {/* Background image: desktop */}
                <Image
                    src="/images/catalog.png"
                    alt=""
                    aria-hidden
                    width={400}
                    height={120}
                    priority
                    className="hidden md:block pointer-events-none select-none absolute inset-y-0 right-0 h-full w-auto object-cover"
                    sizes="(min-width: 768px) 400px"
                />
                {/* Background image: mobile */}
                <Image
                    src="/images/catalog-mobil.png"
                    alt=""
                    aria-hidden
                    width={300}
                    height={160}
                    priority
                    className="md:hidden pointer-events-none select-none absolute inset-y-0 right-0 h-full w-auto object-contain"
                    sizes="(max-width: 767px) 300px"
                />

                {/* Text content */}
                <div className="relative z-[2] p-4 md:pl-6 md:pr-4 flex items-start md:items-center min-h-[130px] md:min-h-[85px]">
                    <div>
                        <h2 className="text-[20px] leading-tight md:text-2xl font-extrabold text-[#E79F00] mb-1 max-w-[271px] md:max-w-full">
                            Tu farmacia online de confianza.
                        </h2>
                        <p className="text-[13px] md:text-sm text-slate-700 max-w-[246px] md:max-w-full">
                            Amplio catálogo de medicamentos y productos para tu bienestar.{' '}
                            <span className="underline cursor-pointer font-semibold text-[#243b78]">Explora nuestro catálogo</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
