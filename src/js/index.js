import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  if (variables.name == null) variables.name = "Gendo";
  if (variables.lastname == null) variables.lastname = "Ikari";
  if (variables.role == null) variables.role = "Nerv Director";
  if (variables.city == null) variables.city = "Tokio 3";
  if (variables.country == null) variables.country = "Japan";
  if (variables.socialMediaPosition == "position-left")
    variables.socialMediaPosition = "position-left";
  if (variables.twitter == null) variables.twitter = "tele1313";
  if (variables.github == null)
    variables.github = "terriblehackskeyboard/keyboard";
  if (variables.linkedin == null)
    variables.linkedin = "in/gendo-ikari-b1b63486";
  if (variables.instagram == null) variables.instagram = "evangelion__memes";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city}; ${variables.country}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a target="_blank" href="https://twitter.com/${
              variables.twitter
            }"><i class="fa fa-twitter"></i></a></li>
            <li><a target="_blank" href="https://github.com/${
              variables.github
            }"><i class="fa fa-github"></i></a></li>
            <li><a target="_blank" href="https://linkedin.com/${
              variables.linkedin
            }"><i class="fa fa-linkedin"></i></a></li>
            <li><a target="_blank" href="https://instagram.com/${
              variables.instagram
            }"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://vignette.wikia.nocookie.net/evangelion/images/a/a3/Nerv-logo.jpg/revision/latest/scale-to-width-down/340?cb=20110215172843&path-prefix=es",
    // this is the url for the profile avatar
    avatarURL:
      "https://pm1.narvii.com/7072/bcaf2c55d9f671da41fd9884bea8c136fe201496r1-259-194v2_uhq.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? null
          : this.value == "true"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
