let humStr = "I'll hum a song";
let hugStr =  "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
humStr.match(huRegex); // Returns ["hug"]

