function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;

    // PAYE Tax Calculation
    let paye = 0;
    if (grossSalary > 24000) paye = 0.3 * grossSalary;
    else if (grossSalary > 15000) paye = 0.25 * grossSalary;
    else if (grossSalary > 10000) paye = 0.2 * grossSalary;

    // NHIF and NSSF Deductions
    let nhif = grossSalary * 0.025;
    let nssf = grossSalary * 0.06;

    let netSalary = grossSalary - (paye + nhif + nssf);
    return { grossSalary, paye, nhif, nssf, netSalary };
}

// Example usage:
let basicSalary = parseFloat(prompt("Enter Basic Salary:"));
let benefits = parseFloat(prompt("Enter Benefits:"));
console.log(calculateNetSalary(basicSalary, benefits));
