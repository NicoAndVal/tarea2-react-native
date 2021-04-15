import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colorGeneros from '../lib/genres.json';


const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 20,
  },
  text: {
    color: '#bdc3c7',
    fontWeight: 'bold',
  },
  Crime: {
    backgroundColor:"#95a5a6"
  }
});

const Chip = ({ value, pressable, onPress}) => {
  let color;
  const { Crime,
    Drama,
    Action,
    Biography,
    History,
    Adventure,
    Fantasy,
    Western,
    Comedy,
    Romance,
    SciFi,
    Mystery,
    Thriller,
    Family,
    War,
    Animation,
    Horror,
    Music,
    FilmNoir,
    Musical,
    Sport } = colorGeneros;
  switch (value) {
            case 'Crime':
                 color=Crime 
                break;
            case 'Drama':
                 color=Drama 
                break;
            case 'Action':
                 color=Action 
                break;
            case 'Biography':
                 color=Biography 
                break;
            case 'History':
                 color=History 
                break;
            case 'Adventure':
                 color=Adventure 
                break;
            case 'Fantasy':
                 color=Fantasy 
                break;
            case 'Western':
                 color=Western 
                break;
            case 'Comedy':
                 color=Comedy 
                break;
            case 'Romance':
                 color=Romance 
                break;
            case 'SciFi':
                 color=SciFi 
                break;
            case 'Mystery':
                 color=Mystery 
                break;
            case 'Thriller':
                 color=Thriller 
                break;
            case 'Family':
                 color=Family 
                break;
            case 'War':
                 color=War 
                break;
            case 'Animation':
                 color=Animation 
                break;
            case 'Horror':
                 color=Horror 
                break;
            case 'Music':
                 color=Fantasy 
                break;
            case 'FilmNoir':
                 color=FilmNoir 
                break;
            case 'Musical':
                 color=Musical 
                break;
            case 'Music':
                 color=Music 
                break;
            case 'Sport':
                 color=Sport 
                break;
            default:
                color='gray';
                break;
        }


  return(
    <TouchableOpacity
      disabled={!pressable}
      style={[styles.container,{backgroundColor: color} ]}
      onPress={() => onPress(value)}
    >
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}


export default Chip;
