import React from 'react';
import {View, Text} from 'react-native';
import {getLabels} from '../components/constants/labels';
import {Grid} from '../components/Grid';
import {TopBar} from '../components/TopBar';
import {AppContext} from '../context/AppContext';

export default class HomeScreen extends React.Component {
  state = {
    taps: 0,
    matches: 0,
    tappedCards: [],
    hiddenLabels: [],
  };

  // returns card label
  _getLabelByID = card_id => {
    // card_id = <row_number>_<col_number>
    const [row, col] = card_id.split('_').map(x => parseInt(x));
    return LABELS[row][col];
  };

  _onTap = ({cardID, label}) => {
    const {tappedCards, taps} = this.state;
    const lastCard = tappedCards[tappedCards.length - 1];
    if (cardID !== lastCard || taps == 0) {
      if (tappedCards.length == 0)
        this.setState(p => ({tappedCards: [cardID], taps: p.taps + 1}));
      else if (tappedCards.length == 1) {
        const isMatch =
          this._getLabelByID(lastCard) == this._getLabelByID(cardID);
        this.setState(p => ({
          tappedCards: [...p.tappedCards, cardID],
          taps: p.taps + 1,
          matches: isMatch ? p.matches + 1 : p.matches,
          hiddenLabels: isMatch ? [...p.hiddenLabels, label] : p.hiddenLabels,
        }));
        setTimeout(() => {
          this.setState({tappedCards: []});
        }, 800);
      }
    }
  };

  render() {
    const contextValue = {
      ...this.state,
      onTap: this._onTap,
      labels: LABELS,
    };
    return (
      <AppContext value={contextValue}>
        <View style={{flex: 1}}>
          <TopBar />
          <Grid />
        </View>
      </AppContext>
    );
  }
}

const LABELS = getLabels();
