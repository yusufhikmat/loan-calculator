const form=document.querySelector('#loan-form');

//add event listener to the form
form.addEventListener('submit', calculateResult)

//function calculateResult
function calculateResult(e){
    const amount=document.querySelector('#amount');
     const interest=document.querySelector('#interest');
     const years=document.querySelector('#years');
    const monthlyPayment=document.querySelector('#monthly-payment');
    const totalPayment=document.querySelector('#total-payment');
    const totalInterest=document.querySelector('#total-interest');

   const principal = parseFloat(amount.value);
   const rate = parseFloat(interest.value) / 100 / 12;
   const times = parseFloat(years.value * 12);

   //compute monthly payment
   const x = Math.pow(1 + rate, times);
   const monthlyPay = (principal * x * rate)/(x - 1);

   if(isFinite(monthlyPay)){
    monthlyPayment.value = monthlyPay.toFixed(2);
    totalPayment.value = (monthlyPay * times).toFixed(2);
    totalInterest.value =((monthlyPay * times) - principal).toFixed(2)
   }else{
    showError('cheeck number')
   }
    e.preventDefault();

}
//show error
//create a div
function showError(error){ 
const errorDiv = document.createElement('div');
//add class
errorDiv.className='alert alert-danger';
//create textNode
errorDiv.appendChild(document.createTextNode(error));

//get element
const card = document.querySelector('.card');
const heading = document.querySelector('.heading')

//insert error above heading
card.insertBefore(errorDiv, heading);
//clear error after 3 seconds
setTimeout(clearError,3000);
}
function clearError(){
    document.querySelector('.alert').remove();
}