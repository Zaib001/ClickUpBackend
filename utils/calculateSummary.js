export const calculateSummary = (jobs) => {
    return jobs.reduce((acc, job) => {
      const cost = job.fuelCost + job.miscCost + job.wageCost;
      const profit = job.payment - cost;
      const hours = job.drivingTime + job.worksiteTime;
  
      acc.totalPayment += job.payment;
      acc.totalFuel += job.fuelCost;
      acc.totalMisc += job.miscCost;
      acc.totalWage += job.wageCost;
      acc.totalProfit += profit;
      acc.totalHours += hours;
      acc.totalProfitPerHour = acc.totalHours ? acc.totalProfit / acc.totalHours : 0;
      return acc;
    }, {
      totalPayment: 0,
      totalFuel: 0,
      totalMisc: 0,
      totalWage: 0,
      totalProfit: 0,
      totalHours: 0,
      totalProfitPerHour: 0,
    });
  };
  