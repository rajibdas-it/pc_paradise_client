const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
    const productsCollection = client.db("pc_paradise").collection("products");
    if (req.method === "GET") {
      const productId = req.query.id;
      console.log(productId);
      console.log(req.params);
      const product = await productsCollection.fineOne({
        _id: new ObjectId(productId),
      });
      res.send({ message: "success", status: 200, data: product });
    }
  } finally {
  }
}

export default run;
