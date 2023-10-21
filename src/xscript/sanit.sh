#!/bin/bash

while getopts "w:" opt; do
  case $opt in
    w)
      ARG="$OPTARG"
      ;;
    \?)
      echo "Option invalide: -$OPTARG" >&2
      exit 1
      ;;
  esac
done

# Vérifiez si ARG a été fourni
if [ -z "$ARG" ]; then
  echo "L'argument -w est requis."
  exit 1
fi

# Maintenant, vous pouvez utiliser ARG comme argument pour checkstake.sh
raw=$(./checkstake.sh -w "$ARG" | grep -o '"number": [0-9]*' | sed 's/"number": //')
result=$(echo "scale=10; $raw / 1000000000000000000" | bc)
###debug#result=$(echo $raw)
LANG=C printf "%.10f\n" "$result"
