// const _ = require("lodash")


// // chunk 
// const array = [1,2,3,4,5,6,7,8,9,10,11]
// const newArray = _.chunk(array,4)
// console.log(newArray)



// // //_copmact removes all the falsey values like false null undefined ""
// //  const array1 =[1,false,null,2,undefined,"",3]
// //  console.log(_.compact(array1))

// //  //_.concat return concat array
// //  const array2 = [1]
// // console.log(_.concat(array2,[1,2,3],[4]))

// // //_.deifference return 


// const array = [1,2,3,4,5,6,7,8,9,10,11]
// console.log(_.first(array)) //gives the first element of array
// console.log(_.nth(array,2)) //gives the index value

// console.log(_.chunk(array,2)) // gives result in chunk 
// console.log(_.difference(array,[1,2,3])) //return the different values from both array

// console.log(_.drop(array,2)) // it will remove the first value 

// console.log(_.take(array,2)) //it will give an array of given values

// console.log(_.fill(Array(3),2)) //fill array with value 2 in it 

// console.log(_.fill(['a','b','c'],2))

// const num = [1,2,[2,[4]],[5]]
// console.log(_.flatten(num)) //givesfirst level flatten 

// console.log(_.flattenDepth(num,2)) //givesdepth flatten

// const a = [1,2,4]
// const b = [2,4,5]
// console.log(_.union(a,b)) //[ 1, 2, 4, 5 ] 
// console.log(_.intersection(a,b)) //[ 2, 4 ]


// const ArrayOfObject =[{
//     "id": 1,
//     "first_name": "Rudyard",
//     "last_name": "Dashkov",
//     "email": "rdashkov0@is.gd",
//     "gender": "Male",
//     "ip_address": "178.216.122.232"
//   }, {
//     "id": 2,
//     "first_name": "Leroi",
//     "last_name": "Clarkson",
//     "email": "lclarkson1@phpbb.com",
//     "gender": "Male",
//     "ip_address": "10.253.243.231"
//   }, {
//     "id": 3,
//     "first_name": "Rozalin",
//     "last_name": "Narey",
//     "email": "rnarey2@npr.org",
//     "gender": "Female",
//     "ip_address": "47.220.255.230"
//   }, {
//     "id": 4,
//     "first_name": "Barnett",
//     "last_name": "Akam",
//     "email": "bakam3@networksolutions.com",
//     "gender": "Male",
//     "ip_address": "168.142.144.52"
//   }, {
//     "id": 5,
//     "first_name": "Georgine",
//     "last_name": "Coutts",
//     "email": "gcoutts4@hhs.gov",
//     "gender": "Female",
//     "ip_address": "187.178.37.11"
//   }, {
//     "id": 6,
//     "first_name": "Odille",
//     "last_name": "Bartlomiej",
//     "email": "obartlomiej5@uol.com.br",
//     "gender": "Female",
//     "ip_address": "73.236.74.226"
//   }, {
//     "id": 7,
//     "first_name": "Michaela",
//     "last_name": "Pilgrim",
//     "email": "mpilgrim6@cyberchimps.com",
//     "gender": "Female",
//     "ip_address": "68.135.76.110"
//   }, {
//     "id": 8,
//     "first_name": "Maddalena",
//     "last_name": "Swalwell",
//     "email": "mswalwell7@psu.edu",
//     "gender": "Female",
//     "ip_address": "201.73.157.45"
//   }, {
//     "id": 9,
//     "first_name": "Desirae",
//     "last_name": "Sproat",
//     "email": "dsproat8@cnn.com",
//     "gender": "Female",
//     "ip_address": "0.125.103.60"
//   }, {
//     "id": 10,
//     "first_name": "Donica",
//     "last_name": "Whanstall",
//     "email": "dwhanstall9@unesco.org",
//     "gender": "Genderfluid",
//     "ip_address": "110.125.163.99"
//   }, {
//     "id": 11,
//     "first_name": "Terrie",
//     "last_name": "Pedlingham",
//     "email": "tpedlinghama@cnn.com",
//     "gender": "Genderfluid",
//     "ip_address": "41.148.159.26"
//   }, {
//     "id": 12,
//     "first_name": "Charo",
//     "last_name": "Lowe",
//     "email": "cloweb@sun.com",
//     "gender": "Female",
//     "ip_address": "118.38.75.153"
//   }, {
//     "id": 13,
//     "first_name": "Sharlene",
//     "last_name": "Mattosoff",
//     "email": "smattosoffc@jalbum.net",
//     "gender": "Female",
//     "ip_address": "238.43.198.249"
//   }, {
//     "id": 14,
//     "first_name": "Sean",
//     "last_name": "Aslin",
//     "email": "saslind@flavors.me",
//     "gender": "Male",
//     "ip_address": "51.176.255.255"
//   }, {
//     "id": 15,
//     "first_name": "Ynes",
//     "last_name": "Wolfindale",
//     "email": "ywolfindalee@fema.gov",
//     "gender": "Female",
//     "ip_address": "94.127.199.140"
//   }, {
//     "id": 16,
//     "first_name": "Wald",
//     "last_name": "Birts",
//     "email": "wbirtsf@ustream.tv",
//     "gender": "Male",
//     "ip_address": "66.208.22.0"
//   }, {
//     "id": 17,
//     "first_name": "Sterne",
//     "last_name": "Jovovic",
//     "email": "sjovovicg@devhub.com",
//     "gender": "Male",
//     "ip_address": "122.117.184.151"
//   }, {
//     "id": 18,
//     "first_name": "Bryana",
//     "last_name": "Beviss",
//     "email": "bbevissh@dmoz.org",
//     "gender": "Female",
//     "ip_address": "20.213.243.182"
//   }, {
//     "id": 19,
//     "first_name": "Cindie",
//     "last_name": "Eliasson",
//     "email": "celiassoni@arizona.edu",
//     "gender": "Female",
//     "ip_address": "209.47.12.51"
//   }, {
//     "id": 20,
//     "first_name": "Honor",
//     "last_name": "Isherwood",
//     "email": "hisherwoodj@bloglovin.com",
//     "gender": "Female",
//     "ip_address": "53.81.101.80"
//   }, {
//     "id": 21,
//     "first_name": "Cindy",
//     "last_name": "Jambrozek",
//     "email": "cjambrozekk@drupal.org",
//     "gender": "Bigender",
//     "ip_address": "233.133.99.117"
//   }, {
//     "id": 22,
//     "first_name": "Lynnea",
//     "last_name": "Eagger",
//     "email": "leaggerl@slate.com",
//     "gender": "Female",
//     "ip_address": "214.32.95.131"
//   }, {
//     "id": 23,
//     "first_name": "Renee",
//     "last_name": "Flawn",
//     "email": "rflawnm@discuz.net",
//     "gender": "Female",
//     "ip_address": "5.67.221.105"
//   }, {
//     "id": 24,
//     "first_name": "Sisely",
//     "last_name": "Leverson",
//     "email": "sleversonn@cornell.edu",
//     "gender": "Female",
//     "ip_address": "199.227.111.102"
//   }, {
//     "id": 25,
//     "first_name": "Noak",
//     "last_name": "Slocum",
//     "email": "nslocumo@usnews.com",
//     "gender": "Male",
//     "ip_address": "2.145.89.74"
//   }, {
//     "id": 26,
//     "first_name": "Benjamen",
//     "last_name": "Lawn",
//     "email": "blawnp@dailymotion.com",
//     "gender": "Male",
//     "ip_address": "252.115.157.204"
//   }, {
//     "id": 27,
//     "first_name": "Antoinette",
//     "last_name": "McDonough",
//     "email": "amcdonoughq@google.ca",
//     "gender": "Non-binary",
//     "ip_address": "24.253.216.134"
//   }, {
//     "id": 28,
//     "first_name": "Siegfried",
//     "last_name": "Hawton",
//     "email": "shawtonr@aol.com",
//     "gender": "Male",
//     "ip_address": "29.200.196.180"
//   }, {
//     "id": 29,
//     "first_name": "Audrye",
//     "last_name": "Stanes",
//     "email": "astaness@wordpress.org",
//     "gender": "Female",
//     "ip_address": "118.185.164.179"
//   }, {
//     "id": 30,
//     "first_name": "Etti",
//     "last_name": "Walework",
//     "email": "ewaleworkt@w3.org",
//     "gender": "Female",
//     "ip_address": "112.116.121.223"
//   }, {
//     "id": 31,
//     "first_name": "Marcos",
//     "last_name": "Krollman",
//     "email": "mkrollmanu@oracle.com",
//     "gender": "Bigender",
//     "ip_address": "118.243.119.195"
//   }, {
//     "id": 32,
//     "first_name": "Ophelie",
//     "last_name": "Luttger",
//     "email": "oluttgerv@g.co",
//     "gender": "Female",
//     "ip_address": "68.159.232.153"
//   }, {
//     "id": 33,
//     "first_name": "Caleb",
//     "last_name": "Pennigar",
//     "email": "cpennigarw@wordpress.com",
//     "gender": "Male",
//     "ip_address": "217.220.253.206"
//   }, {
//     "id": 34,
//     "first_name": "Guillemette",
//     "last_name": "Jantot",
//     "email": "gjantotx@godaddy.com",
//     "gender": "Female",
//     "ip_address": "92.123.140.224"
//   }, {
//     "id": 35,
//     "first_name": "Lance",
//     "last_name": "Halhead",
//     "email": "lhalheady@macromedia.com",
//     "gender": "Male",
//     "ip_address": "248.139.206.155"
//   }, {
//     "id": 36,
//     "first_name": "Scarlet",
//     "last_name": "Byrne",
//     "email": "sbyrnez@state.gov",
//     "gender": "Female",
//     "ip_address": "187.244.190.98"
//   }, {
//     "id": 37,
//     "first_name": "Otto",
//     "last_name": "Canby",
//     "email": "ocanby10@elegantthemes.com",
//     "gender": "Male",
//     "ip_address": "250.157.59.80"
//   }, {
//     "id": 38,
//     "first_name": "Erick",
//     "last_name": "Priditt",
//     "email": "epriditt11@apple.com",
//     "gender": "Male",
//     "ip_address": "172.159.211.222"
//   }, {
//     "id": 39,
//     "first_name": "Matt",
//     "last_name": "Smitherham",
//     "email": "msmitherham12@bloglovin.com",
//     "gender": "Male",
//     "ip_address": "134.193.6.121"
//   }, {
//     "id": 40,
//     "first_name": "Will",
//     "last_name": "Tincombe",
//     "email": "wtincombe13@msu.edu",
//     "gender": "Male",
//     "ip_address": "161.114.21.118"
//   }, {
//     "id": 41,
//     "first_name": "Duane",
//     "last_name": "Hampstead",
//     "email": "dhampstead14@google.com",
//     "gender": "Male",
//     "ip_address": "154.109.119.29"
//   }, {
//     "id": 42,
//     "first_name": "Neall",
//     "last_name": "Ellicott",
//     "email": "nellicott15@google.ca",
//     "gender": "Male",
//     "ip_address": "92.91.154.199"
//   }, {
//     "id": 43,
//     "first_name": "Wat",
//     "last_name": "Tranmer",
//     "email": "wtranmer16@mayoclinic.com",
//     "gender": "Male",
//     "ip_address": "198.227.65.104"
//   }, {
//     "id": 44,
//     "first_name": "Edgar",
//     "last_name": "Dominico",
//     "email": "edominico17@samsung.com",
//     "gender": "Male",
//     "ip_address": "226.112.47.157"
//   }, {
//     "id": 45,
//     "first_name": "Moina",
//     "last_name": "Skerritt",
//     "email": "mskerritt18@howstuffworks.com",
//     "gender": "Female",
//     "ip_address": "244.42.81.65"
//   }, {
//     "id": 46,
//     "first_name": "Lorrin",
//     "last_name": "Ashpole",
//     "email": "lashpole19@deviantart.com",
//     "gender": "Female",
//     "ip_address": "213.79.223.133"
//   }, {
//     "id": 47,
//     "first_name": "Farra",
//     "last_name": "Yellowley",
//     "email": "fyellowley1a@ameblo.jp",
//     "gender": "Female",
//     "ip_address": "196.46.85.236"
//   }, {
//     "id": 48,
//     "first_name": "Lorine",
//     "last_name": "Fraser",
//     "email": "lfraser1b@mapy.cz",
//     "gender": "Female",
//     "ip_address": "17.190.238.125"
//   }, {
//     "id": 49,
//     "first_name": "Ondrea",
//     "last_name": "McCoish",
//     "email": "omccoish1c@sphinn.com",
//     "gender": "Female",
//     "ip_address": "252.62.252.116"
//   }, {
//     "id": 50,
//     "first_name": "Lloyd",
//     "last_name": "Dowles",
//     "email": "ldowles1d@ucoz.com",
//     "gender": "Polygender",
//     "ip_address": "60.190.169.21"
//   }]
  
//   console.log(_.countBy(ArrayOfObject,'gender'))
//   console.log(_.groupBy(ArrayOfObject,'gender'))
//   console.log(_.orderBy(ArrayOfObject,'id',"desc"))
//   console.log(_.map(ArrayOfObject,'first_name'))


function sum(a,b){
    return a+b
}
const calc = (a,b,callback)=>{
    console.log("Addition")
    return callback(a,b)
}
console.log(calc(2,4,sum))