const jwt = require("jsonwebtoken");

exports.issue = function(payload ,expiresIn)
{
return jwt.sign(payload,"i_m_here(~~)",{expiresIn,});
}