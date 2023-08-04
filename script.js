function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assets/avatarlight.png")
    img.setAttribute("alt", "foto de um cara assustado")
  } else {
    img.setAttribute("src", "./Assets/avatar1.png")
    img.setAttribute(
      "alt",
      "foto de pessoa comum fumando um chongos fundo bege camisa preta"
    )
  }

  // pegar a tag img

  // subistituir a imagem
  // se tiver em light mode adiconar a imagem light
  // se tiver sem light mode manter a imagem normal
}
