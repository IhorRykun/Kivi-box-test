const container1 = document.querySelector('.js-list-1');
const container2 = document.querySelector('.js-list-2');
const container3 = document.querySelector('.js-list-3');
const textSpan1 = document.querySelector('#span-more1');
const textSpan2 = document.querySelector('#span-more2');
const textSpan3 = document.querySelector('#span-more3');
// container.addEventListener('click', e => {
//   const targetValue = textSpan.classList.toggle('display-nan');
//   if (e.currentTarget.nodeName === 'BUTTON') {
//     console.log(e.currentTarget.nodeName);
//     return targetValue;
//   }
//   return;
// });

container1.addEventListener('click', onClickOne);
container2.addEventListener('click', onClickTwo);
container3.addEventListener('click', onClickThree);
function onClickOne() {
  const targetValue = textSpan1.classList.toggle('display-nan');
  return targetValue;
}
function onClickTwo() {
  const targetValue = textSpan2.classList.toggle('display-nan');
  return targetValue;
}

function onClickThree() {
  const targetValue = textSpan3.classList.toggle('display-nan');
  return targetValue;
}
