function slugified(town, venue) {
  town = town.replace(/^\s+|\s+$/g, ""); // trim
  town = town.toLowerCase();
  venue = venue.replace(/^\s+|\s+$/g, ""); // trim
  venue = venue.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaaeeeeiiiioooouuuunc------";

  for (var i = 0, l = from.length; i < l; i++) {
    town = town.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }
  for (var i = 0, l = from.length; i < l; i++) {
    venue = venue.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  town = town
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes
  venue = venue
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes
  return "/" + town + "-event/" + venue;
}

// const string = slugified("Bristol", "Thekla");
// console.log(string);
// /bristol-events/thekla
// this is the output
