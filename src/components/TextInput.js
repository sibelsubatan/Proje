import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { wh, ww } from "../helpers";
import { Icon } from "react-native-elements";
import { AppColor } from "../helpers/colors";

export const TextInput = ({ title, icon, body, iconSize, bodyTextt, logout, onPress }) => {
    return (
        <View style={{ borderBottomWidth: 1, ...styles.infoCard }}>
            <Icon size={iconSize || ww(.055)} color={AppColor} name={icon}/>
            <View style={{ ...styles.textField }}>
                <Text style={[styles.titleText, { fontSize: ww(0.03) }]}>{title}</Text>
                {
                    bodyTextt === "body" &&
                    <Text numberOfLines={1} style={{ fontSize: ww(0.03), ...styles.bodyText, }}>{body}</Text>

                }
                {
                    bodyTextt === "logout" &&
                    <TouchableOpacity onPress={onPress}>
                        <Text numberOfLines={1} style={{ fontSize: ww(0.03), ...styles.bodyText, }}>{logout}</Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    infoCard: {
        borderBottomWidth: 1,
        flexDirection: "row",
        borderColor: "#afafaf",
        minHeight: wh(.09),
        alignItems: "center",
        paddingHorizontal: ww(.05),
    },
    textField: {
        paddingLeft: ww(.03),
        width: "100%",
        justifyContent: "center"
    },
    titleText: {
        bottom: wh(.01),
        color: "#555",
    },
    bodyText: {
        bottom: wh(.005),

        color: "#333"
    }
})