import Model from "./Model";

class User extends Model{

    
    name:       string;
    email:      string;
    password:   number;
    about:      string;
    private verifyNull: string | undefined;
    private statusEmail: boolean;

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
    
        this.verifyNull = this.validateRequireds();
        this.statusEmail = this.validateEmail();
        console.log('Email: '+this.statusEmail);
        console.log('Email: '+this.verifyNull);
    }

    public get(){
        return {
            name:     this.name, 
            email:    this.email,
            password: this.password,
            about:    this.about 
        }
    }

    public validation(){
        if(typeof this.verifyNull == "string"){
            return 'Campo: ['+this.verifyNull+'] não válido';
        }

        if(this.statusEmail == false){
            return 'Campo: [email] não válido';
        }

        return true;
    }
    
}

export default User;


    

    //fazer uso do new User(name, email, password, about) e validar na construct