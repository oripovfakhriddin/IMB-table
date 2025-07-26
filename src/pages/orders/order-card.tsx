import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
    Car,
    Container,
    FileDigit,
    FileDown,
    MapPinHouse,
    Package,
    Phone,
    User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Status from "./status"
import { InputCount, InputFact } from "./inputs"
import { useModal } from "@/hooks/useModal"

type Props = {
    item: OrderType
    onDownload: (item: OrderType) => void
    onView: (item: OrderType) => void
}

function OrderCard({ item, onDownload, onView }: Props) {
    const { openModal } = useModal("product-modal")

    const handleAdd = () => {
        openModal()
    }
    return (
        <Card
            onClick={() => onView(item)}
            className="px-4 pb-6 pt-2 space-y-4 cursor-pointer hover:shadow-md hover:scale-[101%] transition-all"
        >
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
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="secondary"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                        }}
                                    >
                                        {`Ko'rish (${item.product_info?.length})`}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    onClick={(e) => {
                                        e.stopPropagation()
                                    }}
                                    className="!w-3/4 !min-w-80 !md:w-full"
                                >
                                    <Card className="px-4 pb-6 pt-2 space-y-4 cursor-pointer hover:shadow-md hover:scale-[101%] transition-all">
                                        <CardContent className="p-0 space-y-2">
                                            {item?.product_info?.map(
                                                (i, index) => (
                                                    <>
                                                        <div className="flex justify-between flex-col gap-3 text-sm ">
                                                            <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                                                                <span>
                                                                    {index + 1}
                                                                    {" => "}
                                                                    Mahsulot
                                                                    nomi:
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
                                                                <span>
                                                                    Mahsulot
                                                                    miqdori
                                                                </span>
                                                            </div>
                                                            <span className="line-clamp-1 break-all">
                                                                <InputCount
                                                                    row={i}
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 text-sm">
                                                            <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                                                                <Container
                                                                    size={16}
                                                                    className="text-primary"
                                                                />
                                                                <span>
                                                                    Mahsulot
                                                                    fakt
                                                                    miqdori:
                                                                </span>
                                                            </div>
                                                            <span className="line-clamp-1 break-all">
                                                                {
                                                                    <InputFact
                                                                        row={i}
                                                                    />
                                                                }
                                                            </span>
                                                        </div>
                                                        <hr />
                                                    </>
                                                ),
                                            )}
                                        </CardContent>
                                        <Button
                                            onClick={handleAdd}
                                            className="w-full"
                                        >
                                            Mahsulot qo'shish
                                        </Button>
                                    </Card>
                                </PopoverContent>
                            </Popover>
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
                        <MapPinHouse size={16} className="text-primary" />
                        <span>Yo'nalish nomi:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item.direction_name || "-"}
                    </span>
                </div>
            </CardContent>
        </Card>
    )
}

export default OrderCard
