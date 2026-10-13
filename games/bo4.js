EB.register('bo4', (function () {
  const MAPS = [];
  function M(m) { MAPS.push(m); }
M({
  id: 'ix', name: 'IX', group: 'base', pack: 'Base game · Chaos',
  main: 'Venerated Warrior',
  blurb: 'A gladiator arena under the eyes of the gods. The Death of Orion, the Brazen Bull and two war elephants.',
  img: 'https://mmmrkennedy.com/games/BO4/ix/',
  guide: 'https://mmmrkennedy.com/games/BO4/ix/ix_guide',
  wiki: 'https://callofduty.fandom.com/wiki/IX',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Pack-a-Punch', note: "Rated 7/10 solo, 1:15–1:45 hours. Suggested: Victorious Tortoise, Dying Wish, Viper and Dragon, Shield Up elixir for the boss. Crowd Affinity (hand icon) rises in the Arena and with podium challenges; it drops when you take fire damage or shoot the crowd.", steps: [
        ["Kill the gong enemy on the top floor of each God Altar (Danu, Ra, Zeus, Odin) for four Heads.", ['pictures/pap/gong_danu.webp|Danu gong', 'pictures/pap/gong_ra.webp|Ra gong', 'pictures/pap/gong_zeus.webp|Zeus gong']],
        ["Put the Heads on the Temple spikes. The PaP altar rises.", ['pictures/pap/temple.webp|Temple', 'pictures/pap/spikes.webp|Spikes']]
      ]},
      { h: 'Brazen Bull & Acid Trap', steps: [
        ["Brazen Bull: Horns (Ra Altar Room), Blade (Zeus Bath House or Arena door statue), Barrels (Odin). Build at the Pit workbench.", ['pictures/brazen_bull/horns_ra_altar_room1.webp|Horns', 'pictures/brazen_bull/blade_bath_house.webp|Blade', 'pictures/brazen_bull/workbench.webp|Workbench']],
        ["Acid Trap: Cauldron (on the Challenge Podium after three podium challenges), Chain and Cog (either side of PaP). Build it at one of the four stairway spots.", ['pictures/acid_trap/cauldron.webp|Cauldron', 'pictures/acid_trap/chain.webp|Chain', 'pictures/acid_trap/ra_trap_build.webp|Build spot']]
      ]},
      { h: 'Death of Orion', steps: [
        ["Shoot down the fire bowl at the Danu-Ra Temple Entrance. From the Danu–Ra bridge, look toward spawn for the arrow pointing at a tower.", ['pictures/death_of_orion/bowl_of_fire.webp|Fire bowl', 'pictures/death_of_orion/arrow_example.webp|Arrow']],
        ["Take the Stone Statue Head in that tower (Danu water, Ra behind a fire bowl, Zeus bath corner, Odin by the cauldron). Put it on the grate under the Acid Trap and run the trap for the Scorpion Key.", ['pictures/death_of_orion/statue_head.webp|Statue head', 'pictures/death_of_orion/grate_below_trap.webp|Grate']],
        ["Keep max Crowd Affinity for the whole next round to get the Jar from Serket.", ['pictures/death_of_orion/jar.webp|Jar']],
        ["Melee the Key into the Arboretum tree hole, put the Jar under the drip, and collect it next round. Poison the Mystery Box — the next weapon is the Death of Orion.", ['pictures/death_of_orion/tree.webp|Tree', 'pictures/death_of_orion/filled_jar.webp|Filled jar', 'pictures/death_of_orion/green_glowing_box.webp|Poisoned box']]
      ], rec: [{ id: 'tower', at: [0, 1], label: 'Tower the arrow points to', type: 'select', opts: ['Danu', 'Ra', 'Zeus', 'Odin'] }] },
      { h: 'Purge the Blight', steps: [
        ["With your Specialist out, shoot a blue-symbol skull on a Temple wall and knock it down.", ['pictures/main_ee/purge_the_blight/skull_locations/skull_with_blue_symbol_example.webp|Blue skull']],
        ["Put it in a Flooded Crypt grinder and hit it with three fully charged Death of Orion shots. Take the crushed bone.", ['pictures/main_ee/purge_the_blight/grinder1.webp|Grinder']],
        ["Bait an axe Gladiator into hitting an Arena pyre for the sharp wood; char it in the Cauldron chain for two rounds.", ['pictures/main_ee/purge_the_blight/pyres.webp|Pyres', 'pictures/main_ee/purge_the_blight/chain_for_wood.webp|Chain']],
        ["Drop Crowd Affinity to minimum (full red) to get the poop gift.", ['pictures/main_ee/purge_the_blight/poop.webp|Poop']],
        ["Put bone, poop and wood in the Bath House bowl. After a round, plant the fertilizer between the two Arboretum trees; after two more, kill a Zombie on it with Fire Bomb ammo.", ['pictures/main_ee/purge_the_blight/bowl.webp|Bowl', 'pictures/main_ee/purge_the_blight/between_two_trees.webp|Between trees', 'pictures/main_ee/purge_the_blight/blue_cracks.webp|Blue cracks']],
        ["Everyone stands on the cracks ~15 s. In the corrupted tower, shoot the red pod on the bottom, middle, then top floor.", ['pictures/main_ee/purge_the_blight/corrupted_bottom_floor.webp|Bottom pod', 'pictures/main_ee/purge_the_blight/corrupted_top_floor.webp|Top pod']]
      ]},
      { h: 'Answer the Dawn', steps: [
        ["Shoot four bull symbols with the Brazen Bull gun; kill each axe Gladiator that spawns.", ['pictures/main_ee/answer_the_dawn/bull_symbols/arena.webp|Arena symbol', 'pictures/main_ee/answer_the_dawn/bull_symbols/danu_altar_room.webp|Danu symbol']],
        ["Everyone uses the Ra Altar Room obelisk. Kill the special enemies in the order their symbols appear. Do it twice.", ['pictures/main_ee/answer_the_dawn/symbol_on_obelisk.webp|Obelisk', 'pictures/main_ee/answer_the_dawn/ra_enemy_key.webp|Enemy key']]
      ]},
      { h: 'Summon the Storm', steps: [
        ["Everyone uses the Challenge Podium stone. Underground, shoot the four poles until they stop spinning.", ['pictures/main_ee/summon_the_storm/stone_challenge_podium.webp|Stone', 'pictures/main_ee/summon_the_storm/odin_tunnel_pole.webp|Pole']],
        ["In the Arena, kill Kill-O-Watt-stunned Zombies inside each of the four electric circles. Everyone touches an orb at once, then survive the lockdown.", ['pictures/main_ee/summon_the_storm/electrical_circles.webp|Circles', 'pictures/main_ee/summon_the_storm/orb_over_challenge_bowl.webp|Orb']]
      ]},
      { h: 'Channel the Flood', steps: [
        ["Hit each set of three blue symbols with one Death of Orion shot (Danu Tunnel, The Pit, The Crypts).", ['pictures/main_ee/channel_the_flood/blue_symbols/danu_tunnel_aim_here.webp|Danu Tunnel', 'pictures/main_ee/channel_the_flood/blue_symbols/the_pit_aim_here.webp|The Pit', 'pictures/main_ee/channel_the_flood/blue_symbols/the_crypts_aim_here.webp|The Crypts']],
        ["Everyone stands on the Pit metal plate ~20 s and survives the lockdown. Take the key under the grate.", ['pictures/main_ee/channel_the_flood/metal_plate.webp|Metal plate', 'pictures/main_ee/channel_the_flood/key.webp|Key']]
      ]},
      { h: 'Fury & Wrath', steps: [
        ["Enter the Arena portal. Clear the Tigers and Gladiators.", ['pictures/main_ee/boss_fight/boss_fight_portal.webp|Portal']],
        ["Shoot the red spots on Fury's armour, then its forehead. Block or outrun the fire spikes. Then do the same to Wrath.", ['pictures/main_ee/boss_fight/side_of_elephant.webp|Armour spots']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Iron Bull shield (per player)', steps: [
        ["Shoot the three bull heads in the Zeus Altar Room with the shield gun, then the sparkling part on the Temple ceiling.", ['pictures/brazen_bull/iron_bull/ceiling.webp|Ceiling head', 'pictures/brazen_bull/iron_bull/sparkling_part_on_ceiling.webp|Sparkling part']],
        ["Ignite the blade four times: 8 shield-melee kills, then a 9th on a different special type each time. Grab the part in the Odin–Zeus statue hand.", ['pictures/brazen_bull/iron_bull/arm.webp|Statue hand']],
        ["With the blade lit, kill a Gladiator and a Brawler; take the part above the Collapsed Tunnel door. Collect the Iron Bull at the workbench.", ['pictures/brazen_bull/iron_bull/above_doorway.webp|Above doorway']]
      ], rec: [{ id: 'ign', at: 1, label: 'Kill types used', type: 'multi', opts: ['Acid', 'Electric', 'Fire', 'Water', 'Brawler', 'Gladiator'] }] },
      { h: 'Song: "Mad Hatter"', steps: [
        ["Shoot four coins: Ra Burial Chamber, Danu Tower Entrance window, Odin Tower Entrance grate, Zeus Altar Room statue base.", ['pictures/song_ee/ra_tower.webp|Ra', 'pictures/song_ee/odin_tower_entrance.webp|Odin', 'pictures/song_ee/zeus_altar_room.webp|Zeus']]
      ]},
      { h: 'Odin Viking (free perk)', steps: [
        ["Put the helmet, sword and cup on the Odin Altar Room Viking boat, then arc a Wraith Fire onto it from the Zeus Altar Room. A free perk appears seven rounds later.", ['pictures/free_perk/viking_boat.webp|Viking boat', 'pictures/free_perk/where_to_aim.webp|Where to aim']]
      ]},
      { h: 'Fire & trap immunity', steps: [
        ["Kill all four Catalysts and a Tiger with the Acid Trap, then slide under a Spike Log trap and the Acid Trap unharmed."]
      ]}
    ]}
  ]
});

M({
  id: 'vod', name: 'Voyage of Despair', group: 'base', pack: 'Base game · Chaos',
  main: 'Abandon Ship',
  blurb: 'The Titanic on the night it sank. The Kraken, moving Pack-a-Punch, a planetary puzzle and Odin\'s Eye.',
  img: 'https://mmmrkennedy.com/games/BO4/voyage_of_despair/',
  guide: 'https://mmmrkennedy.com/games/BO4/voyage_of_despair/voyage_of_despair_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Voyage_of_Despair',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Artifact & Pack-a-Punch', note: "Rated 7/10 solo with the Hellion Salvo (9/10 without), 1:15–1:45 hours.", steps: [
        ["Activate the Sentinel Artifact.", ['pictures/main_ee/sentinel_artifact.webp|Sentinel Artifact']],
        ["Activate the four PaP pedestals: Poop Deck, Turbine Room, Lower Grand Staircase, Cargo Hold. PaP then moves between them.", ['pictures/pap/pap_poopdeck.webp|Poop Deck', 'pictures/pap/pap_turbineroom.webp|Turbine Room', 'pictures/pap/pap_staircase.webp|Staircase']]
      ]},
      { h: 'Kraken', steps: [
        ["From ~round 12, kill a Stoker through its glowing weak spot (shoot off the coal first) for a key.", ['pictures/kraken/glowingspot.webp|Weak spot']],
        ["Open the chest that appears and fill it with kills three times (it moves). The item inside says where the Kraken spawns: Compass = Boat Deck, Telescope = Poop Deck, Globe = Mid-Deck, Binoculars = Forecastle, Pliers = Aft Decks.", ['pictures/kraken/chest_open.webp|Chest', 'pictures/kraken/kraken_onbox.webp|Kraken']],
        ["Build the Distillation Kit in the Engine Room (parts in the Galley, Cargo Hold, 1st Class Lounge). Kill Catalysts with the Kraken for elemental variants — you need Poison for the pipes.", ['pictures/kraken/kraken_variant/elemental_workbench.webp|Workbench']]
      ]},
      { h: 'Clocks & outlets', steps: [
        ["Note the time on the clock beside each of the four alchemical symbols (six clocks around the ship).", ['pictures/main_ee/clocks_and_symbols/clock_mailrooms.webp|Clock example']],
        ["On the Bridge, set each symbol's minute dial to its time (5-minute steps, top = 0). Set the four hour dials on the Poop Deck and Engine Room. They lock with a sound.", ['pictures/main_ee/dials/dials.webp|Dials', 'pictures/main_ee/dials/dials_arrow_example.webp|Arrow check']],
        ["Find the four active elemental outlets (of six) and kill the matching Catalyst by each — one per round.", ['pictures/main_ee/outlet/outlet_staterooms.webp|Outlet', 'pictures/main_ee/outlet/orangeritualcircle.webp|Ritual circle']],
        ["Everyone does the trials in order: Poison, Water, Electric, Fire. Lift the Artifact after each.", ['pictures/main_ee/outlet/poison_sentinelartifact.webp|Artifact']]
      ], rec: [{ id: 'clocks', at: [0, 1], label: 'Symbol → time', type: 'text', ph: 'e.g. Fire 3:25, Water 7:40…' }] },
      { h: 'Pipes & planets', steps: [
        ["Shoot the nine Turbine Room leaking pipes with a Poison Kraken. Put the Artifact in PaP while it's in the Turbine Room, then take it back.", ['pictures/main_ee/pipe_turbineroom/pipe_location1.webp|Pipe 1', 'pictures/main_ee/pipe_turbineroom/pipe_location9.webp|Pipe 9']],
        ["Touch the nine planet symbols: Sun (Forecastle), Mercury (Mail Rooms), Venus (Millionaire Suite), Moon (Lower Grand Staircase), Mars (Boiler Room), Jupiter (Engine Room), Saturn (Bridge), Uranus (State Rooms), Neptune (Aft Decks).", ['pictures/main_ee/planet_symbols/symbol_sun.webp|Sun', 'pictures/main_ee/planet_symbols/symbol_saturn.webp|Saturn']],
        ["Read the planet order on the Cargo Hold Solar System Model. Shoot the planets in that order and grab each orb. Leave the Sun until you're ready for the timed step.", ['pictures/main_ee/planets_sky_pickup/solarsystemmodel.webp|Model', 'pictures/main_ee/planets_sky_pickup/moon_sky.webp|Moon']]
      ], rec: [{ id: 'planets', at: 2, label: 'Planet order', type: 'seq', n: 9, opts: ['Sun', 'Mercury', 'Venus', 'Moon', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'] }] },
      { h: 'Ice blocks & Odin\'s Eye', steps: [
        ["Everyone grabs the Sun orb. Break the ice blocks toward the Poop Deck before the freeze catches you (Max Ammo halfway).", ['pictures/main_ee/ice_blocks/blockofice.webp|Ice block', 'pictures/main_ee/ice_blocks/final_ice.webp|Final block']],
        ["Use the ritual circle there and swim to the Artifact on the iceberg.", ['pictures/main_ee/boss_fight/sentinelartifact_iceberg.webp|Iceberg']],
        ["Clear enemies on the Poop Deck and Engine Room. In the State Rooms and Promenade, shoot the Eye only during its laser. On the Poop Deck, stun its charge or everyone goes down."]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Svalinn Guard shield', steps: [
        ["Build the Ballistic Shield on the Poop Deck. Melee the Code Breaker off the Mail Rooms safe.", ['pictures/ballistic_shield/svalinn_guard/codebreakerdevice.webp|Code Breaker']],
        ["Open four small safes and note each code. Match the Mail Rooms bones (skull, long bone, hand, foot) to codes and insert them.", ['pictures/ballistic_shield/svalinn_guard/skull.webp|Skull']],
        ["Use the skeleton in the Cargo Hold car, shoot a stuck firework out of a tube, and fire it into the car's underside from the Forecastle.", ['pictures/ballistic_shield/svalinn_guard/skeletoncar.webp|Car']]
      ], rec: [{ id: 'safes', at: 1, label: 'Safe codes', type: 'text', ph: 'Bridge · Suites · Lounge · Berths' }] },
      { h: 'Song: "Drowning"', steps: [
        ["Shoot four coins: Forecastle, above PaP on the Lower Grand Staircase, Sun Deck by the Vapr, Poop Deck by PaP.", ['pictures/song_ee/coin_forecastle.webp|Forecastle', 'pictures/song_ee/coin_staircase.webp|Staircase', 'pictures/song_ee/coin_sundeck.webp|Sun Deck']]
      ]},
      { h: 'Free Kraken & Homunculus (round 9)', steps: [
        ["Crouch in the 3rd Class Berths corner holding interact, follow the blood to the Aft Decks wall, melee it twice and swap weapons.", ['pictures/freekraken_freehomunculus/3rdclasscorner.webp|Corner', 'pictures/freekraken_freehomunculus/bloodywall.webp|Bloody wall']]
      ]},
      { h: 'More eggs', steps: [
        ["Free perk: snipe the six fish and put them on the Sun Deck fish box.", ['pictures/free_perk/boxwithfish.webp|Fish box']],
        ["Special-weapon fire sale: three music sheets on three pianos, melee each and the box with your Specialist.", ['pictures/special_weapon_firesale/piano_uppergrandstaircase.webp|Piano']],
        ["Low-gravity Zombies: moustache (fan), crown (smokestack) and trident (walkway) on the Galley body.", ['pictures/lowgravity_zombies/crown_onbench.webp|Crown']],
        ["Hourglass (free fast travel): shoot the mesh on the seven Boat Deck stacks and follow it to the Poop Deck.", ['pictures/hourglass/hourglass.webp|Hourglass']],
        ["Upgraded Bowie: melee a Blightfather ~10 times.", ['pictures/bowie_knife_upgrade/galley_wallbuy.webp|Bowie wallbuy']]
      ]}
    ]}
  ]
});

M({
  id: 'botd', name: 'Blood of the Dead', group: 'base', pack: 'Base game · Aether',
  main: 'Most Escape Alive',
  blurb: 'Alcatraz again, with Richtofen\'s lab, the Spectral Shield, the Warden and a lot of seagulls.',
  img: 'https://mmmrkennedy.com/games/BO4/blood_of_the_dead/',
  guide: 'https://mmmrkennedy.com/games/BO4/blood_of_the_dead/blood_of_the_dead_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Blood_of_the_Dead',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Power, Shield & PaP', note: "Rated 8/10 solo, 1:45–2:15 hours. Play as Richtofen for the full ending. Suggested: Dying Wish, Stamin-Up, Winter's Wail, Ragnarok DG-5, Wraith Fire.", steps: [
        ["Flip the Power House switch (by Brew) and the third switch in Building 64 (spawns the Warden).", ['pictures/power/power_powerhouse.webp|Power House', 'pictures/power/power_building64.webp|Building 64']],
        ["Spectral Shield: Spirit Essence (Library, Times Square or Michigan Ave), Door (Citadel spiral stairs or China Alley), Warden's Key (first Warden). Build at a table.", ['pictures/spectral_shield/essence_library.webp|Essence', 'pictures/spectral_shield/shielddoor_spiral.webp|Door', 'pictures/buildable_tables/cellblock3rdfloor.webp|Table']],
        ["Spirit-blast the roof Voltmeter. PaP rotates Roof → Power House/Building 64 → Roof.", ['pictures/pap/voltmeter.webp|Voltmeter', 'pictures/pap/pap_roof.webp|Roof PaP']]
      ]},
      { h: "Hell's Retriever & Spoon", steps: [
        ["Feed the three Hellhounds (New Industries, Cell Block 2nd floor, Eagle Plaza) with nearby kills. Fast travel from the Showers or Warden's House and grab the Retriever off the rock.", ['pictures/hells_retriever/hellhound_newindustries.webp|Hellhound', 'pictures/hells_retriever/retriever_on_stone.webp|Retriever']],
        ["Read the three Warden's Office pillar numbers through the shield and set them on the Citadel Tunnels number pad (spirit-blast it first).", ['pictures/spoon/number_on_pillars.webp|Pillar numbers', 'pictures/spoon/number_pad.webp|Number pad']],
        ["Spirit-blast the Docks Voltmeter, then throw the Retriever at the net above the docks. Take the Spoon from the arm.", ['pictures/spoon/net_above_docks.webp|Net', 'pictures/spoon/spoon_on_box.webp|Spoon']]
      ], rec: [{ id: 'pillars', at: 1, label: 'Pillar numbers (close, middle, far)', type: 'nums', n: 3 }] },
      { h: 'Shock and Denial', steps: [
        ["Melee the wall at the top of the Warden's House stairs with the Spoon until it scratches.", ['pictures/main_ee/shock_and_denial/scratched_wall.webp|Scratched wall']],
        ["Enter 666 on the pad to spawn the Warden. Monkey-bomb below the wall so he slams in front of it.", []],
        ["Flip the electric chair switch, take the Red Stone and put it on the map in Richtofen's lab.", ['pictures/main_ee/shock_and_denial/electric_chair_switch.webp|Chair switch', 'pictures/main_ee/shock_and_denial/map_on_wall.webp|Lab map']]
      ]},
      { h: 'Pain and Guilt', steps: [
        ["Interact with the Kronorium in the lab; a seagull takes it. Spirit-blast the seagull once per round, three times (watch for the blue streak from the Gondola top).", ['pictures/main_ee/pain_and_guilt/aim_here_bird_step.webp|Bird spots', 'pictures/main_ee/pain_and_guilt/blue_light_streak_bird.webp|Blue streak']],
        ["Enter 872 for Zombie Blood. Through the shield, find the book under the white flash, throw the Retriever at it and pick it up.", ['pictures/main_ee/pain_and_guilt/white_flash.webp|White flash', 'pictures/main_ee/pain_and_guilt/kronorium_on_floor_bird.webp|Kronorium']],
        ["Place it on the corpse in the Ritual Room chair. (Getting the Attuned Shield now helps a lot.)"]
      ]},
      { h: 'Anger and Bargaining', steps: [
        ["Enter the Kronorium numbers on the pad. Spirit-blast the red orb the Lighthouse lights up to start a challenge. Repeat for all five.", ['pictures/main_ee/anger_and_bargaining/lighthouse.webp|Lighthouse', 'pictures/main_ee/anger_and_bargaining/red_orb_example.webp|Red orb']],
        ["Showers: take the ghost's banjo and fill it standing in a blue circle without getting hit.", ['pictures/main_ee/anger_and_bargaining/showers_challenge/blue_circle.webp|Blue circle']],
        ["Docks: add the three buoy Morse digits, tap the total into the Sally Port telegraph, then escort the Infirmary ghost by Gondola.", ['pictures/main_ee/anger_and_bargaining/docks_challenge/buoy_gondola.webp|Buoy', 'pictures/main_ee/anger_and_bargaining/docks_challenge/telegraph_key.webp|Telegraph']],
        ["Power House: five rounds of Simon Says in Building 64, punch card in Model Industries, then blast the ghost as it grabs each right lever.", ['pictures/main_ee/anger_and_bargaining/power_house_challenge/stand_here.webp|Stand here', 'pictures/main_ee/anger_and_bargaining/power_house_challenge/cheat_sheet.webp|Cheat sheet']],
        ["Michigan Avenue: escort the Cafeteria ghost to Cell Block 2nd floor.", ['pictures/main_ee/anger_and_bargaining/michigan_avenue_challenge/ghost_cafeteria.webp|Ghost']],
        ["New Industries: escort the D-Block ghost, weaken him with the Key, and Spin Trap him by the MOG 12.", ['pictures/main_ee/anger_and_bargaining/new_industries_challenge/spin_trap.webp|Spin Trap']],
        ["Put all five Red Stones on the lab map."]
      ], rec: [
        { id: 'buoys', at: 2, label: 'Buoy digits → total', type: 'text', ph: 'e.g. 3 + 5 + 7 = 15' },
        { id: 'chal', at: [1, 2, 3, 4, 5], label: 'Challenges done', type: 'multi', opts: ['Showers', 'Docks', 'Power House', 'Michigan Ave', 'New Industries'] }
      ] },
      { h: 'Warden boss', steps: [
        ["Use the electric chair. Get your gear from the Bag, follow the gull, take the last Red Stone and place it.", ['pictures/main_ee/reflection_and_loneliness/bag.webp|Bag', 'pictures/main_ee/reflection_and_loneliness/final_red_stone.webp|Last Red Stone']],
        ["Everyone uses the metal door up the secret stairs. Destroy the three red orbs inside his cylinder, then spirit-blast the white orb. Twice (death circles in phase 2).", ['pictures/main_ee/reconstruction/boss_fight_red_orb.webp|Red orb', 'pictures/main_ee/reconstruction/white_orb.webp|White orb']],
        ["Richtofen uses the mechanism and re-enters through the door; then kill the Warden."]
      ]}
    ]},
    { id: 'gats', label: 'Weapons', sections: [
      { h: 'Blundergat → Acidgat / Magmagat', steps: [
        ["Collect five shield-only Skulls with the Retriever and take the Blundergat from the Warden's Office.", ['pictures/blundergat/skull_westgrounds.webp|Skull', 'pictures/blundergat/blundergat_wardensoffice.webp|Blundergat']],
        ["Acidgat: case, motor and acid bottle (needs the Warden's Key). Build the kit and put the Blundergat in.", ['pictures/blundergat/acidgat/case.webp|Case', 'pictures/blundergat/acidgat/motor.webp|Motor', 'pictures/blundergat/acidgat/acid_bottle.webp|Acid bottle']],
        ["Magmagat: fill the Warden's House fireplace with kills, then rush the Tempered Blundergat to the New Industries press (blue barrels reset the timer).", ['pictures/blundergat/magmagat/fireplace.webp|Fireplace', 'pictures/blundergat/magmagat/press.webp|Press']]
      ]},
      { h: "Hell's Redeemer", steps: [
        ["Get Retriever kills from the top-of-slope Recreation Yard spot until a howl. Throw it at the shield-only blue dog drawing.", ['pictures/hells_retriever/hells_redeemer/blue_dog_symbol.webp|Dog drawing']],
        ["On a dog round, spirit-blast the ghost dog, then fast travel to collect the Redeemer.", ['pictures/hells_retriever/hells_redeemer/ghostdog.webp|Ghost dog', 'pictures/hells_retriever/hells_redeemer/redeemer_pickup.webp|Redeemer']]
      ]},
      { h: 'Golden Spork → Scalpel → Sporknife', steps: [
        ["Spork: Spoon in the Infirmary tub, fill it with Acidgat/Magmagat kills on the roof, drain it, drop the Water Tower and throw the Retriever at the branch.", ['pictures/spoon/golden_spork/tub_full_infirmary.webp|Full tub', 'pictures/spoon/golden_spork/water_tower.webp|Water tower']],
        ["Scalpel: 100 Spork kills, then three Redeemer rocks charged at the Acid, Fan and Spin traps (100 kills each). Grab the golden nugget and use the press.", ['pictures/spoon/golden_scalpel/red_stone.webp|Red rock', 'pictures/spoon/golden_scalpel/golden_nugget.webp|Nugget']],
        ["Sporknife: Scalpel in the tub, then melee-kill the Warden by the knife-and-cloth sign on the Catwalk.", ['pictures/spoon/golden_sporknife/sign_with_knife_and_cloth.webp|Sign']]
      ]},
      { h: 'Attuned Spectral Shield', steps: [
        ["Key the lock that appears on the moving Mystery Box until blue, then throw the Retriever at it.", ['pictures/spectral_shield/attuned_spectral_shield/blue_lock.webp|Blue lock']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Songs', steps: [
        ["\"Where Are We Going\": spirit-blast the number pad and enter 115."],
        ["Mob of the Dead lockdown theme: shoot the Showers dryer three times.", ['pictures/song_ee2/dryer.webp|Dryer']]
      ]},
      { h: 'Free Monkey Bombs', steps: [
        ["Fill the C-D Street stone monkey with Specialist kills, shoot it when its hat glows red, and use the lab teleporter pad.", ['pictures/free_monkey_bomb/stone_monkey_bomb.webp|Stone monkey', 'pictures/free_monkey_bomb/monkey_bomb_pickup.webp|Pickup']]
      ]},
      { h: 'Shadowman jumpscare', steps: [
        ["Scope the Recreation Yard window with a sniper.", ['pictures/shadowman_jumpscare/this_window.webp|Window']]
      ]}
    ]}
  ]
});

M({
  id: 'classified', name: 'Classified', group: 'dlc', pack: 'Black Ops Pass bonus · Aether',
  main: 'Round 150',
  blurb: 'Five remade at the Pentagon. No real quest — the "main" is surviving to round 150.',
  img: 'https://mmmrkennedy.com/games/BO4/classified/',
  guide: 'https://mmmrkennedy.com/games/BO4/classified/classified_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Classified',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Power & Pack-a-Punch', note: "Solo, rated 9/10, about 4–6 hours.", steps: [
        ["Flip the power switch in the room behind the Soda perk.", ['pictures/power/power_switch.webp|Power switch']],
        ["Collect the three Teleporter Pads in the Main Offices.", ['pictures/pap/pad_desk_teleporter.webp|Pad 1', 'pictures/pap/pad_mysterybox.webp|Pad 2', 'pictures/pap/pad_brew.webp|Pad 3']],
        ["Flip all four Defcon switches, take the Panic Room teleporter for the Amplifier, and grab the three Morgue wires.", ['pictures/pap/defcon_server.webp|Defcon switch', 'pictures/pap/amplifier_panic_room.webp|Amplifier', 'pictures/pap/wires_mysterybox.webp|Wires']],
        ["Build it (Central Filing or Weapon Testing), put it on the small War Room teleporter, and at Defcon 5 take the big one to Groom Lake.", ['pictures/pap/small_teleporter.webp|Small teleporter']]
      ]},
      { h: 'Round 150', steps: [
        ["Build the Riot Shield at Weapon Testing.", ['pictures/riot_shield/gun_filing_cabinets.webp|Gun part', 'pictures/riot_shield/base_staircase.webp|Base', 'pictures/riot_shield/window_power.webp|Window']],
        ["Camp the corner by the Shield workbench with the shield out. Plant Ragnaroks, Wraith Fire at your feet, shield-gun between. Replace the shield early.", ['pictures/main_ee/stand_here.webp|Stand here']],
        ["Survive round 149 for the cutscene."]
      ], rec: [{ id: 'round', at: 2, label: 'Best round reached', type: 'nums', n: 1 }] }
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: "Winter's Howl", steps: [
        ["Der Riese: key from the box opposite Cola, then the Main Offices desk drawer.", ['pictures/winters_howl/numbers_drawers.webp|Numbers']],
        ["Shangri-La: grenade behind the South Labs machine by Weapon Testing.", ['pictures/winters_howl/numbers_shang.webp|Numbers']],
        ["Kino: Defcon order Spitfire, Server Room, upper elevator, lower elevator; slide the Panic Room TV.", ['pictures/winters_howl/numbers_panic_room.webp|Numbers']],
        ["Shi No Numa: with a PaP'd gun, shoot nameplates Washington, Franklin, Hamilton, Lincoln.", ['pictures/winters_howl/numbers_nameplate.webp|Numbers']],
        ["Enter Shi No Numa, Der Riese, Shangri-La, Kino on the flashing War Room machine, then survive three rounds in Groom Lake for the case.", ['pictures/winters_howl/machine.webp|Machine', 'pictures/winters_howl/case.webp|Case']]
      ], rec: [{ id: 'howl', at: [0, 1, 2, 3, 4], label: 'Codes: Shi No Numa · Der Riese · Shangri-La · Kino', type: 'text', ph: '4 codes' }] },
      { h: 'Nova Crawlers (~6,000 points)', steps: [
        ["Knock five times on the door left of Brew in the Main Offices, then melee the 40 crawlers.", ['pictures/nova_crawler/this_door.webp|Door']]
      ]},
      { h: 'Songs', steps: [
        ["\"Shockwave\": three bottles (Central Filing, War Room console, Porcine Research).", ['pictures/song_ee/bottle_central_filing.webp|Bottle']],
        ["\"This Jazz is Classified\": five computers in order.", ['pictures/song_ee2/computer1.webp|Computer 1']]
      ]},
      { h: 'Richtofen jumpscare', steps: [
        ["Scope the light left of PaP in Groom Lake.", ['pictures/richtofen_jumpscare/this_light.webp|Light']]
      ]}
    ]}
  ]
});

M({
  id: 'dotn', name: 'Dead of the Night', group: 'dlc', pack: 'DLC 1 · Chaos',
  main: 'Trial by Ordeal',
  blurb: 'A Gothic mansion full of vampires and werewolves. Silver bullets, Alistair\'s Folly and three zodiac lines.',
  img: 'https://mmmrkennedy.com/games/BO4/dead_of_the_night/',
  guide: 'https://mmmrkennedy.com/games/BO4/dead_of_the_night/dead_of_the_night_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Dead_of_the_Night',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Artifact & Pack-a-Punch', note: "Rated 6/10 solo, 1:10–1:40 hours. The Artifact HUD's 12 zodiac signs light up as you go.", steps: [
        ["Activate the Sentinel Artifact.", ['pictures/sentinel_artifact.webp|Sentinel Artifact']],
        ["Break the three vases with glowing particles for the purple, green and blue stones. Kill four Zombies by each and touch it for its task.", ['pictures/pap/vase_purple_bedroom_hallway.webp|Vase']],
        ["Do each task for a Tuning Fork: clock = stand in the circle; statue = kill the vampires; painting/object = follow the ghost.", ['pictures/pap/clock_tuning_fork.webp|Clock', 'pictures/pap/vampire_tuning_fork.webp|Statue', 'pictures/pap/ghost_tuning_fork.webp|Ghost']],
        ["Clear the Forest Terrace debris (a Werewolf spawns). PaP is at the back of the Forest.", ['pictures/pap/forest_debris.webp|Debris']]
      ]},
      { h: 'Gear: Silver Bullets, shield, Alistair\'s', steps: [
        ["Silver Bullets: candlestick, vase and plate → Molten Silver (Wine Cellar bench); guano, charcoal and sulfur → Silver Bullets (Library bench).", ['pictures/silver_bullets/molten_silver_bench.webp|Molten Silver bench', 'pictures/silver_bullets/silver_bullets_bench.webp|Bullets bench']],
        ["Ballistic Shield: base, window and gun assembly; build in the Smoking Room.", ['pictures/ballistic_shield/shield_workbench.webp|Workbench']],
        ["Alistair's Folly: note the four coloured letters (X, A, D, Z) and enter them on the Library lock box.", ['pictures/alistairs_folly/red_symbol_master_bedroom.webp|Symbol', 'pictures/alistairs_folly/lock_box.webp|Lock box']],
        ["Chaos Theory: Silver-Bullet a Werewolf for its materia → Greenhouse machine. Shield-melee the Library bookshelf for the gun part. Craft left of the Greenhouse stairs.", ['pictures/alistairs_folly/chaos_theory/werewolf_materia.webp|Materia', 'pictures/alistairs_folly/chaos_theory/bookshelf.webp|Bookshelf']],
        ["Annihilator: Nosferatu materia (tornado three vampires for Bile, smear the red coffin, kill the Crimson Nosferatu), bat materia (Mausoleum orange lamps), Forest dirt-pile gun part. Craft right of the stairs.", ['pictures/alistairs_folly/alistairs_annihilator/red_tomb.webp|Red coffin', 'pictures/alistairs_folly/alistairs_annihilator/orange_lamp.webp|Orange lamp', 'pictures/alistairs_folly/alistairs_annihilator/blue_part_annihilator.webp|Gun part']]
      ], rec: [{ id: 'folly', at: 2, label: 'Lock box symbols', type: 'text', ph: 'e.g. red X, blue A…' }] },
      { h: 'Telescope line (Leo → Scorpio)', steps: [
        ["Touch the stones until the Telescope vision. Everyone shoots the Mausoleum lightning rod with Silver Bullets at once.", ['pictures/main_ee/telescope/lightning_rod.webp|Lightning rod']],
        ["North Atrium Bridge wheels: cover green (middle), blue (left) and red (right) beams.", ['pictures/main_ee/telescope/boxes.webp|Boxes']],
        ["Find three zodiac symbols, total each one's scratches, and enter them lowest to highest on the Greenhouse telescope dial.", ['pictures/main_ee/zodiac_symbols.webp|Zodiac symbols', 'pictures/main_ee/telescope/dial.webp|Dial']],
        ["Open the roof with the wheel, shield-melee it green. Everyone runs the electric trap and melees the eyepiece. Lift the stone, survive, kill the Werewolves.", ['pictures/main_ee/telescope/wheel.webp|Wheel', 'pictures/main_ee/telescope/eyepiece.webp|Eyepiece']]
      ], rec: [{ id: 'zodiac', at: 2, label: 'Symbols and totals', type: 'text', ph: 'e.g. Aries 4, Leo 7, Libra 9' }] },
      { h: 'Effigy line (Sagittarius → Pisces)', steps: [
        ["Annihilator the five Cemetery birch trunks and send each branch to the centre.", ['pictures/main_ee/effigy/branch.webp|Branch']],
        ["Touch the 1912 tombstone for green vision, hit the effigy base with a charged Annihilator shot and enter Ghost Mode.", ['pictures/main_ee/effigy/tombstone.webp|Tombstone', 'pictures/main_ee/effigy/charged_fireball.webp|Charged shot']],
        ["Escort the ghost lady to the Cemetery box spot for a stone; lift it and survive.", ['pictures/main_ee/effigy/ghost_danu.webp|Ghost']]
      ]},
      { h: 'Knight line (Aries → Cancer)', steps: [
        ["Turn the Library fire trap blue with a charged Annihilator shot and run through it with the shield.", ['pictures/main_ee/knight/fireplaces/fireplace_smoking_room.webp|Fireplace']],
        ["Melee the fireplaces in the guide's three orders with the flaming shield; each set leaves a gem.", ['pictures/main_ee/knight/fireplaces/fireplace_library_left_trap.webp|Fireplace']],
        ["Gems in the three armour suits, walk them to the Forest circles, kill a Werewolf in the triangle. Lift the stone and survive.", ['pictures/main_ee/knight/knight_cemetery.webp|Suit', 'pictures/main_ee/knight/stone.webp|Stone']]
      ]},
      { h: 'Werewolf boss', steps: [
        ["Open the right-side Forest door. Turn the statue beams onto the green square, trap the boss there and shoot its chest.", ['pictures/main_ee/boss_fight/door.webp|Door']],
        ["Survive the mixed wave, then find the hidden square and repeat until it dies."]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Savage Impaler', steps: [
        ["Melee six candle flames, use the Forest tombstone for Zombie Blood, and escort the ghost lady to the Mausoleum.", ['pictures/savage_impaler/burning_candle.webp|Candle', 'pictures/savage_impaler/tombstone.webp|Tombstone']],
        ["Kill the teal Zombies in order (normal, fire, special weapon, shield). Place the jewellery, kill ~15 vampires, open the tomb when blue.", ['pictures/savage_impaler/glow_teal.webp|Teal Zombie', 'pictures/savage_impaler/blue_pattern.webp|Blue pattern']]
      ]},
      { h: 'Stake Knife', steps: [
        ["Line up the four Forest lantern-tree symbols, shoot the Garden stones in that order, Bowie the second tree's symbols, then shield the branch down.", ['pictures/stake_knife/trees_edited.webp|Symbols', 'pictures/stake_knife/stone_gazebo.webp|Garden stone']],
        ["Charge the branch on the Mausoleum stone with ~15 vampire kills and craft on the Cemetery Path bench.", ['pictures/stake_knife/glowing_branch.webp|Glowing branch', 'pictures/stake_knife/workbench.webp|Workbench']]
      ], rec: [{ id: 'stake', at: 0, label: 'Tree symbol order', type: 'text', ph: 'Left to right' }] },
      { h: 'Song: "Mystery"', steps: [
        ["Shoot four coins: Main Hall table, East Hallway door, Wine Cellar barrel, top of the Library Ra statue.", ['pictures/song_ee/coin_main_hall.webp|Main Hall']]
      ]},
      { h: 'Hidden rooms', steps: [
        ["Billiards: pot 1–9 in order. Wine Cellar: melee barrels fastest to slowest drip. Balconies: books 1–4 in order.", ['pictures/hidden_rooms/wine_cellar/wine_shelf.webp|Wine shelf']]
      ]},
      { h: 'Infinite ammo + perks + Homunculus', steps: [
        ["Long chain started from round 1: door order, gramophones, PaP'd Trebuchet vases, Wraith Fire candles, record, ghost, prone crawl in the Wine Cellar. Follow the guide.", ['pictures/infinite_ammo/broken_barrel.webp|Broken barrel']]
      ]}
    ]}
  ]
});

M({
  id: 'ae', name: 'Ancient Evil', group: 'dlc', pack: 'DLC 2 · Chaos',
  main: 'Greek Tragedy',
  blurb: 'Delphi. Four Hands of the Gods, Apollo\'s Will, Pegasus and a fight with Perseus.',
  img: 'https://mmmrkennedy.com/games/BO4/ancient_evil/',
  guide: 'https://mmmrkennedy.com/games/BO4/ancient_evil/ancient_evil_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Ancient_Evil',
  settings: [
    { id: 'hand', label: 'Hand you are upgrading', multi: true, opts: [['charon', 'Charon'], ['ouranos', 'Ouranos'], ['hemera', 'Hemera'], ['gaia', 'Gaia']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Unleash the Eagles (PaP)', note: "Rated 7/10 solo, 1:15–1:30 hours. You'll need Redeemed Charon, Fallen Gaia, Redeemed Hemera, Redeemed Ouranos and the Pegasus Strike. In co-op every player needs a Redeemed Hand.", steps: [
        ["Activate the Sentinel Artifact in the Amphitheater and survive.", ['pictures/sentinel_artifact.webp|Sentinel Artifact']],
        ["Take a Golden Bridle and ride Pegasus from the Spartan Monument to the Dark Side.", ['pictures/pap/bridle_intersection.webp|Bridle']],
        ["Free both eagles (Python Pass hanging cage, Cliff Ruins cage — Specialist to break) and survive at the Center of the World.", ['pictures/pap/hanging_cage.webp|Hanging cage', 'pictures/pap/cage_cliff_ruins.webp|Cliff cage']]
      ]},
      { h: 'Eternal Flame, Apollo\'s Will & Pegasus Strike', steps: [
        ["Earn tribute points at the challenge bowls (9 solo, +9 per player) to light the Eternal Flame.", ['pictures/tributes/bowl_temple.webp|Tribute bowl']],
        ["Apollo's Will: handle (River Pass), spear (Treasuries/Stoa), shield (first Gegenees). Build in the Marketplace.", ['pictures/apollos_will/handle_bridge.webp|Handle', 'pictures/apollos_will/spear_stoa.webp|Spear', 'pictures/apollos_will/workbench.webp|Workbench']],
        ["Pegasus Strike: anvil (Cliff Ruins), hammer (Python Pass), tongs (River of Sorrow). Craft at the Cliff Ruins stump.", ['pictures/pegasus_strike/anvil_koshka.webp|Anvil', 'pictures/pegasus_strike/hammer_titan.webp|Hammer', 'pictures/pegasus_strike/table.webp|Stump']]
      ]},
      { h: 'Beacons, eyes & citizens', steps: [
        ["Light the spear in the Eternal Flame and melee the three oil spills (Upper Road, Treasuries, Spartan Monument).", ['pictures/main_ee/ignite_the_beacons/oil_upper_road.webp|Oil 1', 'pictures/main_ee/ignite_the_beacons/oil_spartan_monument.webp|Oil 3']],
        ["Charged Charon shot in front of the Zeus statue; in the blood pool, shoot four glowing-eyed statues with normal shots.", ['pictures/main_ee/look_the_dead_in_the_eye/ground_in_front_zeus.webp|Zeus ground', 'pictures/main_ee/look_the_dead_in_the_eye/glowing_eyes.webp|Glowing eyes']],
        ["Shoot walls to reveal three gear sets and spear each when the gears touch. In the Stoa, spear the mark when the statues face the crystal.", ['pictures/main_ee/align_the_citizens/gears_example.webp|Gears', 'pictures/main_ee/align_the_citizens/where_to_throw.webp|Where to throw']]
      ]},
      { h: 'Scepter and Sundial', steps: [
        ["Gaia-shoot each set of glowing roots by the Attalids Danu statue in one shot (three sets). Lure the Gegenees to blast the Ankh free.", ['pictures/main_ee/scepter_and_sundial/root_1.webp|Roots', 'pictures/main_ee/scepter_and_sundial/ankh.webp|Ankh']],
        ["Golden Pole in the Sundial; kill an Electric Catalyst on it and stop each dial with the blue symbol under the line.", ['pictures/main_ee/scepter_and_sundial/gold_sundial.webp|Sundial', 'pictures/main_ee/scepter_and_sundial/glowing_line.webp|Glowing line']],
        ["Give the Ra statue the Ankh, then the Hemera Hand. Keep Skeletons out of the beam until the Scepter appears; give it to Ra.", ['pictures/main_ee/scepter_and_sundial/scepter_of_ra.webp|Scepter']]
      ]},
      { h: 'Hit Your Marks & the Center', steps: [
        ["Everyone stands on their Home Circle in the Amphitheater. Win three of five rounds (standing = normal shot, floor = charged).", ['pictures/main_ee/hit_your_marks/home_circle.webp|Home Circle']],
        ["Shoot the River of Sorrow door symbols in order and open it.", ['pictures/main_ee/door_symbols.webp|Door symbols']],
        ["Pegasus Strike on the blue symbol, line the ballista up with charged Ouranos shots, light it with an acid-green spear, then everyone enters the portal behind PaP.", ['pictures/main_ee/cleanse_the_center/blue_symbol.webp|Blue symbol', 'pictures/main_ee/cleanse_the_center/gap_in_railing.webp|Railing gap', 'pictures/main_ee/cleanse_the_center/acid_trap.webp|Acid trap']]
      ], rec: [{ id: 'doorsym', at: 1, label: 'Door symbol order', type: 'text', ph: 'From the guide image' }] },
      { h: 'Pegasus & Perseus', steps: [
        ["Shoot Pegasus over an island; when it glows orange only your Specialist hurts it. Get off breaking islands. Twice.", ['pictures/main_ee/cleanse_the_center/orange_pegasus.webp|Orange Pegasus']],
        ["Damage Perseus until orange, then Specialist; repeat until he dies and grab the key.", ['pictures/main_ee/cleanse_the_center/key.webp|Key']]
      ]}
    ]},
    { id: 'hands', label: 'Hands', sections: [
      { h: 'Dormant Hands', steps: [
        ["After PaP, follow the Oracle's hints and melee the glowing item to reveal each Dormant Hand.", ['pictures/god_hand_weapons/dormant_hand/chaos_of_the_treasuries.webp|Example', 'pictures/god_hand_weapons/dormant_hand/golden_taurus.webp|Golden Taurus']]
      ]},
      { h: 'Charon', w: { hand: ['charon'] }, steps: [
        ["Fallen: Python Pass shrine, survive.", ['pictures/god_hand_weapons/charon/charon_shrine.webp|Shrine']],
        ["Redeemed: Fallen-Hand kills in the river by Odin until it's red, drink, find three real Obols, deposit, beat the trial.", ['pictures/god_hand_weapons/charon/redeemed/red_river.webp|Red river']]
      ]},
      { h: 'Ouranos', w: { hand: ['ouranos'] }, steps: [
        ["Fallen: Center of the World shrine.", ['pictures/god_hand_weapons/ouranos/ouranos_shrine.webp|Shrine']],
        ["Redeemed: fling a Zombie into each giant arrow and keep each feather in the air to the shrine.", ['pictures/god_hand_weapons/ouranos/redeemed/arrow_center.webp|Arrow']]
      ]},
      { h: 'Hemera', w: { hand: ['hemera'] }, steps: [
        ["Fallen: Monument of Craterus shrine.", ['pictures/god_hand_weapons/hemera/hemera_shrine.webp|Shrine']],
        ["Redeemed: angle three mirrors so a Hemera shot lights each bowl; melee the light back to the shrine.", ['pictures/god_hand_weapons/hemera/redeemed/bathhouse_mirror.webp|Mirror', 'pictures/god_hand_weapons/hemera/redeemed/upper_road_bowl.webp|Bowl']]
      ]},
      { h: 'Gaia', w: { hand: ['gaia'] }, steps: [
        ["Fallen: Spartan Monument shrine.", ['pictures/god_hand_weapons/gaia/gaia_shrine.webp|Shrine']],
        ["Redeemed: shoot the red crystals off three plants and carry the Seedlings to the shrine.", ['pictures/god_hand_weapons/gaia/redeemed/tree_auger.webp|Plant']]
      ]},
      { h: 'Exalted Hands', steps: [
        ["Throw a lit spear over the Temple pillar bowl. Charge each shrine with its Catalyst plus ~10 kills.", ['pictures/god_hand_weapons/exalted_hands/bowl.webp|Bowl']],
        ["At PaP with a full Redeemed Hand, beat Gaia (60 Catalysts), Ouranos (60 Skeletons), Hemera (3 Gegenees), Charon (3 Blightfathers).", ['pictures/god_hand_weapons/exalted_hands/pap_lit_symbols.webp|PaP symbols']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Stormbound"', steps: [
        ["Shoot four coins: Marketplace spawn, Spartan Monument bloody wall, River of Sorrow statue base, under the Cliff Ruins forge table.", ['pictures/song_ee/marketplace_coin.webp|Marketplace', 'pictures/song_ee/cliff_coin.webp|Cliff Ruins']]
      ]}
    ]}
  ]
});

M({
  id: 'ao', name: 'Alpha Omega', group: 'dlc', pack: 'DLC 3 · Aether',
  main: 'Electromagnetic Awakening Party',
  blurb: 'Nuketown above an underground Broken Arrow base. Rushmore, the Ray Gun Mark II variants and the Avogadro.',
  img: 'https://mmmrkennedy.com/games/BO4/alpha_omega/',
  guide: 'https://mmmrkennedy.com/games/BO4/alpha_omega/alpha_omega_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Alpha_Omega',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Power, PaP & Rushmore', note: "Rated 5/10 solo, 1–1.5 hours.", steps: [
        ["Turn on power in the Power House at the end of the Cul-de-sac.", ['pictures/power/power_house.webp|Power House']],
        ["Enable ventilation at the Generators console, survive, then clean the four clogged house vents until each gauge reads clean. PaP opens in Beds.", ['pictures/pap/activate_vents.webp|Vent console', 'pictures/pap/good_gage.webp|Clean gauge', 'pictures/pap/pack_a_punch.webp|PaP']],
        ["Wait a round and activate Rushmore at the Operations computer.", ['pictures/main_ee/contain_the_gas_leak/rushmore_computer.webp|Rushmore']]
      ]},
      { h: 'Emergency broadcast (clocks)', steps: [
        ["Buy the Galvaknuckles (Cul-de-sac truck) and kill a Zombie by a static TV. Note the five letter/number codes and match them on the cheat sheet.", ['pictures/main_ee/test_the_emergency_broadcast_system/galvaknuckles.webp|Galvaknuckles', 'pictures/main_ee/test_the_emergency_broadcast_system/clock_cheat_sheet.webp|Cheat sheet']],
        ["Set each house clock in order (hold = +15 min, melee = +1 hour).", ['pictures/main_ee/test_the_emergency_broadcast_system/clock_yellow_house.webp|Yellow House', 'pictures/main_ee/test_the_emergency_broadcast_system/clock_operations.webp|Operations']],
        ["Read the one clock you didn't set and enter it into Rushmore as four digits (6:15 → 0615).", []]
      ], rec: [{ id: 'tv', at: [0, 1, 2], label: 'TV codes → final time', type: 'text', ph: 'e.g. A3 C7 … → 0615' }] },
      { h: 'Crawler, A.D.A.M. & Marlton', steps: [
        ["Escort the red Nova Crawler to the barrier right of the RK7 in Transfusion Facility.", ['pictures/main_ee/pursue_all_avenues/red_crawler.webp|Red crawler', 'pictures/main_ee/pursue_all_avenues/crawler_barrier.webp|Barrier']],
        ["Sergeant A.D.A.M.: find Sawyer's, McCain's and Pernell's codes, then enter 7626 and the three codes into Rushmore within a minute.", ['pictures/sergeant_adam/sawyer_desk.webp|Sawyer', 'pictures/sergeant_adam/mccain_papers.webp|McCain', 'pictures/sergeant_adam/pernell_desk.webp|Pernell']],
        ["Melee Marlton's door (Green House Backyard–Diner stairs), bring A.D.A.M. to it, and put his canister on the Transfusion shelf.", ['pictures/main_ee/preserve_the_integrity/marlton_door.webp|Marlton door', 'pictures/main_ee/preserve_the_integrity/canister_shelf.webp|Shelf']]
      ], rec: [{ id: 'adam', at: 1, label: 'Sawyer · McCain · Pernell', type: 'nums', n: 3 }] },
      { h: 'New worlds', steps: [
        ["Build the Telepads; put one in the Power House and one in the Prisoner Holding backyard.", ['pictures/telepads/part1_loc1.webp|Part 1', 'pictures/telepads/part2_loc1.webp|Part 2', 'pictures/telepads/part3_loc1.webp|Part 3']],
        ["Bait a Jolting Jack into the server core, then teleport the core to the Operations server in time.", ['pictures/main_ee/prevail_over_the_impossible/server_core_start.webp|Server core', 'pictures/main_ee/prevail_over_the_impossible/server_core_end.webp|Operations server']],
        ["Brain Rot a Zombie at each green-mist picture (Green House upstairs, Lounge, Beds) and enter the three codes into Rushmore within a minute.", ['pictures/main_ee/prevail_over_the_impossible/pictures_green_house.webp|Green House', 'pictures/main_ee/prevail_over_the_impossible/pictures_lounge.webp|Lounge']]
      ], rec: [{ id: 'pics', at: 2, label: 'Picture codes', type: 'nums', n: 3 }] },
      { h: 'Power switches & mannequins', steps: [
        ["Set the six right-side switches: Diner up, Beds up, Lounge down, Generators up, Storage down, Solitary down. Restart the Power House switch.", ['pictures/main_ee/protect_the_values/switchs_quick_ref.webp|Quick reference', 'pictures/main_ee/protect_the_values/handle_example.webp|Handle']],
        ["Everyone touches the glowing blue mannequin and survives for a body part — three times. Bring them to APD Interrogation.", ['pictures/main_ee/prepare_for_tomorrow/mannequin_green_house.webp|Mannequin', 'pictures/main_ee/prepare_for_tomorrow/mannequin_peters.webp|Chair mannequin']],
        ["Escort the Elemental Orb to it (enter 3279 or 6662 to slow Zombies).", ['pictures/main_ee/prepare_for_tomorrow/elemental_orb.webp|Orb']]
      ]},
      { h: 'Avogadro', steps: [
        ["Everyone uses the APD Control computer. Fill the canister with mannequin kills.", ['pictures/main_ee/overwhelm_our_enemies/computer_apd.webp|Computer']],
        ["Fill the four backup canisters (Storage, Lounge, Diner, Beds) — leave when the room electrifies.", ['pictures/main_ee/overwhelm_our_enemies/canister_storage.webp|Storage', 'pictures/main_ee/overwhelm_our_enemies/canister_beds.webp|Beds']],
        ["Push Avogadro onto the APD door stairs, use the computer, then grab the Elemental Shard.", ['pictures/main_ee/overwhelm_our_enemies/door_apd.webp|APD door', 'pictures/main_ee/to_preserve_the_future/elemental_shard.webp|Shard']]
      ]}
    ]},
    { id: 'rg2', label: 'Ray Gun II', sections: [
      { h: 'Assembly Kit & Frame', steps: [
        ["Kit: tubing (Yellow House), canister (Storage), container (APD Control or Solitary). Craft in Operations.", ['pictures/ray_gun_mark_2/assembly_kit/tubing_kitchen.webp|Tubing', 'pictures/buildable_tables/workbench_ray_gun.webp|Workbench']],
        ["Frame: activate the four TVs one at a time (~5 kills each) and enter the numbers into Rushmore in order.", ['pictures/ray_gun_mark_2/frame/tv_diner.webp|TV', 'pictures/ray_gun_mark_2/frame/frames_panel.webp|Frames panel']]
      ], rec: [{ id: 'tvs', at: 1, label: 'TV numbers', type: 'nums', n: 4 }] },
      { h: 'Variants', steps: [
        ["V (yellow): Kill-O-Watt the yellow-mist Generators panel, chain the five poles, charge at the green generator.", ['pictures/ray_gun_mark_2/variant_v/green_generator.webp|Green generator']],
        ["X (blue): Cryofreeze a blue-mist cabinet, freeze-and-melee three blue Zombies, charge in APD Control.", ['pictures/ray_gun_mark_2/variant_x/broken_container.webp|Container']],
        ["Y (orange): Brain Rot a Zombie to dig it up, telepad the yellow orb to Storage, charge there.", ['pictures/ray_gun_mark_2/variant_y/orb_storage.webp|Orb in Storage']],
        ["Z (purple): Fire Bomb an orange-mist cabinet, clear a chimney, charge in the purple fireplace.", ['pictures/ray_gun_mark_2/variant_z/purple_fireplace.webp|Purple fireplace']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "I Am The Well"', steps: [
        ["Enter 7664 into Rushmore, or touch the three mannequin heads.", ['pictures/song_ee/lounge.webp|Lounge head']]
      ]},
      { h: 'Mannequin eggs', steps: [
        ["Extra perk: shoot every mannequin's head off; kill the mannequin round for a perk by the Nuketown sign.", ['pictures/free_perk/free_perk.webp|Free perk']],
        ["Free self-revive: Bowie-knife every head off (not Galvaknuckles), then reunite the two mannequins at the Green House shed.", ['pictures/free_self_revive/shed.webp|Shed']]
      ]},
      { h: 'Codes & extras', steps: [
        ["TEDD: enter 8333 and visit him in the Lounge.", ['pictures/tedd/tedd.webp|TEDD']],
        ["Insanity Mode (round 200): clock 1 + population 15 → escort the purple orb to the APD TV, Bowie it, and enter the printed code.", ['pictures/insanity_mode/purple_orb.webp|Purple orb', 'pictures/insanity_mode/printer.webp|Printer']]
      ]}
    ]}
  ]
});

M({
  id: 'tdt', name: 'Tag der Toten', group: 'dlc', pack: 'DLC 4 · Aether',
  main: 'Salvation Lies Above',
  blurb: 'Call of the Dead reimagined. The Hermit, snowballs, challenge totems and the end of the Aether story.',
  img: 'https://mmmrkennedy.com/games/BO4/tag_der_toten/',
  guide: 'https://mmmrkennedy.com/games/BO4/tag_der_toten/tag_der_toten_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Tag_der_Toten',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Power, PaP & Zipline', note: "Rated 5/10 solo, 1:30–1:45 hours. Keep Samantha's Music Box all game once you have it.", steps: [
        ["Turn on the Docks and Bridge power.", ['pictures/power/power_docks.webp|Docks', 'pictures/power/power_boat.webp|Bridge']],
        ["Knock down the blue rock in the Lighthouse Approach cave and put it on the Hermit's pulley (Level 4). PaP moves where the lighthouse points.", ['pictures/pap/blue_rock_loc1.webp|Blue rock', 'pictures/pap/hermit_pulley.webp|Pulley']],
        ["Zipline Handle: crank from the Stern onto the Sun Deck box, crank from the Forecastle onto the Main Deck box, then see the Hermit.", ['pictures/zipline_handle/crank_stern_loc1.webp|Crank', 'pictures/zipline_handle/zipline_box_sun_deck.webp|Sun Deck box', 'pictures/zipline_handle/zipline_box_main_deck.webp|Main Deck box']],
        ["Turn on Human Infusion power.", ['pictures/power/power_human_infusion.webp|Human Infusion']]
      ]},
      { h: 'Totems, Music Box & dials', steps: [
        ["Talk to the Hermit to wake the totems and finish any two totem challenges.", ['pictures/challenge_totems/beach/totem_beach.webp|Totem']],
        ["Music Box: key cards from Decontamination and Specimen Storage → Security Lobby reader → Human Infusion vault (lockdown).", ['pictures/music_box/key_card_dryer.webp|Key card', 'pictures/music_box/keycard_reader.webp|Reader', 'pictures/music_box/music_box.webp|Music Box']],
        ["Get the dials from the Hermit and set the four Artifact Storage panels (spin until each dings).", ['pictures/main_ee/knowledge_is_power/dial_loc_highlighted.webp|Panels']]
      ]},
      { h: 'Acquire the Vessel', steps: [
        ["Turn on subtitles. Follow the Apothicon Blood's three riddles to the offerings (e.g. \"Where bread breaks\" = Gangway counter).", ['pictures/main_ee/acquire_the_vessel/offerings_locations/where_bread_breaks.webp|Example offering']],
        ["The last riddle names a wall: \"Where humans suffer\" Specimen Storage board, \"Inside an icy hall\" Ice Grotto board, \"Where Aether was gathered\" Geological Processing board, \"Where cages hang\" Boathouse map. Melee it.", ['pictures/main_ee/acquire_the_vessel/specimen_storage_board.webp|Specimen Storage', 'pictures/main_ee/acquire_the_vessel/boathouse_map.webp|Boathouse']],
        ["Dynamite the safe and take the Seal of Duality. (Dynamite: three flaming-Zombie parts, Gangway table.)", ['pictures/main_ee/acquire_the_vessel/seal_in_safe.webp|Seal', 'pictures/dynamite_bomb/flaming_zombie.webp|Flaming Zombie']]
      ], rec: [{ id: 'riddles', at: [0, 1], label: 'Riddles heard', type: 'text', ph: 'e.g. bread breaks, falls freeze…' }] },
      { h: 'Tame that which is Bonded', steps: [
        ["Seal on the barrel under the orb in Artifact Storage (don't touch the orb). Shoot the orb until it flashes.", ['pictures/main_ee/barrel_apothicon_blood.webp|Barrel']],
        ["Snowball each of the three small orbs blue and shoot it home; do the same with the ceiling orbs. Take the Seal.", ['pictures/main_ee/tame_that_which_is_bonded/small_orb.webp|Small orb']],
        ["Put the Seal on the Sunken Path campfire and throw the Music Box at it.", ['pictures/main_ee/campfire.webp|Campfire']]
      ]},
      { h: 'Knowledge Itself is for the Taking', steps: [
        ["Get two Soapstones from the Hermit. Light them on the Boathouse scorch marks with the Lighthouse trap; carry one to the Human Infusion terminal without touching water.", ['pictures/main_ee/knowledge_itself_is_for_the_taking/soapstones.webp|Soapstones', 'pictures/main_ee/knowledge_itself_is_for_the_taking/terminal.webp|Terminal']],
        ["Freeze the other under the Decontamination trap and bring it too. Put the fuse in the Lighthouse Station fuse box.", ['pictures/main_ee/knowledge_itself_is_for_the_taking/fuse.webp|Fuse', 'pictures/main_ee/knowledge_itself_is_for_the_taking/fuse_box.webp|Fuse box']],
        ["Wunderwaffe: icicle → Forecastle pot key → Specimen Storage safe Vril (charge it) → Hermit → crate on Level 4.", ['pictures/wunderwaffe/icicle_cave.webp|Icicle', 'pictures/wunderwaffe/glowing_vril.webp|Vril']],
        ["Wunderwaffe the two Facility red batteries, power three generators with Electric Zombie kills, and take the Elemental Shard.", ['pictures/main_ee/knowledge_itself_is_for_the_taking/facility_entrance_red_battery.webp|Red battery', 'pictures/main_ee/knowledge_itself_is_for_the_taking/generator_mx9.webp|Generator', 'pictures/main_ee/knowledge_itself_is_for_the_taking/elemental_shard.webp|Shard']]
      ]},
      { h: 'Merged, then Powered', steps: [
        ["End the round and repeat the orb step and campfire. Give the Seal to the Hermit (PaP is disabled) and survive the Lighthouse lockdown."],
        ["Charge the Seal in each of the four standard PaP spots as the lighthouse moves.", ['pictures/pap/hermit_pulley.webp|Pulley']],
        ["Repeat the orb step (orbs stay in the room) and the campfire once more."]
      ]},
      { h: 'Salvation Lies Above', steps: [
        ["Put the Seal in the Golden PaP on the iceberg (Sun Deck flinger) and charge it.", ['pictures/pap/golden_pap/flinger_sun_deck.webp|Sun Deck flinger']],
        ["Stay inside the bubble and charge the Seal at the Main Deck, Lighthouse Cove and Lighthouse Station, then follow it through the Facility to Human Infusion.", []],
        ["Give it to the Hermit, zip to the Sun Deck and pick it up at the Forecastle for the ending.", ['pictures/main_ee/the_infinite/seal_on_forecastle.webp|Seal on the Forecastle']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Thundergun & Tundragun', steps: [
        ["Thundergun: finish all five totems and open the Level 4 crate with the Hermit's key.", ['pictures/thundergun/reward_crate.webp|Crate']],
        ["Tundragun: fix the Boat flinger, then snowball the five targets in order within 1:45 (Loading Platform, Lagoon, Sun Deck, Lighthouse Level 3, Cargo Hold).", ['pictures/tundragun/target_loading_platform.webp|Target', 'pictures/tundragun/tundragun_crate.webp|Crate']]
      ]},
      { h: 'Songs', steps: [
        ["\"A Light from the Shore\": sickle, pitchfork and machete.", ['pictures/song_ee/sickle.webp|Sickle', 'pictures/song_ee/pitchfork.webp|Pitchfork', 'pictures/song_ee/machete.webp|Machete']],
        ["\"Reflections\": knock three times on the big Lighthouse Station door.", ['pictures/song_ee/large_door.webp|Door']]
      ]},
      { h: 'Yellow Snowballs', steps: [
        ["Snowball four sock puppets, charge the three blue campfires, drop the Spleen in Human Infusion and get it to the Hermit (dip in water to reset the timer).", ['pictures/yellow_snowballs/sock_sam_boat.webp|Sock puppet', 'pictures/yellow_snowballs/spleen.webp|Spleen']]
      ]},
      { h: 'Free perk & extras', steps: [
        ["Free perk: five figurines from the melted PaP spots into the Beach suitcase.", ['pictures/free_perk/perk_suitcase.webp|Suitcase']],
        ["Don't Freeze mode: freeze yourself in all ten pools, then press the Docks button.", ['pictures/dont_freeze/button.webp|Button']],
        ["George Romero glasses (500 points) in Lighthouse Station.", ['pictures/free_points/georges_glasses.webp|Glasses']]
      ]}
    ]}
  ]
});

  return { maps: MAPS };
})());
