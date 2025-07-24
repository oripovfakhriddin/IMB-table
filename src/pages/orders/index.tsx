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

    const data = {
        pages: 1,
        results: [
            {
                id: 1,
                dateSend: "07-02-2025",
                direction: 1254,
                direction_name: "Zamin Drinks OOO",
                ttn_number: 2589637,
                number_machine: "50Z986AB",
                full_name: "Toshtemir Hasanov",
                phone_number: "+998901234567",
                status: 20,
                product_info: [
                    {
                        name: "FANTA APELSIN PET 1L 1X6 СМРКД",
                        count: 1500,
                        fact: 1400,
                    },
                    {
                        name: "FUSE PEACH PET 0,5L 1X12 SAM",
                        count: 2500,
                        fact: 2496,
                    },
                ],
                act_of_acceptance: 125,
                delivery_date: "05-07-2024",
            },
            {
                id: 2,
                dateSend: "07-05-2020",
                direction: 1254,
                direction_name: "Family Drinks OOO",
                ttn_number: 5142356,
                number_machine: "01Z125ZH",
                full_name: "Behzod Karimov",
                phone_number: "+998915632356",
                status: 30,
                product_info: [
                    {
                        name: "FANTA APELSIN PET 1L 1X6 СМРКД",
                        count: 1500,
                        fact: 1400,
                    },
                    {
                        name: "FUSE PEACH PET 0,5L 1X12 SAM",
                        count: 2500,
                        fact: 2496,
                    },
                ],
                act_of_acceptance: 136,
                delivery_date: "05-08-2020",
            },
            {
                id: 3,
                dateSend: "07-02-2025",
                direction: 1254,
                direction_name: "Zamin Drinks OOO",
                ttn_number: 5142356,
                number_machine: "01Z529ZH",
                full_name: "Oripov Faxriddin",
                phone_number: "+998944555766",
                status: 20,
                product_info: [
                    {
                        name: "FANTA APELSIN PET 1L 1X6 СМРКД",
                        count: 1500,
                        fact: 1400,
                    },
                    {
                        name: "FUSE PEACH PET 0,5L 1X12 SAM",
                        count: 2500,
                        fact: 2496,
                    },
                ],
                act_of_acceptance: 152,
                delivery_date: "10-07-2025",
            },
            {
                id: 4,
                dateSend: "07-02-2025",
                direction: 1254,
                direction_name: "Zamin Drinks OOO",
                ttn_number: 5142356,
                number_machine: "01Z529ZH",
                full_name: "Qodir Berdiyorov",
                phone_number: "+998904587962",
                status: 10,
                product_info: [
                    {
                        name: "FANTA APELSIN PET 1L 1X6 СМРКД",
                        count: 1500,
                        fact: 1400,
                    },
                    {
                        name: "FUSE PEACH PET 0,5L 1X12 SAM",
                        count: 2500,
                        fact: 2496,
                    },
                ],
                act_of_acceptance: 12,
                delivery_date: "05-07-2025",
            },
            {
                id: 5,
                dateSend: "07-02-2025",
                direction: 1254,
                direction_name: "Zamin Drinks OOO",
                ttn_number: 5142356,
                number_machine: "01Z529ZH",
                full_name: "Qodir Berdiyorov",
                phone_number: "+998904587962",
                status: 10,
                product_info: [
                    {
                        name: "FANTA APELSIN PET 1L 1X6 СМРКД",
                        count: 1500,
                        fact: 1400,
                    },
                    {
                        name: "FUSE PEACH PET 0,5L 1X12 SAM",
                        count: 2500,
                        fact: 2496,
                    },
                ],
                act_of_acceptance: 12,
                delivery_date: "05-07-2025",
            },
            {
                id: 6,
                dateSend: "07-02-2025",
                direction: 1254,
                direction_name: "Zamin Drinks OOO",
                ttn_number: 5142356,
                number_machine: "01Z529ZH",
                full_name: "Qodir Berdiyorov",
                phone_number: "+998904587962",
                status: 30,
                product_info: [
                    {
                        name: "FANTA APELSIN PET 1L 1X6 СМРКД",
                        count: 1500,
                        fact: 1400,
                    },
                    {
                        name: "FUSE PEACH PET 0,5L 1X12 SAM",
                        count: 2500,
                        fact: 2496,
                    },
                ],
                act_of_acceptance: 12,
                delivery_date: "05-07-2025",
            },
            {
                id: 7,
                dateSend: "07-02-2025",
                direction: 1254,
                direction_name: "Zamin Drinks OOO",
                ttn_number: 5142356,
                number_machine: "01Z529ZH",
                full_name: "Qodir Berdiyorov",
                phone_number: "+998904587962",
                status: 10,
                product_info: [
                    {
                        name: "FANTA APELSIN PET 1L 1X6 СМРКД",
                        count: 1500,
                        fact: 1400,
                    },
                    {
                        name: "FUSE PEACH PET 0,5L 1X12 SAM",
                        count: 2500,
                        fact: 2496,
                    },
                ],
                act_of_acceptance: 12,
                delivery_date: "05-07-2025",
            },
        ],
        next: 2,
        count: 7,
        previous: 1,
    }

    const handleDownload = (item: OrderType) => {}

    const columns = useOrderColumns()
    return (
        <>
            <div className="w-full ">
                <div className="flex flex-row justify-between items-center gap-3 mb-4">
                    <h1 className="text-3xl">Ro'yhatlar</h1>
                    <ParamTabs options={tabs} />
                </div>

                {search.page_tabs === "card" ? (
                    <div>
                        <div className="grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                            {isLoading
                                ? Array.from({ length: 20 }).map((_, index) => (
                                      <OrderCardSkeletion key={index} />
                                  ))
                                : !!data?.results?.length &&
                                  data?.results?.map((item) => (
                                      <OrderCard
                                          key={item.id}
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
