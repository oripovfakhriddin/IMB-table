import PageLayout from "@/layouts/page-layout"
import DetailPage from "@/pages/detail"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_main/detail/$id")({
    component: () => (
        <PageLayout title="Detail">
            <DetailPage />
        </PageLayout>
    ),
})
