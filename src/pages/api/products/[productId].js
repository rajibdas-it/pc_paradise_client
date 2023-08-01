const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fe8xrlp.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  const productId = req.query.productId;
  try {
    await client.connect();
    const productsCollection = client.db("pc_paradise").collection("products");
    if (req.method === "GET") {
      console.log(req.params);
      const product = await productsCollection.findOne({
        _id: new ObjectId(productId),
      });
      res.send({ message: "success", status: 200, data: product });
    }
  } finally {
  }
}

export default run;
