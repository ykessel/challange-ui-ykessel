import { SectionContainer, BannerCard } from "@/components/home/ui";
import { fetchBanners } from "@/lib/api";

export async function BannerCardSection() {
    const bannerData = await fetchBanners();
    const bannerCards = bannerData.bannerCards || [];

    // Fallback to hardcoded data if no banners found
    if (bannerCards.length === 0) {
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

    return (
        <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                {bannerCards.map((banner) => (
                    <BannerCard
                        key={banner.id}
                        src={banner.src}
                        alt={banner.alt}
                        height={banner.height}
                        href={banner.href}
                        className={banner.className}
                    />
                ))}
            </div>
        </SectionContainer>
    )
}
