import {registerBlockType} from "@wordpress/blocks";

import edit from "./edit";
import "./styles.scss";

registerBlockType("plz/register", {
  title: "Register",
  category: "widgets",
  icon: "admin-users",
  edit,
  save: () => <h2>Register</h2>
});