function calculateBmi(peso:number,altura:number){
    let bmi = peso/(altura/100*altura/100)
    
    
    if(bmi >= 16 && bmi <= 18){
        return `Underweight`;
    }else if(bmi > 18 && bmi <= 25){
        return `Normal (healthy weigh)`;
    }else if(bmi > 25 && bmi <=30){
       return `Overweight`;
    }
}

console.log(calculateBmi(80,180));
