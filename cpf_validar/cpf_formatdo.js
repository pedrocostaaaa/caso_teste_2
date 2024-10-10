function testeForma(CpfTestado) {
    if (CpfTestado.includes(".") || CpfTestado.includes("_")) {
        return false;
    }else{
        return true;
    }
};

module.exports = testeForma;