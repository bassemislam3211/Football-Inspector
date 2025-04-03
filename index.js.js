const footballPlayers = {
    "Cristiano Ronaldo": "Cristiano Ronaldo is known for his incredible skills and leadership!", // Write the message you want 
    "Lionel Messi": "Lionel Messi is regarded as one of the greatest players of all time!", // Write the message you want 
    "Neymar Jr": "Neymar Jr. is famous for his flair and agility on the field!", // Write the message you want 
    "Kylian Mbappé": "Kylian Mbappé is a rising star with amazing speed and talent!", // Write the message you want 
    "Erling Haaland": "Erling Haaland is a phenomenal goal scorer and future legend!", // Write the message you want 
    "Mohamed Salah": "Mohamed Salah is adored for his quick pace and precision!", // Write the message you want 
    "Kevin De Bruyne": "Kevin De Bruyne is a maestro of midfield with unmatched vision!", // Write the message you want 
    "Luka Modrić": "Luka Modrić is celebrated for his control and creativity in the game!", // Write the message you want 
    "Harry Kane": "Harry Kane is a prolific striker and England's pride!", // Write the message you want 
    "Karim Benzema": "Karim Benzema is a consistent performer with amazing technique!", // Write the message you want 
    "Robert Lewandowski": "Robert Lewandowski is an exceptional goal machine and leader!", // Write the message you want 
    "Zlatan Ibrahimović": "Zlatan Ibrahimović is a charismatic player with remarkable skills!", // Write the message you want 
    "Eden Hazard": "Eden Hazard is renowned for his dribbling and versatility on the field!", // Write the message you want 
    // Add more players and messages if you want
};

function checkSport() {
    const sportInput = document.getElementById("Sport-search").value.trim().toLowerCase();
    const playerInput = document.getElementById("inputPlayer");
    const message = document.getElementById("message");
    const showMessageButton = document.getElementById("showMessageButton");

    if (sportInput === "football") {
        playerInput.style.display = "block";
        playerInput.placeholder = "Enter a player name (e.g., Messi, Ronaldo)";
        showMessageButton.style.display = "block"; 
    } else {
        playerInput.style.display = "none";
        playerInput.value = "";
        showMessageButton.style.display = "none"; 
        message.innerHTML = "";
    }
}

function displayPlayerMessage() {
    const playerInput = document.getElementById("inputPlayer").value.trim().toLowerCase();
    const message = document.getElementById("message");

    // Search for the player dynamically
    const matchedPlayer = Object.keys(footballPlayers).find((player) => {
        const normalizedPlayer = player.toLowerCase();
        const [firstName, lastName] = normalizedPlayer.split(" "); // Split into first and last name
        return playerInput === firstName || playerInput === lastName || playerInput === normalizedPlayer;
    });

    if (matchedPlayer) {
        message.innerHTML = footballPlayers[matchedPlayer]; // Display the specific message
    } else {
        message.innerHTML = "Player not found. Please check the spelling.";
    }
}