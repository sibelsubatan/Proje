import {StyleSheet} from "react-native";
import {AppColor} from "../helpers/colors";
import {ww} from "../helpers";

export const RNPickerStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchBarContainerStyle: {
        marginBottom: 10,
        flexDirection: 'row',
        height: 40,
        borderRadius: 10,
        elevation: 3,
        marginLeft: 10,
        marginRight: 10,
    },

    selectLabelTextStyle: {
        color: '#000',
        textAlign: 'left',
        width: '99%',
        padding: 10,
        flexDirection: 'row',
    },
    placeHolderTextStyle: {
        color: '#FFF',
        padding: 10,
        textAlign: 'left',
        width: '99%',
        flexDirection: 'row',
    },

    dropDownImageStyle: {
        alignSelf: 'center',
    },
    formDatePicker: {
        flex: 1,
        paddingRight: 25,
        borderWidth: 1,
        borderColor: '#FFF',
        flexDirection: 'row',
        marginRight: 6,
        height: 42,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        marginLeft: 4,
        borderRadius: 8,
        fontSize: ww(0.035),
    },
    listTextViewStyle: {
        color: '#000',
        marginVertical: 10,
        flex: 0.9,
        marginLeft: 20,
        marginHorizontal: 10,
        textAlign: 'left',
    },
    pickerStyle: {
        flex: 1,
        paddingRight: 25,
        borderWidth: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
        height: 42,
        borderColor: 'rgba(0,0,0,0.55)',
        borderRadius: 8,
        fontSize: ww(0.035),
    },
    formView: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    formTextView: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: '25%',
    },
    formText: {
        fontSize: ww(0.03),
        lineHeight: 20,
        color: '#3E4958',
        width: '90%',
    },
});