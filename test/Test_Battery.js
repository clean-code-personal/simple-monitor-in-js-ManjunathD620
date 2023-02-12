var assert = require('chai').assert
var batteryIsOk = require("../bms-monitor")

describe("Testing", function () {
    it("Everything is Good", function () {
       console.log();
        result = batteryIsOk(24, 75, 0.5, 4)
        assert.equal(result, "Normal")
        console.log();
    });

    it("Battery is Abnormal",function(){
        console.log('\n')
        result = batteryIsOk(-40, 75, 0.5, 4)
        assert.equal(result, "Abnormal")
        console.log();
    });

    it("Reporting abnormal parameters",function(){
        console.log('\n')
        result = batteryIsOk(4, 78, 0.5, 4)
        assert.equal(result, "Abnormal")
        console.log();
    });

});

