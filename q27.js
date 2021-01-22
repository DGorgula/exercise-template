const LIBRARY = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

function retriever(array, propertyWanted) {
    const result = [];
    for(object of array){
        result.push(object[propertyWanted]);
    }
    return result;
}

console.log(retriever(LIBRARY, 'libraryID'));





function setHtmlForQuestion {

} 