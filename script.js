
const inheritanceBalanceAmount = localStorage.getItem('inheritancebalance');
const inheritanceBalanceAmountString = new Intl.NumberFormat().format(inheritanceBalanceAmount);
document.getElementById('inheritanceamount1').innerText = inheritanceBalanceAmountString;
document.getElementById('inheritanceamount2').innerText = inheritanceBalanceAmountString;
document.getElementById('inheritanceamount3').innerText = inheritanceBalanceAmountString;




function setupAccount(){
 localStorage.setItem('inheritancebalance',20067.00);
 localStorage.setItem('latestinheritancebalance1',100000.00);
 localStorage.setItem('inheritanceuser','loggedin');
}
