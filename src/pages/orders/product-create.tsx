import { FormDatePicker } from "@/components/form/date-picker"
import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/datepicker"
import { useTypedStoreData } from "@/hooks/useStoreData"
import { Fragment } from "react"
import { useForm } from "react-hook-form"
type Form = {
    product_info: ProductType[]
    act_of_acceptance: string
    delivery_date: string
}

const ProductCreate = () => {
    const { storeData } = useTypedStoreData<OrderType>()
    const form = useForm<Form>({
        defaultValues: storeData ?? {},
    })
    return (
        <Fragment>
            <form className="gap-3 grid md:grid-cols-2 grid-cols-1">
                {storeData?.product_info.map((_, number) => (
                    <>
                        <FormInput
                            required
                            methods={form}
                            name={`product_info.${number}.name`}
                            label={`${number + 1}. Mahsulot nomi`}
                            wrapperClassName={"md:col-span-2"}
                        />
                        <FormInput
                            required
                            methods={form}
                            name={`product_info.${number}.count`}
                            label="Miqdori"
                            wrapperClassName={"md:col-span-1"}
                        />
                        <FormInput
                            required
                            methods={form}
                            name={`product_info.${number}.fact`}
                            label="Fakt"
                            wrapperClassName={"md:col-span-1"}
                        />
                    </>
                ))}
                
                <FormInput
                    required
                    methods={form}
                    name="act_of_acceptance"
                    label={`Qabul qilingan raqam`}
                    wrapperClassName={"md:col-span-1"}
                />
                <FormDatePicker
                    control={form.control}
                    name="delivery_date"
                    label="Yetib kelish sanasi"
                />

                <div className="flex justify-end md:col-span-2">
                    <Button type="submit">Saqlash</Button>
                </div>
            </form>
        </Fragment>
    )
}

export default ProductCreate
