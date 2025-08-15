import { SectionContainer, BannerCard } from "@/components/home/ui";

export function BannerCardSection() {
    return (
        <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                <BannerCard
                    src="/images/banners/banner-1.png"
                    alt="Banner 1"
                    height="h-[222px]"
                />
                <BannerCard
                    src="/images/banners/banner-2.png"
                    alt="Banner 2"
                    height="h-[222px]"
                />
                <BannerCard
                    src="/images/banners/banner-3.png"
                    alt="Banner 3"
                    height="h-[222px]"
                />
            </div>
        </SectionContainer>
    )
}
