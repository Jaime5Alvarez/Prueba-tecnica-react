
/* 3. Devolver último pokémon que haya capturado Brock . Campos o columnas que debedevolver la consulta:
- id de la tabla pokemon
- level de la tabla pokemon
- name de la tabla pokemon_species
- captured_at de la tabla trainer_pokedex */

SELECT p.id, level, ps.name, tp.captured_at
FROM trainer_pokedex tp
JOIN trainer t ON t.id = tp.trainer_id
JOIN pokemon p ON p.id = tp.pokemon_id
JOIN pokemon_species ps ON ps.id = p.pokemon_species_id
WHERE t.name = 'Brock'
ORDER BY captured_at DESC
LIMIT 1;

