'use strict'

const validate = require('../multi-bracket-validation')

describe('MULTI BRACKET VALIDATION',()=>{

    it('Should return true',()=>{
        expect(validate('{}')).toBeTruthy()
        expect(validate('{}(){}')).toBeTruthy()
        expect(validate('()[[Extra Characters]]')).toBeTruthy()
        expect(validate('(){}[[]]')).toBeTruthy()
        expect(validate('{}{Code}[Fellows](())')).toBeTruthy()
    })

    it('Should return false',()=>{
        expect(validate('[({}]')).toBeFalsy()
        expect(validate('(](')).toBeFalsy()
        expect(validate('{(})')).toBeFalsy()
    })
})