const assert = require('chai').assert;
global.window = global;
require('../lib/md-links');

describe('Validar funcion', ()=>{
  it('Deberia ser una funcion mdLinks',()=>{
    assert.isFunction(mdLinks);
  });
});