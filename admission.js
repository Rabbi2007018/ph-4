function calculateFinalScore(student) {
   
    if (typeof student !== 'object' || student === null || Array.isArray(student)) {
        return "Invalid Input";
    }


    const { name, testScore, schoolGrade, isFFamily } = student;

  
    if (
        typeof name !== 'string' ||
        typeof testScore !== 'number' || testScore > 50 ||
        typeof schoolGrade !== 'number' || schoolGrade > 30 ||
        typeof isFFamily !== 'boolean'
    ) {
        return "Invalid Input";
    }

   
    let finalScore = testScore + schoolGrade;
    if (isFFamily) {
        finalScore += 20; 
    }

    
    return finalScore >= 80;
}


