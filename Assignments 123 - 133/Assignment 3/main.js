let myInfo = {    username: "Osama",    role: "Admin",    country: "Egypt",};let map = new Map(Object.entries(myInfo));console.log(map);console.log(map.size);console.log(map.has("role"));/*let  ObjectKeys  = Object.keys(myInfo);let  ObjectValues = Object.values(myInfo)let myMap = new Map();for (let i = 0 ; i < ObjectKeys.length ; i++){myMap.set(ObjectKeys[i] , ObjectValues[i])}console.log(myMap)console.log(myMap.size)console.log(myMap.has("role"))*//*// Needed OutputMap(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}3true*/