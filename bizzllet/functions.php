<?php

function load_stylesheets() {

    wp_register_style('styles', get_template_directory_uri() . '/assets/css/style.css', array(), 1, 'all');
    wp_enqueue_style('styles');

    wp_register_style('burger', get_template_directory_uri() . '/assets/css/burger.css', array(), 1, 'all');
    wp_enqueue_style('burger');

}

add_action('wp_enqueue_scripts', 'load_stylesheets');



// Load scripts

function addjs() {

    wp_register_script('main', get_template_directory_uri() . '/assets/js/main.js', array(), 1, 1, 1);
    wp_enqueue_script('main');

}

add_action('wp_enqueue_scripts', 'addjs');