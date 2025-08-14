import Image from "next/image";
import { notFound } from "next/navigation";
import { getProducts } from "@/lib/data";
import type { Product } from "@/types/Product";
import { PriceCard } from "@/components/home/price-card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const revalidate = 300;

type PageProps = {
  params: { id: string };
};

export default async function ProductDetailPage({ params }: PageProps) {
  const products = (await getProducts()) as Product[];
  const product = products.find((p) => p.id === params.id);
  if (!product) return notFound();

  const amount = product.precio;

  return (
    <div>
      <Header />
      <main className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-4 flex items-center justify-center">
            <Image
              src={product.imagen}
              alt={`Imagen del producto: ${product.nombre}`}
              width={560}
              height={420}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">{product.nombre}</h1>
            <div className="mt-3">
              <PriceCard amount={amount} />
            </div>
            <p className="mt-4 text-slate-700">{product.descripcion}</p>

            <div className="mt-6 flex gap-3">
              <button className="rounded-md bg-[#243b78] text-white px-5 py-2 text-sm font-medium">Agregar al carrito</button>
              <button className="rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700">Favoritos</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


