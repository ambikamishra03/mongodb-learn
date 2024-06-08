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


try{

}
catch(err){
  console.log(err);
}
 //  finally {
  //   await client.close();
  // }
}

run().catch(console.dir);
