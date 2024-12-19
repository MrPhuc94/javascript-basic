// Object constructor

// Can create it by declaration function or expression function

function myObject (name, age, sex, job) {
    this.name =name;
    this.age =age;
    this.sex = sex;
    this.job =job;

    this.information = function () {
        return `${this.job} ${this.name}`
    }
}

myObject.prototype.lastName = 'tran';
myObject.prototype.getFullName = function () {
    return `${this.lastName} ${this.name}`
}

const customer = new myObject('Phuc', 30, 'Male', 'IT');
console.log(customer.information());
console.log(customer.getFullName());
