import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
    Calendar,
    Car,
    Container,
    FileDigit,
    FileDown,
    Flag,
    LocateFixed,
    MapPinHouse,
    Package,
    Phone,
    Truck,
    User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Status from "./status"

type Props = {
    item: OrderType
    onDownload: (item: OrderType) => void
}

function OrderCard({ item, onDownload }: Props) {
    return (
        <Card className="px-4 pb-6 pt-2 space-y-4 cursor-pointer hover:shadow-md hover:scale-[101%] transition-all">
            <CardHeader className="flex flex-row p-0 pb-2 border-b border-b-muted justify-between items-center gap-3 w-full">
                <span>#{item.id}</span>
                <div className="flex items-center gap-2">
                    <div className="min-w-[180px]">
                        <Status row={item} />
                    </div>
                    <Button
                        onClick={() => onDownload(item)}
                        variant={"secondary"}
                        icon={<FileDown size={16} />}
                    />
                </div>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <Package size={16} className="text-primary" />
                        <span>Mahsulotlar:</span>
                    </div>
                    <div>
                        <div>
                            {item.product_info?.length > 1 ? (
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={
                                                item.product_info?.length > 1
                                                    ? "secondary"
                                                    : "ghost"
                                            }
                                            onClick={(e) => {
                                                e.stopPropagation()
                                            }}
                                        >
                                            {`Ko'rish (${item.product_info?.length})`}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-64">
                                        <div className="flex flex-col gap-2 text-sm ">
                                            {item?.product_info?.map(
                                                (item, index) => (
                                                    <span>
                                                        {index + 1}.{" "}
                                                        {item?.name}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            ) : (
                                item.product_info?.[0]?.name
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <FileDigit size={16} className="text-primary" />
                        <span>TTN raqami:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item?.ttn_number || "-"}
                    </span>
                </div>

                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <User size={16} className="text-primary" />
                        <span>FIO:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item.full_name || "-"}
                    </span>
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <Phone size={16} className="text-primary" />
                        <span>Telefon raqam:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item?.phone_number || "-"}
                    </span>
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <Car size={16} className="text-primary" />
                        <span>Mashina raqami:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item?.number_machine || "-"}
                    </span>
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <Calendar size={16} className="text-primary" />
                        <span>Jo'natilgan sana:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item.dateSend}
                    </span>
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <Flag size={16} className="text-primary" />
                        <span>Yetkazilgan sana:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item.delivery_date}
                    </span>
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <MapPinHouse size={16} className="text-primary" />
                        <span>Yo'nalish nomi:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item.direction_name || "-"}
                    </span>
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <LocateFixed size={16} className="text-primary" />
                        <span>Yo'nalish raqami:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item.direction || "-"}
                    </span>
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <Container size={16} className="text-primary" />
                        <span>Miqdori:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item?.product_info[0].count || "-"}
                    </span>
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <Container size={16} className="text-primary" />
                        <span>Fakt miqdori:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item?.product_info[0]?.fact || "-"}
                    </span>
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <Truck size={16} className="text-primary" />
                        <span>Qabul qilingan:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item.act_of_acceptance || "-"}
                    </span>
                </div>
            </CardContent>
        </Card>
    )
}

export default OrderCard
