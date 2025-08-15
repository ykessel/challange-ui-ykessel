export type Product = {
    id: string
    nombre: string
    imagen: string
    precio: number
    rating: number
    categoria?: string
    descripcion?: string
    badge?: { text: string; color?: "yellow" | "orange" }
}
