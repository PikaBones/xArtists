#!/bin/bash
raw=$(./stakead.sh | grep -o -E '"hex": [0-9a-fA-F]*|"[0-9a-zA-Z]*": "[0-9a-zA-Z]*"' | sed -E 's/"number": //;s/"[0-9a-zA-Z]*": "//')
result=$(mxpy wallet bech32 --encode $raw| bc)
###debug#result=$(echo $raw)
LANG=C printf "$result"
