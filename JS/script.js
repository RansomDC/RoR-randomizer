const whites = document.getElementById("common");
const greens = document.getElementById("uncommon");
const reds = document.getElementById("rare");
const blues = document.getElementById("lunar");
const oranges = document.getElementById("useitem");
const purples = document.getElementById("void");
const yellows = document.getElementById("boss");
const toolTips = document.getElementById("tool-tip-container");

const results = document.querySelector(".results");

const commonItems = [{UID: "w-0", name: "Armor-Piercing Rounds", imgName: "Armor-Piercing_Rounds.webp", toolTip: "Deal an additional 20% damage (+20% per stack) to bosses.", DLC: "Base"},
                {UID: "w-1", name: "Backup Magazine", imgName: "Backup_Magazine.webp", toolTip: "Add an extra charge of your Secondary skill.", DLC: "Base"},
                {UID: "w-2", name: "Bison Steak", imgName: "Bison_Steak.webp", toolTip: "Increases maximum health by 25 (+25 per stack).", DLC: "Base"},
                {UID: "w-3", name: "Bundle of Fireworks", imgName: "Bundle_of_Fireworks.webp", toolTip: "Activating an interactable launches fireworks at nearby enemies.", DLC: "Base"},
                {UID: "w-4", name: "Bustling Fungus", imgName: "Bustling_Fungus.webp", toolTip: "After standing still for 1 second, create a zone that heals for 4.5% (+2.25% per stack) of your health every second to all allies within 3m (+1.5m per stack).", DLC: "Base"},
                {UID: "w-5", name: "Cautious Slug", imgName: "Cautious_Slug.webp", toolTip: "Increases base health regeneration by +3 hp/s (+3 hp/s per stack) while outside of combat.", DLC: "Base"},
                {UID: "w-6", name: "Crowbar", imgName: "Crowbar.webp", toolTip: "Deal +75% (+75% per stack) damage to enemies above 90% health.", DLC: "Base"},
                {UID: "w-7", name: "Delicate Watch", imgName: "Delicate_Watch.webp", toolTip: "Increase damage by 20% (+20% per stack). Taking damage to below 25% health breaks this item.", DLC: "SOTV"},
                {UID: "w-8", name: "Energy Drink", imgName: "Energy_Drink.webp", toolTip: "Sprint speed is improved by 25% (+25% per stack).", DLC: "Base"},
                {UID: "w-9", name: "Focus Crystal", imgName: "Focus_Crystal.webp", toolTip: "Increase damage to enemies within 13m by 20% (+20% per stack).", DLC: "Base"},
                {UID: "w-10", name: "Gasoline", imgName: "Gasoline.webp", toolTip: "Killing an enemy ignites all enemies within 12m (+4m per stack) for 150% base damage. Additionally, enemies burn for 150% (+75% per stack) base damage.", DLC: "Base"},
                {UID: "w-11", name: "Lens-Maker's Glasses", imgName: "Lens-Makers_Glasses.webp", toolTip: "Your attacks have a 10% (+10% per stack) chance to 'Critically Strike', dealing double damage.", DLC: "Base"},
                {UID: "w-12", name: "Medkit", imgName: "Medkit.webp", toolTip: "2 seconds after getting hurt, heal for 20 plus an additional 5% (+5% per stack) of maximum health.", DLC: "Base"},
                {UID: "w-13", name: "Mocha", imgName: "Mocha.webp", toolTip: "Increases attack speed by 7.5% (+7.5 per stack) and movement speed by 7% (+7% per stack).", DLC: "SOTV"},
                {UID: "w-14", name: "Monster Tooth", imgName: "Monster_Tooth.webp", toolTip: "Killing an enemy spawns a healing orb that heals for 8 plus an additional 2% (+2% per stack) of maximum health.", DLC: "Base"},
                {UID: "w-15", name: "Oddly-shaped Opal", imgName: "Oddly-shaped_Opal.webp", toolTip: "Increase armor by 100 (+100 per stack) while out of danger.", DLC: "SOTV"},
                {UID: "w-16", name: "Paul's Goat Hoof", imgName: "Pauls_Goat_Hoof.webp", toolTip: "Increases movement speed by 14% (+14% per stack).", DLC: "Base"},
                {UID: "w-17", name: "Personal Shield Generator", imgName: "Personal_Shield_Generator.webp", toolTip: "Gain a shield equal to 8% (+8% per stack) of your maximum health. Recharges outside of danger.", DLC: "Base"},
                {UID: "w-18", name: "Power Elixir", imgName: "Power_Elixir.webp", toolTip: "Taking damage to below 25% health consumes this item, healing you for 75% of maximum health.", DLC: "SOTV"},
                {UID: "w-19", name: "Repulsion Armor Plate", imgName: "Repulsion_Armor_Plate.webp", toolTip: "Reduce all incoming damage by 5 (+5 per stack). Cannot be reduced below 1.", DLC: "Base"},
                {UID: "w-20", name: "Roll of Pennies", imgName: "Roll_of_Pennies.webp", toolTip: "Gain 3 (+3 per stack) gold on taking damage from an enemy. Scales over time.", DLC: "SOTV"},
                {UID: "w-21", name: "Rusted Key", imgName: "Rusted_Key.webp", toolTip: "A hidden cache containing an item (80%/20%) will appear in a random location on each stage. Opening the cache consumes this item.", DLC: "Base"},
                {UID: "w-22", name: "Soldier's Syringe", imgName: "Soldiers_Syringe.webp", toolTip: "Increases attack speed by 15% (+15% per stack).", DLC: "Base"},
                {UID: "w-23", name: "Sticky Bomb", imgName: "Sticky_Bomb.webp", toolTip: "5% (+5% per stack) chance on hit to attach a bomb to an enemy, detonating for 180% TOTAL damage.", DLC: "Base"},
                {UID: "w-24", name: "Stun Grenade", imgName: "Stun_Grenade.webp", toolTip: "5% (+5% on stack) chance on hit to stun enemies for 2 seconds.", DLC: "Base"},
                {UID: "w-25", name: "Topaz Brooch", imgName: "Topaz_Brooch.webp", toolTip: "Gain a temporary barrier on kill for 15 health (+15 per stack).", DLC: "Base"},
                {UID: "w-26", name: "Tougher Times", imgName: "Tougher_Times.webp", toolTip: "15% (+15% per stack) chance to block incoming damage. Unaffected by luck.", DLC: "Base"},
                {UID: "w-27", name: "Tri-Tip Dagger", imgName: "Tri-Tip_Dagger.webp", toolTip: "10% (+10% per stack) chance to bleed an enemy for 240% base damage.", DLC: "Base"},
                {UID: "w-28", name: "Warbanner", imgName: "Warbanner.webp", toolTip: "On level up or starting the Teleporter event, drop a banner that strengthens all allies within 16m (+8m per stack). Raise attack and movement speed by 30%.", DLC: "Base"}        
];

const uncommonItems = [{UID: "g-0", name: "AtG Missile Mk. 1", imgName: "AtG_Missile_Mk._1.webp", toolTip: "10% chance to fire a missile that deals 300% (+300% per stack) TOTAL damage.", DLC: "Base"},
                    {UID: "g-1", name: "Bandolier", imgName: "Bandolier.webp", toolTip: "18% (+10% per stack) chance on kill to drop an ammo pack that resets all skill cooldowns.", DLC: "Base"},
                    {UID: "g-2", name: "Berzerker's Pauldron", imgName: "Berzerkers_Pauldron.webp", toolTip: "Killing 4 enemies within 1 second sends you into a frenzy for 6s (+4s per stack). Increases movement speed by 50% and attack speed by 100%.", DLC: "Base"},
                    {UID: "g-3", name: "Chronobauble", imgName: "Chronobauble.webp", toolTip: "Slow enemies on hit for -60% movement speed for 2s (+2s per stack).", DLC: "Base"},
                    {UID: "g-4", name: "Death Mark", imgName: "Death_Mark.webp", toolTip: "Enemies with 4 or more debuffs are marked for death, increasing damage taken by 50% from all sources for 7 (+7 per stack) seconds.", DLC:"Base"},
                    {UID: "g-5", name: "Fuel Cell", imgName: "Fuel_Cell.webp", toolTip: "Hold an additional equipment charge (+1 per stack). Reduce equipment cooldown by 15% (+15% per stack).", DLC: "Base"},
                    {UID: "g-6", name: "Ghor's Tome", imgName: "Ghors_Tome.webp", toolTip: "4% (+4% on stack) chance on kill to drop a treasure worth $25. Scales over time.", DLC: "Base"},
                    {UID: "g-7", name: "Harvester's Scythe", imgName: "Harvesters_Scythe.webp", toolTip: "Gain 5% critical chance. Critical strikes heal for 8 (+4 per stack) health.", DLC: "Base"},
                    {UID: "g-8", name: "Hopoo Feather", imgName: "Hopoo_Feather.webp", toolTip: "Gain +1 (+1 per stack) maximum jump count.", DLC: "Base"},
                    {UID: "g-9", name: "Hunter's Harpoon", imgName: "Hunters_Harpoon.webp", toolTip: "Killing an enemy increases movement speed by 125%, fading over 1 (+0.5 per stack) seconds.", DLC: "SOTV"},
                    {UID: "g-10", name: "Ignition Tank", imgName: "Ignition_Tank.webp", toolTip: "Ignite effects deal +300% (+300% per stack) more damage over time.", DLC: "SOTV"},
                    {UID: "g-11", name: "Infusion", imgName: "Infusion.webp", toolTip: "Killing an enemy increases your health permanently by 1 (+1 per stack), up to a maximum of 100 (+100 per stack) health.", DLC: "Base"},
                    {UID: "g-12", name: "Kjaro's Band", imgName: "Kjaros_Band.webp", toolTip: "Hits that deal more than 400% damage also blasts enemies with a runic flame tornado, dealing 300% (+300% per stack) TOTAL damage over time. Recharges every 10 seconds.", DLC: "Base"},
                    {UID: "g-13", name: "Leeching Seed", imgName: "Leeching_Seed.webp", toolTip: "Dealing damage heals you for 1 (+1 per stack) health.", DLC: "Base"},
                    {UID: "g-14", name: "Lepton Daisy", imgName: "Lepton_Daisy.webp", toolTip: "Release a healing nova during the Teleporter event, healing all nearby allies for 50% of their maximum health. Occurs 1 (+1 per stack) times.", DLC: "Base"},
                    {UID: "g-15", name: "Old Guillotine", imgName: "Old_Guillotine.webp", toolTip: "Instantly kill Elite monsters below 13% (+13% per stack) health.", DLC: "Base"},
                    {UID: "g-16", name: "Old War Stealthkit", imgName: "Old_War_Stealthkit.webp", toolTip: "Falling below 25% health causes you to gain 40% movement speed and invisibility for 5s. Recharges every 30 seconds (-50% per stack).", DLC: "Base"},
                    {UID: "g-17", name: "Predatory Instincts", imgName: "Predatory_Instincts.webp", toolTip: "Gain 5% critical chance. Critical strikes increase attack speed by 12%. Maximum cap of 36% (+24% per stack) attack speed.", DLC: "Base"},
                    {UID: "g-18", name: "Razorwire", imgName: "Razorwire.webp", toolTip: "Getting hit causes you to explode in a burst of razors, dealing 160% damage. Hits up to 5 (+2 per stack) targets in a 25m (+10m per stack) radius", DLC: "Base"},
                    {UID: "g-19", name: "Red Whip", imgName: "Red_Whip.webp", toolTip: "Leaving combat boosts your movement speed by 30% (+30% per stack).", DLC: "Base"},
                    {UID: "g-20", name: "Rose Buckler", imgName: "Rose_Buckler.webp", toolTip: "Increase armor by 30 (+30 per stack) while sprinting.", DLC: "Base"},
                    {UID: "g-21", name: "Runald's Band", imgName: "Runalds_Band.webp", toolTip: "Hits that deal more than 400% damage also blasts enemies with a runic ice blast, slowing them by 80% for 3s (+3s per stack) and dealing 250% (+250% per stack) TOTAL damage. Recharges every 10 seconds.", DLC: "Base"},
                    {UID: "g-22", name: "Shipping Request Form", imgName: "Shipping_Request_Form.webp", toolTip: "A delivery containing 2 items (79%/20%/1%) will appear in a random location on each stage.", DLC: "SOTV"},
                    {UID: "g-23", name: "Shuriken", imgName: "Shuriken.webp", toolTip: "Activating your Primary skill also throws a shuriken that deals 400% (+100% per stack) base damage. You can hold up to 3 (+1 per stack) shurikens which all reload over 10 seconds.", DLC: "SOTV"},
                    {UID: "g-24", name: "Squid Polyp", imgName: "Squid_Polyp.webp", toolTip: "Activating an interactable summons a Squid Turret that attacks nearby enemies at 100% (+100% per stack) attack speed. Lasts 30 seconds.", DLC: "Base"},
                    {UID: "g-25", name: "Ukulele", imgName: "Ukulele.webp", toolTip: "25% chance to fire chain lightning for 80% TOTAL damage on up to 3 (+2 per stack) targets within 20m (+2m per stack).", DLC: "Base"},
                    {UID: "g-26", name: "War Horn", imgName: "War_Horn.webp", toolTip: "Activating your Equipment gives you +70% attack speed for 8s (+4s per stack).", DLC: "Base"},
                    {UID: "g-27", name: "Wax Quail", imgName: "Wax_Quail.webp", toolTip: "Jumping while sprinting boosts you forward by 10m (+10m per stack).", DLC: "Base"},
                    {UID: "g-28", name: "Will-o'-the-wisp", imgName: "Will-o-the-wisp.webp", toolTip: "On killing an enemy, spawn a lava pillar in a 12m (+2.4m per stack) radius for 350% (+280% per stack) base damage.", DLC: "Base"}
];

const rareItems = [{UID: "r-0", name: "57 Leaf Clover", imgName: "57_Leaf_Clover.webp", toolTip: "All random effects are rolled +1 (+1 per stack) times for a favorable outcome.", DLC: "Base"},
                {UID: "r-1", name: "Aegis", imgName: "Aegis.webp", toolTip: "Healing past full grants you a temporary barrier for 50% (+50% per stack) of the amount you healed.", DLC: "Base"},
                {UID: "r-2", name: "Alien Head", imgName: "Alien_Head.webp", toolTip: "Reduce skill cooldowns by 25% (+25% per stack).", DLC: "Base"},
                {UID: "r-3", name: "Ben's Raincoat", imgName: "Bens_Raincoat.webp", toolTip: "Prevents 1 (+1 per stack) debuff and instead grants a temporary barrier for 10% of maximum health. Recharges every 5 seconds.", DLC: "SOTV"},
                {UID: "r-4", name: "Bottled Chaos", imgName: "Bottled_Chaos.webp", toolTip: "Trigger a random equipment effect 1 (+1 per stack) time(s).", DLC: "SOTV"},
                {UID: "r-5", name: "Brainstalks", imgName: "Brainstalks.webp", toolTip: "Upon killing an elite monster, enter a frenzy for 4s (+4s per stack) where skills have 0.5s cooldowns.", DLC: "Base"},
                {UID: "r-6", name: "Brilliant Behemoth", imgName: "Brilliant_Behemoth.webp", toolTip: "All your attacks explode in a 4m (+2.5m per stack) radius for a bonus 60% TOTAL damage to nearby enemies.", DLC: "Base"},
                {UID: "r-7", name: "Ceremonial Dagger", imgName: "Ceremonial_Dagger.webp", toolTip: "Killing an enemy fires out 3 homing daggers that deal 150% (+150% per stack) base damage.", DLC: "Base"},
                {UID: "r-8", name: "Dio's Best Friend", imgName: "Dios_Best_Friend.webp", toolTip: "Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability.", DLC: "Base"},
                {UID: "r-9", name: "Frost Relic", imgName: "Frost_Relic.webp", toolTip: "Killing an enemy surrounds you with an ice storm that deals 1200% damage per second and slows enemies by 80% for 1.5s. The storm grows with every kill, increasing its radius by 2m. Stacks up to 18m (+12m per stack).", DLC: "Base"},
                {UID: "r-10", name: "H3AD-5T v2", imgName: "H3AD-5T_v2.webp", toolTip: "Increase jump height. Creates a 5m-100m radius kinetic explosion on hitting the ground, dealing 1000%-10000% base damage that scales up with fall distance. Recharges in 10 (-50% per stack) seconds.", DLC: "Base"},
                {UID: "r-11", name: "Happiest Mask", imgName: "Happiest_Mask.webp", toolTip: "Killing enemies has a 7% chance to spawn a ghost of the killed enemy with 1500% damage. Lasts 30s (+30s per stack).", DLC: "Base"},
                {UID: "r-12", name: "Hardlight Afterburner", imgName: "Hardlight_Afterburner.webp", toolTip: "Add +2 (+2 per stack) charges of your Utility skill. Reduces Utility skill cooldown by 33%.", DLC: "Base"},
                {UID: "r-13", name: "Interstellar Desk Plant", imgName: "Interstellar_Desk_Plant.webp", toolTip: "On kill, plant a healing fruit seed that grows into a plant after 5 seconds. The plant heals for 5% of maximum health every 0.5 second to all allies within 10m (+5.0m per stack). Lasts 10 seconds.", DLC: "Base"},
                {UID: "r-14", name: "Laser Scope", imgName: "Laser_Scope.webp", toolTip: "Critical Strikes deal an additional 100% damage (+100% per stack).", DLC: "Base"},
                {UID: "r-15", name: "N'kuhana's Opinion", imgName: "Nkuhanas_Opinion.webp", toolTip: "Store 100% (+100% per stack) of healing as Soul Energy. After your Soul Energy reaches 10% of your maximum health, fire a skull that deals 250% of your Soul Energy as damage.", DLC: "Base"},
                {UID: "r-16", name: "Pocket I.C.B.M.", imgName: "Pocket_I.C.B.M..webp", toolTip: "All missile items and equipment fire an additional 2 missiles. Increase missile damage by 0% (+50% per stack)", DLC: "SOTV"},
                {UID: "r-17", name: "Rejuvenation Rack", imgName: "Rejuvenation_Rack.webp", toolTip: "Heal +100% (+100% per stack) more.", DLC: "Base"},
                {UID: "r-18", name: "Resonance Disc", imgName: "Resonance_Disc.webp", toolTip: "Killing 4 enemies in 7 seconds charges the Resonance Disc. The disc launches itself toward a target for 300% base damage (+300% per stack), piercing all enemies it doesn't kill, and then explodes for 1000% base damage (+1000% per stack). Returns to the user, striking all enemies along the way for 300% base damage (+300% per stack).", DLC: "Base"},
                {UID: "r-19", name: "Sentient Meat Hook", imgName: "Sentient_Meat_Hook.webp", toolTip: "20% (+20% per stack) chance on hit to fire homing hooks at up to 10 (+5 per stack) enemies for 100% TOTAL damage.", DLC: "Base"},
                {UID: "r-20", name: "Shattering Justice", imgName: "Shattering_Justice.webp", toolTip: "After hitting an enemy 5 times, reduce their armor by 60 for 8 (+8 per stack) seconds.", DLC: "Base"},
                {UID: "r-21", name: "Soulbound Catalyst", imgName: "Soulbound_Catalyst.webp", toolTip: "Kills reduce equipment cooldown by 4s (+2s per stack).", DLC: "Base"},
                {UID: "r-22", name: "Spare Drone Parts", imgName: "Spare_Drone_Parts.webp", toolTip: "Gain Col. Droneman. Drones gain +50% (+50% per stack) attack speed and cooldown reduction. Drones gain 10% chance to fire a missile on hit, dealing 300% TOTAL damage. Drones gain an automatic chain gun that deals 6x100% damage, bouncing to 2 enemies.", DLC: "Base"},
                {UID: "r-23", name: "Symbiotic Scorpion", imgName: "Symbiotic_Scorpion.webp", toolTip: "100% chance on hit to reduce armor by 2 (+2 per stack) permanently.", DLC: "Base"},
                {UID: "r-24", name: "Unstable Tesla Coil", imgName: "Unstable_Tesla_Coil.webp", toolTip: "Fire out lightning that hits 3 (+2 per stack) enemies for 200% base damage every 0.5s. The Tesla Coil switches off every 10 seconds.", DLC: "Base"},
                {UID: "r-25", name: "Wake of Vultures", imgName: "Wake_of_Vultures.webp", toolTip: "Gain the power of any killed elite monster for 8s (+5s per stack).", DLC: "Base"}
];

const lunarItems = [{UID: "b-0", name: "Beads of Fealty", imgName: "Beads_of_Fealty.webp", toolTip: "Seems to do nothing... butt...", DLC: "Base"},
                {UID: "b-1", name: "Brittle Crown", imgName: "Brittle_Crown.webp", toolTip: "30% chance on hit to gain 2 (+2 per stack) gold. Scales over time. Lose gold on taking damage equal to 100% (+100% per stack) of the maximum health percentage you lost.", DLC: "Base"},
                {UID: "b-2", name: "Corpsebloom", imgName: "Corpsebloom.webp", toolTip: "Heal +100% (+100% per stack) more. All healing is applied over time. Can heal for a maximum of 10% (-50% per stack) of your health per second.", DLC: "Base"},
                {UID: "b-3", name: "Defiant Gouge", imgName: "Defiant_Gouge.webp", toolTip: "Using a Shrine summons enemies (stronger per stack) nearby. Scales over time.", DLC: "Base"},
                {UID: "b-4", name: "Egocentrism", imgName: "Egocentrism.webp", toolTip: "Every 3 (-50% per stack) seconds, gain an orbiting bomb that detonates on impact for 360% damage, up to a maximum of 3 bombs (+1 per stack). Every 60 seconds, a random item is converted into this item.", DLC: "SOTV"},
                {UID: "b-5", name: "Essence of Heresy", imgName: "Essence_of_Heresy.webp", toolTip: "Replace your Special Skill with Ruin. Dealing damage adds a stack of Ruin for 10 (+10 per stack) seconds. Activating the skill detonates all Ruin stacks at unlimited range, dealing 300% damage plus 120% damage per stack of Ruin. Recharges after 8 (+8 per stack) seconds.", DLC: "Base"},
                {UID: "b-6", name: "Eulogy Zero", imgName: "Eulogy_Zero.webp", toolTip: "Items have a 5% (+5% per stack) chance to become a Lunar item instead.", DLC: "SOTV"},
                {UID: "b-7", name: "Focused Convergence", imgName: "Focused_Convergence.webp", toolTip: "Teleporters charge 30% (+30% per stack) faster, but the size of the Teleporter zone is 50% (-50% per stack) smaller.", DLC: "Base"},
                {UID: "b-8", name: "Gesture of the Drowned", imgName: "Gesture_of_the_Drowned.webp", toolTip: "Reduce Equipment cooldown by 50% (+15% per stack). Forces your Equipment to activate whenever it is off cooldown.", DLC: "Base"},
                {UID: "b-9", name: "Hooks of Heresy", imgName: "Hooks_of_Heresy.webp", toolTip: "Replace your Secondary Skill with Slicing Maelstrom. Charge up a projectile that deals 875% damage per second to nearby enemies, exploding after 3 seconds to deal 700% damage and root enemies for 3 (+3 per stack) seconds. Recharges after 5 (+5 per stack) seconds.", DLC: "Base"},
                {UID: "b-10", name: "Light Flux Pauldron", imgName: "Light_Flux_Pauldron.webp", toolTip: "Decrease skill cooldowns by 50% (+50% per stack). Decrease attack speed by 50% (+50% per stack).", DLC: "SOTV"},
                {UID: "b-11", name: "Mercurial Rachis", imgName: "Mercurial_Rachis.webp", toolTip: "Creates a Ward of Power in a random location nearby that buffs both enemies and allies within 16m (+50% per stack), causing them to deal +50% damage.", DLC: "Base"},
                {UID: "b-12", name: "Purity", imgName: "Purity.webp", toolTip: "All skill cooldowns are reduced by 2 (+1 per stack) seconds. All random effects are rolled +1 (+1 per stack) times for an unfavorable outcome.", DLC: "Base"},
                {UID: "b-13", name: "Shaped Glass", imgName: "Shaped_Glass.webp", toolTip: "Increase base damage by 100% (+100% per stack). Reduce maximum health by 50% (+50% per stack).", DLC: "Base"},
                {UID: "b-14", name: "Stone Flux Pauldron", imgName: "Stone_Flux_Pauldron.webp", toolTip: "Increase max health by 100% (+100% per stack). Reduce movement speed by 50% (+50% per stack).", DLC: "SOTV"},
                {UID: "b-15", name: "Strides of Heresy", imgName: "Strides_of_Heresy.webp", toolTip: "Replace your Utility Skill with Shadowfade. Fade away, becoming intangible and gaining +30% movement speed. Heal for 18.2% (+18.2% per stack) of your maximum health. Lasts 3 (+3 per stack) seconds.", DLC: "Base"},
                {UID: "b-16", name: "Transcendence", imgName: "Transcendence.webp", toolTip: "Convert all but 1 health into regenerating shields. Gain 50% (+25% per stack) maximum health.", DLC: "Base"},
                {UID: "b-17", name: "Visions of Heresy", imgName: "Visions_of_Heresy.webp", toolTip: "Replace your Primary Skill with Hungering Gaze. Fire a flurry of tracking shards that detonate after a delay, dealing 120% base damage. Hold up to 12 charges (+12 per stack) that reload after 2 seconds (+2 per stack).", DLC: "Base"}
];

const useItems = [{UID: "o-0", name: "Blast Shower", imgName: "Blast_Shower.webp", toolTip: "Cleanse all negative effects. Includes debuffs, damage over time, and nearby projectiles.", DLC: "Base"},
                {UID: "o-1", name: "Disposable Missile Launcher", imgName: "Disposable_Missile_Launcher.webp", toolTip: "Fire a swarm of 12 missiles that deal 12x300% damage.", DLC: "Base"},
                {UID: "o-2", name: "Eccentric Vase", imgName: "Eccentric_Vase.webp", toolTip: "Create a quantum tunnel of up to 1000m in length. Lasts 30 seconds.", DLC: "Base"},
                {UID: "o-3", name: "Executive Card", imgName: "Executive_Card.webp", toolTip: "Whenever you make a gold purchase, get 10% of the spent gold back. If the purchase is a multishop terminal, the other terminals will remain open.", DLC: "SOTV"},
                {UID: "o-4", name: "Foreign Fruit", imgName: "Foreign_Fruit.webp", toolTip: "Instantly heal for 50% of your maximum health.", DLC: "Base"},
                {UID: "o-5", name: "Forgive Me Please", imgName: "Forgive_Me_Please.webp", toolTip: "Throw a cursed doll out that triggers any On-Kill effects you have every 1 second for 8 seconds.", DLC: "Base"},
                {UID: "o-6", name: "Gnarled Woodsprite", imgName: "Gnarled_Woodsprite.webp", toolTip: "Gain a Woodsprite follower that heals for 1.5% of your maximum health/second. Can be sent to an ally to heal them for 10% of their maximum health.", DLC: "Base"},
                {UID: "o-7", name: "Goobo Jr.", imgName: "Goobo_Jr..webp", toolTip: "Spawn a gummy clone that has 300% damage and 300% health. Expires in 30 seconds.", DLC: "SOTV"},
                {UID: "o-8", name: "Gorag's Opus", imgName: "Gorags_Opus.webp", toolTip: "All allies enter a frenzy for 7 seconds. Increases movement speed by 50% and attack speed by 100%.", DLC: "Base"},
                {UID: "o-9", name: "Jade Elephant", imgName: "Jade_Elephant.webp", toolTip: "Gain 500 armor for 5 seconds.", DLC: "Base"},
                {UID: "o-10", name: "Milky Chrysalis", imgName: "Milky_Chrysalis.webp", toolTip: "Sprout wings and fly for 15 seconds. Gain +20% movement speed for the duration.", DLC: "Base"},
                {UID: "o-11", name: "Molotov (6-Pack)", imgName: "Molotov_(6-Pack).webp", toolTip: "Throw 6 molotov cocktails that ignites enemies for 500% base damage. Each molotov leaves a burning area for 200% damage per second", DLC: "SOTV"},
                {UID: "o-12", name: "Ocular HUD", imgName: "Ocular_HUD.webp", toolTip: "Gain +100% Critical Strike Chance for 8 seconds.", DLC: "Base"},
                {UID: "o-13", name: "Preon Accumulator", imgName: "Preon_Accumulator.webp", toolTip: "Fires preon tendrils, zapping enemies within 35m for up to 600% damage/second. On contact, detonate in an enormous 20m explosion for 4000% damage.", DLC: "Base"},
                {UID: "o-14", name: "Primordial Cube", imgName: "Primordial_Cube.webp", toolTip: "Fire a black hole that draws enemies within 30m into its center. Lasts 10 seconds", DLC: "Base"},
                {UID: "o-15", name: "Radar Scanner", imgName: "Radar_Scanner.webp", toolTip: "Reveal all interactables within 500m for 10 seconds.", DLC: "Base"},
                {UID: "o-16", name: "Remote Caffeinator", imgName: "Remote_Caffeinator.webp", toolTip: "Request an Eclipse Zero Vending Machine from the UES Safe Travels. Delivery guaranteed in 5 seconds, dealing 2000% damage. Heal up to 3 targets for 25% of their maximum health.", DLC: "SOTV"},
                {UID: "o-17", name: "Royal Capacitor", imgName: "Royal_Capacitor.webp", toolTip: "Call down a lightning strike on a targeted monster, dealing 3000% damage and stunning nearby monsters.", DLC: "Base"},
                {UID: "o-18", name: "Sawmerang", imgName: "Sawmerang.webp", toolTip: "Throw three large saw blades that slice through enemies for 3x400% damage. Also deals an additional 3x100% damage per second while bleeding enemies. Can strike enemies again on the way back.", DLC: "Base"},
                {UID: "o-19", name: "Super Massive Leech", imgName: "Super_Massive_Leech.webp", toolTip: "Heal for 20% of the damage you deal. Lasts 8 seconds.", DLC: "Base"},
                {UID: "o-20", name: "The Back-up", imgName: "The_Back-up.webp", toolTip: "Call 4 Strike Drones to fight for you. Lasts 25 seconds.", DLC: "Base"},
                {UID: "o-21", name: "The Crowdfunder", imgName: "The_Crowdfunder.webp", toolTip: "Fires a continuous barrage that deals 100% damage per bullet. Costs $1 per bullet. Cost increases over time.", DLC: "Base"},
                {UID: "o-22", name: "Trophy Hunter's Tricorn", imgName: "Trophy_Hunters_Tricorn.webp", toolTip: "Execute any enemy capable of spawning a unique reward, and it will drop that item. Equipment is consumed on use.", DLC: "SOTV"},
                {UID: "o-23", name: "Volcanic Egg", imgName: "Volcanic_Egg.webp", toolTip: "Turn into a draconic fireball for 5 seconds. Deal 500% damage on impact. Detonates at the end for 800% damage.", DLC: "Base"},
                {UID: "o-24", name: "Effigy of Grief", imgName: "Effigy_of_Grief.webp", toolTip: "ALL characters within are slowed by 50% and have their armor reduced by 20. Can place up to 5.", DLC: "Base"},
                {UID: "o-25", name: "Glowing Meteorite", imgName: "Glowing_Meteorite.webp", toolTip: "Rain meteors from the sky, damaging ALL characters for 600% damage per blast. Lasts 20 seconds.", DLC: "Base"},
                {UID: "o-26", name: "Helfire Tincture", imgName: "Helfire_Tincture.webp", toolTip: "Ignite ALL characters within 15m for 12s. Deal 5% of your maximum health/second as burning as damage. The burn is 0.5x stronger on yourself, 0.25x stronger on allies, and 24x stronger on enemies.", DLC: "Base"},
                {UID: "o-27", name: "Spinel Tonic", imgName: "Spinel_Tonic.webp", toolTip: "Drink the Tonic, gaining a boost for 20 seconds. Increases damage by +100%. Increases attack speed by +70%. Increases armor by +20. Increases maximum health by +50%. Increases passive health regeneration by +300%. Increases movespeed by +30%. When the Tonic wears off, you have a 20% chance to gain a Tonic Affliction, reducing all of your stats by -5% (-5% per stack).", DLC: "Base"},
];

const voidItems = [{UID: "p-0", name: "Benthic Bloom", imgName: "Benthic_Bloom.webp", toolTip: "Upgrades 3 (+3 per stack) random items to items of the next higher rarity at the start of each stage. Corrupts all 57 Leaf Clovers.", DLC: "SOTV"},
                {UID: "p-1", name: "Encrusted Key", imgName: "Encrusted_Key.webp", toolTip: "A hidden cache containing an item (60%/30%/10%) will appear in a random location on each stage. Opening the cache consumes this item. Corrupts all Rusted Keys.", DLC: "SOTV"},
                {UID: "p-2", name: "Lost Seer's Lenses", imgName: "Lost_Seers_Lenses.webp", toolTip: "Your attacks have a 0.5% (+0.5% per stack) chance to instantly kill a non-Boss enemy. Corrupts all Lens-Maker's Glasses.", DLC: "SOTV"},
                {UID: "p-3", name: "Lysate Cell", imgName: "Lysate_Cell.webp", toolTip: "Add +1 (+1 per stack) charge of your Special skill. Reduces Special skill cooldown by 33%. Corrupts all Fuel Cells.", DLC: "SOTV"},
                {UID: "p-4", name: "Needletick", imgName: "Needletick.webp", toolTip: "10% (+10% per stack) chance to collapse an enemy for 400% base damage. Corrupts all Tri-Tip Daggers.", DLC: "SOTV"},
                {UID: "p-5", name: "Newly Hatched Zoea", imgName: "Newly_Hatched_Zoea.webp", toolTip: "Every 60 (-50% per stack) seconds, gain a random Void ally. Can have up to 1 (+1 per stack) allies at a time. Corrupts all yellow items.", DLC: "SOTV"},
                {UID: "p-6", name: "Plasma Shrimp", imgName: "Plasma_Shrimp.webp", toolTip: "Gain a shield equal to 10% of your maximum health. While you have a shield, hitting an enemy fires a missile that deals 40% (+40% per stack) TOTAL damage. Corrupts all AtG Missile Mk. 1s.", DLC: "SOTV"},
                {UID: "p-7", name: "Pluripotent Larva", imgName: "Pluripotent_Larva.webp", toolTip: "Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability, and all of your items that can be corrupted will be. Corrupts all Dio's Best Friends.", DLC: "SOTV"},
                {UID: "p-8", name: "Polylute", imgName: "Polylute.webp", toolTip: "25% chance to fire lightning for 60% TOTAL damage up to 3 (+3 per stack) times. Corrupts all Ukuleles.", DLC: "SOTV"},
                {UID: "p-9", name: "Safer Spaces", imgName: "Safer_Spaces.webp", toolTip: "Blocks incoming damage once. Recharges after 15 seconds (-10% per stack) Corrupts all Tougher Times.", DLC: "SOTV"},
                {UID: "p-10", name: "Singularity Band", imgName: "Singularity_Band.webp", toolTip: "Hits that deal more than 400% damage also fire a black hole that draws enemies within 15m into its center. Lasts 5 seconds before collapsing, dealing 100% (+100% per stack) TOTAL damage. Recharges every 20 seconds. Corrupts all Runald's and Kjaro's Bands.", DLC: "SOTV"},
                {UID: "p-11", name: "Tentabauble", imgName: "Tentabauble.webp", toolTip: "5% (+5% per stack) chance on hit to root enemies for 1s (+1s per stack). Corrupts all Chronobaubles.", DLC: "SOTV"},
                {UID: "p-12", name: "Voidsent Flame", imgName: "Voidsent_Flame.webp", toolTip: "Upon hitting an enemy at full health, spawn a lava pillar in a 12m (+2.4m per stack) radius for 260% (+156% per stack) base damage. Corrupts all Will-o'-the-wisps.", DLC: "SOTV"},
                {UID: "p-13", name: "Weeping Fungus", imgName: "Weeping_Fungus.webp", toolTip: "Heals for 2% (+2% per stack) of your health every second while sprinting. Corrupts all Bustling Fungi.", DLC: "SOTV"}
];

const bossItems = [{UID: "y-0", name: "Charged Perforator", imgName: "Charged_Perforator.webp", toolTip: "10% chance on hit to down a lightning strike, dealing 500% (+500% per stack) damage.", DLC: "Base"},
                {UID: "y-1", name: "Defense Nucleus", imgName: "Defense_Nucleus.webp", toolTip: "Killing elite monsters spawns an Alpha Construct with bonus 300% damage and 300% health. Limited to 4 (+4 per stack).", DLC: "Base"},
                {UID: "y-2", name: "Empathy Cores", imgName: "Empathy_Cores.webp", toolTip: "Every 30 seconds, summon two Solus Probes that gain +100% (+100% per stack) damage per ally on your team.", DLC: "Base"},
                {UID: "y-3", name: "Genesis Loop", imgName: "Genesis_Loop.webp", toolTip: "Falling below 25% health causes you to explode, dealing 6000% base damage. Recharges every 30 / (2 +1 per stack) seconds .", DLC: "Base"},
                {UID: "y-4", name: "Halcyon Seed", imgName: "Halcyon_Seed.webp", toolTip: "Summon Aurelionite during the teleporter event. It has 100% (+50% per stack) damage and 100% (+100% per stack) health.", DLC: "Base"},
                {UID: "y-5", name: "Little Disciple", imgName: "Little_Disciple.webp", toolTip: "Fire a tracking wisp for 300% (+300% per stack) damage. Fires every 1.6 seconds while sprinting. Fire rate increases with movement speed.", DLC: "Base"},
                {UID: "y-6", name: "Mired Urn", imgName: "Mired_Urn.webp", toolTip: "While in combat, the nearest 1 (+1 per stack) enemies to you within 13m will be 'tethered' to you, dealing 100% damage per second, applying tar, and healing you for 100% of the damage dealt.", DLC: "Base"},
                {UID: "y-7", name: "Molten Perforator", imgName: "Molten_Perforator.webp", toolTip: "10% chance on hit to call forth 3 magma balls from an enemy, dealing 300% (+300% per stack) damage each.", DLC: "Base"},
                {UID: "y-8", name: "Planula", imgName: "Planula.webp", toolTip: "Heal from incoming damage for 15 (+15 per stack).", DLC: "Base"},
                {UID: "y-9", name: "Queen's Gland", imgName: "Queens_Gland.webp", toolTip: "Every 30 seconds, summon a Beetle Guard with bonus 300% damage and 100% health. Can have up to 1 (+1 per stack) Guards at a time.", DLC: "Base"},
                {UID: "y-10", name: "Shatterspleen", imgName: "Shatterspleen.webp", toolTip: "Gain 5% critical chance. Critical Strikes bleed enemies for 240% base damage. Bleeding enemies explode on death for 400% (+400% per stack) damage, plus an additional 15% (+15% per stack) of their maximum health.", DLC: "Base"},
                {UID: "y-11", name: "Titanic Knurl", imgName: "Titanic_Knurl.webp", toolTip: "Increase maximum health by 40 (+40 per stack) and base health regeneration by +1.6 hp/s (+1.6 hp/s per stack).", DLC: "Base"}
];


//Create an object class which contains (empty) arrays of the different item types
let yourRolls = {
    commons: [0],
    uncommons: [0],
    rares: [0],
    lunars: [0],
    uses: [0],
    voids: [0],
    bosses: [0],
    getRolls: function() {
        //Removes previous content so that the user can re-roll
        eraseChildren(whites);
        eraseChildren(greens);
        eraseChildren(reds);
        eraseChildren(blues);
        eraseChildren(oranges);
        eraseChildren(purples);
        eraseChildren(yellows);

        this.chooseItems(document.getElementById("numberwhites").value,
        document.getElementById("numbergreens").value,
        document.getElementById("numberreds").value,
        document.getElementById("numberblues").value,
        document.getElementById("numberoranges").value,
        document.getElementById("numberpurples").value,
        document.getElementById("numberyellows").value);
        this.printAll();
        results.style.display = "flex";

    },
    //Add the randomly chosen numbers to the object e.g. white-items:[12, 6, 20]
    chooseItems: function(numOfWhite, numOfGreen, NumOfRed, numOfBlue, numOfOrange, numOfPurple, numOfYellow) {
        this.commons = chooseRandom(numOfWhite, commonItems);
        this.uncommons = chooseRandom(numOfGreen, uncommonItems);
        this.rares = chooseRandom(NumOfRed, rareItems);
        this.lunars = chooseRandom(numOfBlue, lunarItems);
        this.uses = chooseRandom(numOfOrange, useItems);
        this.voids = chooseRandom(numOfPurple, voidItems);
        this.bosses = chooseRandom(numOfYellow, bossItems);
    },
    //A method to print all of the values stored in the object
    printAll: function() {
        yourRolls.printImg(this.commons, "common", whites);
        yourRolls.printImg(this.uncommons, "uncommon", greens);
        yourRolls.printImg(this.rares, "rare", reds);
        yourRolls.printImg(this.lunars, "lunar", blues);
        yourRolls.printImg(this.uses, "use", oranges);
        yourRolls.printImg(this.voids, "void", purples);
        yourRolls.printImg(this.bosses, "boss", yellows);

        //Creates a collection of all of the images generated above
        var itemImages = document.getElementsByClassName("item-image")

        // Insert tooltip generator here
        //Adds two event listeners to each of the elements in the collection above
        for (var i = 0; i < itemImages.length; i++){
            var a = itemImages[i];
            a.addEventListener('mouseover', (e) => {
                //Create tooltip here
                var title = this.title;
                console.log(title);
                var tooltipWrap = document.createElement("div");
                tooltipWrap.className = 'tooltip';
                tooltipWrap.appendChild(document.createTextNode(title));
                var firstChild = document.body.firstChild
                firstChild.parentNode.insertBefore(tooltipWrap, firstChild);
            })
        };

            //valuable info in e > related target > firstChild > attributes > title > value / textContent / nodeValue

        
    
    },

    //A method to print images of an item array's values
    printImg: function(itemPropertyArray, itemDir, divLocation) {
        for (const item of itemPropertyArray) {
            createImageAndTip(item, itemDir, divLocation);
        }
    },
};


// A function that removes child elements so that the user can press the button again to re-roll their random items
function eraseChildren(selElement){
    while (selElement.firstChild) {
        selElement.removeChild(selElement.firstChild);
    }
}



//Chooses a random element from the chosen list. puts it in the choices list
//iterates <numberOfIterations> times
function chooseRandom(NumberChosenItems, itemTypeArray) {
    numberOfIterations =  NumberChosenItems;
    let counter = 0;
    let randomChoice;
    let pushValue;
    const returnItems = []
    if (numberOfIterations > itemTypeArray.length) {
        numberOfIterations = (itemTypeArray.length);
    } else if (numberOfIterations < 0) {
        numberOfIterations = 0;
    }
    while (counter < numberOfIterations) {
        pushValue = (itemTypeArray[random(itemTypeArray.length)]);
        if (returnItems.some((element) => element === pushValue)) {
            continue
        } else {
        returnItems.push(pushValue);
    }
        counter++;
    }
    return returnItems;
}


//rng
function random(max) {
    return Math.floor(Math.random() * max);
}


//A function that generates an image tag and then adds it to a chosen HTML element. Thisis used to display
//the picture for each chosen item 
function createImageAndTip(item, itemDir, container) {
    let img = document.createElement("img");
    img.src = `./img/${itemDir}-items/${item.imgName}`;
    img.width = 75;
    img.height = 75;
    img.alt = item.imgName;
    img.className = "item-image";
    img.title = item.toolTip;
    container.appendChild(img);

    // This is a subset of the image creation that creates a tooltip relevant to each image that is shown.
    // let div = document.createElement("div");
    // div.setAttribute(
    //     "style",
    //     "background-color: black; color: #fff; text-align: center; padding: 5px 0; border-radius: 6px;"
    // );
    // div.className = `${item.UID}-tip`;
    // div.textContent = item.toolTip;
    // toolTips.appendChild(div);

} 


//==============================
// JavaScript for the Accordion
//------------------------------

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Toggle between adding and removing the "active" class,
    //to highlight the button that controls the panel
    this.classList.toggle("active");

    // Toggle between hiding and showing the active panel
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 


// Potential answer to making dynamic tooltips:
//https://michaelsoriano.com/better-tooltips-with-plain-javascript-css/