'use client'

import { useState, useEffect } from 'react';
import { fetchBannersClient } from '@/lib/api';
import { BannerContent } from '@/types/Banner';

export function BannerFetchExample() {
    const [banners, setBanners] = useState<BannerContent | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadBanners = async () => {
            try {
                setLoading(true);
                const data = await fetchBannersClient();
                setBanners(data);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch banners');
            } finally {
                setLoading(false);
            }
        };

        loadBanners();
    }, []);

    if (loading) {
        return <div className="p-4">Loading banners...</div>;
    }

    if (error) {
        return <div className="p-4 text-red-500">Error: {error}</div>;
    }

    if (!banners) {
        return <div className="p-4">No banner data available</div>;
    }

    return (
        <div className="p-4 space-y-4">
            <h3 className="text-lg font-semibold">Banner Data (Client-side Fetch)</h3>
            
            {banners.title && (
                <div>
                    <h4 className="font-medium">Title:</h4>
                    <p className="text-sm text-gray-600">{banners.title}</p>
                </div>
            )}

            {banners.homeBanners && banners.homeBanners.length > 0 && (
                <div>
                    <h4 className="font-medium">Home Banners:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                        {banners.homeBanners.map((banner) => (
                            <li key={banner.id}>
                                <strong>{banner.id}:</strong> {banner.src} (Alt: {banner.alt})
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {banners.bannerCards && banners.bannerCards.length > 0 && (
                <div>
                    <h4 className="font-medium">Banner Cards:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                        {banners.bannerCards.map((banner) => (
                            <li key={banner.id}>
                                <strong>{banner.id}:</strong> {banner.src} (Alt: {banner.alt})
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {banners.promoBanner && (
                <div>
                    <h4 className="font-medium">Promo Banner:</h4>
                    <p className="text-sm text-gray-600">
                        <strong>{banners.promoBanner.id}:</strong> {banners.promoBanner.src} (Alt: {banners.promoBanner.alt})
                    </p>
                </div>
            )}
        </div>
    );
}
