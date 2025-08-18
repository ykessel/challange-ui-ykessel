'use client';

import {
    Baby,
    Bone,
    HeartPulse,
    type LucideIcon,
    Pill,
    PillIcon as Capsule,
    ShieldPlus,
    Syringe,
    ThermometerSun
} from "lucide-react";
import {useCallback, useId, useMemo, useState} from "react";
import {cn} from "@/lib/utils";
import {CategoryCard} from "@/components/home/category-card";
import {Carousel} from "@/components/home/carousel";
import type {Category} from "@/types/Category";

type CategoryWithIcon = Category & { Icon: LucideIcon };

type CategorySectionProps = {
    title?: string;
    categories: Category[];
    className?: string;
};

const iconMap: Record<string, LucideIcon> = {
    "baby": Baby,
    "bone": Bone,
    "heart-pulse": HeartPulse,
    "pill": Pill,
    "capsule": Capsule,
    "shield-plus": ShieldPlus,
    "syringe": Syringe,
    "thermometer-sun": ThermometerSun,
};

function resolveIcon(name: string): LucideIcon {
    return iconMap[name] ?? Pill;
}

export function CategoriesSectionClient({
                                            title = "Obtén todo, justo aquí",
                                            categories,
                                            className
                                        }: CategorySectionProps) {
    const rgId = useId();

    const withIcons: CategoryWithIcon[] = useMemo(
        () => categories.map((c) => ({...c, Icon: resolveIcon(c.icon)})),
        [categories]
    );

    const [selected, setSelected] = useState<string>(withIcons[0]?.id ?? "");

    const handleSelect = useCallback((id: string) => {
        setSelected(id);
    }, []);

    const cards = useMemo(() => withIcons.map((c) => (
        <CategoryCard
            key={c.id}
            id={c.id}
            label={c.label}
            Icon={c.Icon}
            selected={selected === c.id}
            onSelect={handleSelect}
            href={`/category/${c.id}`}
        />
    )), [withIcons, selected, handleSelect]);

    return (
        <section className={cn("bg-background py-4 sm:py-6", className)}>
            <div className="px-4 sm:px-6 lg:px-8">
                <h2
                    id={rgId}
                    className="text-slate-800 text-sm sm:text-base font-semibold mb-3 sm:mb-4"
                >
                    {title}
                </h2>

                {/* Mobile */}
                <div className="md:hidden">
                    <Carousel
                        items={cards}
                        renderItem={(card) => card}
                        ariaLabel={`${title} carrusel`}
                        className=""
                    />
                </div>

                {/* Desktop */}
                <div
                    role="radiogroup"
                    aria-labelledby={rgId}
                    className="hidden md:inline-grid grid-flow-col gap-4 justify-start"
                >
                    {cards}
                </div>
            </div>
        </section>
    );
}
