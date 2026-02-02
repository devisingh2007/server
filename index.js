const express = require("express");

const app = express();

const users=[
    {id:1, name:"Alice"},
    {id:2, name:"Bob"},
    {id:3, name:"Charlie"}
];

const posts=[
    {id:1, title:"First Post", content:"This is the content of the first post."},
    {id:2, title:"Second Post", content:"This is the content of the second post."},
    {id:3, title:"Third Post", content:"This is the content of the third post."}
]
app.get("/users", (req, res) => {
    res.send(users);
  });
app.get("/posts", (req, res) => {
    res.send(posts);
  });
  app.get("/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    if (post) {
      res.send(post);
    } else {
      res.status(404).send("Post not found");
    }
  });

app.get("/", (req, res) => {
  res.send("Express server is running");
});
app.get("/route2", (req, res) => {
  res.send("Express server2 is running");
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});