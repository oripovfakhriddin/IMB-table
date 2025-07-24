import { LayoutGrid } from "lucide-react"
import { ReactNode } from "react"

export interface MenuItem {
    label: string
    icon?: ReactNode
    path: string
}

export const items: MenuItem[] = [
    {
        label: "Buyurtmalar",
        icon: <LayoutGrid width={20} />,
        path: "/",
    },
]
