const form = document.querySelector('.search');
const searchResultSection = document.querySelector('.search-result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // your search logic here

  // after search is done, display the search result section
  searchResultSection.style.display = 'block';
});


// <!-- <script>
// const form = document.querySelector('.search');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const start = form.querySelector('[name="start"]').value;
//   const end = form.querySelector('[name="end"]').value;

//   if (start === 'BKK' && end === 'CMI') {
//     window.location.href = 'detail1.html';
//   }
//   else if (start === 'BKK' && end === 'CRI')  {
//     window.location.href = 'detail2.html';
//   }
//   else if (start === 'BKK' && end === 'KBI')  {
//     window.location.href = 'detail3.html';
//   }
//   else if (start === 'CMI' && end === 'BKK')  {
//     window.location.href = 'detail4.html';
//   }
//   else if (start === 'CRI' && end === 'BKK')  {
//     window.location.href = 'detail5.html';
//   }
//   else {
//     window.location.href = 'searchresult.html';
//   }
// });        
// </script> -->