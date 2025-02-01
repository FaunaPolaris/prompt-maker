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
    const theme = themes[Math.floor(Math.random() * themes.length)];
    const interaction = interactionLimitations[Math.floor(Math.random() * interactionLimitations.length)];
    const art = artisticDirections[Math.floor(Math.random() * artisticDirections.length)];
    return `Create an interactive experience inspired by ${theme}, using ${interaction} in a ${art} world.`;
}

document.getElementById("generate").addEventListener("click", () => 
{
    document.getElementById("prompt").textContent = generatePrompt();
});
