import React from "react";
import { View, Modal, StyleSheet, Text, Button } from "react-native";

class ModalComponent extends React.Component {
    render() {
        let { visible, name, email, house, city, street, state, mobile, password, confirmPassword, touchmodal } = this.props;
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}>

                    <View style={styles.modal}>
                        <View style={styles.child}>
                            <Text>please check filled information....</Text>
                            <Text>Name: {name}</Text>
                            <Text>Email: {email}</Text>
                            <Text>Password: {password}</Text>
                            <Text>Confirm: Password: {confirmPassword}</Text>
                            <Text>Address: {house},{street},{city},{state}</Text>
                            <Text>Mobile No. : {mobile}</Text>

                            <Button
                            title="Close Modal"
                            onPress={touchmodal} />

                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modal:
    {
        height: "50%", margin: 30, marginTop: 250
    },
    child:
    {
        backgroundColor: "lightgreen", height: "100%", borderRadius: 20, borderWidth: 10,
    },
})
export default ModalComponent;