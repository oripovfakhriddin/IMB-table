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
    product_name: string[]
    count: number
    fact: number
    act_of_acceptance: number
    delivery_date: string
}

type OrdersTypeResults = {
    results: OrderType[]
    next: string
    count: number
    previous: string
    pages: number
}
