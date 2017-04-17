<?php
?>

<div class="brand">
    <a href="<?php echo get_home_url(); ?>">Wordskills 2017</a>
</div>

<?php wp_nav_menu(array(
    'theme_location' => 'top',
    'container_class' => 'nav',
    'menu_id' => 'top-menu'
)); ?>
