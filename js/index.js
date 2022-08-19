



document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);

    ubdateCaseTotalPrice(newCaseNumber);
    subTotalPrice();
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);

    ubdateCaseTotalPrice(newCaseNumber);
    subTotalPrice();
})