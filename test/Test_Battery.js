var assert = require('chai').assert
var batteryIsOk = require("../bms-monitor")

const allIsGood = { temperatureBreach: false, socBreach: false, chargeRateBreach: false }

describe("Testing", function () {
    it("Everything is Good", function () {
        result = batteryIsOk(25, 70, 0.7);
        assert.deepEqual(result, allIsGood)
    });

});


describe("Temperature", function () {
    it("Temperature is too low", function () {
        result = batteryIsOk(-25, 70, 0.7);
        assert.equal(result.temperatureBreach, true);
    });

    it("Temperature is too High", function () {
        result = batteryIsOk(95, 70, 0.7);
        assert.equal(result.temperatureBreach, true);
    });

    it("Temperature is fine ", function () {
        result = batteryIsOk(15, 70, 0.7);
        assert.equal(result.temperatureBreach, false);
    });

});

describe("Soc", function () {
    it("soc is fine ", function () {
        result = batteryIsOk(15, 40, 0.7);
        assert.equal(result.socBreach, false);
    });

    it("Soc is too low", function () {
        result = batteryIsOk(25, 10, 0.7);
        assert.equal(result.socBreach, true);
    });

    it("Soc is too High", function () {
        result = batteryIsOk(35, 124, 0.7);
        assert.equal(result.socBreach, true);
    });



    it("Charge Rate is too High", function () {
        result = batteryIsOk(35, 124, 1.5);
        assert.equal(result.chargeRateBreach, true);
    });

});