import Base from './Base';
import config from "./config";
import Core from './Core';

const result = Core.load(config);
console.log(result);
const base = new Base('zhangxuan', 18);
console.log(base.getName())
