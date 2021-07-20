import {shuffle, groupByRow} from '../../utils/';

export const getLabels = () => {
  const shuffledList = shuffle(flat_label); // Shuffle array item once
  const gridList = groupByRow(shuffledList); // return 2D list from 1D list, each inner represents a row in Grid
  return gridList;
};

const flat_label = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
];
