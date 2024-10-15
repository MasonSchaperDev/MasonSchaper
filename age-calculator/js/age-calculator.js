const btnEl = document.getElementById("btn");
const bdayEl = document.getElementById("bday");
const resultEl = document.getElementById("result");  // Define the element to display the result, not sure why this wasn't done

function calculateAge() {
    const bdayValue = bdayEl.value;
    
    if (bdayValue === "") {
        alert("Please enter your bday");
    } else {
        const age = getAge(bdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(bdayValue) {
    const currentDate = new Date();
    const bdayDate = new Date(bdayValue);
    let age = currentDate.getFullYear() - bdayDate.getFullYear();
    const month = currentDate.getMonth() - bdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < bdayDate.getDate()))
        {
        age--;
    }

    return age;
}

btnEl.addEventListener("click", calculateAge);
