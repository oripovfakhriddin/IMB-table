import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ColumnDef } from "@tanstack/react-table"
import { useMemo } from "react"
import Status from "./status"
import {
    InputAcceptance,
    InputCount,
    InputDeliveryDate,
    InputFact,
} from "./inputs"
import { DataTable } from "@/components/ui/datatable"
import { useOrderSubColumns } from "./sub-table/columns"

export const useOrderColumns = (): ColumnDef<OrderType>[] => {
    const columns = useOrderSubColumns()
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
                cell: ({ row }) => row.original.number_machine || "-",
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
                cell: ({ row }) => <Status row={row.original} />,
            },
            {
                header: "Mahsulot nomi",
                accessorKey: "product_name",
                enableSorting: true,
                cell: ({ row }) =>
                    row.original.product_info?.length > 1 ? (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={
                                        row.original.product_info?.length > 1
                                            ? "secondary"
                                            : "ghost"
                                    }
                                    onClick={(e) => {
                                        e.stopPropagation()
                                    }}
                                >
                                    {`Mahsulotlar: (${row.original.product_info?.length})`}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-1/2 md:w-full">
                                <DataTable
                                    columns={columns}
                                    data={row.original.product_info}
                                    numeration
                                    viewAll
                                />
                            </PopoverContent>
                        </Popover>
                    ) : (
                        row.original.product_info?.[0]?.name
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
                cell: ({ row }) => <InputAcceptance row={row.original} />,
            },
            {
                header: "Yetkazilgan sana",
                accessorKey: "delivery_date",
                enableSorting: true,
                cell: ({ row }) => <InputDeliveryDate row={row.original} />,
            },
        ],
        [],
    )
}
