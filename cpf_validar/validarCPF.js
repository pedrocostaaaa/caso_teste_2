import validandocpf from './validandocpf.js';  // Supondo que a função seja exportada de um arquivo ValidarCpf.js

describe('Testes de Validação de CPF', () => {

    test('CPF com números repetidos deve ser inválido', () => {
        expect(testRept('11111111111')).toBe(false);
    });

    test('CPF com formato incorreto deve ser inválido', () => {
        expect(validarCpf('123.456.789-00')).toBe(false);
    });

    test('CPF com letras ou símbolos deve ser inválido', () => {
        expect(validarCpf('123456789AA')).toBe(false);
        expect(validarCpf('ABC.DEF.GHI-JK')).toBe(false);
    });

    test('CPF com menos ou mais dígitos deve ser inválido', () => {
        expect(validarCpf('1234567890')).toBe(false);  // Menos de 11 dígitos
        expect(validarCpf('123456789012')).toBe(false);  // Mais de 11 dígitos
    });

    test('CPF nulo ou vazio deve ser inválido', () => {
        expect(validarCpf(null)).toBe(false);
        expect(validarCpf('')).toBe(false);
    });

    test('CPF válido deve ser aceito', () => {
        expect(validarCpf('12345678909')).toBe(true);  // Exemplo de CPF válido (substitua por um CPF gerado online)
    });

});