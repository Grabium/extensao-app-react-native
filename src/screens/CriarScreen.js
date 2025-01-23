import React, {useState} from "react";
import { View, Text,TextInput, Pressable, } from "react-native";
import styles from "./styles/style";

export default function Criar(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [about, setAbout] = useState('')

    function cadastrar(){
        console.log('cadastrar')
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