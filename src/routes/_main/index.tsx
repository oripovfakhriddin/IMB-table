import PageLayout from "@/layouts/page-layout"
import { OrdersPages } from "@/pages/orders"
import OrderFilter from "@/pages/orders/order-filter"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_main/")({
    component: () => (
        <PageLayout
            title="Buyurtmalar"
            leftChildren={<h1 className="text-xl">Zamin Drinks OOO</h1>}
            rigthChildren={<OrderFilter />}
        >
            <OrdersPages />
        </PageLayout>
    ),
})
