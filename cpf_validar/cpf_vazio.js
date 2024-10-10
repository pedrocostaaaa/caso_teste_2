function testevazio (CpfTestado) {
    if (CpfTestado.length === 0 || CpfTestado === null) {
        return false;
    }else{
        return true;
    }
};

module.exports = testevazio;