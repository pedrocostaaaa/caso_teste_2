function testeQtd(CpfTestado) {
    if (CpfTestado.length !== 11) {
        return false;
    }else{
        return true;
    }
};

module.exports = testeQtd;