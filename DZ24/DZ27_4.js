function CalcSalaries(termOfEmployment, currentSalary) {
  
    if (termOfEmployment >= 1 && termOfEmployment <= 3) {
  
      newSalary = currentSalary * 1.1;
    } else {
  
      newSalary = currentSalary * 1.2;
    }
  
  
    if (newSalary < 4000) {
      newSalary += 1000;
    } else {
  
      newSalary += 500;
    }
  
    return newSalary;
  }
