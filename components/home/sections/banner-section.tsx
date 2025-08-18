import { SectionContainer, BannerCard } from "@/components/home/ui";
import { fetchBanners } from "@/lib/api";

export const revalidate = 300

export async function BannerSection() {
    const bannerData = await fetchBanners();
    const homeBanners = bannerData.homeBanners || [];

    const [heroBanner, ...sidebanners] = homeBanners;

    return (
        <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                {/* Hero banner */}
                {heroBanner && (
                    <BannerCard
                        src={heroBanner.src}
                        alt={heroBanner.alt}
                        className={heroBanner.className}
                        height={heroBanner.height}
                        priority={heroBanner.priority}
                        href={heroBanner.href}
                    />
                )}

                {/* Right stacked promos */}
                {sidebanners.length > 0 && (
                    <div className="grid grid-rows-2 gap-4 sm:gap-5">
                        {sidebanners.map((banner) => (
                            <BannerCard
                                key={banner.id}
                                src={banner.src}
                                alt={banner.alt}
                                href={banner.href}
                                height={banner.height}
                                className={banner.className}
                            />
                        ))}
                    </div>
                )}
            </div>
        </SectionContainer>
    )
}
