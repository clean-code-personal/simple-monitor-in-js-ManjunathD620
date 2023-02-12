function logMessage(Stats) {
    if (Stats.breach === true){
        console.error(`${Stats.parameter}: \` ${Stats.value} \` is out of range!`);
        return "Abnormal";
    }
        
    else if (Stats.alert === "Normal"){
        console.log(`${Stats.parameter}: \` ${Stats.value} \` is Normal`);
        return "Normal";
    }
        
    else {
        var message = (Stats.alert === "Low") ? `Warning: ${Stats.parameter} \` ${Stats.value} \` Approaching discharge` : `Warning: ${Stats.parameter} \` ${Stats.value} \` Approaching charge-peak`;
        console.warn(message)
        return "Abnormal"
    }
}

module.exports = logMessage;
