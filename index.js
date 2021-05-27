const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//reduce array and define totalBatteries variable
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue)
