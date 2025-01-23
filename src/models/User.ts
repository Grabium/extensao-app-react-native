import Model from "./Model";

class User extends Model{

    
    name:       string;
    email:      string;
    password:   number;
    about:      string;

    constructor(
        name:       string,
        email:      string,
        password:   number,
        about:      string,

    ){
        super(  name,
                email,
                password,
                about
        );
        
        this.name     = name;
        this.email    = email;
        this.password = password;
        this.about    = about;
    
        const verifyNull = this.attRequired();
        const statusEmail = this.validarEmail();
        console.log('Email: '+statusEmail);
    }

    public get(){
        return {
            name:     this.name, 
            email:    this.email,
            password: this.password,
            about:    this.about 
        }
    }
    
}

export default User;


    

    //fazer uso do new User(name, email, password, about) e validar na construct