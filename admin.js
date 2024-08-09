import CMS from "decap-cms-app";

// Initialize the CMS object
CMS.init({
  config: {
    backend: {
      name: "git-gateway",
      branch: "master",  // or 'main' if that's your branch name
    },
    media_folder: "static/images/uploads",
    public_folder: "/images/uploads",
  },
});
