import { BannerContent } from "@/types/Banner";
import { Category } from "@/types/Category";

/**
 * API functions for fetching data
 * 
 * Server-side functions (fetchBanners, fetchCategories) use direct data imports
 * for reliability during SSR, while client-side functions use actual HTTP requests.
 */

export async function fetchBanners(): Promise<BannerContent> {
  try {
    // For server-side rendering, use direct data import for reliability
    const { getBannerContent } = await import('./data');
    return getBannerContent();
  } catch (error) {
    console.error('Error fetching banners:', error);
    // Fallback with empty banner content
    return {
      title: "Envía Salud y Bienestar a tus seres queridos",
      subtitle: "50% de descuentos en tus productos favoritos."
    };
  }
}

export async function fetchBannersClient(): Promise<BannerContent> {
  try {
    const response = await fetch('/api/banners', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch banners: ${response.status} ${response.statusText}`);
    }

    const data: BannerContent = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching banners:', error);
    throw error;
  }
}

export async function fetchCategories(): Promise<Category[]> {
  try {
    // For server-side rendering, use direct data import for reliability
    const { getCategories } = await import('./data');
    return getCategories();
  } catch (error) {
    console.error('Error fetching categories:', error);
    // Double fallback with hardcoded categories
    return [
      { id: "vitaminas", label: "Vitaminas", icon: "Pill" },
      { id: "analgesicos", label: "Analgésicos", icon: "Bone" },
      { id: "antialergicos", label: "Antialérgicos", icon: "HeartPulse" }
    ];
  }
}

// Alternative API fetch function for when running with full server
export async function fetchCategoriesFromAPI(): Promise<Category[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Enable caching for 5 minutes
      next: { revalidate: 300 }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status} ${response.statusText}`);
    }

    const data: Category[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories from API:', error);
    // Fallback to local data if API fails
    const { getCategories } = await import('./data');
    return getCategories();
  }
}

export async function fetchCategoriesClient(): Promise<Category[]> {
  try {
    const response = await fetch('/api/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status} ${response.statusText}`);
    }

    const data: Category[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}
