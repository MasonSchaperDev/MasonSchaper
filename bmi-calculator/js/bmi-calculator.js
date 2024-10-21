const btnEl = document.getElementById("btn");
bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("height").value;

    const bmiValue = weightValue / (heightValue * heightValue);

    bmiInputEl.value = bmiValue;

    if(bmiValue < 18.5) {
        weightConditionEl.innerText = "under weight";
    }

    else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionEl.innerText = "normal weight";
    }

    else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditionEl.innerText = "Overweight";
    }

    else if (bmiValue >= 30) {
        weightConditionEl.innerText = "Obesity";
    }

}

btnEl.addEventListener("click", calculateBMI);