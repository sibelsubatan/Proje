import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { White } from '../helpers/colors';
import { ww } from "../helpers";
import { Header, Icon } from "react-native-elements";
import { AppColor } from "../helpers/colors";

const CustomHeader = ({ title, onPress, icon, leftComponent, logout, edit, onPressRight, check, plus, calendar }) => {
    return (
        <Header
            statusBarProps={{ barStyle: 'light-content', backgroundColor: AppColor }}
            containerStyle={{ backgroundColor: AppColor, borderBottomColor: AppColor }}
            leftComponent={
                <>
                    {
                        icon === "left" &&
                        <TouchableOpacity onPress={onPress} >
                            <Icon name={"chevron-left"} color={White} style={{ marginRight: ww(.05) }}
                                onPress={onPress} />
                        </TouchableOpacity>
                    }
                </>
            }
            centerComponent={
                <>

                    <Text style={
                        {
                            color: '#fff',
                            fontSize: ww(.04),
                        }
                    }>{title}</Text>
                </>
            }

        />
    );
};

export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "center"
    },
    iconContainer: {
        // position:"absolute",
        width: ww(0.15),
        height: ww(0.15),
        alignItems: 'flex-start',
        justifyContent: 'center',
        left: ww(0.055),
    },
    title: {
        width: ww(0.65),
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        height: ww(0.15),
    },
    titleText: {
        color: '#fff',
        fontSize: ww(0.04),
        fontFamily: 'Montserrat-Black',
    },
});
