const User = require('../models/user.model');
const helper = require('../helpers/user.helpers');
const jwt = require('../helpers/jwt.helper');
exports.addUser = async function (req, res) {
        try {
            console.log(req.body);
            helper.validateSignup(req.body).then((values) => {
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

            helper.validateLogin(req.body).then(
                (values) => {
                    User.findOne({
                        email: req.body.email
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
                                const token = jwt.issue({
                                    _id: user._id
                                }, '1d');
                                res.json({
                                    code: 200,
                                    message: 'sucessfully Signin',
                                    data: [{
                                        user,
                                        token: token
                                    }]
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
    exports.socialControl = async function req(req, res) {
        try {
            helper.validateSignupSocial(req.body).then(
                values => {
                    User.findOne({
                        social_id: values.social_id
                    }).then(
                        (userData) => {
                            if (userData) {
                                if (userData.email === values.email) {
                                    const token = jwt.issue({
                                        _id: userData._id
                                    }, '1d');
                                    res.json({
                                        code: 200,
                                        message: 'sucessfully Signin',
                                        data: [{
                                            userData,
                                            token: token
                                        }]
                                    });
                                } else {
                                    res.status(404).json({
                                        code: 404,
                                        message: 'there is some error in your credentials',
                                        data: []
                                    });
                                }
                            } else {
                                console.log('save kra de bhai');
                                User.create({
                                    firstName: values.firstName,
                                    lastName: values.lastName,
                                    email: values.email,
                                    social_id: values.social_id,
                                    provider: values.provider
                                }).then(user => {
                                    const token = jwt.issue({
                                        _id: user._id
                                    }, '1d');
                                    res.json({
                                        code: 200,
                                        message: 'Sucessfully Signup now login',
                                        data: [{
                                            user,
                                            token: token
                                        }]
                                    });
                                }).catch(err => {
                                    res.status(400).json({
                                        code: 400,
                                        message: err.errmsg,
                                        data: []
                                    });
                                });
                            }
                        }
                    ).catch(
                        (err) => {
                            res.status(500).json(err);
                        }
                    );
                }
            ).catch(
                err => {
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
    }