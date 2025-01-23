import { View, Text } from "react-native";
import styles from "../styles/style";

function User({itemUser}){
    console.dir(itemUser)
    return(
        <View style={styles.itemContainer}>
            <Text style={styles.itemtexto}>Id:.......{itemUser.id}</Text>
            <Text style={styles.itemtexto}>Nome:.....{itemUser.name}</Text>
            <Text style={styles.itemtexto}>Email:....{itemUser.email}</Text>
            <Text style={styles.itemtexto}>About Me:.{itemUser.about}</Text>
            <Text>  </Text>
        </View>
    )
}

export default User;