function calculateNetSalary(basicSalary, isFemale) {
    // Constants for allowance percentages
    const daPercentage = 0.8; // 80%
    const hraPercentage = 0.3; // 30%
    const taPercentage = 0.1; // 10%

    // Calculate allowances
    const da = basicSalary * daPercentage;
    const hra = basicSalary * hraPercentage;
    const ta = basicSalary * taPercentage;

    // Calculate gross salary
    const grossSalary = basicSalary + da + hra + ta;

    // Calculate tax based on annual allowance
    let taxPercentage;
    if (grossSalary >= 1000000&& grossSalary<=5000000) {
        taxPercentage = 0.2; // 20%
    } else if (grossSalary >= 500000&& grossSalary<1000000) {
        taxPercentage = 0.1; // 10%
    } else {
        taxPercentage = 0.05; // 5%
    }

    // Apply female discount if applicable
    if (isFemale.toLowerCase() === "yes") {
        taxPercentage -= 0.05; // 5% discount for females
    }

    // Calculate tax amount
    const taxAmount = grossSalary * taxPercentage;

    // Calculate net salary
    const netSalary = grossSalary - taxAmount;

    return netSalary;
}

// Prompt the user for input
const basicSalary = parseFloat(prompt("Enter the Basic Salary:")); // Parse input as a floating-point number
const isFemale = prompt("Is the employee female? (yes or no)"); // Ask for female status


const netSalary = calculateNetSalary(basicSalary, isFemale);
console.log(`Net Salary: ${netSalary}`);
