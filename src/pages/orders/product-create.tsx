import { FormDatePicker } from "@/components/form/date-picker"
import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/datepicker"
import { useTypedStoreData } from "@/hooks/useStoreData"
import { cn } from "@/lib/utils"
import { Copy, Plus, Trash2 } from "lucide-react"
import { Fragment, useEffect } from "react"
import { useFieldArray, useForm, useWatch } from "react-hook-form"
type Form = {
    product_info: ProductType[]
    act_of_acceptance: string | null
    delivery_date: string | null
}

const ProductCreate = () => {
    const { storeData } = useTypedStoreData<OrderType>()
    const form = useForm<Form>({
        defaultValues: {
            act_of_acceptance: null,
            delivery_date: null,
            product_info: [{ name: "", fact: 0, count: 0 }],
        },
    })

    const { fields, append, remove, insert } = useFieldArray({
        control: form.control,
        name: "product_info",
    })

    const copyClient = (index: number) => {
        const productToCopy = form.getValues(`product_info.${index}`)
        insert(index + 1, productToCopy)
    }

    const addNewClient = () => {
        append({
            name: "",
            count: 0,
            fact: 0,
        })
    }

    const onSubmit = (data: Form) => {
        console.log("Datalar: ", data)
    }

    useEffect(() => {
        if (storeData?.id) {
            const transformedData: Form = {
                act_of_acceptance: storeData?.act_of_acceptance ?? null,
                delivery_date: storeData?.delivery_date ?? null,
                product_info: storeData?.product_info?.map((i) => ({
                    name: i?.name ?? "",
                    fact: 0,
                    count: 0,
                })),
            }
            form.reset(transformedData)
        }
    }, [storeData])

    const watchedProducts = useWatch({
        control: form.control,
        name: `product_info`,
    })

    return (
        <Fragment>
            <form
                className="flex flex-col gap-3"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                {fields?.map((_, index) => (
                    <div
                        key={index}
                        className="gap-3 grid md:grid-cols-7 grid-cols-1 relative items-end"
                    >
                        <h1 className="text-lg font-semibold col-span-7">
                            Mahsulot #{index + 1}
                        </h1>
                        <FormInput
                            required
                            methods={form}
                            name={`product_info.${index}.name`}
                            label={`Mahsulot nomi`}
                            wrapperClassName={"md:col-span-7"}
                        />
                        <FormInput
                            required
                            methods={form}
                            name={`product_info.${index}.count`}
                            label="Miqdori"
                            wrapperClassName={"md:col-span-3"}
                        />
                        <FormInput
                            required
                            methods={form}
                            name={`product_info.${index}.fact`}
                            label="Fakt"
                            wrapperClassName={"md:col-span-3"}
                        />

                        <div className="flex justify-end col-span-1">
                            {fields.length > 1 && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    className="text-red-500 !h-9"
                                    onClick={() => remove(index)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
                <div className="flex justify-center md:col-span-2">
                    <Button
                        type="button"
                        variant="outline"
                        className="rounded-full md:min-h-10 md:min-w-10 h-10 w-10  bg-slate-100 dark:bg-background "
                        onClick={() => {
                            addNewClient()
                        }}
                    >
                        <Plus className="md:h-10 md:w-10 min-w-8 min-h-8 p-1 dark:text-white rounded-full hover:bg-muted" />
                    </Button>
                </div>
                <div className="grid grid-cols-2 items-center gap-3">
                    <FormInput
                        required
                        methods={form}
                        name="act_of_acceptance"
                        label={`Qabul qilingan raqam`}
                        wrapperClassName={"md:col-span-1"}
                    />
                    <FormDatePicker
                        required
                        control={form.control}
                        name="delivery_date"
                        label="Yetib kelish sanasi"
                    />
                </div>

                <div className="flex justify-end">
                    <Button type="submit">Saqlash</Button>
                </div>
            </form>
        </Fragment>
    )
}

export default ProductCreate
