const solicitud = document.getElementById("calculadora")

solicitud.onsubmit = (e) => {
  e.preventDefault()
  const estatura = document.getElementById("estatura").value
  const peso = document.getElementById("peso").value

  if (estatura < 0 || peso < 0) {
    alert("Ingresar valores positivos, no se pueden ingresar valores negativos")
    return
  }

  const imc = peso / (estatura * estatura)

  alert("Indice de masa corporal: " + imc.toFixed(2))
}
