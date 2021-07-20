import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../context/AppContext';

export const Card = ({cardID, label}) => {
  const {onTap, tappedCards, hiddenLabels} = useContext(Context);
  const show = tappedCards.includes(cardID);
  const shouldHide = hiddenLabels.includes(label);
  const backgroundColor = shouldHide ? '#ffff00' : show ? '#fff' : '#76f536';
  const borderWidth = show ? 1 : 0;

  return (
    <TouchableOpacity
      style={{...styles.card, backgroundColor, borderWidth}}
      disabled={shouldHide}
      onPress={() => onTap({cardID, label})}>
      <View style={styles.cardInner}>
        <Text style={{fontSize: 18, fontWeight: '600', color: '#8293f5'}}>
          {show ? label : ''}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: '#8293f5',
    height: 90,
    width: 70,
  },
  cardInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
