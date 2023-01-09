const inquirer = require("inquirer");

//Class for Manager

class Manager {
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
        return "Manager"
    }
}