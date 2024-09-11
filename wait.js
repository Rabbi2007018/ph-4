function waitingTime(times, serialNumber) {
  
    if (!Array.isArray(times) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

   
    const totalInterviewees = times.length;
    const totalTime = times.reduce((sum, time) => sum + time, 0);
    const averageTime = Math.round(totalTime / totalInterviewees);

  
    const peopleAhead = serialNumber - 1;

   
    const remainingPeople = Math.max(0, peopleAhead - totalInterviewees);

    
    const waitingTime = remainingPeople * averageTime;

    return waitingTime;
}



