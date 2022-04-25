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
const rareFiles = ["57_Leaf_Clover.webp", "Aegis.webp", "Alien_Head.webp", "Bens_Raincoat.webp", "Bottled_Chaos.webp", "Brainstalks.webp", "Brilliant_Behemoth.webp", "Ceremonial_Dagger.webp", "Dios_Best_Friend.webp", "Frost_Relic.webp", "H3AD-5T_v2.webp", "Happiest_Mask.webp", "Hardlight_Afterburner.webp", "Interstellar_Desk_Plant.webp", "Laser_Scope.webp", "Nkuhanas_Opinion.webp", "Pocket_I.C.B.M..webp", "Rejuvenation_Rack.webp", "Resonance_Disc.webp", "Sentient_Meat_Hook.webp", "Shattering_Justice.webp", "Soulbound_Catalyst.webp", "Spare_Drone_Parts.webp", "Symbiotic_Scorpion.webp", "Unstable_Tesla_Coil.webp", "Wake_of_Vultures.webp"]

const lunarItems = ["Beads of Fealty", "Brittle Crown", "Corpsebloom", "Defiant Gouge", "Egocentrism", "Essence of Heresy", "Eulogy Zero", "Focused Convergence", "Gesture of the Drowned", "Hooks of Heresy", "Light Flux Pauldron", "Mercurial Rachis", "Purity", "Shaped Glass", "Stone Flux Pauldron", "Strides of Heresy", "Transcendence", "Visions of Heresy"];
const lunarFiles = ["Beads_of_Fealty.webp", "Brittle_Crown.webp", "Corpsebloom.webp", "Defiant_Gouge.webp", "Egocentrism.webp", "Essence_of_Heresy.webp", "Eulogy_Zero.webp", "Focused_Convergence.webp", "Gesture_of_the_Drowned.webp", "Hooks_of_Heresy.webp", "Light_Flux_Pauldron.webp", "Mercurial_Rachis.webp", "Purity.webp", "Shaped_Glass.webp", "Stone_Flux_Pauldron.webp", "Strides_of_Heresy.webp", "Transcendence.webp", "Visions_of_Heresy.webp"];

const useItems = ["Blast Shower", "Disposable Missile Launcher", "Eccentric Vase", "Executive Card", "Foreign Fruit", "Forgive Me Please", "Gnarled Woodsprite", "Goobo Jr.", "Gorag's Opus", "Jade Elephant", "Milky Chrysalis", "Molotov (6-Pack)", "Ocular HUD", "Preon Accumulator", "Primordial Cube", "Radar Scanner", "Remote Caffeinator", "Royal Capacitor", "Sawmerang", "Super Massive Leech", "The Back-up", "The Crowdfunder", "Trophy Hunter's Tricorn", "Volcanic Egg", "Effigy of Grief", "Glowing Meteorite", "Helfire Tincture", "Spinel Tonic"];
const useFiles = ["Blast_Shower.webp", "Disposable_Missile_Launcher.webp", "Eccentric_Vase.webp", "Executive_Card.webp", "Foreign_Fruit.webp", "Forgive_Me_Please.webp", "Gnarled_Woodsprite.webp", "Goobo_Jr..webp", "Gorags_Opus.webp", "Jade_Elephant.webp", "Milky_Chrysalis.webp", "Molotov_(6-Pack).webp", "Ocular_HUD.webp", "Preon_Accumulator.webp", "Primordial_Cube.webp", "Radar_Scanner.webp", "Remote_Caffeinator.webp", "Royal_Capacitor.webp", "Sawmerang.webp", "Super_Massive_Leech.webp", "The_Back-up.webp", "The_Crowdfunder.webp", "Trophy_Hunters_Tricorn.webp", "Volcanic_Egg.webp", "Effigy_of_Grief.webp", "Glowing_Meteorite.webp", "Helfire_tincture.webp", "Spinel_Tonic.webp"];

const voidItems = ["Benthic Bloom", "Encrusted Key", "Lost Seer's Lenses", "Lysate Cell", "Needletick", "Newly Hatched Zoea", "Plasma Shrimp", "Pluripotent Larva", "Polylute", "Safer Spaces", "Singularity Band", "Tentabauble", "Voidsent Flame", "Weeping Fungus"];
const voidFiles = ["Benthic_Bloom.webp", "Encrusted_Key.webp", "Lost_Seers_Lenses.webp", "Lysate_Cell.webp", "Needletick.webp", "Newly_Hatched_Zoea.webp", "Plasma_Shrimp.webp", "Pluripotent_Larva.webp", "Polylute.webp", "Safer_Spaces.webp", "Singularity_Band.webp", "Tentabauble.webp", "Voidsent_Flame.webp", "Weeping_Fungus.webp"];

const bossItems = ["Charged Perforator", "Defense Nucleus", "Empathy Cores", "Genesis Loop", "Halcyon Seed", "Little Disciple", "Mired Urn", "Molten Perforator", "Planula", "Queen's Gland", "Shatterspleen", "Titanic Knurl"];
const bossFiles = ["Charged_Perforator.webp", "Defense_Nucleus.webp", "Empathy_Cores.webp", "Genesis_Loop.webp", "Halcyon_Seed.webp", "Little_Disciple.webp", "Mired_Urn.webp", "Molten_Perforator.webp", "Planula.webp", "Queens_Gland.webp", "Shatterspleen.webp", "Titanic_Knurl.webp"];

const characters = ["Acrid", "Artifificer", "Bandit", "Captain", "Commando", "Engineer", "Huntress", "Loader", "Mercenary", "MUL-T", "Railgunner", "Rex", "Void Fiend"];


function erase(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function eraseChildren(selElement){
    while (selElement.firstChild) {
        selElement.removeChild(selElement.firstChild);
    }
}


//Create an object class which contains (empty) arrays of the different item types
let yourRolls = {
    commons: [16, 5, 12],
    uncommons: [0],
    rares: [0],
    lunars: [0],
    uses: [useFiles.length-1],
    voids: [0],
    bosses: [0],
    standard321: function() {
        //Removes previous content so that the user can re-roll
        eraseChildren(whites);
        eraseChildren(greens);
        eraseChildren(reds);
        eraseChildren(blues);
        eraseChildren(oranges);
        eraseChildren(purples);
        eraseChildren(yellows);

        this.chooseItems(3, 2, 1, 1, 1, 1, 1);
        this.printAll();
    },
    //Add the randomly chosen numbers to the object e.g. white-items:[12, 6, 20]
    chooseItems: function(whiteI, greenI, redI, blueI, orangeI, purpleI, yellowI) {
        this.commons = chooseRandom(whiteI, commonItems);
        this.uncommons = chooseRandom(greenI, uncommonItems);
        this.rares = chooseRandom(redI, rareItems);
        this.lunars = chooseRandom(blueI, lunarItems);
        this.uses = chooseRandom(orangeI, useItems);
        this.voids = chooseRandom(purpleI, voidItems);
        this.bosses = chooseRandom(yellowI, bossItems);
    },
    //A method to print all of the values stored in 
    printAll: function() {
        yourRolls.printImg(this.commons, commonFiles, "common", whites);
        yourRolls.printImg(this.uncommons, uncommonFiles, "uncommon", greens);
        yourRolls.printImg(this.rares, rareFiles, "rare", reds);
        yourRolls.printImg(this.lunars, lunarFiles, "lunar", blues);
        yourRolls.printImg(this.uses, useFiles, "use", oranges);
        yourRolls.printImg(this.voids, voidFiles, "voide", purples);
        yourRolls.printImg(this.bosses, bossFiles, "boss", yellows);
    },

    //An object function to print images of an item array's values
    printImg: function(origin, fileSource, itemDir, divLocation) {
        for (const i of origin) {
            showImage(`./img/${itemDir}-items/${fileSource[i]}`, 75, 75, `${fileSource[i]}`, divLocation);
        }
    },
};


//Create function to retrieve the name of the items and print them to the screen


//rng
function random(max) {
    return Math.floor(Math.random() * max);
}


//Chooses a random element from the chosen list. puts it in the choices list
//iterates numberOfIterations times
function chooseRandom(numberOfIterations, itemTypeArray) {
    let counter = 0
    let pushValue;
    const returnItems = []
    while (counter < numberOfIterations) {
        pushValue = (random(itemTypeArray.length));
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

//A function that generates an image tag and then adds it to a chosen HTML element
function showImage(src, width, height, alt, container) {
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.class = "randItem";
    container.appendChild(img);
}


//Not used in program. Just used for collecting all of the file names so that I didn't have to type them all out.
function toList(string) {
    return string.replace(/,/g,", ");
}