import { Link } from "react-router-dom"
import { useCategories } from "../hooks/use-categories"
import { cn } from "cn"
import { CategoryIcon } from "./category-icon"

export function CategoryNav() {

    const {data: categories = []} = useCategories()

    return (
        <nav className="w-full">
            <ul className="overflow-hidden rounded-2xl border border-border/70 bg-transparent">
            { categories.map((category) => (
                <li key={category.id}
                className="relative"
                >
                    <Link
                    to={`/products?categoryId=${category.id}`}
                    className={cn(
                        'relative flex w-full items-center gap-3 px-5 py-5',
                        'font-menu text-lg font-semibold uppercase tracking-tight',
                        'border-xl border border-transparent',
                        'transition-colors duration-200',
                        'hover:z-10 hover:text-[#B86A2C]'
            )}>
                {<CategoryIcon name={category.icon} className="size-10 text-brand" />}
                    <span className="leading-tight">{category.name}</span>
                    </Link>
                </li>
            ))}
            </ul>
        </nav>
    )
}