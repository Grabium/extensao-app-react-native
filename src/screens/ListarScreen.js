import React, {useEffect, useState} from "react";
import { View, Text, FlatList } from "react-native";
import cadastro from "../controllers/Cadastro";
import User from "./components/User";
import styles from "./styles/style";

export default function Listar(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        
        cadastro.list().then((resp)=>{
            
            console.log('Recebendo dados do back-end...');
            console.log(resp.msg);
            console.log('Quantidade de dados: '+resp.dataLen);
            console.log(resp.data);
            
            setUsers(resp.data);
        })

        

        
    }, []);

    return(
        <View style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={(item,index) => String(item.id)}
                renderItem={({item}) => <User itemUser={item}/>}
            />

            

            
        </View>
    )
}
