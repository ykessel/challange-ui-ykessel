import {Product} from "@/types/Product";
import {Category} from "@/types/Category";
import {BannerContent} from "@/types/Banner";

export async function getProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
        import('../constants/products.json').then((mod) => {
            const raw = mod.default as Array<{
                id: string
                title: string
                description?: string
                priceMajor: number
                priceMinor?: number
                imageUrl: string
                badge?: { text: string; color?: "yellow" | "orange" }
            }>;

            const mapped: Product[] = raw.map((p) => ({
                id: p.id,
                nombre: p.title,
                imagen: p.imageUrl,
                precio: p.priceMajor + ((p.priceMinor ?? 0) / 100),
                rating: 4,
                descripcion: p.description,
                badge: p.badge,
            }));

            return resolve(mapped);
        });
    });
}

export async function getCategories(): Promise<Category[]> {
    return new Promise((resolve) => {
        import('../constants/categories.json').then((mod) => {
            return resolve(mod.default as Category[]);
        });
    });
}

export async function getBannerContent(): Promise<BannerContent> {
    return new Promise((resolve) => {
        import('../constants/banners.json').then((mod) => {
            return resolve(mod.default as BannerContent);
        });
    });
}