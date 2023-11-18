--1. Devolver el número de Pokémon que ha capturado cada entrenador.

SELECT t.id as trainer_id, t.name as trainer_name, COUNT(pokemon_id) AS num_pokemon_captured
FROM trainer t  
LEFT JOIN trainer_pokedex tp ON t.id = tp.trainer_id
GROUP BY
t.id, t.name;
