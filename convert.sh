#!/bin/bash

# Récupérer le premier argument
arg1="$1"

# Utiliser l'argument dans votre script
mxpy wallet bech32 --encode "$arg1"

