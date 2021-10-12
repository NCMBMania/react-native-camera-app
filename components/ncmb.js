import NCMB, { NCMBObject, NCMBQuery, NCMBFile } from 'ncmb-react-native';
import Constants from 'expo-constants';
import config from '../app.json';

new NCMB(config.applicationKey, config.clientKey);

export default NCMB;
export {
  NCMBObject,
  NCMBFile,
  NCMBQuery,
}
