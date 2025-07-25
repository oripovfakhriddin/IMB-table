import { createFileRoute, Outlet } from "@tanstack/react-router"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export const Route = createFileRoute("/_main")({
    component: MainLayout,
})

function MainLayout() {
    return (
        <SidebarProvider defaultOpen={false}>
            <SidebarInset>
                <Outlet />
            </SidebarInset>
        </SidebarProvider>
    )
}

export default MainLayout
