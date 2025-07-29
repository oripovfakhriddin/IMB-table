import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ColumnDef } from "@tanstack/react-table"
import { Fragment, useMemo } from "react"
import Status from "./status"
import {
    InputAcceptance,
    InputCount,
    InputDeliveryDate,
    InputFact,
} from "./inputs"
import { useModal } from "@/hooks/useModal"
import { Card, CardContent } from "@/components/ui/card"
import { Container } from "lucide-react"
import { formatCarNumber } from "@/lib/utils"

export const useOrderColumns = (): ColumnDef<OrderType>[] => {
    return useMemo(
        () => [
            {
                header: "Jo'natilgan sana",
                accessorKey: "dataSend",
                enableSorting: true,
                cell: ({ row }) => row.original.dateSend || "-",
            },
            {
                header: "Yo'nalish",
                accessorKey: "direction",
                enableSorting: true,
                cell: ({ row }) => row.original.direction || "-",
            },
            {
                header: "Yo'nalish nomi",
                accessorKey: "direction_name",
                enableSorting: true,
                cell: ({ row }) => row.original.direction_name || "-",
            },
            {
                header: "TTN Nomer",
                accessorKey: "ttn_number",
                enableSorting: true,
                cell: ({ row }) => row.original.ttn_number || "-",
            },
            {
                header: "Mashina raqami",
                accessorKey: "number_machine",
                enableSorting: true,
                cell: ({ row }) =>
                    formatCarNumber(row.original.number_machine) || "-",
            },
            {
                header: "FIO",
                accessorKey: "full_name",
                enableSorting: true,
                cell: ({ row }) => row.original.full_name || "-",
            },
            {
                header: "Telefon",
                accessorKey: "phone_number",
                enableSorting: true,
                cell: ({ row }) => row.original.phone_number || "-",
            },
            {
                header: "Status",
                accessorKey: "status",
                cell: ({ row }) =>
                    row.original?.status === 10 ? (
                        <p className="text-green-500">Success</p>
                    ) : row.original.status === 20 ? (
                        <p className="text-orange-500">Waiting</p>
                    ) : (
                        <p className="text-red-500">Cancel</p>
                    ),
            },
            {
                header: "Mahsulotlar",
                accessorKey: "product_info",
                enableSorting: true,
                cell: ({ row }) => (
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="secondary">
                                {`Ko'rish (${row.original.product_info?.length})`}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent
                            className="!w-3/4 !min-w-80 !md:w-full !p-0 max-h-[50vh] overflow-y-auto no-scrollbar"
                            side="bottom"
                        >
                            <Card className="px-4 pb-6 pt-2 space-y-4 cursor-pointer hover:shadow-md hover:scale-[101%] transition-all">
                                <CardContent className="p-0 space-y-2">
                                    {row.original.product_info?.map(
                                        (i, index) => (
                                            <Fragment key={index}>
                                                <div className="flex justify-between flex-col gap-1 text-sm ">
                                                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                                                        <span>
                                                            {index + 1}
                                                            {". "}
                                                            Mahsulot nomi:
                                                        </span>
                                                    </div>
                                                    <span className="line-clamp-1 break-all">
                                                        {i?.name || "-"}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center gap-3 text-sm ">
                                                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                                                        <Container
                                                            size={16}
                                                            className="text-primary"
                                                        />
                                                        <span>
                                                            Umumiy miqdori:
                                                        </span>
                                                    </div>
                                                    <span className="line-clamp-1 break-all">
                                                        {i?.count || "-"}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center gap-3 text-sm ">
                                                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                                                        <Container
                                                            size={16}
                                                            className="text-primary"
                                                        />
                                                        <span>
                                                            Fakt miqdori:
                                                        </span>
                                                    </div>
                                                    <span className="line-clamp-1 break-all">
                                                        {i?.fact || "-"}
                                                    </span>
                                                </div>
                                                <hr />
                                            </Fragment>
                                        ),
                                    )}
                                </CardContent>
                            </Card>
                        </PopoverContent>
                    </Popover>
                ),
            },
            {
                header: "Miqdori",
                accessorKey: "count",
                enableSorting: true,
                cell: ({ row }) =>
                    row.original?.product_info.reduce(
                        (sum, item) => sum + item.count,
                        0,
                    ),
            },
            {
                header: "Fakt miqdori",
                accessorKey: "fact",
                enableSorting: true,
                cell: ({ row }) =>
                    row?.original?.product_info?.reduce(
                        (sum, item) => sum + item?.fact,
                        0,
                    ),
            },
            {
                header: "Qabul qilingan raqam",
                accessorKey: "act_of_acceptance",
                enableSorting: true,
                cell: ({ row }) => row.original.act_of_acceptance,
            },
            {
                header: "Yetkazilgan sana",
                accessorKey: "delivery_date",
                enableSorting: true,
                cell: ({ row }) => row.original.delivery_date,
            },
        ],
        [],
    )
}
