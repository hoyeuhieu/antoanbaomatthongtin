let histories = []
document.addEventListener('DOMContentLoaded', event => {
  let displays = document.getElementsByClassName('tab-pane')
  let links = document.getElementsByClassName('nav-link')

  //   console.log(links[0]);
  links[0].classList.add('font-weight-bold')
  displays[0].classList.add('active')
})

function reverseFunc() {
  let displays = document.getElementsByClassName('tab-pane')
  let links = document.getElementsByClassName('nav-link')

  //   console.log(links[0]);
  links[0].classList.add('font-weight-bold')
  displays[0].classList.add('active')
  links[1].classList.remove('font-weight-bold')
  displays[1].classList.remove('active')
}

function powFunc() {
  let displays = document.getElementsByClassName('tab-pane')
  let links = document.getElementsByClassName('nav-link')

  //   console.log(links[0]);
  links[1].classList.add('font-weight-bold')
  displays[1].classList.add('active')
  links[0].classList.remove('font-weight-bold')
  displays[0].classList.remove('active')
}

// *: Tính kết quả thuật toán đảo ngược
function reverseHandle() {
  let a = document.getElementById('reverse-a').value
  let n = document.getElementById('reverse-n').value
  if ((a == '') | (n == '')) {
    swal('Opps!', 'Vui lòng kiểm tra các trường dữ liệu !', 'error')
  } else {
    swal('Success !', `Kết quả : ${reverseNumber(a, n)}`, 'success')
    addHistory({
      name: 'Thuật toán đảo ngược',
      a,
      n,
      result: reverseNumber(a, n),
    })
    showHistory()
  }
}

function powHandle() {
  let a = document.getElementById('pow-a').value
  let x = document.getElementById('pow-x').value
  let n = document.getElementById('pow-n').value
  if ((a == '') | (n == '') | (x == '')) {
    swal('Opps!', 'Vui lòng kiểm tra các trường dữ liệu !', 'error')
  } else {
    swal('Success !', `Kết quả : ${bigPow(a, x, n)}`, 'success')
    addHistory({
      name: 'Thuật toán tính modulo của lũy thừa số mũ lớn nhất',
      a,
      x,
      n,
      result: bigPow(a, x, n),
    })
    showHistory()
  }
}

// ?: Thuật toán đảo ngược
const reverseNumber = (a, n) => {
  let x0 = parseInt(n)
  let x1 = parseInt(a)
  let b0 = 0
  let b1 = 1
  let i = 1
  let x = [x0, x1]
  let b = [b0, b1]

  while (x[i] > 1) {
    let y = Math.floor(x[i - 1] / x[i])
    x[i + 1] = x[i - 1] - y * x[i]
    b[i + 1] = b[i - 1] - y * b[i]
    i = i + 1
  }

  if (x[i - 1] === 0) return 0
  else {
    if (b[i] > 0) {
      return b[i]
    } else return parseInt(n) + b[i]
  }
}

// ?: Thuật toán tính modulo của lũy thừa số mũ lớn nhất
const bigPow = (a, x, n) => {
  let d = 1
  while (x > 0) {
    if (x % 2 == 1) {
      d = (d * a) % n
      x = Math.floor(x / 2)
      a = (a * a) % n
    } else {
      x = Math.floor(x / 2)
      a = (a * a) % n
    }
  }

  return d
}

const addHistory = obj => {
  histories.unshift(obj)
}

const showHistory = () => {
  let history = document.getElementById('history')
  let html = ''
  histories.map(e => {
    if (e.x) {
      html += `<p class="m-0 p-0 text-success">${e.name} | a: ${e.a} | n: ${e.n} | x: ${e.x} => result: ${e.result} </p>`
    } else {
        html += `<p class="m-0 p-0 text-danger">${e.name} | a: ${e.a} | n: ${e.n} => result: ${e.result}</p>`
    }
  })
  history.innerHTML = html
}
