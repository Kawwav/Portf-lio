const gitImage = document.getElementById('git2');
const linkedinImage = document.querySelector('#lk img');

gitImage.addEventListener('mouseenter', () => {
  gitImage.classList.add('rotate');
});

gitImage.addEventListener('mouseleave', () => {
  gitImage.classList.remove('rotate');
});

linkedinImage.addEventListener('mouseenter', () => {
  linkedinImage.classList.add('rotate');
});

linkedinImage.addEventListener('mouseleave', () => {
  linkedinImage.classList.remove('rotate');
});




const basycImage = document.getElementById('basyc');

basycImage.addEventListener('mouseenter', () => {
 
  basycImage.classList.add('animacao-basyc');
});

basycImage.addEventListener('mouseleave', () => {

  basycImage.classList.remove('animacao-basyc');
});

