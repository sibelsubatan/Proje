import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { AppColor, AppColor2, Secondary, White } from "../helpers/colors";
import { wh, ww } from "../helpers";
import { Title } from "../components/Title";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { HomeIcon, UserIcon, PasswordIcon, EyeN, EyeY } from "../assets/Icons";
import { Button, CheckBox, Icon, Input } from "react-native-elements";
import { Card, Divider } from "react-native-elements";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { submitUser } from "../../apiServices";

export const Register = ({ navigation }) => {
    const [register, setRegister] = useState(false)

    const [loading, setLoading] = useState(false);
    const [listTum, setlistTum] = useState([]);
    const [List, setList] = useState([]);
    const [listEmir, setlistEmir] = useState([]);
    const [yetki, setyetki] = useState([]);
    const [yetki2, setyetki2] = useState([]);
    const [userInfo, setUserInfo] = useState([])
    const [userInfoStatus, setUserInfoStatus] = useState(false)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [secureText, setSecureText] = useState(false)
    const [rememberMe, setRememberMe] = useState(false);
    const [passwordControl, setPasswordControl] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [secureText2, setSecureText2] = useState(false)

    useEffect(() => {
    }, [])

    const logIn = () => {
        submitUser(Id, firstName, lastName, email, password)
            .then((result) => {
                setId(null);
                setName('');
                setPosition('');
            })
            .catch((error) => {
                console.log(error);
            });
        // const firebaseConfig = {
        //     apiKey: "AIzaSyAWPTNv5d_sUxEp8pCDPD5r29_eDneXs7Q",
        //     authDomain: "bitlo-a2eda.firebaseapp.com",
        //     databaseURL: "https://bitlo-a2eda-default-rtdb.firebaseio.com",
        //     projectId: "bitlo-a2eda",
        //     storageBucket: "bitlo-a2eda.appspot.com",
        //     messagingSenderId: "664553196731",
        //     appId: "1:664553196731:web:206f1d11119440467dad9e",
        //     measurementId: "G-2J2PC8XRTQ"
        // };
        // firebase.initializeApp(firebaseConfig);
        // firebase
        // .auth()
        // .createUserWithEmailAndPassword(email, password)
        // .then((res) => {
        //     console.log('User registered successfully!',res)

        //     res.user.updateProfile({
        //         email: email
        //     })
        // })
        // .catch(error => {
        //     console.log('User registered error!',error)

        //  })
    }

    return (
        <KeyboardAwareScrollView style={styles.container} showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <View style={styles.topView}>
                    <View style={styles.brandView}>
                        <HomeIcon size={ww(0.15)} color={'#fff'} />
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <View style={{ padding: wh(.03) }}>
                        <ScrollView>
                            <Input
                                label={"E-posta"}
                                labelStyle={{ color: '#000', fontWeight: '400', fontSize: ww(0.04) }}
                                inputStyle={{ color: '#000', fontWeight: '400', fontSize: ww(0.04) }}
                                value={email}
                                onChangeText={setEmail}
                                leftIcon={<UserIcon size={ww(0.06)} color={'#000'} />}
                            />
                            <Input
                                secureTextEntry={!secureText}
                                label={"Şifre"}
                                value={password}
                                labelStyle={{ color: '#000', fontWeight: '400', fontSize: ww(0.04) }}
                                inputStyle={{ color: '#000', fontWeight: '400', fontSize: ww(0.04) }}
                                onChangeText={setPassword}
                                leftIcon={<PasswordIcon size={ww(0.06)} color={'#000'} />}
                                rightIcon={
                                    <>
                                        {
                                            secureText === true &&
                                            <TouchableOpacity onPress={() => { setSecureText(!secureText) }} style={{ flexDirection: 'row', }}>
                                                <EyeY color={'#000'} size={ww(0.06)} />

                                            </TouchableOpacity>
                                        }

                                        {
                                            secureText === false &&
                                            <TouchableOpacity onPress={() => { setSecureText(!secureText) }} style={{ flexDirection: 'row' }}>
                                                <EyeN color={'#000'} size={ww(0.06)} />
                                            </TouchableOpacity>

                                        }
                                    </>
                                }
                            />

                            <View style={{}}>
                                <TouchableOpacity onPress={() => {
                                    logIn()
                                }} style={{ backgroundColor: AppColor, paddingVertical: wh(0.01), alignSelf: 'center', borderRadius: 10, flexDirection: 'row', paddingHorizontal: ww(.06), justifyContent: 'center' }}>

                                    <Text style={{ fontSize: ww(0.04), color: '#fff', }}>Kaydet</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("Login")
                                }} style={{ paddingVertical: wh(0.01), alignSelf: 'center', borderRadius: 10, flexDirection: 'row', paddingHorizontal: ww(.06), justifyContent: 'center', paddingTop: wh(0.04) }}>
                                    <Text style={{ fontSize: ww(0.04), color: '#000', }}>Giriş Yap</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>

        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: White
    },
    topView: {
        height: wh(.3),
        backgroundColor: AppColor
    },
    logo: {
        width: ww(.3),
        height: ww(.3)
    },
    brandView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    bottomView: {
        flex: 1,
        backgroundColor: White,
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60
    },
    welcomeText: {
        fontSize: ww(.045),
        color: Secondary,
    },
    registerText: {
        color: "red",
        fontSize: ww(.035),
    },

})

