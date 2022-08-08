const app = document.getElementById("app");
const image = document.getElementById("image");
const input = document.getElementById("input");

const generate = () => {
  var result = input.value.toUpperCase();
  console.log(result);

  if (result === "BURUNG") {
    image.src =
      "https://cdn-brilio-net.akamaized.net/news/2017/09/29/132670/684450-burung-punya-tangan.jpg";
  } else if (result === "HARIMAU") {
    image.src =
      "https://th.bing.com/th/id/R.8fdc3849f038ee964b1d5645be32eb05?rik=etQDKMEYPuGMdA&riu=http%3a%2f%2fi0.kym-cdn.com%2fentries%2ficons%2ffacebook%2f000%2f022%2f476%2fharimau_bahagia.jpg&ehk=ZZ8%2fo1xoRZNM5CCa97jnxcCD2ORmA0eERvQ3LAnH6Ts%3d&risl=&pid=ImgRaw&r=0";
  } else if (result === "KUCING") {
    image.src =
      "https://4.bp.blogspot.com/-PnvDnmk-VUw/UWTnGqX5gBI/AAAAAAAAAPg/mqz1SwxcqlY/s1600/DSCN1133.JPG";
  } else {
    image.src =
      "https://space-made.com/wp-content/uploads/2019/04/gambar-orang-lucu-2.jpg";
  }
}; 