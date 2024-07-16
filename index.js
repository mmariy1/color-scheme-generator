const pickedColor = document.getElementById("color-picker")
const getSchemeBtn = document.getElementById("get-scheme")
const modeSelect = document.getElementById("mode-select")
const colorScheme = document.getElementById("color-scheme")



getSchemeBtn.addEventListener ("click", function(){
    const selectedColor = pickedColor.value
    const selectedMode = modeSelect.value
    fetch (`https://www.thecolorapi.com/scheme?hex=${selectedColor.slice(1)}&mode=${selectedMode}`)
    .then (response => response.json())
    .then(data => {
    colorScheme.innerHTML = "" // Limpa o conteúdo anterior

    data.colors.forEach(color => {
      const colorDiv = document.createElement("div")
      colorDiv.classList.add("color-box")
      colorDiv.style.backgroundColor = color.hex.value
      const colorHex = document.createElement("p")
      colorHex.textContent = color.hex.value;
      colorDiv.appendChild(colorHex);
      
      colorScheme.appendChild(colorDiv)
      
    })
  })
})


    

    
