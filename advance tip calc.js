const usersbill = document.getElementById("usersbill");
const userstip = document.getElementById("userstip");
const peoplebtn1 = document.getElementById("peoplebtn1");
const peoplebtn2 = document.getElementById("peoplebtn2");
const numofpeople = document.getElementById("numofpeople");
const perPersonTotal = document.getElementById("perPersonTotal");
const calcbtn = document.getElementById("calcbtn");
// first calculate the bill tip
const calctip = () => {
  let bill = Number(usersbill.value);
  let tip = Number(userstip.value);
  let total = bill * (tip / 100);
  let totalp = bill - total;
  console.log(totalp);
  //   set the number of persons
  // nop here is the number of persons
  // let nop = numofpeople.innerHTML;
  // peoplebtn1.onclick = () => {
  //   numofpeople.innerHTML = ++nop;
  // };
  // peoplebtn2.onclick = () => {
  //   if (nop <= 0) {
  //     return;
  //   } else {
  //     numofpeople.innerHTML = --nop;
  //   }
  // };
  //   then divide the bill by he number of persons
  let Total = totalp / nop;
  console.log(Total);
  perPersonTotal.innerHTML =   `$${Total}`;
};
calcbtn.addEventListener("click", calctip);
let nop = numofpeople.innerHTML;
peoplebtn1.onclick = () => {
  numofpeople.innerHTML = ++nop;
};
peoplebtn2.onclick = () => {
  if (nop <= 1) {
    alert("pls insert a number above zero for legit calculation");
    return;
  } else {
    numofpeople.innerHTML = --nop;
  }
};
