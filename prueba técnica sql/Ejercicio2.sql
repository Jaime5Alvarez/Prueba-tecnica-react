
/* 2. Devolver los pokémon de tipo Electric que haya capturado Ash Ketchum . Campos ocolumnas que debe devolver la consulta:
- id de la tabla pokemon
- level de la tabla pokemon
- name de la tabla pokemon_species
- captured_at de la tabla trainer_pokedex */

SELECT
    p.id AS pokemon_id,
    p.level,
    ps.name AS species_name,
    tp.captured_at
FROM
    trainer_pokedex tp
    JOIN trainer t ON tp.trainer_id = t.id
    JOIN pokemon p ON tp.pokemon_id = p.id
    JOIN pokemon_species ps ON p.pokemon_species_id = ps.id
    JOIN pokemon_species_type pst ON ps.id = pst.pokemon_species_id
    JOIN pokemon_type pt ON pst.pokemon_type = pt.type
WHERE
    t.name = 'Ash Ketchum'
    AND pt.type = 'Electric';