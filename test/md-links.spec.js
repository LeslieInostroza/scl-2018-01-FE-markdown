const assert = require('chai').assert;
global.window = global;
require('../lib/md-links');

describe('Validar funcion', ()=>{
  it('debería exponer función mdLinks',()=>{
    assert.isFunction(mdLinks);
  });
});
describe('mdLinks(path, options)', ()=> {
  it('deberian ser parametros');
});