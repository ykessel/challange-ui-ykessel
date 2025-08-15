import {Suspense} from "react";
import type {Category} from "@/types/Category";
import {CategoriesSkeleton} from "@/components/home/categories-skeleton";
import {CategoriesSectionClient} from "@/components/home/client-side/categories-section-client";
import { getCategories } from "@/lib/data";

export const revalidate = 300;

export async function CategoriesSection() {
    const categories = await getCategories() as Category[];
    return (
        <Suspense fallback={<CategoriesSkeleton/>}>
            <CategoriesSectionClient categories={categories} />
        </Suspense>
    );
}
