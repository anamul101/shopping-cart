
function updateCaseNumber(isIncrease){
    const caseInputFild = document.getElementById('case-input-Fild');
    const newCaseString = caseInputFild.value;
    const newPreviousValue = parseInt(newCaseString);
    

    let newValueInput;
    if(isIncrease === true){
        newValueInput = newPreviousValue + 1;
    }
    else{
        newValueInput = newPreviousValue - 1;
    }

    caseInputFild.value=newValueInput;

    return newValueInput;
}

function ubdateCaseTotalPrice(newCaseNumber){
    const casePriceNumber = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total-price');
    caseTotalElement.innerText = casePriceNumber; 
}

// phone

function ubdatePhone(isIncrease){
    const phoneInputFild = document.getElementById('phone-input-fild');
    const phoneString = phoneInputFild.value;
    const previousePhoneNumber = parseInt(phoneString);

    let newPhoneNumber;
    if(isIncrease === true){
        newPhoneNumber = previousePhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousePhoneNumber - 1;
    }

    phoneInputFild.value = newPhoneNumber;
    return newPhoneNumber;

}


function ubdatePhonePrice(price){
    const uptadePriceTotal = price * 1219;    
    const totalPhonePrice = document.getElementById('phone-total-price');
    totalPhonePrice.innerText = uptadePriceTotal;
    
}
function getPhoneCaseTotal(isTotal){
    const phonePrice = document.getElementById(isTotal);
    const stringPhone = phonePrice.innerText;
    const converPhone = parseInt(stringPhone);

    return converPhone;
}
// calculet
function setallElement(elementId, value){
    const subtotal = document.getElementById(elementId);
    subtotal.innerText = value;
}

function subTotalPrice(){
    const phoneTotal = getPhoneCaseTotal ('phone-total-price');
    const caseTotal =  getPhoneCaseTotal('case-total-price');

    // subtotal
    const phoneAndCaseTotal = phoneTotal + caseTotal;
    setallElement('sub-total', phoneAndCaseTotal);

    // tax
    const taxperchentString = (phoneAndCaseTotal * 0.1).toFixed(2);
    const taxPrice = parseFloat(taxperchentString);
    setallElement('tax-amount', taxPrice);

    // total amount

    const totalAmount = phoneAndCaseTotal + taxPrice;
    setallElement('total-amount', totalAmount);
}
