document.addEventListener("DOMContentLoaded", function () {
    // Gestion de la Newsletter
    const form = document.getElementById("newsletterForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Empêche le rechargement de la page
            const email = document.getElementById("email").value.trim();

            if (email === "") {
                alert("Veuillez entrer une adresse e-mail valide.");
                return;
            }

            console.log("Abonné avec :", email);

            // Rediriger vers la page de confirmation
            window.location.href = "confirmation.html";
        });
    }

    // Gestion du chatbot
    const chatForm = document.getElementById("chat-form");
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");

    if (chatForm && chatBox && userInput) {
        chatForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Empêche le rechargement de la page
            let userMessage = userInput.value.trim().toLowerCase();

            if (userMessage === "") return; // Évite d'envoyer un message vide

            let botResponse = "Je ne comprends pas...";

            // Réponses du chatbot

            if (userMessage.includes("bonjour")) {
                botResponse = "Bonjour ! Comment puis-je vous aider ?";
            } else if (userMessage.includes("salut")) {
                botResponse = "Salut ! Que puis-je faire pour vous ?";
            } else if (userMessage.includes("comment ça va")) {
                botResponse = "Je suis un bot, mais je vais bien ! Et vous ?";
            }

            // Affichage des messages
        console.log(chatBox); // Vérifie si chatBox est bien sélectionné
            chatBox.innerHTML += '<p><strong>Vous:</strong> ${userMessage}</p>';
            chatBox.innerHTML += '<p><strong>Bot:</strong> ${botResponse}</p>';
            userInput.value = ""; // Efface l'input après envoi
            chatBox.scrollTop = chatBox.scrollHeight; // Défilement automatique en bas
        });
    } else {
        console.error("Éléments du chatbot non trouvés !");
    }
});
