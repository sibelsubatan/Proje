import React, { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Platform, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import CustomHeader from "../components/CustomHeader";
import Api from "../../store/Api";
import Loader from "../components/Loader";
import { ww, wh } from "../helpers";
import { AppColor, Secondary, White } from "../helpers/colors";
import { Divider, Icon } from "react-native-elements";
import axios from "axios";
import { DataTable } from 'react-native-paper';

export const MarketDetail = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false);
    const [dataAsks, setDataAsks] = useState([]);
    const [dataBids, setDataBids] = useState([]);

    const [pageCurrent, setpageCurrent] = useState(1)


    useEffect(() => {
        getData()
    }, [route.params.marketCode, pageCurrent])

    const getData = async () => {
        console.log("route.params.marketCode", route.params.marketCode)
        var config = {
            method: 'get',
            url: Api.BASE_URL + `orderbook?market=${route.params.marketCode}&depth=50?_limit=5&_page=${0}`,
        };

        axios(config)
            .then(function (response) {
                setDataAsks(response.data.asks)
                setDataBids(response.data.bids)

                console.log("response ne geldi", response)

            })
            .catch(function (error) { console.log("error geldin mi?", error) });
    };

    const renderItemAsks = (item, index) => {
        console.log("renderItemAsks", item)

        const data = item.item
        return (
            <DataTable.Row>
                <DataTable.Cell numeric>{data[0] * data[1]}</DataTable.Cell>
                <DataTable.Cell numeric>{data[0]}</DataTable.Cell>
                <DataTable.Cell numeric>{data[1]}</DataTable.Cell>
            </DataTable.Row>
        )
    }
    const renderItemBids = (item, index) => {
        console.log("renderItemBids", item)
        const data = item.item
        return (
            <DataTable.Row>
                <DataTable.Cell numeric>{data[0] * data[1]}</DataTable.Cell>
                <DataTable.Cell numeric>{data[0]}</DataTable.Cell>
                <DataTable.Cell numeric>{data[1]}</DataTable.Cell>
            </DataTable.Row>

        )

    }



    return (

        <View style={styles.container}>
            <Loader loading={loading} />
            <CustomHeader title={"Emir Defteri"} onPress={() => navigation.goBack()} icon={'left'} />
            <DataTable style={{ height: wh(0.6), flex: 1 }}>
                <DataTable.Header>
                    <DataTable.Title numeric>Toplam(TRY)</DataTable.Title>
                    <DataTable.Title numeric>Miktar</DataTable.Title>
                    <DataTable.Title numeric>Fiyat</DataTable.Title>
                </DataTable.Header>
                <FlatList
                    data={dataAsks}
                    renderItem={renderItemAsks}
                    keyExtractor={(item, index) => index.toString()}
                />
            </DataTable>

            <DataTable style={{ height: wh(0.4), flex: 1 }}>
                <DataTable.Header>
                    <DataTable.Title numeric>Toplam(TRY)</DataTable.Title>
                    <DataTable.Title numeric>Miktar</DataTable.Title>
                    <DataTable.Title numeric>Fiyat</DataTable.Title>
                </DataTable.Header>
                <FlatList
                    data={dataBids}
                    renderItem={renderItemBids}
                    keyExtractor={(item, index) => index.toString()}
                />
            
            </DataTable>
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
    },
    head: { height: 40, backgroundColor: 'red' },
    text: { margin: 6 },
    row: { height: 40, backgroundColor: '#E7E6E1' },

    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    loadMoreBtn: {
        padding: 10,
        backgroundColor: '#800000',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },

})
