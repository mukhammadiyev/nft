let modalBackdrop = document.querySelector(".modal-backdrop")
let closeModal = document.querySelector("#close-modal")
let modal = document.querySelector(".modal")
let openModal = document.querySelector("#bars")

openModal.addEventListener("click",()=>{
	modalBackdrop.style.display = "block"
})

closeModal.addEventListener("click",()=>{
	modalBackdrop.style.display = "none"
})

document.addEventListener("keyup",(e)=>{
	if(e.key === "Escape"){
		modalBackdrop.style.display = "none"
	}
})