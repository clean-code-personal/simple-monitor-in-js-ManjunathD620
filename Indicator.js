function indicator(...args){

    var indicate = false;
    args.forEach((Stats)=>{
        if(Stats.breach === true) 
            console.error(`${Stats.parameter}: \` ${Stats.value} \` is out of range!`),indicate = true;
        else if(Stats.alert === "Normal")
            console.log(`${Stats.parameter}: \` ${Stats.value} \` is Normal`);
        else{
            var message = (Stats.alert === "Low") ?`Warning: ${Stats.parameter} \` ${Stats.value} \` Approaching discharge`:`Warning: ${Stats.parameter} \` ${Stats.value} \` Approaching charge-peak`;
            console.warn(message)
            indicate = true;
        }
    });

    return (indicate === true)?"Abnormal":"Normal";
}

module.exports = indicator;

