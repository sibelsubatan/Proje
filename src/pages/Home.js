import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import CustomHeader from "../components/CustomHeader";
import Api from "../../store/Api";
import Loader from "../components/Loader";
import { ww, wh } from "../helpers";
import { AppColor, Secondary, White } from "../helpers/colors";
import { Icon } from "react-native-elements";
import axios from "axios";
import { BrandIcon, HomeIcon, MoneyIcon } from "../assets/Icons";
import { TextInput } from "../components/TextInput";

export const Home = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        var config = {
            method: 'get',
            url: Api.BASE_URL + `ticker/all`,
        };

        axios(config)
            .then(function (response) {
                setData(response.data)
                console.log("response ne geldi", response)

            })
            .catch(function (error) { console.log("error geldin mi?", error) });
    };

    const renderItem = (item, index) => {
        const data = item.item
        return (
            <TouchableOpacity
                style={{
                    justifyContent: "space-evenly",
                    backgroundColor: '#FFF',
                    height: wh(0.05),
                    borderRadius: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: "lightgray",
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 6,
                        height: 6,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 3,
                    elevation: 4,
                    flexDirection: 'row', marginBottom: wh(0.01), width: ww(), alignSelf: 'center',
                }}
                onPress={() => {
                    navigation.navigate("MarketDetail", { marketCode: data.marketCode })
                }}>
                <Text style={{ alignSelf: 'center', color: '#000', width: ww(0.4) }}><MoneyIcon color={AppColor} size={ww(0.04)} /> {data.marketCode}</Text>
                <Text style={{ alignSelf: 'center', color: '#000',width: ww(0.4) }}>{data.currentQuote}</Text>

            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Loader loading={loading} />
            <CustomHeader title={"Anasayfa"} />
            <FlatList
                data={data}
                renderItem={renderItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardWrapper: {
        width: ww(.47),
        height: wh(.12),
        borderRadius: 8,
        backgroundColor: White,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    }
})
