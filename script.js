//Start
//run random number generator between 0 and white list.length
//add value to 3-2-1 object 
//loop 3x each time if value is equal to value present in 3-2-1 object repeate
//Repeate these steps for green (loop 2x), 
//  red (1x), (equipment including lunar 1x), 
//  (lunar 1x), (void 1x), boss (1x)

const whites = document.getElementById("common");
const greens = document.getElementById("uncommon");
const reds = document.getElementById("rare");
const blues = document.getElementById("lunar");
const oranges = document.getElementById("useitem");
const purples = document.getElementById("void");
const yellows = document.getElementById("boss");

const commonItems = ["Armor-Piercing Rounds", "Backup Magazine", "Bison Steak", "Bundle of Fireworks", "Bustling Fungus", "Cautious Slug", "Crowbar", "Delicate Watch", "Energy Drink", "Focus Crystal", "Gasoline", "Lens-Maker's Glasses", "Medkit", "Mocha", "Monster Tooth", "Oddly-shaped Opal", "Paul's Goat Hoof", "Personal Shield Generator", "Power Elixir", "Repulsion Armor Plate", "Roll of Pennies","Rusted Key", "Soldier's Syringe", "Sticky Bomb", "Stun Grenade","Topaz Brooch", "Tougher Times", "Tri-Tip Dagger", "Warbanner"];
const uncommonItems = ["AtG Missile Mk. 1", "Bandolier", "Berzerker's Pauldron", "Chronobauble", "Death Mark", "Fuel Cell", "Ghor's Tome", "Harvester's Scythe", "Hopoo Feather", "Hunter's Harpoon", "Ignition Tank", "Infusion", "Kjaro's Band", "Leeching Seed", "Lepton Daisy", "Old Guillotine", "Old War Stealthkit", "Predatory Instincts", "Razorwire", "Red Whip", "Rose Buckler", "Runald's Band", "Shipping Request Form", "Shuriken", "Squid Polyp", "Ukulele", "War Horn", "Wax Quail", "Will-o'-the-wisp"];
const rareItems = ["57 Leaf Clover", "Aegis", "Alien Head", "Ben's Raincoat", "Bottled Chaos", "Brainstalks", "Brilliant Behemoth", "Ceremonial Dagger", "Dio's Best Friend", "Frost Relic", "H3AD-5T v2", "Happiest Mask", "Hardlight Afterburner", "Interstellar Desk Plant", "Laser Scope", "N'kuhana's Opinion", "Pocket I.C.B.M.", "Rejuvenation Rack", "Resonance Disc", "Sentient Meat Hook", "Shattering Justice", "Soulbound Catalyst", "Spare Drone Parts", "Symbiotic Scorpion", "Unstable Tesla Coil", "Wake of Vultures"];
const lunarItems = ["Beads of Fealty", "Brittle Crown,Corpsebloom", "Defiant Gouge", "Egocentrism", "Essence of Heresy", "Eulogy Zero", "Focused Convergence", "Gesture of the Drowned", "Hooks of Heresy", "Light Flux Pauldron", "Mercurial Rachis", "Purity", "Shaped Glass", "Stone Flux Pauldron", "Strides of Heresy", "Transcendence", "Visions of Heresy"];
const useItems = ["Blast Shower", "Disposable Missile Launcher", "Eccentric Vase", "Executive Card", "Foreign Fruit", "Forgive Me Please", "Gnarled Woodsprite", "Goobo Jr.", "Gorag's Opus", "Jade Elephant", "Milky Chrysalis", "Molotov (6-Pack)", "Ocular HUD", "Preon Accumulator", "Primordial Cube", "Radar Scanner", "Remote Caffeinator", "Royal Capacitor", "Sawmerang", "Super Massive Leech", "The Back-up", "The Crowdfunder", "Trophy Hunter's Tricorn", "Volcanic Egg", "Effigy of Grief", "Glowing Meteorite", "Helfire Tincture", "Spinel Tonic"]
const voidItems = ["Benthic Bloom", "Encrusted Key", "Lost Seer's Lenses", "Lysate Cell", "Needletick", "Newly Hatched Zoea", "Plasma Shrimp", "Pluripotent Larva", "Polylute", "Safer Spaces", "Singularity Band", "Tentabauble", "Voidsent Flame", "Weeping Fungus"];
const bossItems = ["Charged Perforator", "Defense Nucleus", "Empathy Cores", "Genesis Loop", "Halcyon Seed", "Little Disciple", "Mired Urn", "Molten Perforator", "Planula", "Queen's Gland", "Shatterspleen", "Titanic Knurl"];
const characters = ["Acrid", "Artifificer", "Bandit", "Captain", "Commando", "Engineer", "Huntress", "Loader", "Mercenary", "MUL-T", "Railgunner", "Rex", "Void Fiend"];
const choices = [];



//rng
function random(max) {
    return Math.floor(Math.random() * max);
}


//Chooses a random element from the chosen list. puts it in the choices list
//iterates numberOfIterations times
function choose(numberOfIterations, itemTypeArray) {
    let counter = 0
    let pushValue;
    const returnItems = []
    while (counter < numberOfIterations) {
        pushValue = itemTypeArray[(random(itemTypeArray.length))];
        if (returnItems.some((element) => element === pushValue)) {
            continue
        } else {
        returnItems.push(pushValue);
    }
        counter++;
    }
    return returnItems;
}

function getRandFromArray(iterations, itemArray, location) {
    let randArray = [];
    randArray = choose(iterations, itemArray);
    for (let i = 0; i < iterations; i++) {
        if (iterations > 1) {
        location.textContent += (itemArray[i] + " and ");
        } else {
        location.textContent += (itemArray[i]);
        }
    }
}

function random321() {
    getRandFromArray(3, commonItems, whites);
    getRandFromArray(2, uncommonItems, greens);
    getRandFromArray(1, rareItems, reds);
    getRandFromArray(1, lunarItems, blues);
    getRandFromArray(1, useItems, oranges);
    getRandFromArray(1, voidItems, purples);
    getRandFromArray(1, bossItems, yellows);
}