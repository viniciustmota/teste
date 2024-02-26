const btn = document.querySelector('.btn');
const body = document.querySelector('.corpo')
btn.addEventListener('mouseenter', () => {
  numeroAleatorio();
})

function numeroAleatorio() {
  let top = Math.floor(Math.random() * 1000);
  let left = Math.floor(Math.random() * 1000);
  let right = Math.floor(Math.random() * 1000);
  let bottom = Math.floor(Math.random() * 1000);
  btn.style.top = `${top}px`;
  btn.style.left = `${left}px`;
  btn.style.right = `${right}px`;
  btn.style.bottom = `${bottom}px`;
}

btn.addEventListener('click', () => {
  body.classList.toggle("cor")

})