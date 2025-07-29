import {
    createFileRoute,
    Outlet,
    useLocation,
    useNavigate,
} from "@tanstack/react-router"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { getAccessToken } from "@/lib/get-token"
import { useEffect } from "react"

export const Route = createFileRoute("/_main")({
    component: MainLayout,
})

function MainLayout() {
    const pathname = useLocation().pathname
    const navigate = useNavigate()
    const token = getAccessToken()

    useEffect(() => {
        if (!token) {
            navigate({ to: "/" })
        }
    }, [pathname])

    return (
        <SidebarProvider defaultOpen={false}>
            <SidebarInset>
                <Outlet />
            </SidebarInset>
        </SidebarProvider>
    )
}

export default MainLayout
