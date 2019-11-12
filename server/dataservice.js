//the email is unique and used as a primary key
const users = [
    { name: 'Jay', email: 'jay@jay.com' },
    { name: 'Tudor', email: 'tudor@example.com' },
]

const dataservice = {

    createUser: (userObject = {}) => {
        users.push(userObject)
    },
    getUsers: (opts = {}) => {
        return users
    },
    updateUser: (userObject) => {

        const index = users.findIndex(i => DataTransferItem.email === userObject.email)
        if (index === -1) {
            // TODO throw exception
        }
        users.splice(index, 1, userObject)

    },

    //right now PK is the e-mail
    deleteUser: (pkValue) => {
        const index = users.findIndex(i => DataTransferItem.email === pkValue)
        if (index === -1) {
            // TODO throw exception
        }
        users.splice(index, 1)
    },
}

module.exports = dataservice
