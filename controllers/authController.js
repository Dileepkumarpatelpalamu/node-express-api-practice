import User from "../models/userModel.js"
import userValidation from "../validators/userSchemaValidation.js"
class AuthController{
    static home(req,res,next){
        res.render('index')
    }
    static about(req,res,next){
        res.render('index')
    }
    static services(req,res,next){
        res.render('index')
    }
    static login(req,res,next){
        res.render('login')
    }
    static doLogin(req,res,next){
        res.render('index')
    }
    static signup(req,res,next){
        res.render('signup')
    }
     static async doSignup (req,res,next){
        const {first_name,last_name,user_name,email,mobile_no,password} = req.body
        const { error,value} = userValidation.validate(req.body)
        if (error){
            res.redirect('/signup')
        }
        else{
            res.render('signup');
        }
    }
    static contact(req,res,next){
        res.render('index')
    }
}

export default AuthController