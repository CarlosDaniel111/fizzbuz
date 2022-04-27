const FizzbuzzService = require('./../../lib/services/FizzbuzzService')

describe('Unit Test for FizzbuzzService', () => {
    test('1. Fizz on score divisible by 3', () => {
        const explorer3 = {name: "Explorer3", score: 3}
        FizzbuzzService.applyValidationInExplorer(explorer3)
        expect(explorer3.trick).toBe('FIZZ');
    });
    test('2. Buzz on score divisible by 5', () => {
        const explorer5 = {name: "Explorer5", score: 5}
        FizzbuzzService.applyValidationInExplorer(explorer5)
        expect(explorer5.trick).toBe('BUZZ');
    });
    test('3. Fizzbuzz on score divisible by 3 and 5', () => {
        const explorer15 = {name: "Explorer15", score: 15}
        FizzbuzzService.applyValidationInExplorer(explorer15)
        expect(explorer15.trick).toBe('FIZZBUZZ');
    })
})