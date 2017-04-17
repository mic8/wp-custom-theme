<?php

function customtheme_setup() {
    load_theme_textdomain('customtheme');

    add_theme_support('automatic-feed-links');

    add_theme_support('title-tag');

    add_theme_support('post-thumbnails');

    register_nav_menus(array(
        'top' => __('Top Menu', 'customtheme')
    ));
}
add_action('after_setup_theme', 'customtheme_setup');