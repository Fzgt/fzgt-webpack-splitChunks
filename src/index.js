import data from './data.js'
// import from这些ESM规范，Webpack有jsloader会自己处理。
import $ from 'jquery'

console.log($)
console.log(data, 'index.js')