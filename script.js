let comingDate = new Date('Feb 24, 2023 13:12:00')

let d = document.getElementById('days')
let h = document.getElementById('hours')
let m = document.getElementById('minutes')
let s = document.getElementById('seconds')

let x = setInterval(function() {
  let now = new Date()
  let selisih = comingDate.getTime() - now.getTime()

  let days    = Math.floor(selisih / (1000 * 60 * 60 * 24))
  let hours   = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
  let minutes = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60))
  let seconds = Math.floor(selisih % (1000 * 60) / 1000)

  d.innerHTML = getTrueNumber(days)
  h.innerHTML = getTrueNumber(hours)
  m.innerHTML = getTrueNumber(minutes)
  s.innerHTML = getTrueNumber(seconds)

  if (selisih < 0) {
    clearInterval(x)
    d.innerHTML = '00'
    h.innerHTML = '00'
    m.innerHTML = '00'
    s.innerHTML = '00'
  }
}, 1000)

function getTrueNumber(x) {
  if (x < 10) return '0' + x
  else return x
}

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".closeButton");

function toggleModal() {
    modal.classList.toggle("showModal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

const form = document.getElementById('form')

form.addEventListener('submit', function(e) {
  alert("Obrigado, você recebera um email assim que começar!")

  e.preventDefault()
})