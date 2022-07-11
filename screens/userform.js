import React from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Button, Modal, KeyboardAvoidingView } from "react-native";

class Userform extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      nameError: "",
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      confirmPassword: '',
      passwordErrorMessage: '',
      address: '',
      addressError: '',
      mobile: '',
      mobileError: '',
      isModalVisible: false,
      secureTextEntry: true,
      house: '',
      street: '',
      area: '',
      state: '',
      city: ''
    }
  }

  nameValidator() {
    if (this.state.name == "") {
      this.setState({ nameError: "please enter your name" })
    }
    else {
      this.setState({ nameError: "" })
    }
  }

  emailValidator() {
    if (this.state.email == "") {
      this.setState({ emailError: "please enter your email id" })
    }
    else {
      this.setState({ emailError: "" })
    }
  }

  passwordValidator() {
    if (this.state.password == "") {
      this.setState({ passwordError: "please enter password" })
    }
    else {
      this.setState({ passwordError: "" })
    }
  }

  confirmValidator() {
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ passwordErrorMessage: "password and confirm password should be same" })
    }
    else {
      this.setState({ passwordErrorMessage: "" })
    }
  }

  addressValidator() {
    if (this.state.address == "") {
      this.setState({ addressError: "please enter address" })
    }
    else {
      this.setState({ addressError: "" })
    }
  }

  mobileValidator() {
    if (this.state.mobile == "") {
      this.setState({ mobileError: "please enter your mobile no." })
    }
    else {
      this.setState({ mobileError: "" })
    }
  }

  buttonValidator = () => {
    if (this.state.name === '') {
      this.setState({ isModalVisible: false })
    }
    else if (this.state.email === '') {
      this.setState({ isModalVisible: false })
    }
    else if (this.state.password === '') {
      this.setState({ isModalVisible: false })
    }
    else if (this.state.confirmPassword === '') {
      this.setState({ isModalVisible: false })
    }
    else if (this.state.address === '') {
      this.setState({ isModalVisible: false })
    }
    else if (this.state.mobile === '') {
      this.setState({ isModalVisible: false })
    }
    else {
      this.setState({ isModalVisible: true })
    }
  }

  setModalVisible = () => {
    this.setState({ isModalVisible: true })
  }
  closeModal = () => {
    this.setState({ isModalVisible: false })
  }

  render() {

    let { input, header, button, press, modal, child, headline, modaldata
      , place1, place2, place3, place4, place5, place6, addstyle
    } = this.props;

    return (
      <View style={header}>
        <Text style={headline}>Login</Text>

        <View>

          <TextInput placeholder={place1}
            autoCapitalize="none"
            style={input}

            onBlur={() => this.nameValidator()}
            onChangeText={(text) => this.setState({ name: text })} />

          <Text style={{ color: "red" }}>{"\n"} {this.state.nameError}</Text>

        </View>

        <View>
          <TextInput placeholder={place2}
            style={input}
            onBlur={() => this.emailValidator()}
            onChangeText={(text) => this.setState({ email: text })} />

          <Text style={{ color: "red" }}>{"\n"} {this.state.emailError}</Text>

        </View>

        <View>

          <TextInput placeholder={place3}
            style={input}
            keyboardType="numeric"
            maxLength={5}
            onBlur={() => this.passwordValidator()}
            onChangeText={(text) => this.setState({ password: text })}
            secureTextEntry={true}
          />

          <Text style={{ color: "red" }}>{"\n"} {this.state.passwordError}</Text>
        </View>

        <View>
          <TextInput placeholder={place4}
            style={input}
            secureTextEntry={true}
            maxLength={5}
            onBlur={() => this.confirmValidator()}
            onChangeText={(text) => this.setState({ confirmPassword: text })}
          />

          <Text style={{ color: "red" }}>{"\n"} {this.state.passwordErrorMessage}</Text>

        </View>

        <View>

          <TextInput style={input} placeholder={place5}
            // style={input}
            onBlur={() => this.addressValidator()}
            onChangeText={(text) => this.setState({ address: text })} />

          <Text style={{ color: "red" }}>{"\n"} {this.state.addressError}</Text>

        </View>

        <View>
          <TextInput placeholder={place6}
            style={input}
            onBlur={() => this.mobileValidator()}
            onChangeText={(text) => this.setState({ mobile: text })} />

          <Text style={{ color: "red" }}>{"\n"} {this.state.mobileError}</Text>


        </View>


        <View style={button}>
          <TouchableOpacity
            onPress={() => this.buttonValidator()}

          // onPress={()=>{this.setModalVisible(true)} }
          >
            <Text style={press}>Submit</Text>
          </TouchableOpacity>



          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.isModalVisible == true}
          >

            <View style={modal}>
              <View style={child}>
                {/* <Text style={{ fontSize: 15 }}>
                  please ckeck filled information....</Text> */}
                <Text style={{ fontSize: 15 }}>{modaldata}</Text>

                <Text>Name: {this.state.name}</Text>
                <Text>Email: {this.state.email}</Text>
                <Text>Password: {this.state.password}</Text>
                <Text>Confirm: Password: {this.state.confirmPassword}</Text>
                <Text>Address: {this.state.address}</Text>
                <Text>Mobile No. : {this.state.mobile}</Text>

                <Button title="Close Modal"
                  onPress={() => { this.closeModal() }} />

              </View>
            </View>

          </Modal>

        </View>

      </View>

    )
  }
}

export default Userform;