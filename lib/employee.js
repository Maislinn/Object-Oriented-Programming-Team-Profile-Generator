const inquirer = require("inquirer");

//Class for employee

class Employee {
    const(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee;
