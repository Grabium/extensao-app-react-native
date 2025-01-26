import { View, Text, Pressable, Alert, Modal, Button } from "react-native";
import styles from "../styles/style";
import cadastro from "../../controllers/Cadastro";
import { useState } from "react";


function User({itemUser}){
    
    const [uid, setUid ] = useState(itemUser.id);
    const [uname, setName ] = useState(itemUser.name);
    const [isModalVisible, setModalVisible] = useState(false);

    async function deletar(){
        
        cadastro.exclude(uid)
        .then((resp)=>{
            console.log(resp.msg);
            setModalVisible(false);
            Alert.alert('Recarregue a lista puxando para baixo.', resp.msg);
        });
        
        

        
    }

    


    return(
        <View style={styles.itemContainer}>
            <Text style={styles.itemtexto}>Id:.......{itemUser.id}</Text>
            <Text style={styles.itemtexto}>Nome:.....{itemUser.name}</Text>
            <Text style={styles.itemtexto}>Email:....{itemUser.email}</Text>
            <Text style={styles.itemtexto}>About Me:.{itemUser.about}</Text>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                
            >
                <View style={styles.itemContainer}>
                    <Text style={styles.itemtexto}>Deletar {uname} - {uid}?</Text>
                    <Button title="Deletar" onPress={()=>{deletar()}} />
                    <Button title="Não Deletar" onPress={()=>setModalVisible(false)} />
                </View>
            </Modal>
            <Pressable onPress={()=>setModalVisible(true)}>
                <Text>DELETE</Text>
            </Pressable>
            
        </View>
    )
}

export default User;