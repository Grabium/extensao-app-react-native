import React, {useEffect, useState} from "react";
import { View, Text } from "react-native";
import api from "../provider/axios";


export default function Listar(){

    //const [users, setUsers] = useState([]);

    useEffect(()=>{
        async function loadUsers(){
            const response = await api.get('/users');
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            console.log(response.request);

        }

        loadUsers();
    }, []);

    return(
        <View>
            <Text>Listar foi invocado</Text>
        </View>
    )
}
