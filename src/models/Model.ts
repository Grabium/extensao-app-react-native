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

    /***
     * return string    to not-validated
     * return undefined to validated
    ****/

    public validateRequireds():string | undefined {
        let pending = this.password == 0 ? 'password' : undefined ;
        pending = this.email == '' ? 'email' : undefined ; 
        pending = this.name == '' ? 'name' : undefined ;

        return pending;
     
    }

    /***
     * true = validated
     * false = not-validated
    ***/
    
    public validateEmail():boolean{
        const ifValid = this.email == this.name+'@'+this.name ? true : false ;
        return ifValid;
    }
} 