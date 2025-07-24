import { ColumnDef } from "@tanstack/react-table"
import { useMemo } from "react"
import { InputCount, InputFact } from "../inputs"

export const useOrderSubColumns = (): ColumnDef<ProductType>[] => {
    return useMemo(
        () => [
            {
                header: "Nomi",
                accessorKey: "name",
                enableSorting: true,
                cell: ({ row }) => row.original.name || "-",
            },
            {
                header: "Miqdor",
                accessorKey: "count",
                enableSorting: true,
                cell: ({ row }) => <InputCount row={row.original} />,
            },
            {
                header: "Fakt",
                accessorKey: "fact",
                enableSorting: true,
                cell: ({ row }) => <InputFact row={row.original} />,
            },
        ],
        [],
    )
}
