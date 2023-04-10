const handleSuccess = require('../service/handleSuccess');
const errorHandle = require('../service/errorHandle');

const users = require('../model/users')

const user = {
    async getUsers(req, res) {
        const allUsers = await users.find();
        handleSuccess(res, allUsers);
    },
    async createUsers(req, res) {
        try {
            const data = req.body;
            if (data.name) {
                const newUsers = await users.create(
                    {
                        name: data.name,
                        gender: data.gender,
                        email: data.email,
                        password: data.password,
                        photo: data.photo
                    }
                );
                handleSuccess(res, newUsers);
            } else {
                errorHandle(res);
            }
        } catch (error) {
            errorHandle(res);
        }
    }
}

module.exports = user;