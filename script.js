const arr = [
  { name: "john", age: 25, profession: "developer" },
  { name: "jack", age: 27, profession: "developer" },
  { name: "karen", age: 26, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  arr.forEach((val, index) => {
    if (val.profession === "developer") {
      console.log(index, val);
    }
  });
}

// 2. Add Data
function addData() {
  const data = {name:"susan",age:20,profession:"intern"}

    arr.push(data)
    arr.map((val,index)=>console.log(index,val))
}

// 3. Remove Admins
function removeAdmin() {
  filterdata=arr.filter((val)=>val.profession!=="admin")
    filterdata.map((val,index)=>console.log(index,val))
}

// 4. Concatenate Array
function concatenateArray() {
  let arr2 = [
    { name: "sandip", age: 28, profession: "frontend developer" },
    { name: "joe", age: 20, profession: "developer" },
    { name: "dee", age: 24, profession: "intern" },
  ];
 const combinedarr= arr.concat(arr2);
 combinedarr.map((val)=>console.log(val))
}

// 5. Average Age
function averageAge() {
  let sum=0,c=0;
  arr.forEach((val, index) => {
    sum+=val.age;
    c++;
  });
  console.log(sum/c);
}

// 6. Age Check
function checkAgeAbove25() {
  let c=0;
  arr.forEach((val, index) => {
    if (val.age>25) {
      //console.log(index, val);
      c++;
    }
  });
  console.log(c);
}

// 7. Unique Professions
function uniqueProfessions() {
  const data = [];
  arr.forEach((item)=>{
    if(data.indexOf(item.profession)==-1)data.push(item.profession);
  })
  console.log(data);
}

// 8. Sort by Age
function sortByAge() {
  arr.sort((x,y)=>{
    return x.age - y.age;
   });
   console.log(arr);
}

// 9. Update Profession
function updateJohnsProfession() {
  arr.forEach((val, index) => {
    if (val.name === "john") {
      val.profession="admin";
      
    }
  });
  console.log(arr);

}

// 10. Profession Count
function getTotalProfessions() {
  let devs = 0;
  let ads = 0;
  arr.forEach((item)=>{
    if(item.profession=='admin')ads+=1;
    if(item.profession=='developer')devs+=1;
  })
  console.log(`Developers:${devs}, Admins:${ads}`);
}
