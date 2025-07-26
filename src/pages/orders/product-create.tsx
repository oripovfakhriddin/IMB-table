import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import React, { Fragment } from "react"
import { useForm } from "react-hook-form"

const ProductCreate = () => {
    const form = useForm()
    return (
        <Fragment>
            <form className="gap-3 grid md:grid-cols-2 grid-cols-1">
                <FormInput
                    required
                    methods={form}
                    name="name"
                    label="F.I.O"
                    wrapperClassName={"md:col-span-2"}
                />
                <FormInput
                    required
                    type="number"
                    methods={form}
                    name="count"
                    label="Miqdori"
                    wrapperClassName={"md:col-span-2"}
                />
                <FormInput
                    required
                    type="number"
                    methods={form}
                    name="fact"
                    label="Fakt"
                    wrapperClassName={"md:col-span-2"}
                />
                <div className="flex justify-end md:col-span-2">
                    <Button type="submit">Saqlash</Button>
                </div>
            </form>
        </Fragment>
    )
}

export default ProductCreate
