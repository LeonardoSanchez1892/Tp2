const formulario = document.getElementById("formulario")
const resultado = document.getElementById("resultado")

formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  const ladoA = parseFloat(document.getElementById("ladoA").value)
  const ladoB = parseFloat(document.getElementById("ladoB").value)
  const ladoC = parseFloat(document.getElementById("ladoC").value)

  if (!ladoA || !ladoB || !ladoC) {
    alert("ingrese valores validos")
    return
  }

  if (ladoA < 0 || ladoB < 0 || ladoC < 0) {
    alert("Tiene que ingresar valores positivos.")
    return
  }

  if (ladoA < ladoC) {
    alert("El lado A tiene que ser mayor al lado C")
    return
  }

  const area = ((ladoA - ladoC) * ladoB) / 2 + ladoB * ladoC
  resultado.textContent = "Area del terreno: " + area
})
