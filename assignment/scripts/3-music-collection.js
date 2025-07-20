console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection( collection ,title, artist, yearPublished){
let album = {
  title: title,
  artist: artist,
  yearPublished : yearPublished,
}
collection.push(album);
return album;

}
console.log(addToCollection(myCollection, "Waka Waka","shakira", "2010"))
console.log(addToCollection(myCollection, "jeje","diamond", "2024"))
console.log(addToCollection(myCollection, "No Woman, No Cry", "Bob Marley", 1974))
console.log(addToCollection(myCollection,"Jeje", "Diamond Platnumz", 2020))
console.log(addToCollection(myCollection, "Always On Time", "Ja Rule", 2001))
console.log(addToCollection(myCollection,"See You Again", "Wiz Khalifa", 2015))

function showCollection(collection){
  for(let i=0; i<collection.length; i++){
    let albumInfo =collection[i];
    console.log(`title: ${albumInfo.title} name:${albumInfo.artist} year published ${albumInfo.yearPublished} `)
}

}
 showCollection(myCollection)


/*
 Add a function named `findByArtist`. This function should:
  - Take in a `collection` parameter. Remember, we want to be able to search any collection!
  - Take in an `artist` (string) parameter.
  - Create an empty array to hold any matching results, if any.
  - Loop through the `collection` and add any album objects with a matching artist to the array.
  - Return the array with the matching results. (If no results are found, an empty array should be returned.)

- Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are returned.
*/
function findByArtist(collection, artist){
  let matchingResults = [];
  for(let i = 0; i < collection.length; i++){
    if(collection[i].artist.toLowerCase() === artist.toLowerCase()){
      matchingResults.push(collection[i])
      
    }

  }
  return(matchingResults)
}
findByArtist(myCollection, "shakira" )
findByArtist(myCollection,)











// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
