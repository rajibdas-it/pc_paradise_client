const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://pc_paradise:Jz31ozqZOc2dDPMC@cluster0.fe8xrlp.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const categoryCollection = client
      .db("pc_paradise")
      .collection("categories");
    if (req.method === "GET") {
      const categories = await categoryCollection.find({}).toArray();
      res.send({
        message: "success",
        status: 200,
        data: categories,
      });
    }
  } finally {
  }
}

export default run;
