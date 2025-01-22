import api from "../provider/axios";

class Cadastro{
    
    private debgResp(response:any){
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        console.log(response.request);
    }
    
    public async list(){

        console.log('Iniciando   list()...');
        try{
            let response = await api.get('/users');
            let data     = response.data.data;
            let msg      = response.data.msg;
            
            let resp = {
                msg     : 'API respondeu: \''+msg+'\'',
                dataLen : data.length,
                data    : data
            };

            console.log('Finalizando list(). '+resp.msg);
            //debgResp(response);
            return resp;
        
        }catch(error:any){
            const resp = {
                msg    : 'Não foi possível concluir: '+error.response.data
            };

            console.log(resp.msg);
            return resp;
        }    
    }


}

const cadastro:Cadastro = new Cadastro();
console.log('Objeto [Cadastro] foi instanciado.')
export default cadastro;