import React from "react";
import { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'
import Styles, { styles } from './style';
import { getList } from '../../redux/getList';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = (props) => {
    const lists = useSelector(state => state.getList)
    const dispatch = useDispatch();
    const [listData, setListData] = useState([]);
    useEffect(() => {
        getList(dispatch, 1);
    }, [])
    const renderItems = ({ item, index }) => {
        return (
            <View style={[styles.itemContainer, styles.shaddowItem]}>
                <View style={[styles.imageContainer, styles.doCenter]}>
                    <Image
                        source={{ uri: item.avatar }}
                        style={styles.imageStyle}
                    />
                </View>
                <View style={styles.detailContainer}>
                    <View>
                        <View>
                            <Text style={styles.nameText}>{item.first_name + ' ' + item.last_name}</Text>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.emailText}>{item.email}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    const renderFooterComponent = () => {
        return (
            <TouchableOpacity style={[styles.doCenter, { marginTop: 5 }]}>
                <Text style={{ color: 'blue' }}>
                    Load more
                </Text>
            </TouchableOpacity>
        )

    }
    return (
        <View style={styles.container}>

            {lists.fetching ?
                <View style={[styles.doCenter, { flex: 1 }]}>
                    <ActivityIndicator size={'large'} />
                </View>
                :

                <View style={styles.flatListContainer}>
                    <FlatList
                        data={lists.listData}
                        renderItem={renderItems}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={renderFooterComponent}
                    />
                </View>

            }

        </View>
    )
}

export default HomeScreen;