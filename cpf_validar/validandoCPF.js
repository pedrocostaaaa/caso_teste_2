// validarCpf.js
function validandocpf(cpf) {
    if (!cpf || cpf.length !== 11 || /^\d{11}$/.test(cpf) === false) return false;

    // Rejeitar CPFs com sequências repetidas
    if (/^(.)\1{10}$/.test(cpf)) return false;

    let digito1 = 0;
    let digito2 = 0;

    for (let i = 0; i < 9; i++) {
        digito1 += parseInt(cpf[i]) * (10 - i);
        digito2 += parseInt(cpf[i]) * (11 - i);
    }

    digito1 = (digito1 * 10) % 11;
    if (digito1 === 10) digito1 = 0;

    digito2 += digito1 * 2;
    digito2 = (digito2 * 10) % 11;
    if (digito2 === 10) digito2 = 0;

    return cpf[9] == digito1 && cpf[10] == digito2;
}

export default validandocpf;
