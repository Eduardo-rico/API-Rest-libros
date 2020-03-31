const jwt = require('jsonwebtoken')

// const autenticar = (req, res, next) => {

    // let {token} = req.headers
    // if(!token){
    //     res.json({mensaje: 'No hay token'})
    // }
    // //token = token.split(' ')[1]
    // try {
    //     const payload = await jwt.verify(token, 'secreto')
    //     req.auth = payload.resultado
    //     next()
    // } catch (error) {
    //     res.json({mensaje: 'No autorizado o token invalido'})
    // }

  

//}


const autenticar = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, 'secreto', (err, lector) => {
            if (err) {
                return res.json({mensaje: 'No autorizado'});
            }

            req.lector = lector.resultado._id;
            next();
        });
    } else {
        res.json({mensaje: 'No autorizado'});
    }
};

module.exports = autenticar