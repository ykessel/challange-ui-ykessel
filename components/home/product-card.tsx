"use client"
import Image from "next/image"
import Link from "next/link"
import {useMemo, useState, useCallback} from "react"
import {Card, CardContent} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Heart, Minus, Plus, ShoppingBasket, Star} from 'lucide-react'
import {cn} from "@/lib/utils"
import {Product} from "@/types/Product";
import {PriceCard} from "@/components/home/price-card";

export default function ProductCard({product}: { product: Product }) {
    const [fav, setFav] = useState(false)
    const [qty, setQty] = useState(2)
    const [rating, setRating] = useState(product.rating)
    const [addedPulse, setAddedPulse] = useState(false)

    const stars = useMemo(() => Array.from({length: 5}, (_, i) => i + 1), [])

    const addToCart = useCallback(() => {
        setAddedPulse(true)
        setTimeout(() => setAddedPulse(false), 700)
    }, [])

    const handleFavToggle = useCallback(() => {
        setFav((v) => !v)
    }, [])

    const handleQtyDecrease = useCallback(() => {
        setQty((q) => Math.max(0, q - 1))
    }, [])

    const handleQtyIncrease = useCallback(() => {
        setQty((q) => Math.min(99, q + 1))
    }, [])

    const handleRatingClick = useCallback((s: number) => {
        setRating(s)
    }, [])

    const amount = product.precio

    return (
        <Card className="rounded-[15px] border-0 overflow-hidden bg-white py-0 shadow-none">
            {/* Image area */}
            <div className="relative">
                {/* 'Nuevo' chip with notch */}
                <div className="absolute left-0 top-0">
                    <div
                        className="relative bg-accent text-white text-[13px] font-semibold leading-none px-3 py-2 rounded-chip">
                        {product.badge?.text ?? ""}
                    </div>
                </div>

                {/* Favorite button */}
                <button
                    aria-label={fav ? "Quitar de favoritos" : "Agregar a favoritos"}
                    aria-pressed={fav}
                    onClick={handleFavToggle}
                    className={cn(
                        "absolute right-3 top-3 grid place-items-center size-10 rounded-full border",
                        fav ? "" : "border-slate-200 bg-white/80 backdrop-blur"
                    )}
                >
                    <Heart
                        className={cn(
                            "size-5",
                            fav ? "text-accent fill-accent" : "text-slate-600"
                        )}
                    />
                </button>

                <Link href={`/product/${product.id}`} aria-label={`Ver detalles de ${product.nombre}`}>
                    <Image
                        src={product.imagen}
                        alt={`Imagen del producto: ${product.nombre}`}
                        width={250}
                        height={250}
                        className="w-full h-[200px] object-contain bg-white"
                        priority
                        fetchPriority="high"
                        sizes="(max-width: 768px) 50vw, 250px"
                    />
                </Link>
            </div>

            {/* Details area */}
            <CardContent className="p-0">
                <div className="bg-[#f4f6fb]">
                    <div className="px-5 pt-1">
                        {/* Price */}
                        <PriceCard amount={amount}/>

                        {/* Title */}
                        <h3 className="mt-1 text-sm text-slate-700">
                            <Link href={`/product/${product.id}`} className="hover:underline">
                                {product.nombre}
                            </Link>
                        </h3>

                        {/* Rating */}
                        <div className="mt-6 flex items-center gap-1.5">
                            {stars.map((s) => (
                                <button
                                    key={s}
                                    className="p-0.5"
                                    aria-label={`Calificación ${s} ${s === 1 ? "estrella" : "estrellas"}`}
                                    onClick={() => handleRatingClick(s)}
                                >
                                    <Star
                                        className={cn(
                                            "size-4",
                                            s <= rating
                                                ? "text-accent fill-accent"
                                                : "text-slate-300"
                                        )}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Footer controls */}
                    <div className="px-5 pt-2 pb-4 flex items-center gap-3">
                        {/* Quantity stepper */}
                        <div className="flex items-center rounded-md bg-white">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-9 w-9 rounded-xl text-slate-600"
                                onClick={handleQtyDecrease}
                                aria-label="Disminuir cantidad"
                            >
                                <Minus className="size-4"/>
                            </Button>
                            <div
                                className="min-w-[36px] border-r border-l border-l-gray-300  border-r-gray-300 text-center text-[15px] font-medium text-slate-700 select-none">
                                {qty}
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-9 w-9 rounded-xl text-slate-600"
                                onClick={handleQtyIncrease}
                                aria-label="Aumentar cantidad"
                            >
                                <Plus className="size-4"/>
                            </Button>
                        </div>

                        {/* Add to cart */}
                        <Button
                            variant="ghost"
                            onClick={addToCart}
                            aria-label="Agregar al carrito"
                            className={cn(
                                "ml-auto h-10 w-10 rounded-full border bg-white",
                                addedPulse ? "border-blue-500 text-blue-600" : "border-blue-300 text-blue-700"
                            )}
                        >
                            <ShoppingBasket className="size-5"/>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
