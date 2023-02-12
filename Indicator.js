var logMessage = require('./logMessage');

function indicator(...args) {
    var indicate = "Normal";
    args.forEach((Stats) => {
        let temp = logMessage(Stats);
        indicate = (indicate == "Abnormal")?indicate:temp;
    });

    return indicate;
}

module.exports = indicator;
