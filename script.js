const themes = [
    "Bioluminescence", "Symbiosis", "Photosynthesis", "Mycelium networks", "Coral reefs",
    "Desert ecosystems", "Mountain ranges", "River deltas", "Poisonous plants", "Carnivorous plants",
    "Fossilization", "Erosion", "Mirrors", "Shadows", "Refraction", "Camouflage", "Migration patterns",
    "Seed dispersal", "Geological layers", "Weather systems", "Metamorphosis", "Squids", "Hibernation cycles",
	"Microbial ecosystems", "Extremophiles", "Hymenoptera", "Coleoptera", "Lepidoptera", "Pollination mechanisms",
	"Genetic mutations", "Abyssopelagic zone", "Mesopelagic zone", "Epipelagic zone", "Hadal zone",
	"whale fall", "Brinicle", "Epigenetics", "Regenerative abilities", "Volcanic activity",
	"Glacial movement", "Tectonic plates", "Oasis formation", "Auroras", "Rainforest canopies",
	"Wetland ecosystems", "Sand dune patterns", "Ocean Currents", "Cave systems", "Burial mounds",
	"Cave paintings", "Ruins of a lost civilization", "Stratigraphy", "Underwater archaeology",
	"Crystallization", "Metallic alloys", "Biodegradable materials", "Nanomaterials", "Superconductors",
	"Self-healing materials", "Phase transitions", "Transparency", "Black holes", "Renewable energy",
	"Space colonization", "Eusociality", "Biomechanics", "Astrobiology", "Cartography",
	"Algae bloom", "mass extinction", "Horizontal gene transfer", "Fungi", "Cephalopod",
	"Pheronome communication", "Convergent evolution", "Punctuated equilibrium", "Vestigial structures",
	"Coevolution", "Genetic drift", "Keystone species", "Adaptive radiation", "Radiation", "Endosymbiosis",
	"Cryovolcanism", "Magnetic reversal", "Bioliths", "Subduction zones", "Lava tubes", "Craters",
	"Geothermal vents", "Beachs", "Crabs", "Neutron stars", "Kuiper Belt", "Exoplanet", "Atmosphere",
	"Exoplanet atmosphere", "Gamma-ray bursts", "Oort cloud", "Magnetars", "Metamaterials", "Superfluids",
	"Buckyballs", "Shape-memory alloys", "Aerogel", "Crystal", "Photonic crystals", "Self-assembling molecules",
	"Xerophytes", "Epiphytes", "parasites", "Halophytes", "Hydrophytes", "Mycorrhizal networks", 
	"Volatile organic compounds(VOCs)", "Alleopathy", "Root exudates", "Seed dormancy", "Apomixis", "Dioecious plants",
	"Monoecious plants", "Phototropism", "Heliotropism", "Nyctinasty", "Resurrection plants", "Ethnobotany",
	"Phytoremediation", "Domestication", "Urban forestry", "Bioarchtecture", "Metheor showers", "Planetary rings",
	"Nebulae", "Galactic filaments", "Quasars", "Lunar lava tubes", "Megastructures", "terraformation",
	"Panspermia", "Biosignature", "Tundra", "Taiga", "Savannas", "kelp forest", "Mangrove swamps", "Coral bleaching",
	"Alpine zones", "Polar regions", "Salt flats", "Salt lakes", "language isolates", "Cuneiform", "Hive mind",
	"Artificial intelligence", "Trophic cascades", "Ant mill", "rat king", "Karyotype", "Automata theory",
	"Theoretical computer science", "Abacus", "Clock", "Nahuatl", "Chromatography", "Rogue planets",
	"Von Neumann Probes", "Tidally locked planets", "Exomoons", "Kardashev scale", "Dark forest Hypothesis",
	"Fermi paradox", "Oumuamua", "Directed panspermia", "Gaia Hypothesis", "Living ships", "Quantum biology",
	"Neural lace", "Biolithic archtecture", "Dragon biology", "Alchemy", "Living forests", "the four elements",
	"The five elements", "Zombie ants", "mimicry", "Slime mold", "Spider rain", "Exploding bees", "Carpenter bees",
	"Lithop succulents", "Vampire finches", "Immortal jellyfish", "Brood parasitism", "Cicada emergence", "Fairy circles",
	"Termites", "Star jelly", "Cryptic species", "Cryptids", "Ring species", "Taxonomic revision", "Linnaen classification",
	"Cladistics", "Type specimens", "Binomial nomenclature", "Endemic species", "Fossil taxonomy", "Fossil",
	"Saurischia", "Ornithischia", "Hybrid species", "Polyploidy", "Homo Naledi", "Trace fossils", "Lagerstatten",
	"Living fossils", "Amber inclusions", "Botany", "Paleobotany", "Paleoclimatology", "Climate zones",
	"Geographical eras", "Biofeedback"
];

const interactionLimitations = [
    "Only keyboard", "Only mouse", "One button", "Drag and drop", "No dialogue", "No text",
    "Touch gestures", "Limited inputs (3 max)", "No direct control",
    "Time-based interactions", "Gravity-based interactions", "Physics-based interactions",
    "No win/lose condition", "Sound based", "Temperature based", "time only moves when the player moves",
	"Delayed consequences", "Time loop", "Audio-only", "Grid based", "Interface based"
];

const artisticDirections = [
    "2D", "3D", "Low-poly", "Monochrome", "1-bit", "Pixel art", "Abstract shapes", "No textures",
    "Shader-based animation", "Procedural generation", "Hand-drawn", "Isometric perspective",
    "Top-down perspective", "First-person perspective", "Wireframe rendering", "Minimalist UI",
    "No animations", "Limited color palette (3 colors max)", "sketchbook style", "Watercolor painting",
	"Oil painting", "Charcoal drawing", "Ink wash", "Collage", "Glitch", "Block colors", "Gradient maps",
	"Duotone color scheme", "Retro-futurism", "steampunk", "Holographic", "liquid motion", "Surrealism",
	"Cubism", "Impressionism", "Dadaism", "Abstract expressionism", "Minimalist line art", "Fractal patterns", 
	"Optical illusion", "Psychedelic", "Baroque", "Ukiyo-e", "Islamic geometric patterns", "Aztec",
	"Mayan", "Mosaic", "Children's book", "Comic", "Storyboard", "Paper cutout", "Clay", "Stop-motion",
	"Fantasy", "Cartography", "Medieval bestiary", "Voxel art", "Data visualization", "ASCII",
	"Particle system", "Procedural animation", "Sound visualization" , "Diesel punk", "Atompunk",
	"Illuminated manuscript", "Mythological map", "Alchemical diagrans", "Baroque astronomy",
	"Victorian naturalism", "Aboriginal dot painting", "Russian constructivism", "Scandinavian folk art",
	"Neon noir", "Noir", "Data moshing", "Arcade", "8-bit", "16-bit", "GBA", "PS1", "PS2", "Retro 3d",
	"EGA", "VGA", "Text based", "DOS", "CRT monitor", "Grainy/VHS", "Colorful", "Flash games", "papercraft",
	"Vector art", "CRT", "Side-scrolling", "Visual novel", "Board game", "Card game", "Horror",
	"Medieval", "2.5D", "4D"
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

    return `Create an interactive experience inspired by ${themeText}, using ${interactionText} in a ${artText} style.`;
}

function getRandomItems(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

document.getElementById("generate").addEventListener("click", () => {
    document.getElementById("prompt").innerHTML = generatePrompt();
});
