"use client"

import {ChevronLeft, ChevronRight} from "lucide-react"
import {cn} from "@/lib/utils"
import {useCallback, useEffect, useMemo, useRef, useState} from "react"

type ItemRenderer<T> = (item: T, index: number) => React.ReactNode

export type GenericCarouselProps<T> = {
    items: T[]
    renderItem: ItemRenderer<T>
    title?: string
    className?: string
    gapPx?: number
    ariaLabel?: string
}

export function Carousel<T>({
    items,
    renderItem,
    title,
    className,
    gapPx = 20,
    ariaLabel = "carrusel"
}: GenericCarouselProps<T>) {
    const scrollerRef = useRef<HTMLDivElement | null>(null)
    const [canPrev, setCanPrev] = useState(false)
    const [canNext, setCanNext] = useState(false)
    const [page, setPage] = useState(0)
    const [pages, setPages] = useState(1)
    const rafRef = useRef<number | undefined>(undefined)

    const getStep = useCallback(() => {
        const el = scrollerRef.current
        if (!el) return 0
        const firstCard = el.querySelector<HTMLElement>("[data-carousel-card]")
        return firstCard ? firstCard.offsetWidth + gapPx : Math.max(1, el.clientWidth * 0.9)
    }, [gapPx])

    const updateNav = useCallback(() => {
        const el = scrollerRef.current
        if (!el) return
        const step = getStep()
        const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth)
        setCanPrev(el.scrollLeft > 0)
        setCanNext(el.scrollLeft < maxScroll - 1)
        if (step > 0) {
            const totalPages = Math.max(1, Math.round(maxScroll / step) + 1)
            setPages(totalPages)
            const idx = Math.min(totalPages - 1, Math.round(el.scrollLeft / step))
            setPage(idx)
        }
    }, [getStep])

    const debouncedUpdateNav = useCallback(() => {
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current)
        }
        rafRef.current = requestAnimationFrame(updateNav)
    }, [updateNav])

    useEffect(() => {
        const el = scrollerRef.current
        if (!el) return
        updateNav()
        const onScroll = () => debouncedUpdateNav()
        el.addEventListener("scroll", onScroll, { passive: true })
        const ro = new ResizeObserver(() => debouncedUpdateNav())
        ro.observe(el)
        return () => {
            el.removeEventListener("scroll", onScroll as never)
            ro.disconnect()
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current)
            }
        }
    }, [debouncedUpdateNav, updateNav])

    function scrollByCards(direction: 1 | -1) {
        const el = scrollerRef.current
        if (!el) return
        const step = getStep()
        el.scrollBy({ left: direction * step, behavior: "smooth" })
    }

    function scrollToPage(idx: number) {
        const el = scrollerRef.current
        if (!el) return
        const step = getStep()
        el.scrollTo({ left: idx * step, behavior: "smooth" })
    }

    const renderedItems = useMemo(
        () =>
            items.map((item, i) => (
                <div
                    key={i}
                    data-carousel-card
                    className="snap-start shrink-0"
                    aria-roledescription="slide"
                >
                    {renderItem(item, i)}
                </div>
            )),
        [items, renderItem]
    )

    return (
        <div className={cn("relative", className)}>
            {title ? (
                <h2 className="text-slate-800 text-base sm:text-lg font-semibold mb-4 sm:mb-6">{title}</h2>
            ) : null}

            {/* Prev / Next buttons (desktop) */}
            <button
                type="button"
                aria-label="Anterior"
                onClick={() => scrollByCards(-1)}
                disabled={!canPrev}
                className={cn(
                    "hidden md:grid place-items-center absolute -left-2 top-1/2 -translate-y-1/2 z-20",
                    "size-10 rounded-full bg-[#243b78] text-white shadow-md hover:bg-[#1f3268]",
                    "disabled:opacity-40 disabled:cursor-not-allowed",
                )}
            >
                <ChevronLeft className="size-5" />
            </button>
            <button
                type="button"
                aria-label="Siguiente"
                onClick={() => scrollByCards(1)}
                disabled={!canNext}
                className={cn(
                    "hidden md:grid place-items-center absolute -right-2 top-1/2 -translate-y-1/2 z-20",
                    "size-10 rounded-full bg-[#243b78] text-white shadow-md hover:bg-[#1f3268]",
                    "disabled:opacity-40 disabled:cursor-not-allowed",
                )}
            >
                <ChevronRight className="size-5" />
            </button>

            {/* Scroller */}
            <div
                ref={scrollerRef}
                role="region"
                aria-label={ariaLabel}
                className="carousel-scroller flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pr-4 md:pr-0"
                style={{ scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" }}
            >
                {renderedItems}
            </div>

            {/* Pagination / progress dots */}
            <div className="mt-5 flex justify-center items-center gap-3">
                {Array.from({ length: pages }).map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Ir a la página ${i + 1}`}
                        onClick={() => scrollToPage(i)}
                        className={cn(
                            "transition-all",
                            i === page ? "w-8 h-2.5 rounded-full bg-[#f7b500]" : "size-2.5 rounded-full bg-[#cbd1e5]",
                        )}
                    />
                ))}
            </div>
        </div>
    )
}


