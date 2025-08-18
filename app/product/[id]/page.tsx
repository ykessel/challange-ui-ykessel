import Image from "next/image";
import { notFound } from "next/navigation";
import { getProducts } from "@/lib/data";
import type { Product } from "@/types/Product";
import type { Metadata } from "next";
import { PriceCard } from "@/components/home/price-card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const revalidate = 300;

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const products = (await getProducts()) as Product[];
  const product = products.find((p) => p.id === resolvedParams.id);
  
  if (!product) {
    return {
      title: "Producto no encontrado | Botifarma",
      description: "El producto que buscas no está disponible en Botifarma.",
    };
  }

  const description = product.descripcion 
    ? `${product.descripcion}. Compra ${product.nombre} en Botifarma con entrega rápida y garantía de calidad.`
    : `Compra ${product.nombre} en Botifarma. Encuentra los mejores productos de farmacia con entrega rápida y garantía de calidad.`;

  return {
    title: `${product.nombre} | Botifarma`,
    description,
    openGraph: {
      title: `${product.nombre} | Botifarma`,
      description,
      images: [
        {
          url: product.imagen,
          alt: `Imagen del producto: ${product.nombre}`,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const products = (await getProducts()) as Product[];
  const product = products.find((p) => p.id === resolvedParams.id);
  if (!product) return notFound();

  const amount = product.precio;

  return (
    <div className="bg-background">
      <Header />
      <main className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-4 flex items-center justify-center">
            <Image
              src={product.imagen}
              alt={`Imagen del producto: ${product.nombre}`}
              width={400}
              height={400}
              className="w-full h-auto object-contain"
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">{product.nombre}</h1>
            <div className="mt-3">
              <PriceCard amount={amount} />
            </div>
            <p className="mt-4 text-slate-700">{product.descripcion}</p>

            <div className="mt-6 flex gap-3">
              <button 
                className="rounded-md bg-[#243b78] text-white px-5 py-2 text-sm font-medium"
                aria-label="Agregar al carrito"
              >
                Agregar al carrito
              </button>
              <button 
                className="rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700"
                aria-label="Agregar a favoritos"
              >
                Favoritos
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


