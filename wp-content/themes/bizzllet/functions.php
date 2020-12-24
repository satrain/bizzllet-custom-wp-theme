<?php

function load_stylesheets() {

    wp_register_style('styles', get_template_directory_uri() . '/assets/css/style.css', array(), 1, 'all');
    wp_enqueue_style('styles');

    wp_register_style('burger', get_template_directory_uri() . '/assets/css/burger.css', array(), 1, 'all');
    wp_enqueue_style('burger');

    wp_register_style('payments', get_template_directory_uri() . '/assets/css/payments.css', array(), 1, 'all');
    wp_enqueue_style('payments');

    wp_register_style('invoicing', get_template_directory_uri() . "/assets/css/invoicing.css", array(), 1, 'all');
    wp_enqueue_style('invoicing');

    wp_register_style('payroll', get_template_directory_uri() . "/assets/css/payroll.css", array(), 1, 'all');
    wp_enqueue_style('payroll');

    wp_register_style('identity', get_template_directory_uri() . '/assets/css/identity.css', array(), 1, 'all');
    wp_enqueue_style('identity');

    wp_register_style('tokenization', get_template_directory_uri() . "/assets/css/tokenization.css", array(), 1, 'all');
    wp_enqueue_style('tokenization');
}

add_action('wp_enqueue_scripts', 'load_stylesheets');



// Load scripts

function addjs() {

    wp_register_script('main', get_template_directory_uri() . '/assets/js/main.js', array(), 1, 1, 1);
    wp_enqueue_script('main');

    wp_register_script('stars', get_template_directory_uri() . '/assets/js/stars.js', array(), 1, 1, 1);
    wp_enqueue_script('stars');

    wp_register_script('payments', get_template_directory_uri() . '/assets/js/payments.js', array(), 1, 1, 1);
    wp_enqueue_script('payments');

    wp_register_script('invoicing', get_template_directory_uri() . '/assets/js/invoicing.js', array(), 1, 1, 1);
    wp_enqueue_script('invoicing');

    wp_register_script('payroll', get_template_directory_uri() . '/assets/js/payroll.js', array(), 1, 1, 1);
    wp_enqueue_script('payroll');

    wp_register_script('tokenization', get_template_directory_uri() . '/assets/js/tokenization.js', array(), 1, 1, 1);
    wp_enqueue_script('tokenization');
}

add_action('wp_enqueue_scripts', 'addjs');