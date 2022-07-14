import React from "react";
import { View, TextComponent, StyleSheet, TextInput, Text, ScrollView, StatusBar } from "react-native";

class TxtComponent extends React.Component {

    render() {
        let { placeholder, name, onBlur, onChangeText} = this.props;

        return (
            <View>
                <Text style={styles.name}>{name}</Text>

                <TextInput
                    style={styles.txtstyle}
                    placeholder={placeholder}
                    autoCapitalize="none"
                    onBlur={onBlur}
                    onChangeText={onChangeText} 
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:
        { justifyContent: "center", flex: 1 },

    headline:
        { fontSize: 25, fontWeight: "900", textAlign: "center" },

    txtstyle:
        { borderWidth: 1.5, borderRadius: 20,marginHorizontal: "5%",paddingLeft:11,height:50
    },
    name:{
        marginLeft:10
    }
})

export default TxtComponent;