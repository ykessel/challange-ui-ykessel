import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SectionContainer } from "../ui/SectionContainer"

export function GoToProductsSection() {
  return (
    <SectionContainer className="relative pb-0 sm:pb-0 lg:py-0 md:mt-16">
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-between gap-10">
        {/* Left side - Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src={'/images/bottom-img.png'}
            alt={'Shopping basket with health products'}
            width={781}
            height={475}
            className="object-contain"
            sizes="(min-width: 1024px) 781px"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex-1 max-w-lg text-left">
          <h2 className="text-5xl font-bold text-primary mb-4 leading-tight">
            Encuentra todo en un solo lugar.
          </h2>
          <p className="text-slate-600 text-lg mb-7 leading-relaxed">
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

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Top section - Text and Button */}
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4 leading-tight">
            Encuentra todo en un solo lugar.
          </h2>
          <p className="text-slate-600 text-base mb-7 leading-relaxed">
            Medicamentos, suplementos, vitaminas, analgésicos y antiinflamatorios, cuidado personal y mucho más.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-[#1f3268] text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Explorar productos
          </Button>
        </div>

        {/* Bottom section - Image aligned to bottom */}
        <div className="relative w-full">
          <Image
            src={'/images/bottom-img.png'}
            alt={'Shopping basket with health products'}
            width={400}
            height={300}
            className="object-contain w-full"
            sizes="(max-width: 1023px) 100vw"
          />
        </div>
      </div>
    </SectionContainer>
  )
}
