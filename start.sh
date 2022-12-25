pid=$(ps aux | grep python | awk '{print $2}' | tr "\n" " " | awk '{print $1}')

kill -9 $pid

cd logs
python3 -m http.server 8000 & 
cd ..
node index.js
echo "<pre>" >> logs/index.html
notify-send "Oh oh! DisNBot died!" "log can be found here: http://127.0.0.1:8000