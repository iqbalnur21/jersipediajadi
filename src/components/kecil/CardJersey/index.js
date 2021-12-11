import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { colors, fonts, responsiveWidth } from '../../../utils';
import Tombol from '../Tombol';

const CardJersey = ({jersey, navigation, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('JerseyDetail', { jersey }) }>
        <View>
        <Image source={{uri: jersey.gambar[0]}} style={styles.gambar} />
        <Text style={styles.text}>{jersey.nama} </Text>
      {/* <Tombol type="text" title="Detail" padding={7}  */}
      {/* onPress={() => navigation.navigate('JerseyDetail', { jersey }) } */}
      {/* /> */}
        </View>
      </TouchableOpacity>

    </View>
  );
};

export default CardJersey;

const styles = StyleSheet.create({
  container: {
  marginBottom:12,
  marginRight : 10
  },
  button:{
      backgroundColor: colors.secondary,
      padding: 12,
      borderRadius:10
  },
  // text:{
  //     fontSize: 14,
  //     fontFamily:'TitilliumWeb-Light',
  //     textAlign:'center'
  // },
    card: {
        backgroundColor: colors.secondary,
        width: responsiveWidth(100),
        alignItems: 'center',
        padding: 12,
        borderRadius: 10,
        marginBottom: 10
    },
    gambar: {
        width: 50,
        height: 50
    },
    text: {
        fontFamily: fonts.primary.bold,
        fontSize: 12,
        textTransform: 'capitalize',
        textAlign: 'center'
    }
});
