import { Card, CardContent, CardHeader } from "@/components/ui/card"
import data from "@/constants/data"
import { useParams } from "@tanstack/react-router"
import {
    Calendar,
    Car,
    Container,
    FileDigit,
    Flag,
    LocateFixed,
    MapPinHouse,
    Package,
    Phone,
    Truck,
    User,
} from "lucide-react"
import { InputCount, InputFact } from "../orders/inputs"

const DetailPage = () => {
    const id = useParams({ from: "/_main/detail/$id" })
    console.log(id)

    const one = data?.results[0]
    return (
        <div className="w-full">
            <Card>
                <CardHeader>
                    <h1 className="text-2xl text-center">
                        {one?.id} idli mahsulot haqida ma'lumot
                    </h1>
                </CardHeader>
                <CardContent className="mx-auto md:w-1/2 grid grid-cols-1 gap-3">
                    <div className="gap-3 text-sm grid grid-cols-1">
                        <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                            <Package size={16} className="text-primary" />
                            <span>Mahsulotlar:</span>
                        </div>
                        {one?.product_info?.map((i, index) => (
                            <>
                                <div className="flex justify-between flex-col md:flex-row gap-3 text-sm ">
                                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                                        <span>
                                            {index + 1}
                                            {" => "}
                                            Mahsulot nomi:
                                        </span>
                                    </div>
                                    <span className="line-clamp-1 break-all">
                                        {i?.name || "-"}
                                    </span>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 text-sm">
                                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                                        <Container
                                            size={16}
                                            className="text-primary"
                                        />
                                        <span>Mahsulot miqdori</span>
                                    </div>
                                    <span className="line-clamp-1 break-all">
                                        <InputCount row={i} />
                                    </span>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 text-sm">
                                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                                        <Container
                                            size={16}
                                            className="text-primary"
                                        />
                                        <span>Mahsulot fakt miqdori:</span>
                                    </div>
                                    <span className="line-clamp-1 break-all">
                                        {<InputFact row={i} />}
                                    </span>
                                </div>
                                <hr />
                            </>
                        ))}
                    </div>
                    <div className="flex justify-between items-center gap-3 text-sm ">
                        <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                            <FileDigit size={16} className="text-primary" />
                            <span>TTN raqami:</span>
                        </div>
                        <span className="line-clamp-1 break-all">
                            {one?.ttn_number || "-"}
                        </span>
                    </div>

                    <div className="flex justify-between items-center gap-3 text-sm ">
                        <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                            <User size={16} className="text-primary" />
                            <span>FIO:</span>
                        </div>
                        <span className="line-clamp-1 break-all">
                            {one.full_name || "-"}
                        </span>
                    </div>
                    <div className="flex justify-between items-center gap-3 text-sm ">
                        <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                            <Phone size={16} className="text-primary" />
                            <span>Telefon raqam:</span>
                        </div>
                        <span className="line-clamp-1 break-all">
                            {one?.phone_number || "-"}
                        </span>
                    </div>
                    <div className="flex justify-between items-center gap-3 text-sm ">
                        <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                            <Car size={16} className="text-primary" />
                            <span>Mashina raqami:</span>
                        </div>
                        <span className="line-clamp-1 break-all">
                            {one?.number_machine || "-"}
                        </span>
                    </div>
                    <div className="flex justify-between items-center gap-3 text-sm ">
                        <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                            <Calendar size={16} className="text-primary" />
                            <span>Jo'natilgan sana:</span>
                        </div>
                        <span className="line-clamp-1 break-all">
                            {one.dateSend}
                        </span>
                    </div>
                    <div className="flex justify-between items-center gap-3 text-sm ">
                        <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                            <Flag size={16} className="text-primary" />
                            <span>Yetkazilgan sana:</span>
                        </div>
                        <span className="line-clamp-1 break-all">
                            {one.delivery_date}
                        </span>
                    </div>
                    <div className="flex justify-between items-center gap-3 text-sm ">
                        <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                            <MapPinHouse size={16} className="text-primary" />
                            <span>Yo'nalish nomi:</span>
                        </div>
                        <span className="line-clamp-1 break-all">
                            {one.direction_name || "-"}
                        </span>
                    </div>
                    <div className="flex justify-between items-center gap-3 text-sm ">
                        <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                            <LocateFixed size={16} className="text-primary" />
                            <span>Yo'nalish raqami:</span>
                        </div>
                        <span className="line-clamp-1 break-all">
                            {one.direction || "-"}
                        </span>
                    </div>
                    <div className="flex justify-between items-center gap-3 text-sm ">
                        <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                            <Truck size={16} className="text-primary" />
                            <span>Qabul qilingan:</span>
                        </div>
                        <span className="line-clamp-1 break-all">
                            {one.act_of_acceptance || "-"}
                        </span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default DetailPage
