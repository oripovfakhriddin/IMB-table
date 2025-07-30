type ProductType = {
    name: string
    count: number
    fact: number
}
type OrderType = {
    id: number
    dateSend: string
    direction: number
    direction_name: string
    ttn_number: number
    number_machine: string
    full_name: string
    phone_number: string
    status: number | string
    product_info: ProductType[]
    act_of_acceptance: string | null
    delivery_date: string | null
}

type OrdersTypeResults = {
    results: OrderType[]
    next: string
    count: number
    previous: string
    pages: number
}
