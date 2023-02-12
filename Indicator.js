function indicator(...args) {
    var indicate = false;
    args.forEach((Stats) => {
        switch (true) {
            case Stats.breach === true:
                console.error(`${Stats.parameter}: \` ${Stats.value} \` is out of range!`);
                indicate = true;
                break;
            case Stats.alert === "Normal":
                console.log(`${Stats.parameter}: \` ${Stats.value} \` is Normal`);
                break;
            default:
                var message = (Stats.alert === "Low") ? `Warning: ${Stats.parameter} \` ${Stats.value} \` Approaching discharge` : `Warning: ${Stats.parameter} \` ${Stats.value} \` Approaching charge-peak`;
                console.warn(message);
                indicate = true;
        }
    });
    
    return (indicate === true) ? "Abnormal" : "Normal";
}

module.exports = indicator;
