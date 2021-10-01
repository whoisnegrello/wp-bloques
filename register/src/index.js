import {registerBlockType} from "@wordpress/blocks";

import edit from "./edit";
import "./styles.scss";

registerBlockType("plz/register", {
  title: "Register",
  category: "widgets",
  icon: "admin-users",
  attributes: {
    title: {
      source: "html",
      selector: "h1",
      default: "Register"
    },
    nameLabel: {
      type: "string",
      default: "Name"
    }
  },
  edit,
  save: () => <h2>Register</h2>
});