EB.register('ww2', (function () {
  const MAPS = [];
  function M(m) { MAPS.push(m); }
M({
  id: 'reich', name: 'The Final Reich', group: 'base', pack: 'Base game',
  main: 'Fireworks / Dark Reunion',
  blurb: 'Mittelburg, Bavaria. Jolts instead of points, the Tesla Gun and the Panzermörder. Casual (Fireworks) and Hardcore (Dark Reunion) quests.',
  img: 'https://mmmrkennedy.com/games/WW2/the_final_reich/',
  guide: 'https://mmmrkennedy.com/games/WW2/the_final_reich/the_final_reich_guide',
  wiki: 'https://callofduty.fandom.com/wiki/The_Final_Reich',
  settings: [
    { id: 'path', label: 'Quest path', opts: [['casual', 'Fireworks (casual)'], ['hard', 'Dark Reunion (hardcore)']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Power & Salt Mine', note: "Fireworks: 5/10 solo, 40–55 min. Dark Reunion: 6/10 solo, 1.5–1.75 hours. Check the Scoreboard notebook icon for your current step.", steps: [
        ["Hold interact on the three Village Square valves until each dial is green at 60 (letting go resets it): behind the Armour station, left of the Bunker entrance, and by the Riverside Pub entrance.", ['pictures/power/valve_armour.webp|Armour valve', 'pictures/power/valve_bunker.webp|Bunker valve', 'pictures/power/valve_riverside.webp|Riverside valve']],
        ["Light the Pilot Light in the middle of Village Square, drop into the hole and turn on the generator.", ['pictures/power/pilot_light.webp|Pilot Light', 'pictures/power/power.webp|Generator']],
        ["Open the Bunker, then the Morgue and Laboratory. Flip the Laboratory (upper back) and Morgue (by the STG-44) switches within about a minute of each other.", ['pictures/power/switch_lab.webp|Lab switch', 'pictures/power/switch_morgue.webp|Morgue switch']],
        ["Open the Salt Mine door.", ['pictures/power/salt_mine_door.webp|Salt Mine door']]
      ]},
      { h: 'Pack-a-Punch', steps: [
        ["Press the red button in the Sewers by the MP-40 to activate the three sewer pipes.", ['pictures/pap/red_button.webp|Red button']],
        ["Ride each pipe (Tower left of the Waffe 28, Command Room by the Grease Gun, Laboratory by the Electric Trap) and press the red button in each side room. The cage rises.", ['pictures/pap/pipe_tower.webp|Tower pipe', 'pictures/pap/pipe_lab.webp|Lab pipe', 'pictures/pap/red_button_side_room.webp|Side-room button']]
      ]},
      { h: 'Tesla Gun', steps: [
        ["Turn the crank in the Command Room until it stops.", ['pictures/tesla_gun/crank.webp|Crank']],
        ["In the Emperor's Chamber, use the Hilt machine and kill Zombies in the circle until the Geistkraft device rises.", ['pictures/tesla_gun/hilt.webp|Hilt machine']],
        ["Press the Command Room upper-platform button. Kill Zombies in the red circle to keep the device moving to the Laboratory generator; grab the part it ejects.", ['pictures/tesla_gun/tesla_button.webp|Button', 'pictures/tesla_gun/tesla_part_lab.webp|Lab part']],
        ["Keep it moving to the Morgue generator and take the second part (~30 s).", ['pictures/tesla_gun/tesla_part_morgue.webp|Morgue part']],
        ["Back in the Command Room, kill the Brenner, place both parts at the build spot and take the Tesla Gun.", ['pictures/tesla_gun/tesla_build_loc.webp|Build spot']]
      ]},
      { h: 'The Right Hand of God', steps: [
        ["Use the Power Grid machine behind the Tesla build spot. One light lights in each of four columns (red, green or blue) — note them.", ['pictures/main_ee_casual/power_grid.webp|Power Grid', 'pictures/main_ee_casual/grid_lights.webp|Grid lights']],
        ["Set the four power boxes to those colours in order (Rot = red, Grün = green, Blau = blue): Command Room, Sewers by the fire trap, Sewers far end toward Riverside, Pub by the Tower door.", ['pictures/main_ee_casual/box_command_room.webp|Box 1', 'pictures/main_ee_casual/box_sewers_1.webp|Box 2', 'pictures/main_ee_casual/box_pub.webp|Box 4']],
        ["Pull the lever under the Tower and defend the lightning rod for ~70 s, then the two levers on either side. (Cheese: activate, run to the Bunker door, use Frontline when the rod's health goes red.)", ['pictures/main_ee_casual/lightning_rod.webp|Lightning rod', 'pictures/main_ee_casual/two_levers.webp|Other levers']],
        ["Interact with the Right Hand of God (the statue's left hand) in the Emperor's Chamber.", ['pictures/main_ee_casual/right_hand_of_god.webp|Right Hand']]
      ], rec: [{ id: 'grid', at: [0, 1], label: 'Grid colours, left to right', type: 'seq', n: 4, opts: ['Red', 'Green', 'Blue'] }] },
      { h: 'Tesla upgrades (Dark Reunion)', w: { path: ['hard'] }, steps: [
        ["Get all four Tesla upgrades — Bloodthirst, Reaper, Hurricane, Midnight (Tesla tab). Start the batteries early; they can't finish until the Zeppelin appears."]
      ]},
      { h: 'The Left Hand of God', steps: [
        ["Shoot one of the Zeppelin's four yellow lights until it drops a generator. Watch where it lands.", ['pictures/main_ee_casual/zeppelin_lights.webp|Zeppelin lights', 'pictures/main_ee_casual/generator.webp|Generator']],
        ["Kill Zombies by the generator until it explodes into a battery. Take it to the Left Hand of God (the statue's right hand).", ['pictures/main_ee_casual/left_hand_of_god.webp|Left Hand']],
        ["Do it two more times (on the third, shoot the lights again for a new generator), then interact with the Left Hand."]
      ]},
      { h: 'The Voice of God', steps: [
        ["Shine a Brenner head's purple light (aim) on the four paintings: Pub 2nd floor, Courtyard S-Mine area, Sewers by the Riverside door, Morgue spike-trap room. Note each bird's Roman numeral.", ['pictures/main_ee_casual/painting_pub.webp|Pub', 'pictures/main_ee_casual/painting_courtyard.webp|Courtyard', 'pictures/main_ee_casual/painting_morgue.webp|Morgue']],
        ["Set the four pillars on the machine in front of Barbarossa to match, then press the big red button.", ['pictures/main_ee_casual/voice_of_god.webp|Voice of God']]
      ], rec: [{ id: 'birds', at: [0, 1], label: 'Bird → numeral', type: 'text', ph: 'e.g. eagle IV, owl II…' }] },
      { h: 'Second set of voices (Dark Reunion)', w: { path: ['hard'] }, steps: [
        ["Shoot down the red, yellow and green keepsakes from the rooftops and pick them up.", ['pictures/main_ee_hardcore/keepsake_locations/red_roof.webp|Red', 'pictures/main_ee_hardcore/keepsake_locations/yellow_pub.webp|Yellow', 'pictures/main_ee_hardcore/keepsake_locations/green_tower.webp|Green']],
        ["Find the yellow and red code machines; each shows a number on a coloured bow. (Green is optional: ride the Pilot Trap and hold interact on the wall — or just guess it.)", ['pictures/main_ee_hardcore/enigma_locations/yellow_spawn.webp|Yellow machine', 'pictures/main_ee_hardcore/enigma_locations/red_command_room.webp|Red machine']],
        ["Put the keepsakes on the wall left of the Bunker door and spin each to its number (top = 0/12, like a clock). Take the Record from the drawer.", ['pictures/main_ee_hardcore/keepsake_wall.webp|Keepsake wall', 'pictures/main_ee_hardcore/drawer.webp|Drawer']],
        ["Spin the Riverside Weather Vane and shoot the tiny yellow button it points at. When the water wheel stops, Tesla the coils.", ['pictures/main_ee_hardcore/weather_vane_init.webp|Weather vane', 'pictures/main_ee_hardcore/weather_vane/button_1.webp|Button example', 'pictures/main_ee_hardcore/water_wheel_coils.webp|Coils']],
        ["Get the Red Talon (Side Eggs tab). Play the Record on the Pub 2nd-floor player and get 25–30 Red Talon kills in one play of the song.", ['pictures/main_ee_hardcore/record_player.webp|Record player']],
        ["Count the green flashes on the player (four sets, each ending in red) and enter the four numbers into the Voice of God machine.", ['pictures/main_ee_hardcore/light_on_player.webp|Player light', 'pictures/main_ee_hardcore/second_set_of_voices_order.webp|Entry order']],
        ["Shoot the chandelier above the Hilt with each of the four upgraded Tesla Guns to get the Rabenherz.", ['pictures/main_ee_hardcore/chandelier.webp|Chandelier']]
      ], rec: [
        { id: 'keepsake', at: [1, 2], label: 'Codes: yellow · red · green', type: 'nums', n: 3 },
        { id: 'flashes', at: 5, label: 'Green flashes per set', type: 'nums', n: 4 }
      ] },
      { h: 'The Hilt & Panzermörder', steps: [
        ["Tesla the energy orb around the Hilt, pick it up and interact to start the boss.", ['pictures/main_ee_casual/energy_orb.webp|Energy orb']],
        ["Shoot down a Zeppelin generator and charge it. Stun the Panzermörder next to the battery and attach it while he kneels (shorter stun on Hardcore)."],
        ["He leaves and Zombies spawn; wait for him to return. Attach three batteries to win."],
        ["Dark Reunion only: escort the revived Klaus to the Pilot Trap (infinite ammo while you stay near him).", [], { path: ['hard'] }]
      ]}
    ]},
    { id: 'tesla', label: 'Tesla', sections: [
      { h: 'Bloodthirst (red)', steps: [
        ["Tesla the Riverside streetlamp by the M1928, then shoot the spark lamp to lamp with a normal gun through all 27 lamps to the Morgue. Too slow and it goes out — restart next round.", ['pictures/tesla_gun/bloodthirst/lamps/lamp_1.webp|Lamp 1', 'pictures/tesla_gun/bloodthirst/lamps/lamp_15.webp|Lamp 15', 'pictures/tesla_gun/bloodthirst/lamps/lamp_27.webp|Lamp 27']],
        ["Put the battery in the charger by the spike trap. Charge it 3 times: ~5 Pest kills in one trap use each.", ['pictures/tesla_gun/bloodthirst/charging_station.webp|Charger']],
        ["After the Zeppelin appears, put it in the Morgue machine's left slot and defend it. Take the part to the Tesla pedestal.", ['pictures/tesla_gun/bloodthirst/left_slot.webp|Left slot', 'pictures/tesla_gun/bloodthirst/bloodthirst_build_loc.webp|Pedestal']]
      ], rec: [{ id: 'lamp', at: 0, label: 'Last lamp reached', type: 'nums', n: 1 }] },
      { h: 'Reaper (orange)', steps: [
        ["Lure a Wüstling into the Sewers metal door left of the Pilot Light hatch; put the battery in the charger there.", ['pictures/tesla_gun/reaper/metal_door.webp|Metal door', 'pictures/tesla_gun/reaper/battery_charger.webp|Charger']],
        ["Charge it twice: two Bombers killed in one saw-trap use each (shoot the bomb carrier's head)."],
        ["After the Zeppelin, Morgue machine right slot, defend, then the pedestal.", ['pictures/tesla_gun/reaper/right_slot.webp|Right slot', 'pictures/tesla_gun/reaper/reaper_build_loc.webp|Pedestal']]
      ]},
      { h: 'Hurricane (purple)', steps: [
        ["Blow a Bomber up at the metal door mid-staircase left of Schildblitz in the Laboratory. Put the battery in the Electric Trap charger.", ['pictures/tesla_gun/hurricane/metal_door.webp|Metal door', 'pictures/tesla_gun/hurricane/battery_charger.webp|Charger']],
        ["Charge it twice: two Wüstlings killed in one Electric Trap use each."],
        ["After the Zeppelin, Laboratory machine right slot, defend, then the pedestal.", ['pictures/tesla_gun/hurricane/right_slot.webp|Right slot', 'pictures/tesla_gun/hurricane/hurricane_build_loc.webp|Pedestal']]
      ]},
      { h: 'Midnight (green)', steps: [
        ["Scan the Courtyard statue left of the Lee Enfield with a Brenner head, Tesla the battery down and put it in the charger.", ['pictures/tesla_gun/midnight/statue.webp|Statue', 'pictures/tesla_gun/midnight/charging_station.webp|Charger']],
        ["Charge it with groups of ~10 kills in one S-Mine trap use."],
        ["After the Zeppelin, Laboratory machine left slot, defend, then the pedestal.", ['pictures/tesla_gun/midnight/battery_slot.webp|Left slot', 'pictures/tesla_gun/midnight/midnight_build_loc.webp|Pedestal']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Red Talon sword', steps: [
        ["After the lightning rods (Zeppelin appears), flip the Morgue and Laboratory power switches, then the switch right of the Salt Mine door to reveal coils.", ['pictures/red_talon_sword/switch.webp|Switch', 'pictures/red_talon_sword/coils.webp|Coils']],
        ["With a Brenner head, Tesla the coils to kill the lights for a couple of minutes.",],
        ["Scan the Laboratory safe and set every dial to the fingerprint (red numbers are red herrings). Repeat at the Morgue safe for the second coin piece.", ['pictures/red_talon_sword/lab_safe.webp|Lab safe', 'pictures/red_talon_sword/morgue_safe.webp|Morgue safe']],
        ["Put both pieces in the hole at Barbarossa's base and take the Red Talon.", ['pictures/red_talon_sword/sword_pickup_loc.webp|Pickup']]
      ]},
      { h: 'The Classic (PPSh-41)', steps: [
        ["Drop Jolts into the four bowls: Morgue by the Tesla machine, Village Square left of the SVT-40, Riverside sandbags, Pub upstairs by Kugelblitz. It joins the Mystery Box.", ['pictures/the_classic/morgue_bowl.webp|Morgue', 'pictures/the_classic/village_bowl.webp|Village', 'pictures/the_classic/pub_bowl.webp|Pub']]
      ]},
      { h: 'Dr. Straub ("Lurking Around")', steps: [
        ["Open the Bunker, Morgue or Courtyard door, then look for Straub peeking from spots like Riverside windows, the Laboratory and Morgue spawns. Shoot him before he leaves.", ['pictures/dr_straub/dr_straub_example.webp|Straub', 'pictures/dr_straub/riverside_upper_window.webp|Riverside window', 'pictures/dr_straub/morgue_bar.webp|Morgue']]
      ]}
    ]}
  ]
});

M({
  id: 'groesten', name: 'Groesten Haus', group: 'base', pack: 'Base game',
  main: null,
  blurb: 'A small survival map in a house. No main quest — an Upgraded Mystery Box secret and lanterns.',
  img: 'https://mmmrkennedy.com/games/WW2/groesten_haus/',
  guide: 'https://mmmrkennedy.com/games/WW2/groesten_haus/groesten_haus_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Groesten_Haus',
  settings: [],
  tabs: [
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Mystery Box room (10 lanterns)', steps: [
        ["Downstairs: shoot six lanterns — bottom of the stairs, on a truck hood outside, the middle column, bottom of the Kitchen stairs, above the Kitchen table, and on the cart outside the Kitchen window. Each glows purple with a caw.", ['pictures/mystery_box/mp40_loc1.webp|By the MP-40', 'pictures/mystery_box/kitchen_loc2.webp|Kitchen', 'pictures/mystery_box/purple_glow.webp|Purple glow']],
        ["Upstairs: four more — above the top of the stairs, across from the Blitz machine, on a chair and on the desk by the Combat Shotgun.", ['pictures/mystery_box/blitz_loc1.webp|By Blitz', 'pictures/mystery_box/shotgun_loc1.webp|Chair', 'pictures/mystery_box/shotgun_loc2.webp|Desk']]
      ], rec: [{ id: 'lanterns', at: [0, 1], label: 'Lanterns shot (of 10)', type: 'nums', n: 1 }] },
      { h: 'Pack-a-Punched Mystery Box', steps: [
        ["Get Jack-in-the-Boxes from the box and blow up the metal square on the beam above the Blitz-side stairs.", ['pictures/pap_box/metal_square.webp|Metal square']],
        ["Pay the piano next to the box room 10,000 Jolts. Every box weapon is now Pack-a-Punched.", ['pictures/pap_box/piano.webp|Piano']]
      ]}
    ]}
  ]
});

M({
  id: 'shore', name: 'The Darkest Shore', group: 'dlc', pack: 'DLC 1 · The Resistance',
  main: 'Making History',
  blurb: 'A Norwegian island in the fog. The Ripsaw, Meuchlers, rituals for the Sons of Nerthus and four Meistermeuchlers.',
  img: 'https://mmmrkennedy.com/games/WW2/the_darkest_shore/',
  guide: 'https://mmmrkennedy.com/games/WW2/the_darkest_shore/the_darkest_shore_guide',
  wiki: 'https://callofduty.fandom.com/wiki/The_Darkest_Shore',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Power, Pack-a-Punch & Ripsaw', note: "Rated 9/10 solo, 1:10–1:30 hours. Bring Frag Grenades or the N° 74 ST.", steps: [
        ["Turn on the power switch in the U-Boat Pens.", ['pictures/power/power.webp|Power']],
        ["Flip the minecart power in the Artillery Bunker. Take three minecart trips (Graben → Strand → U-Boot Höhle → Graben), grabbing the green battery halfway through each.", ['pictures/pap/minecart_power.webp|Minecart power', 'pictures/pap/battery_1.webp|Battery', 'pictures/pap/minecart_switch.webp|Station switch']],
        ["Put all three batteries in the fuse machine down the slope from Double Tap in Bunker 3. PaP rises.", ['pictures/pap/pap_fuse_box.webp|Fuse machine']],
        ["Ripsaw: blade right of the MP-40 in Bunker 3 + handle in the Artillery Bunker (bunk beds, by the Armour, or by Faustblitz). Build it at the U-Boat Pens workbench (2,500).", ['pictures/ripsaw/saw_blade.webp|Blade', 'pictures/ripsaw/handle_beds.webp|Handle', 'pictures/ripsaw/workbench.webp|Workbench']],
        ["Ranged upgrade: rip a charged spine (heavy melee, then interact), put it in the Ripsaw at the workbench, get 25 kills nearby, then pay 500.", ['pictures/ripsaw/ranged_ripsaw/spine_hud.webp|Spine charge on HUD']]
      ]},
      { h: 'Corpse Gate', steps: [
        ["Shoot the head off the hanging corpse in Bunker 3 and put it on the headless Corpse Gate in the U-Boat Pens.", ['pictures/main_ee/hanging_man.webp|Hanging corpse', 'pictures/main_ee/corpse_gate.webp|Corpse Gate']],
        ["Get ~10 kills by the gate. You're locked in with fire tiles — shut off the three gas valves as each one's tile goes dark.", ['pictures/main_ee/gas_valve.webp|Gas valve']],
        ["Interact with the gate to open the Freezer. Save the Brenner's Max Ammo (it doesn't despawn) for the boss."]
      ]},
      { h: 'Planes & the secret room', steps: [
        ["Use the Anti-Air guns to shoot down planes until \"Shot down the German Fighter Planes\" (about three waves).", ['pictures/main_ee/aa_gun.webp|AA gun']],
        ["On a round's first minecart trip from Bunker 1 to the Beach, let a Bomber on the tracks blow the cracked wall halfway.", ['pictures/main_ee/wall_in_minecart.webp|Cracked wall']],
        ["Take the Monk Head from beside the Ancient Door and put it on the left Freezer machine.", ['pictures/main_ee/monk_head.webp|Monk Head', 'pictures/main_ee/monk_head_machine.webp|Freezer machine']],
        ["Son 1: AA gun on the Overlook → shoot the cliff rock; it lands on the Beach.", ['pictures/main_ee/son1_rock.webp|Rock', 'pictures/main_ee/son1.webp|Son 1']],
        ["Son 2: give the Monk a normal Zombie spine; defend the friendly Zombie that wades out and returns with the statue.", ['pictures/main_ee/son2.webp|Son 2']],
        ["Son 3: Ripsaw the mossy rocks high on the walls until one drops it.", ['pictures/main_ee/son_rocks/beach_quick.webp|Beach rock', 'pictures/main_ee/son_rocks/bluffs_svt_40.webp|Bluffs rock', 'pictures/main_ee/son_rocks/bunker_3_pap.webp|Bunker 3 rock']],
        ["Place the three Sons in the Ancient Door to open it."]
      ]},
      { h: 'Ritual sacrifices (any order)', steps: [
        ["Meuchler: give the Monk a charged Meuchler spine. In the fog, find and shoot the friendly Meuchler before Zombies kill it — three times. Then everyone enters the room; kill the Meuchler and take its head.", ['pictures/main_ee/meuchler_beach.webp|Beach spot', 'pictures/main_ee/meuchler_pap.webp|PaP spot', 'pictures/main_ee/meuchler_bluffs.webp|Bluffs spot']],
        ["Wüstling: give it a Wüstling spine. Lead the friendly Wüstling to Kugelblitz → Faustblitz → Laufenblitz → Lebenblitz (shoot it to make it follow only you). Then kill the three Wüstlings in the room for a head.", ['pictures/main_ee/double_tap.webp|Kugelblitz', 'pictures/main_ee/melee_perk.webp|Faustblitz', 'pictures/main_ee/wustling_hole_in_wall.webp|Exit hole']],
        ["Pest: grenade the seven fuse boxes open to show the coils, then give it a Pest spine.", ['pictures/main_ee/pest_ritual/pest_panels/panel_power.webp|By power', 'pictures/main_ee/pest_ritual/pest_panels/panel_bunker_3.webp|Bunker 3', 'pictures/main_ee/pest_ritual/pest_panels/panel_mystery_box.webp|By the box']],
        ["Charge the Pest five times by bouncing a Ripsaw blade off the right coil into it (wait for it to reach each spot). Then kill the Pests in the room for a head.", ['pictures/main_ee/pest_ritual/pest_loc_1.webp|Charge 1 Pest', 'pictures/main_ee/pest_ritual/player_loc_1.webp|Charge 1 you', 'pictures/main_ee/pest_ritual/panel_1.webp|Charge 1 coil']]
      ], rec: [{ id: 'pestc', at: 3, label: 'Pest charges done (of 5)', type: 'nums', n: 1 }] },
      { h: 'Hooks & Pommel', steps: [
        ["Hang the three ritual heads and the Monk Head on the room's four ceiling hooks.", ['pictures/main_ee/hooks.webp|Hooks']],
        ["Kill 50–75 Zombies inside until the statue's skull explodes. Take the Pommel of Barbarossa.", ['pictures/main_ee/pommel.webp|Pommel']]
      ]},
      { h: 'Bomber escort & destroyers', steps: [
        ["Use the right Freezer machine and escort the friendly Bomber to the Artillery Bunker. Charge its battery with kills (~5 per cannon shot).", ['pictures/main_ee/bomber_spawner.webp|Bomber spawner']],
        ["Grab the radio part by the corpse in the Bunkers and Ripsaw the hanging man's arm above Electric Cherry for the radio.", ['pictures/main_ee/radio_corpse.webp|Radio part', 'pictures/main_ee/radio_pilot.webp|Hanging man']],
        ["Use the Overlook radio, then sink both destroyers with the cannon (left = elevation, right = angle, middle = fire).", ['pictures/main_ee/radio_mystery_box.webp|Radio', 'pictures/main_ee/cannon_aiming_guide.webp|Aiming guide', 'pictures/main_ee/cannon_fire_button.webp|Fire button']],
        ["Throw the Pommel at the radio, take any Jack-in-the-Boxes, then everyone interacts at once to start the boss."]
      ]},
      { h: 'Meistermeuchlers', steps: [
        ["Phase 1, Beach (fog): KO each of the four one at a time until hitmarkers stop. Ride the minecart (Max Ammo)."],
        ["Phase 2, U-Boat Pens: two at a time with fire tiles. Refill armour by the Ripsaw table, then minecart."],
        ["Phase 3, Bunkers (fog): three at a time. Buy armour before the minecart — last chance."],
        ["Phase 4, Beach: all four at once, and this time they die. The cutscene follows."]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'R.I.P. Saw (Pack-a-Punch the Ripsaw)', steps: [
        ["Find the six broken dial machines and note each dial; 1st and 4th are + or −. The Lee Enfield scope helps.", ['pictures/ripsaw/rip_saw_upgrade/dial_beach.webp|Beach Passage', 'pictures/ripsaw/rip_saw_upgrade/dial_locker.webp|Locker', 'pictures/ripsaw/rip_saw_upgrade/dial_cart.webp|Cart']],
        ["After the Bomber escort charges the cannon, enter the dial values as elevation and angle and fire. Take the fuse from the pillar under the barrel.", ['pictures/main_ee/cannon_elevation.webp|Elevation', 'pictures/main_ee/cannon_angle.webp|Angle', 'pictures/ripsaw/rip_saw_upgrade/fuse.webp|Fuse']]
      ], rec: [{ id: 'dials', at: [0, 1], label: 'Dials 1–6', type: 'text', ph: 'e.g. + 4 2 − 7 1' }] },
      { h: 'The Classic (PPSh-41)', steps: [
        ["During the Bomber escort, drop 1,000 Jolts in its path for it to collect. The Classic joins the box."]
      ]},
      { h: 'HI beams (free Jolt)', steps: [
        ["Through the U-Boat Pens spawn window by the minecart, shoot the left I-beam ~8 times until it spells HI.", ['pictures/hi_beam/I_beams.webp|I-beams']]
      ]},
      { h: 'Dr. Straub ("Still Lurking")', steps: [
        ["Look for Straub in spots like the Beach Passage spawn, on the submarine or the Artillery Bunker roof and shoot him.", ['pictures/dr_straub/dr_straub_example.webp|Straub', 'pictures/dr_straub/uboat_pens_on_sub.webp|On the sub', 'pictures/dr_straub/artillery_bunker_on_roof.webp|Roof']]
      ]},
      { h: 'Boss-fight Jack-in-the-Box', steps: [
        ["Throw a Jack-in-the-Box into the hole of the wooden box behind the Whale. In the boss fight it becomes a big damage bomb.", ['pictures/jack_box_boss_fight/wooden_box.webp|Wooden box']]
      ]}
    ]}
  ]
});

M({
  id: 'throne', name: 'The Shadowed Throne', group: 'dlc', pack: 'DLC 2 · The War Machine',
  main: 'Stadtjäger Down',
  blurb: 'Bombed-out Berlin. The Wunderbuss, Sizzlers, three special melee weapons and a Zeppelin fight with the Stadtjäger.',
  img: 'https://mmmrkennedy.com/games/WW2/the_shadowed_throne/',
  guide: 'https://mmmrkennedy.com/games/WW2/the_shadowed_throne/the_shadowed_throne_guide',
  wiki: 'https://callofduty.fandom.com/wiki/The_Shadowed_Throne',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Wunderbuss', note: "Rated 8/10, about 1–1.25 hours solo. Bring a throwable explosive (Frag, Sticky or Satchel) for Pack-a-Punch. Puzzle solvers: mmmrkennedy.com → The Shadowed Throne solvers.", steps: [
        ["Read the code on top of the Main Street radio (two letters, dash, number).", ['pictures/wunderbuss/radio_code.webp|Radio code', 'pictures/wunderbuss/radio.webp|Radio']],
        ["In the Church, use the papers right of the Mystery Box: find the pin on the map, then look up the band and frequency for your code. Dial both into the radio (left dial first; ±1–2 is fine).", ['pictures/wunderbuss/papers_church.webp|Church papers', 'pictures/wunderbuss/frequencies.webp|Frequency list']],
        ["Shoot the lock on the wooden box left of the Museum door, then the box, to fire the flare. The Zeppelin starts making Sizzlers.", ['pictures/wunderbuss/wooden_box.webp|Wooden box']],
        ["Melee a Sizzler for a Geistbolt. Grab the battery (Museum by the Armour or the melee perk, or Cabaret by the M1927).", ['pictures/wunderbuss/battery_armour.webp|Museum', 'pictures/wunderbuss/battery_m1927.webp|Cabaret']],
        ["Put it in the fence generator in the Apartments basement, grab the battery inside, place the parts on the table and take the Wunderbuss. Shoot the generator to get out.", ['pictures/wunderbuss/generator.webp|Generator', 'pictures/wunderbuss/wunderbuss.webp|Wunderbuss']]
      ], rec: [{ id: 'radio', at: [0, 1], label: 'Radio code → dial numbers', type: 'text', ph: 'e.g. GK-4 → 12, 37' }] },
      { h: 'Pack-a-Punch', steps: [
        ["Grenade open the panel left of the Waffe 28 (Destroyed Building) and the barred panel right of the Destroyed Building door (Underbelly).", ['pictures/pap/panel_waffe.webp|Panel 1', 'pictures/pap/panel_spawn.webp|Panel 2']],
        ["Shoot each with 10 Wunderbuss shots. The elevator drops with PaP.", ['pictures/pap/pap.webp|PaP']]
      ]},
      { h: "Smuggler's Bat", steps: [
        ["Wunderbuss the cash register in the Apartments basement; note the number picture under the drawer and the ammo type on the table.", ['pictures/smugglers_bat/cash_pic.webp|Number picture', 'pictures/smugglers_bat/ammo_combined.webp|Ammo types']],
        ["Dial the numbers into the radio. At the Plaza sewer panel by the Cabaret back door, give the Smuggler a matching gun (shotgun, pistol/SMG or rifle; a PaP'd gun changes the ending).", ['pictures/smugglers_bat/sawed_off_shotgun.webp|Shotgun', 'pictures/smugglers_bat/mp40.webp|MP40', 'pictures/smugglers_bat/fg_42.webp|FG42']],
        ["Wait two full rounds, then pay 1,500 at the Main Street sewer panel in front of the Cabaret.", ['pictures/smugglers_bat/sewer_main_street.webp|Main Street panel']],
        ["After ~45 s, melee the wooden door in the Wunderbuss room three times and take the bat.", ['pictures/smugglers_bat/wooden_door.webp|Wooden door', 'pictures/smugglers_bat/bat.webp|Bat']]
      ], rec: [{ id: 'smug', at: [0, 1], label: 'Radio numbers · ammo type', type: 'text', ph: 'e.g. 23, 8 · shotgun' }] },
      { h: "Dancer's Dagger", steps: [
        ["Take the woman's painting from the Apartments and set it in front of the Cabaret projector. Shoot the reel off the railing and load it.", ['pictures/dancers_dagger/painting.webp|Painting', 'pictures/dancers_dagger/projector.webp|Projector', 'pictures/dancers_dagger/reel_railing.webp|Reel']],
        ["Wunderbuss the projector. It lights up an area — fill that area's Clown Doll with 1–9 kills for a number. Four clowns in all.", ['pictures/dancers_dagger/clowns/church.webp|Church clown', 'pictures/dancers_dagger/clowns/museum.webp|Museum clown', 'pictures/dancers_dagger/clowns/spawn.webp|Spawn clown']],
        ["Open the Apartments safe: three clockwise turns, then right to #1, left to #2, right to #3, left to #4. Take the dagger.", ['pictures/dancers_dagger/safe.webp|Safe', 'pictures/dancers_dagger/dagger.webp|Dagger']]
      ], rec: [{ id: 'clowns', at: [1, 2], label: 'Safe numbers', type: 'nums', n: 4 }] },
      { h: 'Nazi Axe', steps: [
        ["Find two numbers etched somewhere (Apartments elevator, Cabaret mirrors cabinet, below the Museum M1 Garand…) and dial them into the radio for Morse code.", ['pictures/nazi_axe/morse_elevator.webp|Elevator', 'pictures/nazi_axe/morse_mirrors.webp|Mirrors', 'pictures/nazi_axe/morse_m1_garand.webp|M1 Garand']],
        ["Take the magnifying glass from the Cabaret couch, move it on the Church wall map to the Morse location, and take the Bowl from the cabinet.", ['pictures/nazi_axe/mag_glass.webp|Magnifying glass', 'pictures/nazi_axe/morse_map.webp|Map spots', 'pictures/nazi_axe/cabinet_bowl.webp|Bowl']],
        ["Put the Bowl on the Museum top-floor scale. Melee a Sizzler beside an Armour stand, buy Armour to take the head, and put it in the Bowl.", ['pictures/nazi_axe/scale.webp|Scale', 'pictures/nazi_axe/sizzler_head.webp|Sizzler head']],
        ["Get 10–15 kills by the rabbit model; take the Axe from the drawer.", ['pictures/nazi_axe/rabbit_model.webp|Rabbit', 'pictures/nazi_axe/nazi_axe.webp|Axe']]
      ], rec: [{ id: 'morse', at: [0, 1], label: 'Etched numbers → Morse numbers', type: 'text', ph: 'e.g. 14, 22 → 3, 7' }] },
      { h: "Barbarossa's Refuge", steps: [
        ["Put the bat, dagger and axe in the stone slots by the big red door beside the Church. Kill 20 Zombies, then 10 Sizzlers, then 10 Pests nearby.", ['pictures/main_ee/stone_slots.webp|Stone slots']],
        ["Inside, charge the ceiling anchor with 150 Wunderbuss ammo (locks you in).", ['pictures/main_ee/anchor_refuge.webp|Anchor']],
        ["Statue puzzle: turn every statue on each of the four walls to face forward (shooting one turns its neighbours). Each wall drops a raven. Use the solver.", ['pictures/main_ee/first_wall.webp|First wall', 'pictures/main_ee/raven_statue.webp|Raven']],
        ["Place the four ravens on the central statue (see the guide's video). Take the real blade and put it in the slot at the top of the stairs.", ['pictures/main_ee/blade.webp|Blade', 'pictures/main_ee/blade_slot.webp|Blade slot']]
      ]},
      { h: 'Drop Pod & Zeppelin', steps: [
        ["Charge the three Zeppelin anchors with 150 ammo each (the Plaza one can use kills instead — first method locks in).", ['pictures/main_ee/anchor_destroyed.webp|Destroyed Building', 'pictures/main_ee/anchor_museum.webp|Museum', 'pictures/main_ee/anchor_plaza.webp|Plaza']],
        ["Everyone gets a full Wunderbuss (Dagger helps; PaP an MP40 or FG42). Enter the Drop Pod and all shoot the cable at once.", ['pictures/main_ee/drop_pod.webp|Drop Pod', 'pictures/main_ee/cable_drop_pod.webp|Cable']],
        ["Move the power ball along green wires with the terminals. Open the up-path gates first, then the down path; guide it into Straub's room.", ['pictures/main_ee/power_ball.webp|Power ball', 'pictures/main_ee/terminal.webp|Terminal']]
      ]},
      { h: 'Stadtjäger', steps: [
        ["Phase 1: shoot the orange chest engine while he charges (no hitmarkers)."],
        ["Phase 2: damage him while he throws Geistbolts."],
        ["Phase 3: shoot his gas clouds to electrify them while he stands in them. Re-enter the Drop Pod for the cutscene."]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Cabaret sign hangman', steps: [
        ["On the Main Street Cabaret sign, shoot the arrows to change the letter and the middle dot to lock it. Words: DAMNATION (Nuke), REAPER (Insta-Kill), GEISTKRAFT (Full Charge), FAMISHED (Max Ammo), GLUTTONY (Double Jolts), WONDER (Tesla + Ripsaw), THEJACKBOX.", ['pictures/hangman/the_cabaret_sign.webp|Sign', 'pictures/hangman/metal_selector.webp|Selector']]
      ], rec: [{ id: 'words', at: 0, label: 'Words done', type: 'multi', opts: ['DAMNATION', 'REAPER', 'GEISTKRAFT', 'FAMISHED', 'GLUTTONY', 'WONDER', 'THEJACKBOX'] }] },
      { h: 'Hats on the Cheetah', steps: [
        ["One at a time, put these on the Cheetah on the Cabaret stage in order: Fedora, Pilot Cap, Garrison Cap, Officer Hat, Red Hat (each has two spots). Reward: 1,952 Jolts and five power-ups.", ['pictures/hats/fedora_church.webp|Fedora', 'pictures/hats/officer_hat_melee.webp|Officer Hat', 'pictures/hats/cheetah.webp|Cheetah']]
      ], rec: [{ id: 'hats', at: 0, label: 'Hats placed', type: 'multi', opts: ['Fedora', 'Pilot Cap', 'Garrison Cap', 'Officer Hat', 'Red Hat'] }] },
      { h: 'The Classic (PPSh-41)', steps: [
        ["Backstage mirrors: drop Jolts at the left mirror and interact when the circling light hits bottom-middle. Repeat for the right, then the third (faster).", ['pictures/the_classic/mirrors.webp|Mirrors']]
      ]},
      { h: "Thule's Errand camo", steps: [
        ["Set the Main Street radio to 39, 39.", ['pictures/camo/camo.webp|Camo']]
      ]},
      { h: 'Dead woman jumpscare', steps: [
        ["Shoot the Apartments painting for a record, play it on the player by the Destroyed Building door (Wunderbuss it), then interact with the woman on the bed.", ['pictures/jumpscare/record.webp|Record', 'pictures/jumpscare/record_player.webp|Record player']]
      ]}
    ]}
  ]
});

M({
  id: 'tortured', name: 'The Tortured Path', group: 'dlc', pack: 'DLC 3 · United Front',
  main: 'I Have the Power',
  blurb: 'Three linked chapters on small Tortured Path arenas. Strict waves, a reanimated Zombie, carnival cups and the forging of the Sword.',
  img: 'https://mmmrkennedy.com/games/WW2/the_tortured_path/',
  guide: 'https://mmmrkennedy.com/games/WW2/the_tortured_path/the_tortured_path_guide',
  wiki: 'https://callofduty.fandom.com/wiki/The_Tortured_Path',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Chapter 1 — Into the Storm', note: "Rated 7/10 (10/10 annoying), 1:20–1:35 hours solo. Steps are tied to exact waves. Load each next chapter straight from the lobby — leaving resets you to Chapter 1.", steps: [
        ["Wave 1: shoot the rope in the tree left of the Windmill battery. Collect a Zombie head, torso, two arms and two legs from around the map.", ['pictures/main_ee/map_1/rope_in_tree.webp|Rope in tree', 'pictures/main_ee/map_1/body_parts/head_fence.webp|Head', 'pictures/main_ee/map_1/body_parts/torso_cart.webp|Torso']],
        ["Wave 2: hold interact on the river branch left of Double Tap and take the rope.", ['pictures/main_ee/map_1/branch_in_river.webp|River branch']],
        ["Wave 3: pick up the two rods by the drop pod near the dead cow.", ['pictures/main_ee/map_1/drop_pod.webp|Drop pod']],
        ["Wave 5: line up the two Wüstlings so the back one charges the front one; take the arm club it drops. (No Wüstlings by Wave 5 = restart.)", ['pictures/main_ee/map_1/club.webp|Club']],
        ["Wave 5: put the club in the Windmill gears when the longest blade points straight down, then add the body parts. Take the club back and stop the Windmill when the Zombie is at the top (~20 s).", ['pictures/main_ee/map_1/windmill_gears.webp|Gears', 'pictures/main_ee/map_1/windmill_blade.webp|Blade down', 'pictures/main_ee/map_1/zombie_highest_point.webp|Highest point']],
        ["Wave 6: lightning hits it — charge it with kills nearby. Wave 7: defend it to the debris by the broken house fireplace.", ['pictures/main_ee/map_1/debris.webp|Debris']],
        ["Wave 8: charge the battery it carries until green, let Zombies kill it, and put the battery in the Wine Cellar generator. Take the Hilt (all Blitz perks) and finish the map.", ['pictures/main_ee/map_1/generator.webp|Generator', 'pictures/main_ee/map_1/hilt.webp|Hilt']]
      ]},
      { h: 'Chapter 2 — Across the Depths', steps: [
        ["Wave 1: everyone melees and interacts with the battery in the back-left of the Barracks for vision mode."],
        ["Wave 2: shoot the nine vision-only fish (Medical Bay, PaP lockers, Barracks, Cafeteria, Projector Room, red-floor room…). End the round by the lower-deck Jeep.", ['pictures/main_ee/map_2/fish_locations/med_bay.webp|Med Bay fish', 'pictures/main_ee/map_2/fish_locations/pap_locker.webp|PaP locker fish', 'pictures/main_ee/map_2/jeep.webp|Jeep']],
        ["Waves 3–5: follow the Red Herring. At each of its three charging stations, buy a 3,000 battery wallbuy, place it and get ~8–10 kills. Don't fill the third until PaP is up — it must be done by the end of Wave 8.", ['pictures/main_ee/map_2/red_herring.webp|Red Herring', 'pictures/main_ee/map_2/battery_charging_1.webp|Station 1', 'pictures/main_ee/map_2/battery_under_boat.webp|Battery wallbuy']],
        ["Wave 8: in the island arena, clear each island (Wüstling, Meuchler, Sizzler) and jump on — falling downs you.", []],
        ["Final island: shoot the fish when its cup stops. Three rounds. Back on the ship, take the Pommel from the crate.", ['pictures/main_ee/map_2/fish_cup_game.webp|Cup game', 'pictures/main_ee/map_2/pommel.webp|Pommel']]
      ]},
      { h: 'Chapter 3 — Beneath the Ice', steps: [
        ["Wave 1: melee the Forge Room battery three times. Interact with it every two waves after that.", ['pictures/main_ee/map_3/battery.webp|Battery']],
        ["Wave 2: find the rune code with battery vision (13 rune spots) or guess it, and press the runes in order in the Rune Room. A wrong order: press any rune until they sink, leave and return.", ['pictures/main_ee/map_3/rune_locations/forge_face_statue.webp|Rune spot', 'pictures/main_ee/map_3/rune_wall.webp|Rune wall']],
        ["Wave 3: put the Hilt from the supply crate in the Forge Room's glowing bowl.", ['pictures/main_ee/map_3/glowing_bowl_hilt.webp|Hilt bowl']],
        ["Wave 4: take the flares from the stairs, throw them in the four stone bowls under the Forge faces, then the fire bowl left of the Stamin-Up drop. Place the new rune and enter the new code.", ['pictures/main_ee/map_3/box_of_flares.webp|Flares', 'pictures/main_ee/map_3/stone_bowls.webp|Stone bowls', 'pictures/main_ee/map_3/open_wall.webp|New rune']],
        ["Wave 5: Pommel in the bowl. Everyone stands on the Sacrificial Stones and gets kills until a sound. Take the rune from the blood pool and enter the next code.", ['pictures/main_ee/map_3/sacrifice_stone.webp|Sacrificial Stone', 'pictures/main_ee/map_3/rune_3.webp|Rune 3']],
        ["Wave 6: Blade in the bowl, use the Forge and take the Sword. Finish the map for the cutscene.", ['pictures/main_ee/map_3/glowing_bowl_blade.webp|Blade bowl']]
      ], rec: [{ id: 'runes', at: [1, 3, 4], label: 'Rune codes', type: 'text', ph: 'Code 1 / code 2 / code 3' }] }
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Pack-a-Punch (each chapter)', steps: [
        ["Into the Storm: fill the battery behind the Windmill (10 kills), the Wine Cellar one on Wave 4 and the one across from the sniper wallbuy on Wave 7.", ['pictures/pap/map_1/battery_1.webp|Battery 1', 'pictures/pap/map_1/battery_2.webp|Battery 2', 'pictures/pap/map_1/battery_3.webp|Battery 3']],
        ["Across the Depths: lower deck, then the Projector Room on Wave 4, then by PaP in the Barracks on Wave 7.", ['pictures/pap/map_2/battery_1.webp|Battery 1', 'pictures/pap/map_2/battery_2.webp|Battery 2', 'pictures/pap/map_2/battery_3.webp|Battery 3']],
        ["Beneath the Ice: by Speed Cola, then by Stamin-Up on Wave 4, then by PaP on Wave 7.", ['pictures/pap/map_3/battery_1.webp|Battery 1', 'pictures/pap/map_3/battery_2.webp|Battery 2', 'pictures/pap/map_3/battery_3.webp|Battery 3']]
      ]},
      { h: 'The Classic (PPSh-41)', steps: [
        ["At the end of Wave 3, 6 or 9, drop 1,750 Jolts on the resupply flare. It joins the random SMG wallbuy pool.", ['pictures/the_classic/flare.webp|Flare']]
      ]},
      { h: 'The Darkened Path', steps: [
        ["At Shattered Rank 50, activate the red skull at the start for the harder mode. Beat the main quest on it for the Sanguine Skull charm.", ['pictures/darkened_path/red_skull.webp|Red skull', 'pictures/darkened_path/skull_charm.webp|Charm']]
      ]}
    ]}
  ]
});

M({
  id: 'frozen', name: 'The Frozen Dawn', group: 'dlc', pack: 'DLC 4 · Shadow War',
  main: 'Kingfall',
  blurb: 'Thule in the ice. Four Raven weapons — Scythe, Hammer, Shield and Flail — their trials, and the God King.',
  img: 'https://mmmrkennedy.com/games/WW2/the_frozen_dawn/',
  guide: 'https://mmmrkennedy.com/games/WW2/the_frozen_dawn/the_frozen_dawn_guide',
  wiki: 'https://callofduty.fandom.com/wiki/The_Frozen_Dawn',
  settings: [
    { id: 'wpn', label: 'Raven weapon', multi: true, opts: [['scythe', 'Scythe'], ['hammer', 'Hammer'], ['shield', 'Shield'], ['flail', 'Flail']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Thulian Scythe → Fang of An\'heist', w: { wpn: ['scythe'] }, note: "Rated 8/10, 1:20–1:35 hours solo. You need all four upgraded Raven weapons. Solver: mmmrkennedy.com → The Frozen Dawn solver.", steps: [
        ["Use the Phylactery shrine and survive the ~30 s lockdown. Take the Scythe.", ['pictures/scythe/shrine.webp|Shrine', 'pictures/scythe/scythe.webp|Scythe']],
        ["Melee-kill a fully empowered Corpse Eater with the Scythe for its spine (two spawn every PaP trip). Take the wire from the Crash Site drop pod.", ['pictures/scythe/upgraded_scythe/wire.webp|Wire']],
        ["Put spine, wire and Scythe on the altar at the top of the Phylactery stairs. Get 15 kills nearby, wait two full rounds, pick it up and take any transport to the Deathraven Trial.", ['pictures/scythe/upgraded_scythe/altar.webp|Altar']]
      ]},
      { h: 'Thulian Hammer → Fist of Tal\'rek', w: { wpn: ['hammer'] }, steps: [
        ["Take the battery from the debris left of the M30 in the Crash Site to the bowl right of Laufenblitz (Overlook). Get 15–20 kills until it glows purple.", ['pictures/hammer/battery.webp|Battery', 'pictures/hammer/bowl.webp|Bowl']],
        ["Collect the four stones (Archives by Schnellblitz, Ice Caves cliff, Morgue column, Blood Altar ledge) and slot them. Read the bloodfall runes left to right (F, R, S or M).", ['pictures/hammer/stone_caves.webp|Stone', 'pictures/hammer/stone_slots.webp|Slots', 'pictures/hammer/runes_bloodfalls.webp|Bloodfall runes']],
        ["Get one kill at each floor rune by the Armour stand in that order. The Hammer spawns — run at it to send it away.", ['pictures/hammer/runes_to_charge.webp|Floor runes', 'pictures/hammer/hammer_spawned.webp|Hammer']],
        ["Shoot the four Overlook pillars so every bolt faces the bowl (solver). Crawl up to the Hammer prone underground and push it to the Overlook.", ['pictures/hammer/pillars.webp|Pillars', 'pictures/hammer/pillar_solver.webp|Solver', 'pictures/hammer/hammer_pickup.webp|Pickup']],
        ["Upgrade: carry the charge rune to rune — Crash Site, Ice Caves, Morgue (above the Shield pool), Phylactery door (kill a Zombie in the doorway), then an electrified Corpse Eater/Wüstling to the Blood Altar contraption.", ['pictures/hammer/upgraded_hammer/rune_1.webp|Rune 1', 'pictures/hammer/upgraded_hammer/rune_4.webp|Rune 4', 'pictures/hammer/upgraded_hammer/rune_5.webp|Rune 5']],
        ["Shoot the contraption blocks so lit sides face front, three rounds (skull resets). Then walk the invisible Overlook path toward the pyramid for the Stormraven Trial.", ['pictures/hammer/upgraded_hammer/contraption_guide.webp|Contraption guide', 'pictures/hammer/upgraded_hammer/invis_path.webp|Invisible path']]
      ], rec: [{ id: 'hruns', at: [1, 2], label: 'Bloodfall runes, left to right', type: 'seq', n: 4, opts: ['F', 'R', 'S', 'M'] }] },
      { h: 'Thulian Shield → Roar of Sang\'Ket', w: { wpn: ['shield'] }, steps: [
        ["Fill the Ice Caves and Morgue blood pools (~6 kills each). Put the Bloodraven Stone from the Morgue jars in the Overlook pool and fill it.", ['pictures/shield/pool_ice_caves.webp|Ice Caves pool', 'pictures/shield/bloodstone.webp|Bloodraven Stone', 'pictures/shield/pool_overlook.webp|Overlook pool']],
        ["Kill the Wüstling that rises from the Blood Altar pool for the Shield.", ['pictures/shield/large_pool.webp|Blood Altar pool']],
        ["Upgrade: holding the Shield, find the pool with red smoke. Kill a red-glowing Corpse Eater (it ate 3–4 Zombies) in it and note the pattern. Repeat for all three pools, in order.", ['pictures/shield/upgraded_shield/red_smoke.webp|Red smoke', 'pictures/shield/upgraded_shield/pattern.webp|Pattern']],
        ["Blow a Bomber (from Wave 8) on the Crash Site metal door for the radio and speaker; set them at the Blood Altar pool.", ['pictures/shield/upgraded_shield/metal_door.webp|Metal door', 'pictures/shield/upgraded_shield/radio.webp|Radio']],
        ["Cycle the radio to each pattern in order and get a kill in the pool. When it flashes, step in with the Shield for the Bloodraven Trial.", ['pictures/shield/upgraded_shield/frozen_dawn_blood_patterns.webp|Patterns']]
      ], rec: [{ id: 'pools', at: [2, 4], label: 'Patterns in pool order', type: 'text', ph: 'Pool 1 · pool 2 · pool 3' }] },
      { h: 'Broken Flail → Talon of Lu\'roth', w: { wpn: ['flail'] }, steps: [
        ["Put two of the four books on the pedestal by the Archives M1 Garand to open the Cypher Room.", ['pictures/flail/book_overlook.webp|Book', 'pictures/flail/book_pedestal.webp|Pedestal']],
        ["Place three gears in the Gearworks under the Archives; ~15 kills start the Orrery.", ['pictures/flail/gear_cypher.webp|Gear', 'pictures/flail/gearworks.webp|Gearworks']],
        ["Stop each orb at the positions on the Cypher Room wall, red (fastest) first, stopping one spot early. Take the Flail.", ['pictures/flail/wall_in_cypher_room.webp|Cypher wall', 'pictures/flail/orrery_map.webp|Orrery map', 'pictures/flail/flail.webp|Flail']],
        ["Upgrade: Flail-teleport into the room above the Orrery. Get 3 Flail kills by each Moonraven stone and trace its constellation in Flail vision. Then throw the orb into the Orrery's glowing ball.", ['pictures/flail/upgraded_flail/moonraven_stone.webp|Moonraven stone', 'pictures/flail/upgraded_flail/const_crash_site.webp|Constellation', 'pictures/flail/upgraded_flail/glowing_orb.webp|Glowing ball']]
      ], rec: [{ id: 'orrery', at: 2, label: 'Orb stop positions', type: 'text', ph: 'e.g. red 3, blue 6…' }] },
      { h: 'God King', steps: [
        ["Place Scythe, Hammer and Flail on the Ice Caves pedestals and the Shield on the stone circle. Everyone enters the transport left of the Morgue door.", ['pictures/main_ee/weapon_pedestals.webp|Pedestals', 'pictures/main_ee/shield_circle.webp|Shield circle', 'pictures/main_ee/boss_fight_transport.webp|Transport']],
        ["Phase 1: shoot him until he pulls you in, then shoot the three pressure plates until they stop glowing.", ['pictures/main_ee/god_king_plate.webp|Pressure plate']],
        ["Phase 2: hide behind ice pillars or block with the Shield. Phase 3: Hammer-throw the purple shields. Phase 4: the Flail teleports past the fire wall."],
        ["Co-op adds a Phase 5. At 1 HP after the throne cutscene, shoot him until he dies."]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: "Raven's Claw pistol", steps: [
        ["Use the Golden Raven on the Overlook, then shoot four squawking Ravens with a pistol. Repeat at the Blood Altar statue for the Raven's Claw.", ['pictures/raven_claw/raven_statue.webp|Golden Raven']]
      ]},
      { h: 'The Classic or The Vintage', steps: [
        ["Classic (PPSh): drop Jolts at the right Morgue corpse container and shoot only red-eyed heads, three rounds.", ['pictures/vintage_and_classic/corpse_classic.webp|Classic container', 'pictures/vintage_and_classic/red_eyed.webp|Red-eyed head']],
        ["Vintage (MG42): left container, shoot only blue-eyed heads. You can only get one of the two.", ['pictures/vintage_and_classic/corpse_vintage.webp|Vintage container', 'pictures/vintage_and_classic/blue_eyed.webp|Blue-eyed head']]
      ]},
      { h: 'Dark Room Perkaholic', steps: [
        ["With the Flail, fill the three pressure plates (Crash Site, Blood Altar, behind the Overlook Shield pool) to open a new transport (~6,916 Jolts).", ['pictures/perkaholic/glowing_plate.webp|Plate', 'pictures/perkaholic/new_transport.webp|New transport']],
        ["Find four nails in the Dark Room (one in a skull) and place them on the \"Blood is Power\" pedestal for all six perks.", ['pictures/perkaholic/nail.webp|Nail', 'pictures/perkaholic/taller_pillar.webp|Pedestal']]
      ]},
      { h: 'Zombie possession', steps: [
        ["With the Talon of Lu'roth, disable the Passage PaP button, ride a transport with a Zombie and make it friendly as the doors close. 10k Jolts and a perk.", ['pictures/pap/pap_button.webp|PaP button']]
      ]},
      { h: 'Free Double Jolts & Funderbuss', steps: [
        ["Shoot the four Phylactery altar candles. Colour-match equipment (orbit throws mix colours) to hit three floating Double Jolts in turn.", ['pictures/free_double_jolts/lit_candles.webp|Candles', 'pictures/free_double_jolts/throwing_the_equipment.webp|Throwing']],
        ["Use the red mist by the Overlook Armour and throw through the square of dots to hit 10 targets for the Funderbuss.", ['pictures/free_double_jolts/red_mist.webp|Red mist', 'pictures/free_double_jolts/funderbuss.webp|Funderbuss']]
      ]},
      { h: 'Small extras', steps: [
        ["Fire a rocket at a front pillar of the big pyramid and it comes back.", ['pictures/rocket_deflect/pyramid.webp|Pyramid']],
        ["Throw a Frag into a bright ceiling hole in the Archives for grenade rain.", ['pictures/grenade_rain/orrery.webp|Ceiling hole']]
      ]}
    ]}
  ]
});

  return { maps: MAPS };
})());
