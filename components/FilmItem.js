import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import {getImageFromApi} from '../API/TMDBApi'

class FilmItem extends React.Component {

  _displayFavoriteImage(){
    if (this.props.isFilmFavorite) {

      return (

        <Image
        style={styles.favorite_image}
        source={require('../Images/ic_favorite.png')}
        />
      ) 

    }

  }
  






  render() {
    const {film, displayDetailForFilm}  = this.props
    return (
      <TouchableOpacity 
      style={styles.main_container}
      onPress={() => displayDetailForFilm(film.id)}
      >
        <Image style = {styles.image} 
        source={{ uri : getImageFromApi(film.poster_path)}}
        />
        <View style = {styles.containt}>
          <View style = {styles.header}>
            {this._displayFavoriteImage()}
            <Text style = {styles.Titre}>{film.title} </Text>
            <Text style = {styles.Vote}>{film.vote_average} </Text>
          </View>
          <View style = {styles.description_container}>
            <Text style = {styles.Description} numberOfLines={6}>{film.overview} </Text>
          </View>
          <View style = {styles.foot}>
            <Text style = {styles.Date}> {film.release_date} </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection : 'row',
    height: 190,
  },

  image : {
    height : 180,
    width : 120,
    margin : 5,
    backgroundColor:'grey'
  },
  containt : {
    flex : 1,
    margin : 5,
  },
  
  header :{
    flexDirection :'row',
    flex : 3,
  },

  description_container : {
    flex : 7,
  },

  foot : {
    flex : 1,
  },
  Titre: {
    fontWeight : 'bold',
    fontSize : 20,
    flex :1,
    flexWrap : 'wrap',
    paddingRight : 5,
  
  },
  Vote: {
    fontWeight : 'bold',
    fontSize : 26,
    color : '#666666',
  },
  Description : {
    fontStyle:'italic',
    color : '#666666'
  },
  Date : {
    textAlign : 'right',
    fontSize : 14
  },

  favorite_image : {
    width: 25,
    height: 25,
    marginRight: 5
  }
})

export default FilmItem