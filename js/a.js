let qute = [
  {
    title: "“ When you have a dream, you’ve got to grab it and never let go. ”",
    name: "~ Carol Burnett ~",
  },
  {
    title:
      "Don't worry when you are not recognized, but strive to be worthy of recognition",
    name: "~ Abraham Lincoln ~",
  },
];

function choose() {
  let cartona = "";
  for (let i = 0; i < qute.length; i++) {
    cartona += `<h1>${qute[i].title}</h1>
                    <h3>${qute[i].name}</h3>`;
  }
  document.getElementById("demo").innerHTML = cartona;
}
