const serveIndex = (req, res) => {
    res.render("index", {title: "Flag Game"});
};

module.exports = {
    serveIndex,
};