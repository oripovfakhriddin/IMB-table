import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
    Calendar,
    CalendarCheck,
    Car,
    ChevronDown,
    Container,
    Edit,
    FileDigit,
    FileDown,
    FlagTriangleLeft,
    FlagTriangleRight,
    IndentDecreaseIcon,
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
import { useModal } from "@/hooks/useModal"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { formatCarNumber } from "@/lib/utils"
import { useTypedStoreData } from "../../hooks/useStoreData"

type Props = {
    item: OrderType
    tr: number
    onDownload: (item: OrderType) => void
    onEdit: (item: OrderType) => void
}

function OrderCard({ item, tr, onDownload, onEdit }: Props) {
    return (
        <Card className="px-4 pb-6 pt-2 space-y-4 cursor-pointer hover:shadow-md hover:scale-[101%] transition-all">
            <CardHeader className="flex flex-row p-0 pb-2 border-b border-b-muted justify-between items-center gap-3 w-full">
                <span>#{tr}</span>
                <div className="flex items-center gap-2">
                    <Button
                        onClick={() => {
                            onEdit(item)
                        }}
                        variant={"secondary"}
                        icon={<Edit size={16} />}
                    />
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
                                    <Button variant="secondary">
                                        {`Ko'rish (${item.product_info?.length})`}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="!w-3/4 !min-w-80 !md:w-full !p-0 max-h-[50vh] overflow-y-auto no-scrollbar"
                                    side="bottom"
                                >
                                    <Card className="px-4 pb-6 pt-2 space-y-4 cursor-pointer hover:shadow-md hover:scale-[101%] transition-all">
                                        <CardContent className="p-0 space-y-2">
                                            {item.product_info?.map(
                                                (i, index) => (
                                                    <>
                                                        <div className="flex justify-between flex-col gap-1 text-sm ">
                                                            <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                                                                <span>
                                                                    {index + 1}
                                                                    {". "}
                                                                    Mahsulot
                                                                    nomi:
                                                                </span>
                                                            </div>
                                                            <span className="line-clamp-1 break-all">
                                                                {i?.name || "-"}
                                                            </span>
                                                        </div>
                                                        <div className="flex justify-between items-center gap-3 text-sm ">
                                                            <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                                                                <Container
                                                                    size={16}
                                                                    className="text-primary"
                                                                />
                                                                <span>
                                                                    Umumiy
                                                                    miqdori:
                                                                </span>
                                                            </div>
                                                            <span className="line-clamp-1 break-all">
                                                                {i?.count ||
                                                                    "-"}
                                                            </span>
                                                        </div>
                                                        <div className="flex justify-between items-center gap-3 text-sm ">
                                                            <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                                                                <Container
                                                                    size={16}
                                                                    className="text-primary"
                                                                />
                                                                <span>
                                                                    Fakt
                                                                    miqdori:
                                                                </span>
                                                            </div>
                                                            <span className="line-clamp-1 break-all">
                                                                {i?.fact || "-"}
                                                            </span>
                                                        </div>
                                                        <hr />
                                                    </>
                                                ),
                                            )}
                                        </CardContent>
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
                        {formatCarNumber(item?.number_machine) || "-"}
                    </span>
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <IndentDecreaseIcon
                            size={16}
                            className="text-primary"
                        />
                        <span>Holati:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item?.status === 10 ? (
                            <p className="text-green-500">Success</p>
                        ) : item?.status === 20 ? (
                            <p className="text-orange-500">Waiting</p>
                        ) : (
                            <p className="text-red-500">Cancel</p>
                        )}
                    </span>
                </div>
                <Accordion type="multiple" className="w-full !p-0">
                    <AccordionItem value="item-1" className="border-none">
                        <AccordionTrigger className="flex items-center">
                            <div className="flex items-center text-gray-600">
                                Ko'proq ko'rish...
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-3">
                            <div className="flex justify-between items-center gap-3 text-sm ">
                                <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                                    <FileDigit
                                        size={16}
                                        className="text-primary"
                                    />
                                    <span>Qabul qilingan raqami:</span>
                                </div>
                                <span className="line-clamp-1 break-all">
                                    {item?.act_of_acceptance || "-"}
                                </span>
                            </div>
                            <div className="flex justify-between items-center gap-3 text-sm ">
                                <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                                    <FlagTriangleLeft
                                        size={16}
                                        className="text-primary"
                                    />
                                    <span>Yuborilgan vaqti:</span>
                                </div>
                                <span className="line-clamp-1 break-all">
                                    {item?.dateSend || "-"}
                                </span>
                            </div>
                            <div className="flex justify-between items-center gap-3 text-sm ">
                                <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                                    <FlagTriangleRight
                                        size={16}
                                        className="text-primary"
                                    />
                                    <span>Qabul qilingan vaqti:</span>
                                </div>
                                <span className="line-clamp-1 break-all">
                                    {item?.delivery_date || "-"}
                                </span>
                            </div>
                            <div className="flex justify-between items-center gap-3 text-sm ">
                                <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                                    <MapPinHouse
                                        size={16}
                                        className="text-primary"
                                    />
                                    <span>Yo'nalish raqami:</span>
                                </div>
                                <span className="line-clamp-1 break-all">
                                    {item?.direction || "-"}
                                </span>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}

export default OrderCard
