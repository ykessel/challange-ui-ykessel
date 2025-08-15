import {Product} from "@/types/Product";
import ProductCard from "@/components/home/product-card";

export const revalidate = 300

export function RecommendSection({products}: { products: Product[] }) {
    return (
        <section className="w-full bg-background">
            <div className="px-4 sm:px-6 lg:px-8 sm:py-8">
                <h2 className="text-slate-800 text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                    Recomendado para ti
                </h2>

                <div
                    className="grid gap-4 sm:gap-5 grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {products.map((p) => (
                        <ProductCard key={p.id} product={p}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
