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
const commonFiles = ["Armor-Piercing_Rounds.webp", "Backup_Magazine.webp", "Bison_Steak.webp", "Bundle_of_Fireworks.webp", "Bustling_Fungus.webp", "Cautious_Slug.webp", "Crowbar.webp", "Delicate_Watch.webp", "Energy_Drink.webp", "Focus_Crystal.webp", "Gasoline.webp", "Lens-Makers_Glasses.webp", "Medkit.webp", "Mocha.webp", "Monster_Tooth.webp", "Oddly-shaped_Opal.webp", "Pauls_Goat_Hoof.webp", "Personal_Shield_Generator.webp", "Power_Elixir.webp", "Repulsion_Armor_Plate.webp", "Roll_of_Pennies.webp", "Rusted_Key.webp", "Soldiers_Syringe.webp", "Sticky_Bomb.webp", "Stun_Grenade.webp", "Topaz_Brooch.webp", "Tougher_Times.webp", "Tri-Tip_Dagger.webp", "Warbanner.webp"]

const uncommonItems = ["AtG Missile Mk. 1", "Bandolier", "Berzerker's Pauldron", "Chronobauble", "Death Mark", "Fuel Cell", "Ghor's Tome", "Harvester's Scythe", "Hopoo Feather", "Hunter's Harpoon", "Ignition Tank", "Infusion", "Kjaro's Band", "Leeching Seed", "Lepton Daisy", "Old Guillotine", "Old War Stealthkit", "Predatory Instincts", "Razorwire", "Red Whip", "Rose Buckler", "Runald's Band", "Shipping Request Form", "Shuriken", "Squid Polyp", "Ukulele", "War Horn", "Wax Quail", "Will-o'-the-wisp"];
const uncommonFiles = ["AtG_Missile_Mk._1.webp", "Bandolier.webp", "Berzerkers_Pauldron.webp", "Chronobauble.webp", "Death_Mark.webp", "Fuel_Cell.webp", "Ghors_Tome.webp", "Harvesters_Scythe.webp", "Hopoo_Feather.webp", "Hunters_Harpoon.webp", "Ignition_Tank.webp", "Infusion.webp", "Kjaros_Band.webp", "Leeching_Seed.webp", "Lepton_Daisy.webp", "Old_Guillotine.webp", "Old_War_Stealthkit.webp", "Predatory_Instincts.webp",  "Razorwire.webp", "Red_Whip.webp", "Rose_Buckler.webp", "Runalds_Band.webp", "Shipping_Request_Form.webp", "Shuriken.webp", "Squid_Polyp.webp", "Ukulele.webp", "War_Horn.webp", "Wax_Quail.webp", "Will-o-the-wisp.webp"]

const rareItems = ["57 Leaf Clover", "Aegis", "Alien Head", "Ben's Raincoat", "Bottled Chaos", "Brainstalks", "Brilliant Behemoth", "Ceremonial Dagger", "Dio's Best Friend", "Frost Relic", "H3AD-5T v2", "Happiest Mask", "Hardlight Afterburner", "Interstellar Desk Plant", "Laser Scope", "N'kuhana's Opinion", "Pocket I.C.B.M.", "Rejuvenation Rack", "Resonance Disc", "Sentient Meat Hook", "Shattering Justice", "Soulbound Catalyst", "Spare Drone Parts", "Symbiotic Scorpion", "Unstable Tesla Coil", "Wake of Vultures"];
const rareFiles = ["57_Leaf_Clover.webp", "Aegis.webp", "Alien_Head.webp", "Bens_Raincoat.webp", "Bottled_Chaos.webp", "Brainstalks.webp", "Brilliant_Behemoth.webp", "Ceremonial_Dagger.webp", "Dios_Best_Friend.webp", "Frost_Relic.webp", "H3AD-5T_v2.webp", "Happiest_Mask.webp", "Hardlight_Afterburner.webp  dirlist.txt", "Interstellar_Desk_Plant.webp", "Laser_Scope.webp", "Nkuhanas_Opinion.webp", "Pocket_I.C.B.M..webp", "Rejuvenation_Rack.webp", "Resonance_Disc.webp", "Sentient_Meat_Hook.webp", "Shattering_Justice.webp", "Soulbound_Catalyst.webp", "Spare_Drone_Parts.webp", "Symbiotic_Scorpion.webp", "Unstable_Tesla_Coil.webp", "Wake_of_Vultures.webp"]

const lunarItems = ["Beads of Fealty", "Brittle Crown", "Corpsebloom", "Defiant Gouge", "Egocentrism", "Essence of Heresy", "Eulogy Zero", "Focused Convergence", "Gesture of the Drowned", "Hooks of Heresy", "Light Flux Pauldron", "Mercurial Rachis", "Purity", "Shaped Glass", "Stone Flux Pauldron", "Strides of Heresy", "Transcendence", "Visions of Heresy"];
const lunarFiles = ["Beads_of_Fealty.webp", "Brittle_Crown.webp", "Corpsebloom.webp", "Defiant_Gouge.webp", "Egocentrism.webp", "Essence_of_Heresy.webp", "Eulogy_Zero.webp", "Focused_Convergence.webp", "Gesture_of_the_Drowned.webp", "Hooks_of_Heresy.webp", "Light_Flux_Pauldron.webp", "Mercurial_Rachis.webp", "Purity.webp", "Shaped_Glass.webp", "Stone_Flux_Pauldron.webp", "Strides_of_Heresy.webp", "Transcendence.webp", "Visions_of_Heresy.webp"];

const useItems = ["Blast Shower", "Disposable Missile Launcher", "Eccentric Vase", "Executive Card", "Foreign Fruit", "Forgive Me Please", "Gnarled Woodsprite", "Goobo Jr.", "Gorag's Opus", "Jade Elephant", "Milky Chrysalis", "Molotov (6-Pack)", "Ocular HUD", "Preon Accumulator", "Primordial Cube", "Radar Scanner", "Remote Caffeinator", "Royal Capacitor", "Sawmerang", "Super Massive Leech", "The Back-up", "The Crowdfunder", "Trophy Hunter's Tricorn", "Volcanic Egg", "Effigy of Grief", "Glowing Meteorite", "Helfire Tincture", "Spinel Tonic"]
const useFiles = ["Blast_Shower.webp", "Disposable_Missile_Launcher.webp", "Eccentric_Vase.webp", "Executive_Card.webp", "Foreign_Fruit.webp", "Forgive_Me_Please.webp", "Gnarled_Woodsprite.webp", "Goobo_Jr..webp", "Gorags_Opus.webp", "Jade_Elephant.webp", "Milky_Chrysalis.webp", "Molotov_(6-Pack).webp", "Ocular_HUD.webp", "Preon_Accumulator.webp", "Primordial_Cube.webp", "Radar_Scanner.webp", "Remote_Caffeinator.webp", "Royal_Capacitor.webp", "Sawmerang.webp", "Super_Massive_Leech.webp", "The_Back-up.webp", "The_Crowdfunder.webp", "Trophy_Hunters_Tricorn.webp", "Volcanic_Egg.webp", "Effigy_of_Grief.webp", "Glowing_Meteorite.webp", "Helfire_tincture.webp", "Spinel_Tonic.wepb"];

const voidItems = ["Benthic Bloom", "Encrusted Key", "Lost Seer's Lenses", "Lysate Cell", "Needletick", "Newly Hatched Zoea", "Plasma Shrimp", "Pluripotent Larva", "Polylute", "Safer Spaces", "Singularity Band", "Tentabauble", "Voidsent Flame", "Weeping Fungus"];
const voidFiles = ["Benthic_Bloom.webp", "Encrusted_Key.webp", "Lost_Seers_Lenses.webp", "Lysate_Cell.webp", "Needletick.webp", "Newly_Hatched_Zoea.webp", "Plasma_Shrimp.webp", "Pluripotent_Larva.webp", "Polylute.webp", "Safer_Spaces.webp", "Singularity_Band.webp", "Tentabauble.webp", "Voidsent_Flame.webp", "Weeping_Fungus.webp"];

const bossItems = ["Charged Perforator", "Defense Nucleus", "Empathy Cores", "Genesis Loop", "Halcyon Seed", "Little Disciple", "Mired Urn", "Molten Perforator", "Planula", "Queen's Gland", "Shatterspleen", "Titanic Knurl"];
const bossFiles = ["Charged_Perforator.webp", "Defense_Nucleus.webp", "Empathy_Cores.webp", "Genesis_Loop.webp", "Halcyon_Seed.webp", "Little_Disciple.webp", "Mired_Urn.webp", "Molten_Perforator.webp  dirlist.txt", "Planula.webp", "Queens_Gland.webp", "Shatterspleen.webp", "Titanic_Knurl.webp"];

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


//This function finds (iteration) number of items from a given array (itemArray) and prints them to specific HTML element (location)
function getRandFromArray(iterations, itemArray, location) {
    let randArray = [];
    randArray = choose(iterations, itemArray);
    for (let i = 0; i < iterations; i++) {
        if (i === (iterations - 1)) {
            location.textContent += (randArray[i]);
        } else {
            location.textContent += (randArray[i] + " and ");
        }
    }
}



// Does the standard of choosing 3 common items, 3 uncommon, and 1 rare item, as well as one of each other type of item at random.
function random321() {
    getRandFromArray(3, commonItems, whites);
    getRandFromArray(2, uncommonItems, greens);
    getRandFromArray(1, rareItems, reds);
    getRandFromArray(1, lunarItems, blues);
    getRandFromArray(1, useItems, oranges);
    getRandFromArray(1, voidItems, purples);
    getRandFromArray(1, bossItems, yellows);
}

//=======================
//       IMAGES 
//-----------------------

//Create an object class
//      Create a function on that object to call functions to print names and images of its values
//Get X-number of random (non-repeating) index numbers from an array  
//Add those numbers to the object e.g. white-items:[12, 6, 20]
//Create function to retrieve the name of the items and print them to the screen
//Create function to retrieve the image of the items and print them to the screen




function showImage(src, width, height, alt) {
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    whites.appendChild(img);
}


//Not used in program. Just used for collecting all of the file names so that I didn't have to type them all out.
function toList(string) {
    return string.replace(/,/g,", ");
}