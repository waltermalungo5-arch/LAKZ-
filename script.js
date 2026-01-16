const buyButton = document.getElementById("buyButton");
const adModal = document.getElementById("adModal");

buyButton.addEventListener("click", function(e){
  e.preventDefault();
  adModal.style.display = "block"; // mostra modal de anúncio
  setTimeout(()=>{
    window.location.href = "https://payhip.com/yLakz"; // redireciona para Payhip
  }, 3000); // espera 3 segundos
});