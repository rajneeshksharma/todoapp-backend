const Passport = require('passport');
const PassportJWT = require('passport-jwt');


exports.configJWTStrategy = () => {
    const Opts ={
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey :  "i_m_here(~~)",
    };
    Passport.use(new PassportJWT.Strategy(Opts,(payload,done)=>{

        User.findOne({_id : payload._id}, (err,user) => {
            if(err)
            return done(err);
            if(user)
            return done(null, user);
            return done(null, false);
        })
     
    }));
};
