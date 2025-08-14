import {getProducts} from "@/lib/data";
import {Product} from "@/types/Product";

import {
    BannerSection,
    CategoriesSection,
    DiscountSection,
    GoToCatalogSection,
    GoToProductsSection,
    InfoSection,
    MostRecentSection,
    MostSoldSection,
    RecommendSection
} from "@/components/home/sections";
import {Footer} from "@/components/layout/Footer";
import {Header} from "@/components/layout/Header";
import {BannerCardSection} from "@/components/home/sections/banners-card-section";

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
                <MostSoldSection products={products}/>
                <InfoSection/>
                <MostRecentSection products={products}/>
                <DiscountSection/>
                <GoToProductsSection/>
            </main>
            <Footer/>
        </div>
    );
}
