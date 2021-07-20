import React, {Component, useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/AppContext';
import {Card} from './Card';

export const Grid = () => {
  const _drawGrid = () => {
    const {labels} = useContext(Context);
    return labels.map((rowCells, i) => {
      return (
        <View key={i}>
          {rowCells.map((label, j) => (
            <Card key={j} label={label} cardID={`${i}_${j}`} />
          ))}
        </View>
      );
    });
  };

  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={styles.gridContainer}>{_drawGrid()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
