// @ts-ignore
import packageJson from '../../../../package.json';

const VERSION = packageJson.version;
const API_ENDPOINT = 'https://server.leafline.me';

export class LeaflineService {
  static readPackageVersion() {
    return packageJson.version;
  }

  static get VERSION() {
    return VERSION;
  }

  static get API_ENDPOINT() {
    return API_ENDPOINT;
  }
}
