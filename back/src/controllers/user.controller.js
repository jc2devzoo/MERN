const soma = (req, res) => {
    const soma = 100 + 5;

    res.send({soma: soma});
}

module.exports = {soma};