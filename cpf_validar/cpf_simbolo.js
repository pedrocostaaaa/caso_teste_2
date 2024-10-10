function testesimbolo (CpfTestado) {
    if (!Number(CpfTestado)) {
        return false;
    }else{
        return true;
    }
};

module.exports = testesimbolo;