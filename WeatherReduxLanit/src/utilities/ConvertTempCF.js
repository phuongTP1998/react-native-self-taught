const TempCF = (temp, unit) => {
    if (unit === '°C') {
        return Math.round(temp - 273) + '˚C';
    }
    if (unit === '°F') {
        return Math.round((temp - 273) * 1.8 + 32) + '˚F';
    }
    return Math.round(temp) + '˚K';
};

export default TempCF;