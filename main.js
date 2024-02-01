window.onload = async () => {
  const name = await Swal.fire({
    icon: "question",
    title: "Hey kamu, namanya siapa?",
    input: "text",
    showConfirmButton: true
  })
  if(name.value.toLowerCase() != "amanda") return window.onload()
  await Swal.fire({
    title: "Halo <b>Amandaaa</b> ^^",
    html: `Happy valentine's day hehe ❤️`
  })
  
  await Swal.fire({
    title: "Mau coklat?",
    html: `Maap tidak memberikan kamu cokelat di hari Valentine ini.. tapi kalau mau ingin sesuatu yang sweet, aku ada di sini kok (eakk)`
  })
  await Swal.fire({
    title: "Canda beb ntar dikasih coklat kok"
  })
  document.querySelector(".content").style.display = "flex"
  const tombol = document.querySelector(".tombol")
  const title = document.querySelector("h1")
  tombol.onclick = () => {
    document.body.style.backgroundImage = 'url(./images/random.jpeg)'
    tombol.style.display = 'none'
    title.style.display = 'block'
  }
}
