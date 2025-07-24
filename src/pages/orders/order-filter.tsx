import { ParamCombobox } from "@/components/as-params/combobox"
import ParamDatePicker from "@/components/as-params/date-picker"
import ParamInput from "@/components/as-params/input"
import { useGet } from "@/hooks/useGet"
import { useState } from "react"

function OrderFilter() {
    const [search, setSearch] = useState<{
        q: string
        customer: string
        product: string
    }>({
        q: "",
        customer: "",
        product: "",
    })
    const { data: dataUsers } = useGet<any>("ddsdsd", {
        params: { page_size: 50, role: 3, search: search.customer },
    })
    const { data: dataLogist } = useGet<any>("ddsdsd", {
        params: { page_size: 50, role: 2, search: search.product },
    })

    return (
        <div className="flex items-center gap-3">
            <ParamInput
                searchKey="q"
                aria-label="Search"
                placeholder="Qidiruv..."
                className="w-[200px]"
            />
            <ParamCombobox
                options={dataUsers?.results || []}
                valueKey="id"
                labelKey="full_name"
                label="Mijoz ismi"
                paramName="customer"
                className="w-[200px]"
                onSearchChange={(val) =>
                    setSearch((prev) => ({ ...prev, customer: val }))
                }
            />
            <ParamCombobox
                options={dataLogist?.results || []}
                valueKey="id"
                labelKey="product_name"
                label="Mahsulot nomi"
                paramName="product"
                className="w-[200px]"
                onSearchChange={(val) =>
                    setSearch((prev) => ({ ...prev, product: val }))
                }
            />
            <ParamDatePicker
                className="w-[200px]"
                placeholder="Jo'natilgan sana"
            />
        </div>
    )
}

export default OrderFilter
