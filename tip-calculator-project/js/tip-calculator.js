const btnEl = document.getElementById("calc");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");

function calcTotal() {
    const billValue = billInput.value;
    const tipValue  = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue;
}

btnEl.addEventListener("click", calcTotal);