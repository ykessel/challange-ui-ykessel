import {getProducts} from "@/lib/data";
import {Product} from "@/types/Product";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

import {
    BannerSection,
    CategoriesSection,
    DiscountSection,
    GoToCatalogSection,
    GoToProductsSection,
    InfoSection,
    RecommendSection
} from "@/components/home/sections";
import {Footer} from "@/components/layout/Footer";
import {Header} from "@/components/layout/Header";
import {BannerCardSection} from "@/components/home/sections/banners-card-section";

// Dynamic imports for heavy components
const DynamicMostSoldSection = dynamic(() => import("@/components/home/sections/most-sold-section").then(mod => ({ default: mod.MostSoldSection })), {
    loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
});

const DynamicMostRecentSection = dynamic(() => import("@/components/home/sections/most-recent-section").then(mod => ({ default: mod.MostRecentSection })), {
    loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
});

export const metadata: Metadata = {
  title: "Botifarma - Inicio | Tu farmacia online de confianza",
  description: "Descubre Botifarma, tu farmacia online de confianza. Encuentra medicamentos, productos de cuidado personal, ofertas especiales y las mejores marcas con entrega rápida a domicilio.",
  openGraph: {
    title: "Botifarma - Inicio | Tu farmacia online de confianza",
    description: "Descubre Botifarma, tu farmacia online de confianza. Encuentra medicamentos, productos de cuidado personal, ofertas especiales y las mejores marcas.",
  },
};

export default async function Home() {
    const products = await getProducts() as Product[];
    return (
        <div>
            <Header/>
            <main className={'flex flex-col justify-center max-w-[1440px] mx-auto'}>
                <BannerSection/>
                <CategoriesSection/>
                <GoToCatalogSection/>
                <RecommendSection products={products}/>
                <BannerCardSection/>
                <DynamicMostSoldSection products={products}/>
                <InfoSection/>
                <DynamicMostRecentSection products={products}/>
                <DiscountSection/>
                <GoToProductsSection/>
            </main>
            <Footer/>
        </div>
    );
}
