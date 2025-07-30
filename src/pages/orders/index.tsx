import { useOrderColumns } from "./columns"
import { DataTable } from "@/components/ui/datatable"
import { useModal } from "@/hooks/useModal"
import { useSearch } from "@tanstack/react-router"
import { useGet } from "@/hooks/useGet"
import { useTypedStoreData } from "@/hooks/useStoreData"
import OrderCard from "./order-card"
import EmptyBox from "@/components/custom/empty-box"
import OrderCardSkeletion from "./order-card-skeletion"
import OrderFilter from "./order-filter"
import data from "@/constants/data"

export const statusColor: { [key: string]: string } = {
    "10": "text-green-500",
    "20": "text-orange-400",
    "30": "text-red-500",
}

export const statusText: { [key: string]: string } = {
    "10": "Success",
    "20": "Waiting",
    "30": "Cancel",
}

export const statusOptions = [
    {
        value: "",
        label: "Barchasi",
    },
    {
        value: "10",
        label: "Success",
    },
    {
        value: "20",
        label: "Waiting",
    },
    {
        value: "30",
        label: "Cancel",
    },
]

export const OrdersPages = () => {
    const { openModal: openModalDelete } = useModal("delete-order")
    const { openModal: openOrderAdd } = useModal("product-modal")
    const { setStoreData, clearUserData } = useTypedStoreData<OrderType>()
    const search: SearchParams = useSearch({ from: "/_main/" })
    const { page_tabs, ...params } = search
    const { data: datata, isLoading } = useGet<OrdersTypeResults>("dssdds", {
        params,
    })

    const handleUpdate = (item: OrderType) => {
        clearUserData()
        setStoreData(item)
        openOrderAdd()
    }

    const handleDownload = (item: OrderType) => {}

    const columns = useOrderColumns()
    return (
        <>
            <div className="w-full ">
                <div className="md:hidden mb-3">
                    <OrderFilter />
                </div>

                {search.page_tabs === "card" ? (
                    <div>
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                            {isLoading
                                ? Array.from({ length: 20 }).map((_, index) => (
                                      <OrderCardSkeletion key={index} />
                                  ))
                                : !!data?.results?.length &&
                                  data?.results?.map((item, index) => (
                                      <OrderCard
                                          key={index}
                                          item={item}
                                          tr={index + 1}
                                          onDownload={(item) =>
                                              handleDownload(item)
                                          }
                                          onEdit={(item) => handleUpdate(item)}
                                      />
                                  ))}
                        </div>
                        {!data?.results?.length && <EmptyBox />}
                    </div>
                ) : (
                    <DataTable
                        columns={columns}
                        data={data?.results}
                        loading={isLoading}
                        onDownload={(row) => handleDownload(row.original)}
                        onEdit={(row) => {
                            handleUpdate(row.original)
                        }}
                        paginationProps={{ totalPages: data?.pages }}
                        numeration
                        viewAll
                    />
                )}
            </div>
        </>
    )
}
