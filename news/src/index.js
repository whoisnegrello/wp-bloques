import {registerBlockType} from "@wordpress/blocks";

import meta from "../block.json";
import edit from "./edit";

registerBlockType(meta, {
  edit,
  save: () => null,
});
