import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  BannerSlider,
  HeaderComponent,
  ListHistory,
  ListJerseys,
  ListLiga,
  Tombol,
} from '../../components';
import { colors, fonts } from '../../utils';
import { Jarak } from '../../components';
import { connect } from 'react-redux';
import { getListLiga } from '../../actions/LigaAction';
import { limitJersey } from '../../actions/JerseyAction'

class Home extends Component {

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.dispatch(getListLiga());
      this.props.dispatch(limitJersey());
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }


  render() {
    const { navigation } = this.props
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderComponent navigation={navigation} page="Home" />
          <BannerSlider />
          <View style={styles.pilihLiga}>
          </View>

          <View style={styles.pilihJersey}>
            <Text style={styles.label}>
              Service
            </Text>
            <ListJerseys navigation={navigation} />

            <Text style={styles.label}>
              Active Order
            </Text>
            <ListHistory />
            {/* <Tombol title="Lihat Semua" type="text" padding={7} /> */}
          </View>

          <Jarak height={100} />
        </ScrollView>
      </View>
    );
  }
}

export default connect()(Home)

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.white },
  pilihLiga: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  pilihJersey: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold'
  },
  boldLabel: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
});
