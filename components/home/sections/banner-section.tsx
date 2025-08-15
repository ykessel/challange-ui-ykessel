import { SectionContainer, BannerCard } from "@/components/home/ui"

export const revalidate = 300

export async function BannerSection() {
    return (
        <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                {/* Hero banner */}
                <BannerCard
                    src="/images/banners/home-banner-1.png"
                    alt="Home Banner 1"
                    className="md:col-span-2"
                    height="h-[240px] md:h-[474px]"
                    priority={true}
                />

                {/* Right stacked promos */}
                <div className="grid grid-rows-2 gap-4 sm:gap-5">
                    {/* Top promo */}
                    <BannerCard
                        src="/images/banners/home-banner-2.png"
                        alt="Madre dando vitaminas a su hijo en casa"
                        href="#"
                        height="h-[240px] md:h-[227px]"
                        className="bg-[#E79F00]"
                    />

                    {/* Bottom promo */}
                    <BannerCard
                        src="/images/banners/home-banner-3.png"
                        alt="Medicamentos y vitaminas a mejor precio"
                        href="#"
                        height="h-[240px] md:h-[227px]"
                        className="bg-white"
                    />
                </div>
            </div>
        </SectionContainer>
    )
}
