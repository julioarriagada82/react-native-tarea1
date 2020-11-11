/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.vistaPrincipal}>
            <View>
            <Text style={styles.tituloPrincipal}>Julio Arriagada</Text>
            <Text style={styles.subTituloPrincipal}>38</Text>
            </View>
            <Image
            style={styles.image}
            resizeMode="cover"
            source={{
              uri:
                'https://picsum.photos/seed/picsum/200',
            }}
          />
          </View>
          <View style={styles.vistaNivel2}>
          <Text style={styles.tituloVista}>
              Bio:
            </Text>
            <Text style={styles.descripcionProfesion}>
            Desarrollador informatico
            </Text>
          </View>
          <View style={styles.vistaNivel2}>
          <Text style={styles.tituloVista}>
          Descripcion:
          </Text>
          <View style={styles.vistaDescripcion}>
          <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'gray',
    borderRadius: 5,
    margin:5,
  },
  image: {
    borderRadius: 100,
    backgroundColor: 'gray',
    width: 100,
    height: 100,
  },
  description: {
    width: 180,
    textAlign: 'justify',
    fontSize: 14,
  },
  vistaNivel2: {
    marginLeft: 20,
    marginRight:20,
    marginBottom:10,

    flexDirection: 'column',
  },
  tituloVista: {
    color: Colors.dark,
    fontSize: 14,
    marginBottom: 10,
  },
  vistaPrincipal: {
    marginTop:20,
    marginLeft: 20,
    marginRight:20,
    marginBottom:5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: Colors.dark,
  },
  tituloPrincipal: {
    color: Colors.white,
    fontSize: 28,
    fontWeight: 'bold'
  },
  subTituloPrincipal: {
    color: Colors.white,
    fontSize: 18,
  },
  vistaDescripcion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descripcionProfesion: {
    fontSize: 14,
    marginBottom: 6,
  },
});

export default App;
