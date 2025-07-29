import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const formatCarNumber = (input: string): string => {
    if (!/^\d{2}[A-Z]\d{3}[A-Z]{2}$/.test(input)) {
        throw new Error("Noto‘g‘ri raqam formati")
    }

    const region = input.slice(0, 2) // 50
    const letter1 = input.slice(2, 3) // Z
    const number = input.slice(3, 6) // 986
    const letters2 = input.slice(6) // AB

    return `${region} ${letter1} ${number} ${letters2}`
}
