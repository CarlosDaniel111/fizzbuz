const Reader = require('../../lib/utils/Reader')

describe('Unit Test for Reader', () => {
    test('1. Checking for correct Json read', () => {
        const explorers = Reader.readJsonFile('explorers.json')
        expect(explorers[0].name).toBe("Woopa1")
    });
  })