EB.register('aw', (function () {
  const MAPS = [];
  function M(m) { MAPS.push(m); }
M({
  id: 'outbreak', name: 'Outbreak', group: 'dlc', pack: 'DLC 1 · Havoc',
  main: 'Game Over, Man!',
  blurb: 'An Atlas bio-lab overrun after the outbreak. Collect four access cards and push everyone to clearance 50.',
  img: 'https://mmmrkennedy.com/games/AW/outbreak_AW/',
  guide: 'https://mmmrkennedy.com/games/AW/outbreak_AW/outbreak_AW_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Outbreak_(Exo_Zombies)',
  settings: [
    { id: 'pl', label: 'Players', opts: [['1', 'Solo'], ['2', '2'], ['3', '3'], ['4', '4']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Black box', note: 'About 20–30 minutes solo. Each access card goes to its named character if they\'re in the lobby; otherwise anyone can take it. Cards can be done in any order.', steps: [
        ['Pick up the black box on the ground left of the crashed Warbird in spawn.', ['pictures/main_ee/black_box.webp|Black box']],
        ['Place it at the computer terminal on the right side of the Morgue.', ['pictures/main_ee/black_box_computer.webp|Morgue terminal']]
      ]},
      { h: 'Lilith\'s card', steps: [
        ['Buy the EM1 from the 3D printer, shoot the printer with it, then buy from it again. Take the access card (clearance shows bottom-left).', ['pictures/main_ee/lilith_card.webp|Lilith\'s card', 'pictures/main_ee/hud_number_light_grey.webp|Clearance number']]
      ]},
      { h: 'Decker\'s card', steps: [
        ['Solo: buy a trash chute but step back; when it closes, buy it again and jump in.', null, { pl: ['1'] }],
        ['Co-op: two players buy and enter two different trash chutes at the same time.', null, { pl: ['2', '3', '4'] }],
        ['In the incinerator, shoot the floor until the card flies up, then pick it up.', ['pictures/main_ee/decker_card.webp|Decker\'s card']]
      ]},
      { h: 'Oz\'s card', steps: [
        ['In Holding, shoot the metal bar under the middle cell until it disappears.', ['pictures/main_ee/oz_metal_bar.webp|Metal bar']],
        ['Everyone buys Exo Slam and slams the top of the outermost cell together. Take the card from the cell that rises.', ['pictures/main_ee/outermost_holding_cell.webp|Outer cell', 'pictures/main_ee/oz_card.webp|Oz\'s card']]
      ]},
      { h: 'Kahn\'s card', steps: [
        ['During an infected round, stay infected and use the four keypads in Administration: checkpoint door across from Exo Medic, across from the decon-shower door, end of the red hallway, 2nd-floor balcony left of the MP11.', ['pictures/main_ee/kahn_keypad_1.webp|Keypad 1', 'pictures/main_ee/kahn_keypad_2.webp|Keypad 2', 'pictures/main_ee/kahn_keypad_3.webp|Keypad 3', 'pictures/main_ee/kahn_keypad_4.webp|Keypad 4']],
        ['Take the card from the security checkpoint window.', ['pictures/main_ee/kahn_card.webp|Kahn\'s card']]
      ]},
      { h: 'Clearance 50', steps: [
        ['Pick up access cards zombies drop until every player is at clearance 49.', ['pictures/main_ee/keycards_on_ground.webp|Dropped cards']],
        ['Use the black-box terminal, then each player scans their own reader: Lilith (Morgue 2nd floor), Decker (halfway up the Exo Training stairs), Oz (left of Exo Health in Holding), Kahn (Administration across from the MP11).', ['pictures/main_ee/lilith_keypad.webp|Lilith', 'pictures/main_ee/decker_keypad.webp|Decker', 'pictures/main_ee/oz_keypad.webp|Oz', 'pictures/main_ee/kahn_keypad.webp|Kahn']],
        ['Use the Morgue terminal again ("Authorization successful"), then everyone uses the Exo Suit station together. Watch the outro from spawn. Reward: the Mk 25 upgrade station.', ['pictures/main_ee/exp_weapon_upgrade.webp|Mk 25 station']]
      ], rec: [{ id: 'clearance', at: 0, label: 'Clearance level per player', type: 'text', ph: 'e.g. me 32, Sam 28' }] }
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Gold Trophy (no-down ending)', note: 'Nobody can go down all game. The game ends when the quest does.', steps: [
        ['Do the main quest as normal, but from Kahn\'s card onward kill zombies only with melee. The clearance number must stay light grey — dark grey means restart.', ['pictures/main_ee/hud_number_light_grey.webp|Light grey (good)', 'pictures/main_ee/hud_number_dark_grey.webp|Dark grey (failed)']],
        ['Finish the quest. The Gold Trophy appears in Descent\'s reception area.', ['pictures/gold_trophy/outbreak_gold_trophy.webp|Gold Trophy']]
      ]},
      { h: 'Song: "Ride of the Valkyries"', steps: [
        ['Interact with three tools: wrench in the Administration wall by the upgrade station, bonesaw on the Exo Testing table, tool on the corpse table in Holding.', ['pictures/song_ee/tool_admin.webp|Administration', 'pictures/song_ee/tool_exo.webp|Exo Testing', 'pictures/song_ee/tool_holding.webp|Holding']]
      ]}
    ]}
  ]
});

M({
  id: 'infection', name: 'Infection', group: 'dlc', pack: 'DLC 2 · Ascendance',
  main: 'Meat Is Murder',
  blurb: 'A Burger Town and the sewers beneath it. Cook a cursed burger for Bubby the mascot robot.',
  img: 'https://mmmrkennedy.com/games/AW/infection/',
  guide: 'https://mmmrkennedy.com/games/AW/infection/infection_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Infection_(map)',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Season the pan', note: 'About 30–45 minutes solo. Needs the Magnetron from the 3D printer.', steps: [
        ['Get an Exo Suit in the sewers.', ['pictures/main_ee/exo_suit.webp|Exo Suit']],
        ['In spawn, climb the highest crate and exo-jump to the cracked rooftop for the golden frying pan.', ['pictures/main_ee/golden_pan.webp|Golden pan']],
        ['Turn four orange valves in the sewers (random spots — <a href="https://youtu.be/BBTSuV1gCxQ" target="_blank" rel="noopener">all 32 locations ↗</a>). A passage opens behind the sewer waterfall.', ['pictures/main_ee/valve_example.webp|Valves', 'pictures/main_ee/secret_passage.webp|Passage']],
        ['Put the pan on the altar inside and kill zombies in the lower area until it fills with blood. Take it back.', ['pictures/main_ee/altar.webp|Altar', 'pictures/main_ee/lower_area.webp|Kill area']],
        ['Place the pan on the stoves in the Burger Town kitchen.', ['pictures/main_ee/stoves.webp|Stoves']]
      ], rec: [{ id: 'valves', at: 2, label: 'Valves turned', type: 'multi', opts: ['Valve 1', 'Valve 2', 'Valve 3', 'Valve 4'] }] },
      { h: 'Make the burger', steps: [
        ['Bring four pieces of meat to the pan, one at a time — one each from Burger Town, the sewers, Value Voltage and Atlas Command (random spots).', ['pictures/main_ee/meat_example.webp|Meat', 'pictures/main_ee/meat/burger_town/left_of_the_grill.webp|Burger Town spot', 'pictures/main_ee/meat/sewers/mattress.webp|Sewers spot', 'pictures/main_ee/meat/value_voltage/main_counter.webp|Value Voltage spot', 'pictures/main_ee/meat/atlas_command/command_center.webp|Atlas Command spot']],
        ['Blast the meat with the Magnetron until it dings and becomes a patty.'],
        ['Kill a zombie in a Burger Town uniform for a bun, then interact with the patty to make the burger.', ['pictures/main_ee/bun.webp|Bun']],
        ['Picking up the burger infects you — cleanse yourself and it in the sewer decontamination zone (or the chute by Burger Town).'],
        ['Give the burger to Bubby. He says his battery is low.', ['pictures/main_ee/bubby.webp|Bubby']]
      ], rec: [{ id: 'meat', at: 0, label: 'Meat delivered', type: 'multi', opts: ['Burger Town', 'Sewers', 'Value Voltage', 'Atlas Command'] }] },
      { h: 'Charge Bubby', steps: [
        ['In Atlas Command, use the Bubby schematic screen in the mobile building, then run to the other command center by the generator and grab the battery from the box that opens.', ['pictures/main_ee/bubby_screen.webp|Schematic screen', 'pictures/main_ee/battery_box.webp|Battery box']],
        ['Charge it at the Value Voltage charging station (re-place it if zombies knock it out). When it turns red, give it to Bubby.', ['pictures/main_ee/charging_station.webp|Charging station']]
      ]},
      { h: 'Launch the rocket', steps: [
        ['Use Bubby\'s key on the hatch of the giant burger on the Burger Town roof. Inside, the screen says "Access Denied".', ['pictures/main_ee/hatch.webp|Hatch', 'pictures/main_ee/bubby_screen_burger.webp|Screen']],
        ['Run the Insta-Gator trap in the sewers; when the gator grabs a zombie, shoot it to blow it up. Take the zombie arm floating in the water.', ['pictures/main_ee/insta_gator_trap.webp|Insta-Gator', 'pictures/main_ee/arm.webp|Arm']],
        ['Use the arm on the fingerprint scanner upstairs in spawn; take the red tablet from the safe.', ['pictures/main_ee/fingerprint_reader.webp|Fingerprint scanner']],
        ['Use the red tablet at the burger\'s screen. You\'re kicked out, bombs drop and a rocket launches.'],
        ['Climb back in, take the blue tablet from under the screen and give it to Bubby. He fights for a round, then explodes into four power-ups.', ['pictures/main_ee/blue_tablet.webp|Blue tablet']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Toccata and Fugue in D minor"', steps: [
        ['Interact with three golden rockets: Value Voltage shelf facing the upgrade station, ground right of Exo Slam in Atlas Command, Burger Town rooftop fence by the big burger sign.', ['pictures/song_ee/voltage.webp|Value Voltage', 'pictures/song_ee/atlas.webp|Atlas Command', 'pictures/song_ee/burger_town.webp|Burger Town']]
      ]}
    ]}
  ]
});

M({
  id: 'carrier', name: 'Carrier', group: 'dlc', pack: 'DLC 3 · Supremacy',
  main: 'Flotsam & Jetsam',
  blurb: 'An Atlas aircraft carrier at sea. Four tablets, a fishing rod, a shark — and a vault to blow open.',
  img: 'https://mmmrkennedy.com/games/AW/carrier/',
  guide: 'https://mmmrkennedy.com/games/AW/carrier/carrier_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Carrier_(Exo_Zombies)',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Weapon disposal & fishing rod', note: 'About 1–1.5 hours solo. All tablets go into the vault door on the Gun Deck.', steps: [
        ['Buy teleport grenades in the Armory. On the Cargo Deck, run the Chompy trap and throw a teleport grenade into the small room before the wall closes.', ['pictures/main_ee/teleport_grenade.webp|Teleport grenades', 'pictures/main_ee/chompy.webp|Chompy trap', 'pictures/main_ee/chompy_room.webp|Hidden room']],
        ['Inside, activate the generator. This powers the weapon disposal machine and the special grenade disposal machine.', ['pictures/main_ee/chompy_power.webp|Generator', 'pictures/main_ee/weapon_disposal.webp|Weapon disposal']],
        ['Feed weapons to the weapon disposal machine; every second new weapon gives the next part in order: bottle, reel, line, hook. Attach each to the rod on the Gun Deck.', ['pictures/main_ee/fishing_rod.webp|Rod', 'pictures/main_ee/fishing_rod_finished.webp|Finished rod']]
      ], rec: [{ id: 'rodParts', at: 2, label: 'Rod parts attached', type: 'multi', opts: ['Bottle', 'Reel', 'Line', 'Hook'] }] },
      { h: 'Tablet 1 — grenade machine', steps: [
        ['Shoot a teleport grenade into the grenade disposal machine. Its icon cycles; throw in the grenade matching each icon in the right sequence:', ['pictures/main_ee/frag_grenade.webp|Dispenser']],
        ['Row 1: Distraction Drone, then Frag or Nano Swarm.', ['pictures/main_ee/distraction_drone.webp|Distraction Drone']],
        ['Row 2: Explosive Drone, Distraction Drone, Explosive Drone, then Frag or Nano Swarm.', ['pictures/main_ee/explosive_drone.webp|Explosive Drone']],
        ['Row 3: Explosive Drone, Nano Swarm, Explosive Drone, Distraction Drone, Explosive Drone, then Frag or Nano Swarm.', ['pictures/main_ee/nano_swarm.webp|Nano Swarm']],
        ['Take tablet 1 from the slot and put it in the vault door (wait for Oz to stop talking if it won\'t go in).', ['pictures/main_ee/tablet_1.webp|Tablet 1', 'pictures/main_ee/vault_door.webp|Vault door']]
      ]},
      { h: 'Tablet 2 — drunk laser maze', steps: [
        ['Open Cargo Deck → Lift → Moon Pool → Hangar. Drink from the bottle, then hit the keypad outside the Cargo Deck.', ['pictures/main_ee/bottle.webp|Bottle', 'pictures/main_ee/drunk_button.webp|Keypad']],
        ['Everyone gets through the lasers to the Hangar teleporter without touching one (touching resets; retry at the keypad). Take tablet 2 from the floor.', ['pictures/main_ee/hangar_teleporter.webp|Hangar teleporter', 'pictures/main_ee/tablet_2.webp|Tablet 2']]
      ]},
      { h: 'Tablet 3 — island dig', steps: [
        ['From round ~10, kill teleporting zombies or dogs for telefrag pieces and add each to the Bio Lab teleporter. 20 pieces fixes it.', ['pictures/main_ee/telefrag_piece.webp|Telefrag piece', 'pictures/main_ee/inactive_teleporter.webp|Bio Lab teleporter']],
        ['Fish a shovel with the rod, teleport to the island, and dig until you find the box with tablet 3. This also unlocks the Mk 25 station.', ['pictures/main_ee/tablet_3.webp|Tablet 3', 'pictures/main_ee/mk25_upgrade_machine.webp|Mk 25 station']]
      ], rec: [{ id: 'telefrag', at: 0, label: 'Telefrag pieces added (of 20)', type: 'nums', n: 1 }] },
      { h: 'Tablet 4 — Captain DJ\'s eye', steps: [
        ['Interact with Captain DJ\'s locker by Exo Medic in the Hangar. Shoot the empty treasure drone that appears (every 2–5 rounds) for a lever.', ['pictures/main_ee/captain_djs_locker.webp|Locker', 'pictures/main_ee/empty_drone.webp|Empty drone']],
        ['Put the lever in the Moon Pool electrical box. Kill zombies on the three floor grates to attract the shark.', ['pictures/main_ee/electrical_box.webp|Electrical box', 'pictures/main_ee/three_squares.webp|Grates', 'pictures/main_ee/shark.webp|Shark']],
        ['When the shark is under the middle circle, pay to drop the cage and ride it down. When the shark attacks, take its eyeball.'],
        ['Open the locker with the eyeball and take tablet 4.', ['pictures/main_ee/tablet_4.webp|Tablet 4']]
      ]},
      { h: 'Blow the vault', steps: [
        ['Keep feeding the weapon disposal machine until it gives C4, then use it on the vault door. Cutscene.', ['pictures/main_ee/c4.webp|C4']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Gold Trophy', steps: [
        ['After tablet 1 and the rod, fish up the red fish, then finish the laser maze in under a minute. The trophy appears in Descent\'s reception.', ['pictures/gold_trophy/carrier_gold_trophy.webp|Gold Trophy']]
      ]},
      { h: 'Song: "Mars, the Bringer of War"', steps: [
        ['Interact with three toy sharks: on Captain DJ\'s locker, a corner of the upper Gun Deck/Hangar area, the Lift crane platform above the Exo Reload wire.', ['pictures/song_ee/shark_hangar.webp|Hangar', 'pictures/song_ee/shark_gun_deck.webp|Gun Deck', 'pictures/song_ee/shark_lift.webp|Lift']]
      ]},
      { h: '"Mad Hops" achievement', steps: [
        ['Spawn the Moon Pool shark with kills on the grates. Exo-jump over it as it passes the grate nearest the Lift, then sprint and jump over each of the three tank sharks in the Lift.', ['pictures/mad_hops/last_square.webp|Last grate', 'pictures/mad_hops/three_sharks.webp|Tank sharks']]
      ]}
    ]}
  ]
});

M({
  id: 'descent', name: 'Descent', group: 'dlc', pack: 'DLC 4 · Reckoning',
  main: 'Reunion',
  blurb: 'An underwater Atlas facility. A chain of challenge rounds, Zombie Oz boss fights and the crew\'s reunion.',
  img: 'https://mmmrkennedy.com/games/AW/descent/',
  guide: 'https://mmmrkennedy.com/games/AW/descent/descent_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Descent_(Exo_Zombies)',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Open the terminal', note: 'About 1–1.5 hours solo. Zombie Oz boss fights happen on rounds 5 (teaser), 12 and 20 — see the Boss tab.', steps: [
        ['Get an Exo Suit in the Galleria.', ['pictures/main_ee/exo_suit.webp|Exo Suit']],
        ['On the Tidal Generator spiral stairs, shoot three valves until each shows a blue light: left of power, above the yellow door, right of the AMR9. A door opens halfway up.', ['pictures/main_ee/valve_power.webp|By power', 'pictures/main_ee/valve_yellow_door.webp|Yellow door', 'pictures/main_ee/valve_wallbuy.webp|By AMR9', 'pictures/main_ee/open_door.webp|Door opens']],
        ['Interact with the terminal inside twice ("Access Denied").', ['pictures/main_ee/terminal.webp|Terminal']]
      ]},
      { h: 'Reroute power & drone challenge', steps: [
        ['In the Lounge, hold interact at the underwater door for ~45 s (progress saves).', ['pictures/main_ee/depressurise_door.webp|Underwater door']],
        ['Get a Goliath suit scorestreak (random drop, usually rounds 8–12). In it, walk the underwater path, melee the floating zombie and flip the red switch blue.', ['pictures/main_ee/goliath_suit.webp|Goliath suit', 'pictures/main_ee/red_switch.webp|Red switch', 'pictures/main_ee/blue_switch.webp|Blue switch']],
        ['Next round: shoot five empty treasure drones before any escape or the round ends.', ['pictures/main_ee/empty_drone.webp|Drone', 'pictures/main_ee/challenge_success.webp|Success']]
      ]},
      { h: 'Capacitor & contact grenades', steps: [
        ['In the Galleria, let EMZs (electric zombies) hit you to charge the capacitor to 100% (~16 hits). Thin out other zombies first.', ['pictures/main_ee/emz.webp|EMZ', 'pictures/main_ee/capacitor.webp|Capacitor', 'pictures/main_ee/cap_progress.webp|Progress panel']],
        ['Next round: only contact grenades (unlimited). Can\'t fail.']
      ]},
      { h: 'Jumping plates & movement round', steps: [
        ['In spawn, exo-jump across the blue platforms to the last one. Clear nine patterns.', ['pictures/main_ee/jumping_plates.webp|Platforms']],
        ['Next round: moving drains points — don\'t hit zero.']
      ]},
      { h: 'Simon Says & friendly fire', steps: [
        ['At reception, use the glowing right monitor and repeat the color sequence on the four monitors.', ['pictures/main_ee/reception_desk.webp|Reception desk']],
        ['Next round: friendly fire is on. Finish it with no friendly-fire downs (solo spawns AI teammates).']
      ], rec: [{ id: 'simon', at: 0, label: 'Color sequence so far', type: 'text', ph: 'e.g. red, blue, blue, green' }] },
      { h: 'Number panel & MAHEM round', steps: [
        ['By the 2nd-floor Tidal Generator terminal, make the bottom numbers match the top. Left to right they count: zombies hit by Exo Slam, jumps, wall purchases (not ammo), kills. This also powers the Mk 25 station.', ['pictures/main_ee/number_display.webp|Number panel', 'pictures/main_ee/mk_25_upgrade_station.webp|Mk 25 station']],
        ['Next round: only a MAHEM Mk 25 with unlimited ammo. Finish the round with it.']
      ], rec: [{ id: 'targets', at: 0, label: 'Top-row targets (Slam · Jumps · Buys · Kills)', type: 'nums', n: 4 }] },
      { h: 'Oz\'s memories', steps: [
        ['Use the 2nd-floor terminal (machine turns red), then again (blue). You\'re pulled into a memory of Outbreak\'s spawn with the missing crew as AI.'],
        ['Survive two waves. You return, the quest ends and the map restarts in Double Feature mode.']
      ]}
    ]},
    { id: 'boss', label: 'Oz Fights', sections: [
      { h: 'Round 12 (13 if dog round)', steps: [
        ['Shoot Oz when his window opens until it explodes; he moves to another window.', ['pictures/oz_boss_fights/open_window.webp|Open window']],
        ['Each window adds a trap: lasers (disable your Exo), gas (use the center decon pad), electric floor. Destroy sentry guns and wall turrets fast.', ['pictures/oz_boss_fights/lasers.webp|Lasers', 'pictures/oz_boss_fights/gas.webp|Gas', 'pictures/oz_boss_fights/electric_floor.webp|Electric floor', 'pictures/oz_boss_fights/decon_pad.webp|Decon pad']],
        ['Win for Full Reload and a DNA Bomb.']
      ]},
      { h: 'Round 20 — Mutated Oz', steps: [
        ['Turn on the four corner generators to power the decon pad. When Oz stands on it, activate it to drop his shield, then shoot him. Repeat (about 4 times).', ['pictures/oz_boss_fights/mutated_oz.webp|Mutated Oz']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Gold Trophy (Double Feature)', steps: [
        ['After finishing Reunion once, use the Double Feature keypad behind you at spawn (black and white, no HUD, no revives).', ['pictures/gold_trophy/double_feature_keypad.webp|Keypad']],
        ['Reach round 20 and kill Mutated Oz. The trophy appears in reception next game.', ['pictures/gold_trophy/gold_trophy.webp|Gold Trophy']]
      ]},
      { h: 'Song: "Dies Irae"', steps: [
        ['Interact with three toy stingrays: right wall of the big drop from spawn (jump and interact), on a rock in the smashed Galleria aquarium right of the HBRA3, high above the teleporter across from Exo Health in the Tidal Generator.', ['pictures/song_ee/stingray_spawn.webp|Concierge', 'pictures/song_ee/stingray_aquarium.webp|Galleria', 'pictures/song_ee/stingray_tidal_zoomed_out.webp|Tidal Generator']]
      ]}
    ]}
  ]
});

  return { maps: MAPS };
})());
