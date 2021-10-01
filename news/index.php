<?php

function plz_news_render_callback( $block_attributes, $block_content ) {
	$return = '<p class=wp-block-plz-news>Hola</p>';
	return $return;
}

add_action( 'init', 'plz_news_block_init' );
function plz_news_block_init() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'plz_news_render_callback',
		)
	);
}
