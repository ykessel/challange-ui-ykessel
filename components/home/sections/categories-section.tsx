import {Suspense} from "react";
import type {Category} from "@/types/Category";
import {CategoriesSkeleton} from "@/components/home/categories-skeleton";
import {CategoriesSectionClient} from "@/components/home/client-side/categories-section-client";
import { fetchCategories } from "@/lib/api";

export const revalidate = 300;

export async function CategoriesSection() {
    const categories = await fetchCategories();
    return (
        <Suspense fallback={<CategoriesSkeleton/>}>
            <CategoriesSectionClient categories={categories} />
        </Suspense>
    );
}
