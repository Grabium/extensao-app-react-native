//import User from "./User";

export default class Model{

    name:       string;
    email:      string;
    password:   number;
    about:      string;

    constructor(
        name:       string,
        email:      string,
        password:   number,
        about:      string,){
            
        this.name     = name;
        this.email    = email;
        this.password = password;
        this.about    = about;
    }

    public attRequired(){
        
        
        let pending = this.password == 0 ? 'password' : undefined ;
        pending = this.email == '' ? 'email' : undefined ; 
        pending = this.name == '' ? 'name' : undefined ;

        return pending;
     
    }
    
    public validarEmail():boolean{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(this.email);
    }
} 