import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ColumnDef } from "@tanstack/react-table"
import { useMemo } from "react"
import Status from "./status"

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
                    row.original.product_name?.length > 1 ? (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={
                                        row.original.product_name?.length > 1
                                            ? "secondary"
                                            : "ghost"
                                    }
                                    onClick={(e) => {
                                        e.stopPropagation()
                                    }}
                                >
                                    {`Mahsulotlar: (${row.original.product_name?.length})`}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div className="flex flex-col gap-2 text-sm ">
                                    {row.original?.product_name?.map(
                                        (item, index) => (
                                            <span>
                                                {index + 1}. {item}
                                            </span>
                                        ),
                                    )}
                                </div>
                            </PopoverContent>
                        </Popover>
                    ) : (
                        row.original.product_name?.[0]
                    ),
            },
            {
                header: "Miqdori",
                accessorKey: "count",
                enableSorting: true,
                cell: ({ row }) => row.original.count || "-",
            },
            {
                header: "Fakt miqdori",
                accessorKey: "fact",
                enableSorting: true,
                cell: ({ row }) => row.original.fact || "-",
            },
            {
                header: "Qabul qilingan raqam",
                accessorKey: "act_of_acceptance",
                enableSorting: true,
                cell: ({ row }) => row.original.act_of_acceptance || "-",
            },
            {
                header: "Yetkazilgan sana",
                accessorKey: "delivery_date",
                enableSorting: true,
                cell: ({ row }) => row.original.delivery_date || "-",
            },
        ],
        [],
    )
}
