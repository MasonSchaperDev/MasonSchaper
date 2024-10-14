const btnEl = document.getElementById("btn")
const birthdayEl = document.getElementById("birthday");
function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if(birthdayValue === "") {
       alert("Please enter your birthday") 
    }

    else {
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    const age = currentDate.getFullYear() - birthdayDate.getFullYear();
    console.log(age);
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month === 0 && currentDate.getDate() < getDate())) {
        age--;
    }

    return age;
}

btnEl.addEventListener("click", calculateAge);