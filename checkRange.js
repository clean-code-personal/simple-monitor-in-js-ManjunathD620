module.exports = function (value, low, high, warningTolerance, parameterType) {
    let breach = value < low || value > high;
    let warn = !breach
        ? value <= low + warningTolerance
            ? "Low"
            : value >= high - warningTolerance
                ? "High"
                : "Normal"
        : undefined;

    return { breach, alert: warn, parameter: parameterType, value };
};
