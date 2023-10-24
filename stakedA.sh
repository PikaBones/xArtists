#/bin/bash
raw=$(./isstakedA.sh | grep hex | awk '{ print $2 }' | sed 's/"//g' | sed 's/,//g')
result=$(./convert.sh "$raw")
###debug#result=$(echo $raw)
echo "$result"