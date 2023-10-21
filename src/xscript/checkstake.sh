#!/bin/bash

# Initialis la variable ARG à vide
ARG=""

#  arguments de la ligne de commande
while [[ "$#" -gt 0 ]]; do
    case "$1" in
        -w) ARG="$2"; shift 2;;
        *) echo "Argument non reconnu: $1"; exit 1;;
    esac
done

# Vérifie si l'argument -w a été fourni
if [ -z "$ARG" ]; then
    echo "L'argument -w est requis."
    exit 1
fi

# Maintenant, vous pouvez utiliser la variable ARG comme argument dans votre commande
mxpy contract query erd1qqqqqqqqqqqqqpgqq2may6k3lmy29ps3506yluwqrek50s72fj6qdp2mqr \
  --proxy=https://devnet-gateway.multiversx.com \
  --function="getStakingPosition" \
  --arguments "$ARG"

