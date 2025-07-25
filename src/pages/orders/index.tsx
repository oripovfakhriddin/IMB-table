import { useOrderColumns } from "./columns"
import { DataTable } from "@/components/ui/datatable"
import ParamTabs from "@/components/as-params/tabs"
import { LayoutList, Table } from "lucide-react"
import { useModal } from "@/hooks/useModal"
import { useSearch } from "@tanstack/react-router"
import { useGet } from "@/hooks/useGet"
import { useTypedStoreData } from "@/hooks/useStoreData"
import OrderCard from "./order-card"
import EmptyBox from "@/components/custom/empty-box"
import OrderCardSkeletion from "./order-card-skeletion"
import ParamPagination from "@/components/as-params/pagination"
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

const tabs = [
    {
        label: <Table size={20} />,
        value: "table",
    },
    {
        label: <LayoutList size={20} />,
        value: "card",
    },
]

export const OrdersPages = () => {
    const { openModal: openModalDelete } = useModal("delete-order")
    const { storeData, setStoreData, clearUserData } =
        useTypedStoreData<OrderType>()
    const search: SearchParams = useSearch({ from: "/_main/" })
    const { page_tabs, ...params } = search
    const { data: datata, isLoading } = useGet<OrdersTypeResults>("dssdds", {
        params,
    })

    const handleDownload = (item: OrderType) => {}

    const columns = useOrderColumns()
    return (
        <>
            <div className="w-full ">
                <div className="flex flex-row justify-between items-center gap-3 mb-4">
                    <h1 className="text-3xl">Ro'yhatlar</h1>
                    <ParamTabs options={tabs} />
                </div>
                <div className="md:hidden mb-3">
                    <OrderFilter />
                </div>

                {search.page_tabs === "card" ? (
                    <div>
                        <div className="grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                            {isLoading
                                ? Array.from({ length: 20 }).map((_, index) => (
                                      <OrderCardSkeletion key={index} />
                                  ))
                                : !!data?.results?.length &&
                                  data?.results?.map((item, index) => (
                                      <OrderCard
                                          key={index}
                                          item={item}
                                          onDownload={(item) =>
                                              handleDownload(item)
                                          }
                                      />
                                  ))}
                        </div>
                        {!!data?.results?.length && (
                            <div className="my-4 flex justify-center">
                                <ParamPagination
                                    disabled={isLoading}
                                    totalPages={data.pages}
                                />
                            </div>
                        )}
                        {!data?.results?.length && <EmptyBox />}
                    </div>
                ) : (
                    <DataTable
                        columns={columns}
                        data={data?.results}
                        loading={isLoading}
                        onDownload={(row) => handleDownload(row.original)}
                        paginationProps={{ totalPages: data?.pages }}
                        numeration
                        viewAll
                    />
                )}
            </div>
        </>
    )
}
