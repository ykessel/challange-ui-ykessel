import { Button } from "@/components/ui/button"
import Image from "next/image"

export function GoToProductsSection() {
  return (
      <section className="relative">
        <div className="mx-auto px-4 pt-14 pb-10 md:pb-0">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 flex justify-center lg:justify-start relative">
            <Image
              src={'/images/bottom-img.png'}
              alt={'Bottom image'}
              width={400}
              height={120}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>

            {/* Right side - Content */}
            <div className="flex-1 max-w-lg text-center lg:text-left mb-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
                Encuentra todo en un solo lugar.
              </h2>
              <p className="text-slate-600 text-base lg:text-lg mb-7 leading-relaxed">
                Medicamentos, suplementos, vitaminas, analgésicos y antiinflamatorios, cuidado personal y mucho más.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-[#1f3268] text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Explorar productos
              </Button>
            </div>
          </div>
        </div>
    </section>
  )
}
