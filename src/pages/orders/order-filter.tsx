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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <ParamInput
                name="search"
                type="text"
                searchKey="q"
                placeholder="Qidiruv..."
                fullWidth
                className="md:w-[200px]"
            />
            <ParamCombobox
                options={dataLogist?.results || []}
                valueKey="id"
                labelKey="product_name"
                label="Mahsulot nomi"
                paramName="product"
                className="md:w-[200px] w-full"
                onSearchChange={(val) =>
                    setSearch((prev) => ({ ...prev, product: val }))
                }
            />
            <ParamDatePicker
                className="md:w-[200px] w-full"
                placeholder="Sana bo'yicha"
            />
        </div>
    )
}

export default OrderFilter
