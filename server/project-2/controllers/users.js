const { v4: uuidv4 } = require("uuid");
let users = []

const getUsers = (req, res) => {
    
    res.send(users);

}

const getUser = (req, res) => {

    const { id } = req.params;
    const user = users.find((p) => p.id === id)
    res.send(user);

}

const createUser = (req, res) => {

    const user = { id: uuidv4(), ...req.body }
    users.push(user);

    res.send(`User Added to database`);

}

const updateUser = (req, res) => {

    const { id } = req.params;
    const { firstName, lastName, age } = req.body
    const user = users.find((p) => p.id === id)


    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.age = age || user.age;

    res.send(`User with id ${id} has been updated in the database`);

}

const deleteUser = (req, res) => {

    const { id } = req.params;
    users = users.filter((p) => p.id !== id)

    res.send(`User with this ${id} has been deleted`);

}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}