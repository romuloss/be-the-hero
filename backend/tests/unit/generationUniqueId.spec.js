const generationUniqueId = require('../../src/utils/generationUniqueId')

describe('Generanre Unique Id', () => {
    it('should generate an unique ID', () => {
        const id = generationUniqueId();
            expect(id).toHaveLength(8);
    });
});