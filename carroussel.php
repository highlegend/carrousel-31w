<?php
/**
 * Extension carrousel permet d'afficher dans une boite mondale
 * les images d'une galerie
 * Package name: Carrousel
 * Version: 1.0.0
 */
/*
Plugin name: Carrousel
Author: Said Mehdi
Plugin URI: https:github.com/eddytuto/carroussel
Description: permet d'afficher dans une boite mondale les images d'une galerie avec un systeme de navigation



Nous ce qu'on doit faire cest perfectionner le systeme de navigation **

*/
wp_enqueue_style(   'em_plugin_carrousel_css',
plugin_dir_url(__FILE__) . "style.css",
array(),
$version_css);

wp_enqueue_script(  'em_plugin_carrousel_js',
plugin_dir_url(__FILE__) ."js/carrousel.js",
array(),
$version_js,
true);

?>