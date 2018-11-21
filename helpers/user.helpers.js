const joi = require('joi');
const bcrypt = require('bcryptjs');


exports.validateSignup = function (body) {
        const schema = joi.object().keys({
            firstName: joi.string().required(),
            lastName: joi.string().required(),
            email: joi.string().email().required(),
            password: joi.string().required(),
        });
        return joi.validate(body, schema);
    },
    exports.validateLogin = function (body) {
        const schema = joi.object().keys({
            email: joi.string().email().required(),
            password: joi.string().required(),
        });
        return joi.validate(body, schema);
    },
    // exports.validateSignupSocial = function (body) {
    //     const schema = joi.object().keys({
    //         firstName: joi.string().required(),
    //         lastName: joi.string().required(),
    //         email: joi.string().email().required(),
    //         social_id: joi.string().required(),
    //         provider: joi.string().required(),
    //     });
    //    joi.validate(body, schema).then(
    //        (value) => { 
    //         console.log(value);   
    //         return true }
    //    ).catch(
    //        (err) => { 
    //         console.error(err);   
    //         return err.details[0].message }
    //    )
    // },
    exports.encryptPassword = function (plainPass) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(plainPass, salt);
    },
    exports.comparePassword = function (plainPass, hashPass) {
        return bcrypt.compareSync(plainPass, hashPass);
    }