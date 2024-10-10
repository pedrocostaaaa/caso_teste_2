const testeSeq = require("./cpf_sequencial.js");
const testeForma = require("./cpf_formatado.js");
const testeSimbolo = require("./cpf_simbolo.js");
const testeQtd = require("./cpf_Qtd.js");
const testevazio = require("./cpf_vazio.js");


test('CPF Seq', () => {
    expect(testeSeq('11111111111')).toBe(false);
});

test('CPF Forma', () => {
    expect(testeForma("123.456.789-00")).toBe(false);
});
test('CPF Simbolo', () => {
    expect(testeSimbolo("abc123xyz")).toBe(false);
});
test('CPF Qtd', () => {
    expect(testeQtd("123")).toBe(false);
});
test('CPF Vazio', () => {
    expect(testevazio("")).toBe(false);
});