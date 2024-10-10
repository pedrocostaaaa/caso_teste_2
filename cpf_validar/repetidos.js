import testRept from './repetidos.js';
import validarCPF from './validarCPF.js';

test('CPF repetido', () => {
    expect(testRept('11111111111')).toBe(false);
});

