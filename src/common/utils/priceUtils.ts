export const calculateTotalPrice = (price: number, vat: number): string => {
    return (price * (1 + vat / 100)).toFixed(2);
};

export const formatPriceWithVAT = (priceBeforeVAT: number, vat: number): string => {
    const total = priceBeforeVAT * (1 + vat / 100);
    return total.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};