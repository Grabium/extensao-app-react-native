import React, {useEffect, useState} from "react";
import { View, Text } from "react-native";
import cadastro from "../controllers/Cadastro";


export default function Listar(){

    //const [users, setUsers] = useState([]);

    useEffect(()=>{
        
        cadastro.list().then(()=>
            console.log('then ok')
        )

        

        
    }, []);

    return(
        <View>
            <Text>Listar foi invocado</Text>
        </View>
    )
}
