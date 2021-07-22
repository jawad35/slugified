function string_to_slug(str, venue) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();
  venue = venue.replace(/^\s+|\s+$/g, ""); // trim
  venue = venue.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaaeeeeiiiioooouuuunc------";

  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }
  for (var i = 0, l = from.length; i < l; i++) {
    venue = venue.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes
  venue = venue
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes
  return "/" + str + "-event-/" + venue;
}

const f = string_to_slug("Wazirabad-cheema-chok", "raja chok");
console.log(f);
