<?php ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=devide-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#content"><?php _e('Skip to content'); ?></a>

    <header class="site-header">

        <?php if(has_nav_menu('top')) : ?>
            <div class="navigation navigation-top">
                <div class="container">
                    <?php get_template_part('template-parts/navigation/navigation', 'top'); ?>
                </div>
            </div>
        <?php endif; ?>

    </header>

    <div class="site-content-contain">
        <div id="content" class="site-content">