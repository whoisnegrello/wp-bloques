import { useBlockProps } from "@wordpress/block-editor";
import apiFetch from "@wordpress/api-fetch";
import { useState, useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import {Panel, PanelBody, SelectControl} from "@wordpress/components"

const Edit = (props) => {
  const {attributes, setAttributes} = props;
  const {category} = attributes;
  const blockProps = useBlockProps();
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchPosts = async () => {
    let path = "/wp/v2/posts";
    if (category) path = path + `?categories=${category}`;
    const newPosts = await apiFetch({ path });
    setPosts(newPosts);
  };

  const fetchCategories = async () => {
    const path = "/wp/v2/categories?hide_empty=true";
    const newCategories = await apiFetch({path});
    const filterCategories = newCategories.map((currentCategory) => {
      return {
        label: currentCategory.name,
        value: currentCategory.id,
      }
    });
    setCategories(filterCategories);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [category]);

  return (
    <>
    {categories.length > 0 &&
      <InspectorControls>
        <Panel>
          <PanelBody title="Categories" initialOpen={true}>
            <SelectControl
              label="Current Category"
              value={category || 1}
              options={categories}
              onChange={(newCategory) => setAttributes({category: newCategory})}
            />
          </PanelBody>
        </Panel>
      </InspectorControls>
    }
    {posts.length > 0 &&
      <div {...blockProps}>
        <h3>Quizás te interese leer esto:</h3>
        <ul className="posts">
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <a href={post.link}>{post.title.rendered}</a>
              </li>
            );
          })}
        </ul>
      </div>
      }
    </>
  );
};

export default Edit;
