import * as dotenv from 'dotenv';
import * as path from 'path';

let environmentFile: string = '../../.env';
export default dotenv.config({path: path.resolve(__dirname, environmentFile)});
