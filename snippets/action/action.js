var page = tabris.create("Page", {
  title: "Actions",
  topLevel: true
});

tabris.create("Action", {
  title: "Action",
  image: "images/share.png"
}).on("selection", function() {
  console.log("Action selected.");
});

page.open();
