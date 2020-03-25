// Listener for Submit
document.getElementById('loan-form').addEventListener('submit', function (e) {
  // hide Result
  document.getElementById('results').style.display = 'none';
  // Show Loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults,500);

  e.preventDefault();
});

//calculate Results
function calculateResults() {
  // UI Vars

  const amount = document.getElementById('amount');
  const intrest = document.getElementById('intrest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalIntrest = document.getElementById('total-intrest');

  const principle = parseFloat(amount.value);
  const calculatedIntrest = parseFloat(intrest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //copute monthly Payments
  const x = Math.pow(1 + calculatedIntrest, calculatedPayments);
  const monthly = (principle * x * calculatedIntrest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalIntrest.value = ((monthly*calculatedPayments)-principle).toFixed(2);
    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'block';
  } else {
    showError('Please Check your Numbers')
  }

}

// Show Error
function showError(error) {

  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'none';
  
  // Create Div
  const errorDiv = document.createElement('div')

  // Get Element
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  errorDiv.className = 'alert alert-danger';

  errorDiv.appendChild(document.createTextNode(error));

  // Insert above heading
  card.insertBefore(errorDiv, heading);

  // clear Error after 3 Sec
  setTimeout(clearError, 3000);
}

// clearError
function clearError() {
  document.querySelector('.alert').remove();
}