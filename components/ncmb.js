import NCMB, { NCMBObject, NCMBQuery, NCMBFile } from 'ncmb-react-native';
import config from '../app.json';

// NCMBの初期化
new NCMB(config.applicationKey, config.clientKey);

export default NCMB;
export {
  NCMBObject,
  NCMBFile,
  NCMBQuery,
}
