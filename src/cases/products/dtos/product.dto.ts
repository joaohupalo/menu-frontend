import type { CategoryDTO } from "@/cases/categories/dtos/category.dto";

export interface ProductDTO {
    id: string;
    name: string;
    description: string | null;
    price: string;
    picture: string | null;
    active: boolean;
    vegetarian: boolean;
    isNew: boolean;
    category: CategoryDTO | null;
}