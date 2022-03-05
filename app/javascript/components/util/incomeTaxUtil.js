export function getTotalTaxAmount(
    provincialCode,
    grossIncome
) {
    const provTax = getProvincialTaxAmount(provincialCode, grossIncome, inflationRate, yearsToInflate);
    const fedTax = getFederalTaxAmount(provincialCode, grossIncome, inflationRate, yearsToInflate);
    return Math.max(provTax, 0) + Math.max(fedTax, 0);
}