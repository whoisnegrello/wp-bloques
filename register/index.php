<?php

add_action( 'init', 'plz_register_blocks' );
function plz_register_blocks() {
	$assets_file = include_once PLZ_PATH . '/blocks/register/build/index.asset.php';

	wp_register_script(
		'plz-register-block',
		plugins_url( './build/index.js', __FILE__ ),
		$assets_file['dependencies'],
		$assets_file['version']
	);

	wp_register_style(
		'plz-register-block',
		plugins_url( './build/index.css', __FILE__ ),
		array(),
		$assets_file['version']
	);

	register_block_type(
		'plz/register',
		array(
			'editor_script' => 'plz-register-block',
			'script'        => 'plz-registro',
			'style'         => 'plz-register-block',
		)
	);
}
