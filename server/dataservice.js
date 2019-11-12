//the email is unique and used as a primary key
const users = [
    { name: 'Jay', email: 'jay@jay.com' },
    { name: 'Tudor', email: 'tudor@example.com' },
]

const delayedPromise = (data, err = null) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        }, 500)
    })
}

const dataservice = {

    createUser: (userObject = {}) => {
        if (!userObject.email) {
            throw new Error('You must provide an e-mail')
        }
        const foundUser = users.find(i => i.email === userObject.email)
        if (foundUser !== undefined) {
            throw new Error('Not allowed ;)')
        }
        users.push(userObject)
        return delayedPromise(true)
    },
    getUsers: (opts = {}) => {
        return delayedPromise(users)
    },
    updateUser: (userObject) => {

        const index = users.findIndex(i => i.email === userObject.email)
        if (index === -1) {
            throw new Error(`Cannot update ${pkValue}`)
            // TODO throw exception
        }
        users.splice(index, 1, userObject)

    },

    //right now PK is the e-mail
    deleteUser: (pkValue) => {
        const index = users.findIndex(i => i.email === pkValue)
        if (index === -1) {
            // TODO throw exception
            throw new Error(`Cannot delete ${pkValue}`)
        }
        users.splice(index, 1)
        return delayedPromise(true)
    },
}

module.exports = dataservice
