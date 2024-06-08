const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
async function run() {
  const client = new MongoClient(uri);


  // <------------------------ insert one item ---------------------------->
  // try {
  //   await client.connect();
  //   const database = client.db("students");
  //   const collection = database.collection("student_info");
  //   const copy = {
  //     name: "abc",
  //     roll_no: "123",
  //   };
  //   const res = await collection.insertOne(copy);
  //   console.log(`new result inserted at ${res.insertedId}`);
  // }

    // <---------------------- insert many item ------------------------>

  // try{
  //   await client.connect();
  //   const database = client.db("employee");
  //   const collection= database.collection("employee_info")

  //   const data = [
  //        {
  //           name: "ambika",
  //          role: "sde",
  //          age:20
  //         },
  //         {
  //           name: "tanu",
  //           role: "developer",
  //           age:22
  //         },
  //         {
  //           name: "nidhi",
  //           role: "tester",
  //           age:25
  //         },
  //         {
  //           name: "mani",
  //           role: "analyst",
  //           age:20
  //         }
  //   ]
  //   const res = await collection.insertMany(data);
  //   console.log("Document inserted");

  // }

    

// <---------------------- update one/many item ------------------------>
// try{
//   await client.connect();
//   const db = client.db("employee");
//   const collection = db.collection("employee_info");

  // const res = await collection.updateOne({name:"nidhi"},{$set:{name:"nidhi_Mishra"}})
  // const res = await collection.updateOne({name:"tanu"},{$set:{role:"software developer"}})
//   const res = await collection.updateMany({age:20},{$set:{role:'sde'}})
//   console.log(res);
// }
// <---------------------- delete one/many item ------------------------>
// try{ 
// await client.connect();
// const db = client.db("employee");
//   const collection = db.collection("employee_info");

  // const res = await collection.deleteOne({name:"tanu"})
//   const res = await collection.deleteMany({age:20})

//   console.log(res);
// }

// <---------------------- find one/update/replace item ------------------------>
// try{
//       await client.connect();
//     const database = client.db("employee");
//     const collection= database.collection("employee_info")
//     // const res  = await collection.findOne({name:"nidhi"});
//     // const res  = await collection.findOneAndUpdate({age:20},{$set:{age:18}})
//     const res  = await collection.findOneAndReplace({age:25},{name:"om",age:21,role:"junior developer"})
//     console.log(res._id);
// }

// <---------------------- sort() ------------------------>

// try{
// await client.connect();
// const db = client.db("employee")
// const collection = db.collection("employee_info")
// const res = collection.find().sort({age:1}).toArray();
// console.log(collection);
// }

// <---------------------- copyTo() ------------------------>
// copyTo() method is used to copies all the documents from one collection(Source collection)
//  to another collection(Target collection) using server-side JavaScript and if that other 
//  collection(Target collection) is not present then MongoDB
//  creates a new collection with that name. This method uses eval command internally.     
// try{
//   await client.connect();
//     const db1 = client.db("employee");
//     const sourceCollection = db1.collection("employee_info");
//     const db2 = client.db("students");
//     const destCollection = db2.collection("student_info");
    

//         // Fetch all documents from the source collection
//         const documents  = await sourceCollection.find().toArray();
//        if(documents.length>0){
//         const res = await destCollection.insertMany(documents);
//         console.log(`${res.insertedCount} documents were copied to the destination collection.`);
//        }else{
//         console.log("No documents found.");
//        }

// }

// <---------------------- delete one/many item ------------------------>

// try{
//    await client.connect();
//    const db = client.db("employee")
// const collection = db.collection("student_info")
// const res = await collection.deleteMany({age:28})
// console.log(res);
// }


// <----------------------count()  method ------------------------>

// try{
//   await client.connect();
//      const db = client.db("employee")
//   const collection = db.collection("employee_info")
  // const res = await collection.count() // return number of collections 
  // const res = await collection.count({age:18})   // deprecated
  // const res = await collection.countDocuments({age:18})


//   console.log(res);
// }


// <----------------------drop collection ------------------------>

// try{
//   await client.connect();
//     const db = client.db("students")
//     const collection = db.collection("student_info")
//     const res = await collection.drop() // drop the database
//     console.log(res);
// }


// <--------------------- distinct() method --------------> 
// MongoDB distinct() method finds the distinct values for a given field 
// across a single collection and returns the results in an array.

// try{
//   await client.connect();
//     const db = client.db("employee")
//     const collection = db.collection("employee_info")
//     // const res = await collection.distinct("name")  // return array of distinct names 
//     const res = await collection.distinct("age")
//     console.log(res);
// }

// <--------------------- limit() method --------------> 
// the limit() method limits the number of records or documents that you want.
//  It basically defines the max limit of records/documents that you want.
try{
  await client.connect();
    const db = client.db("employee")
    const collection = db.collection("employee_info")
    // const res = await collection.find().limit(0) // no limit
    const res = await collection.find().limit(3)
    console.log(res);
}
catch(err){
  console.log(err);
}
 //  finally {
  //   await client.close();
  // }
}

run().catch(console.dir);












