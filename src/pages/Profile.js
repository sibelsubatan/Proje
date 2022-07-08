import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from "react-native";
import CustomHeader from "../components/CustomHeader";
import { AppColor, Secondary, White } from "../helpers/colors";
import { wh, ww } from "../helpers";

import { TextInput } from "../components/TextInput";

export const Profile = ({ navigation }) => {
    useEffect(() => {

    }, [])
    const logout = () => {

    }
    return (
        <View style={styles.container}>
            <CustomHeader title={"Profil"} onPress={() => navigation.goBack()} />
            <View style={{ flex: 1, backgroundColor: White }}>
                <TextInput icon={"person"} title={"İsim"} body={'sibel'} bodyTextt={"body"} />
                <TextInput icon={"person"} title={"Soyisim"} body={'subatan'} bodyTextt={"body"} />
                <TextInput icon={"email"} title={"E Mail"} body={'sibelsubatan@gmail.com'} />
                <TextInput icon={"logout"} logout={'Çıkış Yap'} bodyTextt={"logout"} onPress={() => { navigation.navigate("AuthStack") }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profileWrapper: {
        padding: ww(.05),
        width: ww(.2),
        height: ww(.2),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        alignSelf: "center",
        backgroundColor: AppColor,
        marginTop: wh(.05)
    },
    userNameText: {
        marginTop: wh(.01),
        color: "#555"
    },
    versionText: {
        color: Secondary
    },

})
