import expressJwt from "express-jwt";

export const requireSignin = expressJwt({
    getToken: () => requireSignin.cookies.token,
    secret: process.env.JWT_SECRET,
    algorithms: ["HS265"],
})