import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

import CustomHeader from './custom_header';

const db = openDatabase({name: newFunction(), createFromLocation: 1});

function newFunction() {
  return 'HolyQuran.db';
}

function MainScreen() {
  const [Surah, setSurah] = useState([]);

  useEffect(() => {
    GetSurahinfo();
  }, []);

  const GetSurahinfo = () => {
    db.transaction(tx => {
      tx.executeSql(' select * from Surah', [], (tx, results) => {
        const rows = [];
        for (let i = 0; i < results.rows.length; i++) {
          rows.push(results.rows.item(i));
          console.log(results.rows.item(i));
        }
        setSurah(rows);
      });
    });
  };

  return (
    <View style={{flex: 1}}>
      <CustomHeader />

      <FlatList
        data={Surah}
        keyExtractor={item => item.Id}
        renderItem={({item}) => (
          <View style={styles.row}>
            <Text style={styles.cell1}>{item.EnglishName}</Text>

            <Text style={styles.cell2}>{item.ArabicName}</Text>

            <Text style={styles.cell3}>{item.Id}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 14,
    color: '#888',
  },
  back: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  buttom: {
    flexDirection: 'row',
  },
  surahTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
    paddingTop: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    borderColor: '#000',
    borderWidth: 1,
    borderColor: '#000',
  },
  cell1: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
    paddingRight: 10,
    textAlign: 'center',
    flexDirection: 'row',
    width: '60%',
  },
  cell2: {
    flex: 2,
    padding: 10,
    paddingLeft: 20,
    textAlign: 'center',
  },
  cell3: {
    flex: 1,
    padding: 10,
    alignContent: 'center',
    paddingLeft: 10,
    textAlign: 'center',
  },
});
export default MainScreen;
