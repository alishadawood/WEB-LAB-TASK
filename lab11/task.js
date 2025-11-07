// Live name update
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");
const moodSelect = document.getElementById("moodSelect");
const emoji = document.getElementById("emoji");
const button = document.getElementById("changeMoodBtn");

nameInput.addEventListener("input", function() {
    const name = nameInput.value;
    greeting.textContent = "Hello " + name + "!";
});

// Change emoji and background color on button click
button.addEventListener("click", function() {
    const mood = moodSelect.value;

    if (mood === "happy") {
        emoji.textContent = "😄";
        document.body.style.backgroundColor = "yellow";
    } else if (mood === "sad") {
        emoji.textContent = "😭";
        document.body.style.backgroundColor = "skyblue";
    } else if (mood === "angry") {
        emoji.textContent = "😤";
        document.body.style.backgroundColor = "lightcoral";
    } else if (mood === "excited") {
        emoji.textContent = "🥳";
        document.body.style.backgroundColor = "lightgreen";
    }
});
