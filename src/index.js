
// import from这些ESM规范，Webpack有jsloader会自己处理。
import $ from 'jquery'

console.log($)
console.log(data, 'index.js')

import('./data').then(data => {
    console.log('data:', data);
})

import('./data2').then(data => {
    console.log('data2:', data);
})