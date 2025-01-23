import React, {useState} from "react";
import { View, Text,TextInput, Pressable, } from "react-native";
import styles from "./styles/style";
import cadastro from "../controllers/Cadastro";
import User from "../models/User";

export default function Criar(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [about, setAbout] = useState('')

   //fazer uso do new User(name, email, password, about) e validar na construct


    function cadastrar(){

        const user = new User(name, email, password, about);
        cadastro.register(user)
        .then(()=>{console.log('processo finalizado')})
        
    }


    return (
        <View style={styles.container}>
            
            <Text style={styles.text}>Criar Novo Registro</Text>
            
            <TextInput 
                placeholder="Name"
                autoCapitalize="words" 
                onChangeText={text=>{setName(text)}}
                value={name}
                style={styles.textInput}
            />

            <TextInput 
                placeholder="Email" 
                inputMode="email" 
                onChangeText={text=>{setEmail(text)}}
                value={email}
                style={styles.textInput}
            />

            <TextInput 
                placeholder="Password" 
                secureTextEntry={true} 
                onChangeText={text=>{setPassword(text)}}
                value={password}
                style={styles.textInput}
            />

            <TextInput 
                placeholder="About" 
                onChangeText={text=>{setAbout(text)}}
                value={about}
                style={styles.textInput}
            />

            <Pressable style={styles.button} onPress={cadastrar}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </Pressable>
        </View>
    )
}