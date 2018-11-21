const User = require('../models/user.model');
const helper = require('../helpers/user.helpers');
const jwt = require('../helpers/jwt.helper');
exports.addUser = async function (req, res) {
        try {
            const body = {
                firstName: "rajaksd",
                lastName: "ahdgsahdsfsdgd",
                email: "sdgfhsadsadssasd@gmadfgfil.com",
                password: "sdfhjksdhfjkshdf",
            };
            helper.validateSignup(body).then((values) => {
                let encPass = helper.encryptPassword(values.password);
                User.create({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: encPass
                }).then(user => {
                    res.json({
                        code: 200,
                        message: 'Sucessfully Signup',
                        data: [user]
                    });
                }).catch(err => {
                    res.status(400).json({
                        code: 400,
                        message: err.errmsg,
                        data: []
                    });
                });
            }).catch(
                (err) => {
                    res.status(400).json({
                        code: 400,
                        message: err.details[0].message,
                        data: []
                    });
                }
            )

        } catch (err) {
            res.status(500).json(err);
        }
    },
    exports.loginUser = function (req, res) {
        try {
            const body = {
                email: "sdgfhsadsadssasd@gmadfgfil.com",
                password: "sdfhjksdhfjkshdf",
            };
            helper.validateLogin(body).then(
                (values) => {
                    User.findOne({
                        email: body.email
                    }).then(
                        (user) => {
                            const authpassword = helper.comparePassword(values.password, user.password);
                            if (!authpassword) {
                                res.status(404).json({
                                    code: 404,
                                    message: 'there is some error in your credentials',
                                    data: []
                                });
                            } else {
                                const token = jwt.issue({_id: user._id}, '1d');
                                res.json({
                                    code: 200,
                                    message: 'sucessfully Signin',
                                    data: [{user,token : token}]
                                });
                            }
                        }
                    ).catch(
                        (err) => {
                            console.error(err);
                        }
                    )
                }).catch(
                (err) => {
                    res.status(400).json({
                        code: 400,
                        message: err.details[0].message,
                        data: []
                    });
                });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    exports.signupSocial = async function req(req, res){
        try {
            const body = {
                firstName: "rajaksd",
                lastName: "ahdgsahdsfsdgd",
                email: "sdsa@iasl.com",
                social_id: 'sadghasgd',
                provider: 'fsdgfgdsfsd',
            };

        } catch (err) {
            res.status(500).json(err);
        }
    }