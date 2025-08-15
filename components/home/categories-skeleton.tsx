export function CategoriesSkeleton() {
    const items = Array.from({length: 8});
    return (
        <section className="bg-[#eaf0fb] py-4 sm:py-6">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="h-5 w-48 rounded-md bg-slate-200 animate-pulse mb-3 sm:mb-4"/>

                {/* Mobile: horizontal scroll */}
                <div
                    className="category-scroller flex gap-3 sm:gap-4 md:hidden overflow-x-auto snap-x snap-mandatory pb-1">
                    {items.map((_, i) => (
                        <div key={i} className="snap-start shrink-0">
                            <div
                                className="relative h-[159px] w-[137px] sm:w-[170px] rounded-xl bg-slate-200 animate-pulse"/>
                        </div>
                    ))}
                </div>

                {/* Desktop: inline grid, left-aligned */}
                <div className="hidden md:inline-grid grid-flow-col gap-4 justify-start">
                    {items.slice(0, 8).map((_, i) => (
                        <div key={i} className="relative h-[159px] w-[170px] rounded-xl bg-slate-200 animate-pulse"/>
                    ))}
                </div>
            </div>
        </section>
    );
}
