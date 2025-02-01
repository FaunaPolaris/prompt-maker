const themes = [
    "Bioluminescence", "Symbiosis", "Photosynthesis", "Mycelium networks", "Coral reefs",
    "Desert ecosystems", "Mountain ranges", "River deltas", "Poisonous plants", "Carnivorous plants",
    "Fossilization", "Erosion", "Mirrors", "Shadows", "Refraction", "Camouflage", "Migration patterns",
    "Seed dispersal", "Geological layers", "Weather systems"
];

const interactionLimitations = [
    "Only keyboard", "Only mouse", "One button", "Drag and drop", "No dialogue", "No text",
    "Voice input", "Touch gestures", "Limited inputs (3 max)", "No direct control",
    "Time-based interactions", "Gravity-based interactions", "Physics-based interactions",
    "No win/lose condition"
];

const artisticDirections = [
    "2D", "3D", "Low-poly", "Monochrome", "1-bit", "Pixel art", "Abstract shapes", "No textures",
    "Shader-based animation", "Procedural generation", "Hand-drawn", "Isometric perspective",
    "Top-down perspective", "First-person perspective", "Wireframe rendering", "Minimalist UI",
    "No animations", "Limited color palette (3 colors max)"
];

function generatePrompt() {
    const themeCount = parseInt(document.getElementById("themes").value, 10);
    const interactionCount = parseInt(document.getElementById("input-types").value, 10);
    const artCount = parseInt(document.getElementById("constraints").value, 10);

    const selectedThemes = getRandomItems(themes, themeCount);
    const selectedInteractions = getRandomItems(interactionLimitations, interactionCount);
    const selectedArtisticDirections = getRandomItems(artisticDirections, artCount);

    const themeText = selectedThemes.map(theme => `<span class="highlight">${theme}</span>`).join(", ");
    const interactionText = selectedInteractions.map(interaction => `<span class="highlight">${interaction}</span>`).join(", ");
    const artText = selectedArtisticDirections.map(art => `<span class="highlight">${art}</span>`).join(", ");

    return `Create an interactive experience inspired by ${themeText}, using ${interactionText} in a ${artText} world.`;
}

function getRandomItems(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

document.getElementById("generate").addEventListener("click", () => {
    document.getElementById("prompt").innerHTML = generatePrompt();
});
