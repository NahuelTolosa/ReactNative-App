import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import { getAuth } from "firebase/auth";
import * as ImagePicker from 'expo-image-picker';
import { AddReview } from '../firebase/Firebase';

export const Add = () => {

    const [form, setForm] = useState({place: "",comment: ""})
    const [image, setImage] = useState('https://via.placeholder.com/200')

    console.log(form.review)

    const handlePress = () => {

        const auth = getAuth();
        const user = auth.currentUser;

        console.log(user)

        const review = {
            user: {
                uid: user.uid,
                displayName: `@${user.displayName}`,
                photoURL: user.photoURL
            },
            comment: form.comment,
            img: image,
            place: form.place
        }

        AddReview(review)

    }

    const selectImage = async () => {
        
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect:[16,9],
            quality:1
        })

        console.log(result)

        !result.cancelled && setImage(result.uri);

    }

    const takeApicture = async () => {

        const img = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality:1
        })
        
        setImage(img.uri)
    }

    return (
        <View>

            <TextInput
                placeholder="Lugar"
                blurOnSubmit={true}
                onChangeText={text => setForm({ ...form, place: text })}
                value={form.place}
            />

            <Image
            style={{
                alignSelf:'center',
                height:200,
                width: 200
            }}
                source = {{uri: image}}
            />

            <TouchableOpacity onPress={() => selectImage()} >
                <Text>
                    Cargar imagen
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => takeApicture()} >
                <Text>
                    Sacar foto
                </Text>
            </TouchableOpacity>

            <TextInput
                placeholder="Reseña"
                blurOnSubmit={true}
                onChangeText={text => setForm({ ...form, comment: text })}
                value={form.comment}
            />

            <TouchableOpacity
                onPress={() => handlePress()}
            >
                <Text>
                    Enviar Reseña
                </Text>
            </TouchableOpacity>

        </View>
    )
}
