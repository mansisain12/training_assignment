import React from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Button, Modal, ScrollView, SafeAreaView } from "react-native";
import TxtComponent from "./txtcomponent";
import ModalComponent from "./modalcomp";

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
      houseError: '',
      street: '',
      streetError: '',
      city: '',
      cityError: '',
      state: '',
      stateError: ''
    }
  }
  nameValidator() {
    this.state.name == '' ? this.setState({ nameError: "please enter your name" }) :
      this.setState({ nameError: "" })
  }
  emailValidator() {
    this.state.email == "" ? this.setState({ emailError: "please enter your email id" }) :
      this.setState({ emailError: "" })
  }
  passwordValidator() {
    this.state.password == '' ? this.setState({ passwordError: "please enter password" }) :
      this.setState({ passwordError: "" })
  }
  confirmValidator() {
    this.state.password !== this.state.confirmPassword ?
      this.setState({ passwordErrorMessage: "password and confirm password should be same" }) :
      this.setState({ passwordErrorMessage: "" })
  }
  houseValidator() {
    this.state.house == '' ? this.setState({ houseError: 'please enter house no.' }) :
      this.setState({ houseError: '' })
  }
  streetValidator() {
    this.state.street == '' ? this.setState({ streetError: 'please enter street no.' }) :
      this.setState({ streetError: '' })
  }
  cityValidator() {
    this.state.city == '' ? this.setState({ cityError: 'please enter city name' }) :
      this.setState({ cityError: '' })
  }
  stateValidator() {
    this.state.state == '' ? this.setState({ stateError: 'please enter house no.' }) :
      this.setState({ stateError: '' })
  }
  mobileValidator = () => {
    this.state.mobile == "" ? this.setState({ mobileError: "please enter your mobile no." }) :
      this.setState({ mobileError: "" })
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
    else if (this.state.house === '') {
      this.setState({ isModalVisible: false })
    }
    else if (this.state.street === '') {
      this.setState({ isModalVisible: false })
    }
    else if (this.state.city === '') {
      this.setState({ isModalVisible: false })
    }
    else if (this.state.state === '') {
      this.setState({ isModalVisible: false })
    }
    else if (this.state.mobile === '') {
      this.setState({ isModalVisible: false })
    }
    else {
      this.setState({ isModalVisible: true })
    }
  }
  setModalVisible = () => this.setState({ isModalVisible: true })
  closeModal = () => {
    this.setState({ isModalVisible: false })
  }

  render() {

    return (
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.headerline}>Login</Text>

          <TxtComponent
            name="Full Name"
            placeholder="Enter your full name"
            onBlur={() => this.nameValidator()}
            onChangeText={(text) => this.setState({ name: text })}   />

          <Text style={{ color: "red" }}>{"\n"} {this.state.nameError}</Text>

          <TxtComponent
            name="Email"
            placeholder="Enter your email"
            onBlur={() => this.emailValidator()}
            onChangeText={(text) => this.setState({ email: text })} />
          <Text style={{ color: "red" }}>{"\n"} {this.state.emailError}</Text>

          <TxtComponent
            name="Password"
            placeholder="Enter your password"
            onBlur={() => this.passwordValidator()}
            onChangeText={(text) => this.setState({ password: text })} />
          <Text style={{ color: "red" }}>{"\n"} {this.state.passwordError}</Text>

          <TxtComponent
            name="Confirm Password"
            placeholder="Enter your valid password"
            onBlur={() => this.confirmValidator()}
            onChangeText={(text) => this.setState({ confirmPassword: text })} />
          <Text style={{ color: "red" }}>{this.state.passwordErrorMessage}</Text>

          <Text style={{ marginLeft: 10 }}>Address</Text>
          <TxtComponent placeholder='House/Flat Number'
            onBlur={() => this.houseValidator()}
            onChangeText={(text) => this.setState({ house: text })} />
          <Text style={{ color: "red" }}>{this.state.houseError}</Text>

          <TxtComponent placeholder='Street'
            onBlur={() => this.streetValidator()}
            onChangeText={(text) => this.setState({ street: text })} />
          <Text style={{ color: "red" }}>{this.state.streetError}</Text>

          <TxtComponent placeholder='Area/Locality(optional)' />

          <TxtComponent placeholder='City'
            onBlur={() => this.cityValidator()}
            onChangeText={(text) => this.setState({ city: text })} />
          <Text style={{ color: "red" }}>{this.state.cityError}</Text>

          <TxtComponent placeholder='State'
            onBlur={() => this.stateValidator()}
            onChangeText={(text) => this.setState({ state: text })} />
          <Text style={{ color: "red" }}>{this.state.stateError}</Text>

          <TxtComponent
            name='Mobile No.'
            placeholder='Enter your mobile number'
            onBlur={() => this.mobileValidator()}
            onChangeText={(text) => this.setState({ mobile: text })} />
          <Text style={{ color: "red" }}>{this.state.mobileError}</Text>

          <Button title="Submit" onPress={() => this.buttonValidator()}></Button>

          <ModalComponent
            visible={this.state.isModalVisible == true}
            name={this.state.name}
            email={this.state.email}
            password={this.state.password}
            confirmPassword={this.state.confirmPassword}
            house={this.state.house}
            street={this.state.street}
            city={this.state.city}
            state={this.state.state}
            mobile={this.state.mobile}
            touchmodal={() => { this.closeModal() }}
          />
        </ScrollView>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  headerline: {
    fontSize: 25, fontWeight: "900", textAlign: "center"
  }
})
export default Userform;