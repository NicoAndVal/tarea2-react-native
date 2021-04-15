import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Chip from '../Chip'
import colorGeneros from '../../lib/genres.json';


const styles = StyleSheet.create({
    container: {
        padding:20
    }
})
const GenreList = ({ genres }) => {
   const genresList = genres.map((genre, index) => {
        return (
            <Chip
            key={`genres-${index}`}
            value={genre}
        />
        )
    })
    
    return (
        <View style={styles.container}>
            <Text>{ genresList}</Text>
        </View>
    )
}

export default GenreList

