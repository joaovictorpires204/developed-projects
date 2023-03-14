export const numberCurrency = {
    currency: (number: number): string => {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(number)
    }
}