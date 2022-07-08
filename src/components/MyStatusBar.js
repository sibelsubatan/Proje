import React from "react";
import {StatusBar, View,StyleSheet} from "react-native";
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <SafeAreaView>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </SafeAreaView>
    </View>
);

const styles = StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
})