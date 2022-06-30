class User {
    constructor(firstname, lastname, address) {
        // setter
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
    }
}

let users = [];

function addUser() {
    let lastname = document.getElementById("lastname").value.toLowerCase();
    let firstname = document.getElementById("firstname").value.toLowerCase();
    let address = document.getElementById("address").value.toLowerCase();
    users.push(new User(firstname, lastname, address));

    console.log(users[0].firstname);
    console.log(users[0].lastname);
    console.log(users[0].address);
    console.log(users.length);
}