arr1 =[3,7,34,90,12];
arr2 =[true,"green","where",12,56];

lastEl1=arr1[arr1.length-1];
console.log(lastEl1);

console.log(arr2[arr2.length -1]);

myPets=["cow","bird","snake","Dog"];
console.log(myPets.join(","));

var arr3=[-5,9,5,3,2,-3,6,8,4,1];
arr3.sort();
console.log(arr3);

var arr=["apple","mango","apple","orange","mango","mango"];

function ridDuplicates(arr) {
    return arr.filter((fruit, index)=> arr.indexOf(fruit) === index);
    
}
console.log(ridDuplicates(arr));

function duplicates(arr) {
    return arr.filter((fruit, index)=> arr.indexOf(fruit)!== index);
    
}
console.log(duplicates(arr));

let arr5 =["the","way","x",4];
 if(arr5.find = "way"){
    console.log("way");
 }else{
    console.log("the searchword was not found")
 }

//let word="sevink";
//console.log(word.sort);