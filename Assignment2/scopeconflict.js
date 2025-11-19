let bonus = 5000;

function calculateSalary(isPermanent){
  let salary = 40000;
  let total = isPermanent ? salary + bonus : salary;
  console.log(total);
}

calculateSalary(true);
calculateSalary(false);
console.log(bonus);
