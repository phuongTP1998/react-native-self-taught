const TempCF = (temp, unit) => {
    if (unit === 'c') {
        return Math.round(temp - 273) + '˚C';
    }
    if (unit === 'f') {
        return Math.round((temp - 273) * 1.8 + 32) + '˚F';
    }
    return Math.round(temp) + '˚K';
};

export default TempCF;