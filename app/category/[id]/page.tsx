import { notFound } from "next/navigation";
import { getCategories, getProducts } from "@/lib/data";
import type { Category } from "@/types/Category";
import type { Product } from "@/types/Product";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ProductCard from "@/components/home/product-card";

export const revalidate = 300;

type PageProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const categories = await getCategories() as Category[];
  const category = categories.find((c) => c.id === params.id);
  
  if (!category) {
    return {
      title: "Categoría no encontrada | Botifarma",
      description: "La categoría que buscas no está disponible en Botifarma.",
    };
  }

  return {
    title: `${category.label} | Botifarma`,
    description: `Encuentra los mejores productos de ${category.label.toLowerCase()} en Botifarma. Calidad garantizada y entrega rápida.`,
    openGraph: {
      title: `${category.label} | Botifarma`,
      description: `Encuentra los mejores productos de ${category.label.toLowerCase()} en Botifarma.`,
    },
  };
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const [categories, products] = await Promise.all([
    getCategories() as Promise<Category[]>,
    getProducts() as Promise<Product[]>,
  ]);

  const category = categories.find((c) => c.id === params.id);
  if (!category) return notFound();

  // Filtrado por categoria si existe, sino heurística por nombre/descripcion
  const related = products.filter((p) => {
    if (p.categoria) return p.categoria === category.id;
    const nombre = p.nombre?.toLowerCase() ?? "";
    const descripcion = p.descripcion?.toLowerCase() ?? "";
    const needle = category.id.toLowerCase();
    return nombre.includes(needle) || descripcion.includes(needle);
  });

  return (
    <div>
      <Header />
      <main className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h1 className="text-2xl font-bold text-slate-800">{category.label}</h1>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
          {related.length === 0 && (
            <p className="col-span-full text-slate-600">No hay productos para esta categoría.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}


