// Skapa en händelselyssnare för när sidan laddas
window.addEventListener("load", function () {
    showEmailPopup();
  });
  
  // Funktion för att visa e-post-popup
  function showEmailPopup() {
    var email = prompt("Ange din Gmail-adress:");
  
    // Kontrollera om användaren har angett en e-postadress
    if (email !== null && email !== "") {
      // Gör något med den angivna e-postadressen
      // Exempel: Skicka den till servern för bearbetning
  
      // Visa en bekräftelse för användaren
      alert("Tack för att du angav din Gmail-adress: " + email);
    }
  }
  