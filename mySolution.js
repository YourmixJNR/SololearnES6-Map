function main() {
    var name = readLine();
    var position = readLine();
    let employees = new Map([
        ["Richard", "Developer"],
        ["Maria", "SEO Specialist"],
        ["Tom", "Product Manager"],
        ["David", "Accountant"],
        ["Sophia", "HR Manager"]
    ]);

    // Add the new employee to the map
    employees.set(name, position);

    // Output the list of employees
    for (var [employee, job] of employees.entries()) {
        console.log(`${employee} : ${job}`);
    }
}
