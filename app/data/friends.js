//Router, points server to the right route files
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

var friendsList = 

[{
    "name":"Joe",
    "photo":"",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    "name":"Jane",
    "photo":"",
    "scores":[
        4,
        2,
        3,
        3,
        4,
        2,
        1,
        4,
        3,
        2
      ]
},
{
    "name":"Mary",
    "photo":"",
    "scores":[
        3,
        5,
        2,
        2,
        3,
        5,
        5,
        3,
        2,
        5
      ]
}];

module.exports = friendsList;
