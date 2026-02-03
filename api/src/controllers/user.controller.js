const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.register = async (request, response) => {

    var data = new UserModel({
        name: request.body.name,
        email: request.body.email,
        mobile_no: request.body.mobile_no,
        // password: request.body.password
        password: bcrypt.hashSync(request.body.password, 1)
    })
    await data.save()
        .then((result) => {
            var result = {
                status: true,
                message: 'successfully registered',
                data: result
            }
            response.send(result);
        })
        .catch((error) => {
            var error = {
                status: false,
                message: 'error in registered',
            }
            response.send(error);
        })

}

exports.login = async (request, response) => {


    await UserModel.findOne({
        email: request.body.email
    })
        .then((result) => {
            if (result) {
                var compare = bcrypt.compareSync(request.body.password, result.password)
                console.log(result)
                console.log(result.password)
                if (compare) {
                    var token = jwt.sign({
                        userdata: result
                    },
                        'secretkey',
                        { expiresIn: '1h' }
                    );

                    var resp = {
                        status: true,
                        message: 'successfully login',
                        // data: result,
                        token: token
                    }
                }
                else {
                    var resp = {
                        status: false,
                        message: 'incorrect password',
                    }
                }
            }
            else {
                var resp = {
                    status: false,
                    message: 'incorrect email and password'
                }
            }
            response.send(resp)
        })
        .catch((error) => {
            var error = {
                status: false,
                message: 'something went wrong',
                data: error.message
            }
            response.send(error)
        })
}

exports.profile = async (request, response) => {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.send({
            status: false,
            token_error: true,
            message: 'token required'
        });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return response.send({
            status: false,
            token_error: true,
            message: 'invalid token'
        });
    }

    jwt.verify(token, 'secretkey', function (error, decoded) {
        if (error) {
            return response.send({
                status: false,
                message: 'incorrect token',
                token_error: true
            });
        }

        response.send({
            status: true,
            message: 'profile found',
            data: decoded.userdata
        });
    });
};

