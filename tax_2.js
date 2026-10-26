//TASK 15: Using Python or PHP or Java or Ruby or JavaScript
//Write a program that takes input of someone's basic salary and benefits, adds them to find the gross salary then uses  the gross salary to find the NHIF. 
//To find the Kenya NHIF Rate using THIS LINK:  
//Write a normal program but use functions if you feel comfortable.

let basic_salary=Number(prompt("Enter basic salary"))
let benefits=Number(prompt("Enter basic salary"))
function calculate_gross(a,b){
    return a+b
}
let gross_salary=calculate_gross(basic_salary,benefits)

//Continue with the program above, then use  the gross salary to find the NSSF. 
//To find the Kenya NSSF Rate  using 6% of the Gross Salary. BUT ONLY A MINIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF. 
//Write a normal program but use functions if you feel comfortable.
function calculate_nssf(gross_salary) {
    const NSSF_RATE = 0.06; 
    const MINIMUM = 18000;
    let nssf_base = gross < MINIMUM ? MINIMUM : gross_salary;
    
    return nssf_base * NSSF_RATE;
}

// TASK 17: NHDF / 'Housing Levy - 1.5%
function calculateNHDF(gross) {
    return gross * 0.015;
}

// TASK 18: Taxable Income
function calculateTaxableIncome(gross, nssf, nhdf, nhif) {
    return gross - (nssf + nhdf + nhif);
}

//TASK 19: Using Python or PHP or Java or Ruby or JavaScript
//Continue with the same program and find the person's PAYEE using the taxable income above.
function calculate_paye(taxable_pay) {}
    let tax=0;
    let remaining=taxable_pay;
    if (remaining > 24000) {
        tax += 24000 * 0.10;
        remaining -= 24000;
    } else {
        tax += remaining * 0.10;
        return Math.max(0, tax - 24000); 
    }

    // Continue with the same program and find the person's PAYEE using the taxable income above.


// PAYEE


function calculate_payee(taxable_income){
    let payee 

    let person_relief = 2400
    
    if (taxable_income=>0 && taxable_income<=24000){
        payee= 2400
    }
    else if(taxable_income=>24000 && taxable_income<=32333){
        payee= 2400+((taxable_income-24000)*0.25)
    }
    else if (taxable_income>=32333 && taxable_income<=500000){
        payee= 2400+((8333*0.25)+((taxable_income-32333)*0.3))
    }
    else if(taxable_income =>500000 && taxable_income<=800000){
        payee= 2400+(8333*0.25)+(467677*0.3)+((taxable_income-500000)*0.325)
    }
    else {
        payee=  2400+ (8333*0.25)+(467677*0.3)+(300000*0.325)+((taxable_income-800000)*0.35)
    }
 return payee - person_relief

    
}
payee = calculate_payee(taxable_income)
console.log(payee)

// Continue with the same program and calculate an individual’s Net Salary using:
//  net_salary = gross_salary - (nhif + nhdf +  nssf + payee)


// NET SALARY
function calculate_net_Salary(g, nhi, nhd, ns, p){
    let net
    net = g - (nhi+ nhd+ ns + p)
    return net

}
net_salary=calculate_net_Salary(gross_salary, nhif, nhdf, nssf, payee)