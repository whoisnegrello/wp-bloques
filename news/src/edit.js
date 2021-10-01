import {useBlockProps} from "@wordpress/block-editor";

const Edit = (props) => {
  const blockProps = useBlockProps();
  return (
    <p {...blockProps}>Hola</p>
  );
};

export default Edit;