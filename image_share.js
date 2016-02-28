if (Meteor.isClient) {
  var img_data = [
    {
      img_src: "cat.png",
      img_alt: "a cute cat"
    },
    {
      img_src: "dog.jpg",
      img_alt: "a nice dog"
    },
    {
      img_src: "bird.jpg",
      img_alt: "pretty bird"
    },

    ]

  Template.images.helpers({images: img_data});
}

if (Meteor.isServer) {
  console.log("I am the server");
}
