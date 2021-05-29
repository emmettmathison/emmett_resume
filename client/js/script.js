let resume = $(".resume");
let bio = $(".bio");
let resumeLink = $(".resumeLink");
let bioLink = $(".bioLink");
let resumeLinkMobile = $(".resumeLinkMobile");
let bioLinkMobile = $(".bioLinkMobile");

resumeLink.on("click", function () {
  resume.css({ display: "grid" });
  bio.css({ display: "none" });
});

bioLink.on("click", function () {
  bio.css({ display: "grid" });
  resume.css({ display: "none" });
});

bioLinkMobile.on("click", function () {
  bio.css({ display: "grid" });
  resume.css({ display: "none" });
});

resumeLinkMobile.on("click", function () {
  resume.css({ display: "grid" });
  bio.css({ display: "none" });
});
