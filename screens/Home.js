import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/actions/categories.actions';

export const Home = () => {

    const categories = useSelector( state => state.categories.categories )

    return (
        <>
            {categories.lenght !== 0

            ?
            <View>
                <FlatList
                    data = {categories}

                    keyExtractor={category => category.toString()}

                    renderItem={ ({item}) => {
                        return (
                            <View>
                                <Text>{item}</Text>
                            </View>
                        )
                    }}
                    
                />
            </View>

            :
            <ActivityIndicator size='large' color='blue' />
            }
        </>
    )
}
