import supportMultipleEntry from './supportMultipleEntry';
import getValidSettings from './getValidSettings';
import { EntryParam } from './types/entry';

function MultipleEntries(params: EntryParam[]) {
  return supportMultipleEntry(getValidSettings(params));
};



module.exports = MultipleEntries;