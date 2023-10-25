#!/bin/bash

# Exécutez la commande et stockez la sortie dans la variable 'raw'
raw=$(./isstakedA.sh | grep hex | awk '{ print $2 }' | sed 's/"//g' | sed 's/,//g')

# Divisez la sortie en lignes individuelles en utilisant '\n' comme séparateur
IFS=$'\n' read -rd '' -a raw_lines <<< "$raw"

# Créez un tableau pour stocker les lignes modifiées
modified_lines=()

# Parcourez chaque ligne et effectuez la modification
for line in "${raw_lines[@]}"; do
  result=$(./convert.sh "$line")

  # Obtenez les 5 premiers et les 5 derniers caractères
  first_chars="${result:0:5}"
  last_chars="${result: -5}"

  # Créez la ligne modifiée avec les 5 premiers, 5 derniers et "..." au milieu
  modified_line="${first_chars}...${last_chars}"

  # Ajoutez la ligne modifiée au tableau des lignes modifiées
  modified_lines+=("$modified_line")
done

# Affichez les lignes modifiées
for modified_line in "${modified_lines[@]}"; do
  echo "$modified_line"
done
