import { FormDatePicker } from "@/components/form/date-picker"
import { DatePicker } from "@/components/ui/datepicker"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"

type InputPropsCandF = {
    row: ProductType
}

type InputProps = {
    row: OrderType
}

export const InputCount = ({ row }: InputPropsCandF) => {
    const [count, setCount] = useState(row?.count)
    return (
        <Input
            type="number"
            className="w-[100px]"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
        />
    )
}

export const InputFact = ({ row }: InputPropsCandF) => {
    const [fact, setFact] = useState(row?.fact)
    return (
        <Input
            type="number"
            className="w-[100px]"
            value={fact}
            onChange={(e) => {
                setFact(Number(e.target.value))
            }}
        />
    )
}

export const InputAcceptance = ({ row }: InputProps) => {
    const [actOfAcceptance, setActOfAcceptance] = useState(
        row?.act_of_acceptance,
    )
    return (
        <Input
            type="number"
            value={actOfAcceptance}
            className="w-[150px]"
            onChange={(e) => {
                setActOfAcceptance(Number(e.target.value))
            }}
        />
    )
}

export const InputDeliveryDate = ({ row }: InputProps) => {
    const [deliveryDate, setDeliveryDate] = useState(row?.delivery_date)
    return <DatePicker date={deliveryDate} setDate={setDeliveryDate} />
}
