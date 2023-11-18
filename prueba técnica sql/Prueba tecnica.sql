-- Primer ejercicio


SELECT t.id as trainer_id, t.name as trainer_name, COUNT(pokemon_id) AS num_pokemon_captured
FROM trainer t  
LEFT JOIN trainer_pokedex tp ON t.id = tp.trainer_id
GROUP BY
t.id, t.name;

-- Segundo ejercicio

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

-- Tercer ejercicio

SELECT p.id, level, ps.name, tp.captured_at
FROM trainer_pokedex tp
JOIN trainer t ON t.id = tp.trainer_id
JOIN pokemon p ON p.id = tp.pokemon_id
JOIN pokemon_species ps ON ps.id = p.pokemon_species_id
WHERE t.name = 'Brock'
ORDER BY captured_at DESC
LIMIT 1

