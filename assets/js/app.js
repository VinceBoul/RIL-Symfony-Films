/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.scss');
const $ = require('jquery');
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
require('bootstrap');
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');

const routes = require('../../public/js/fos_js_routes.json');
import Routing from '../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';

Routing.setRoutingData(routes);


$(document).ready(function() {

    $('.seen-movie-check').click(function(){

        let $that = $(this);
        let entityId = $that.data('entity-id');

        $.ajax({
            // Génération de la route
            url: Routing.generate('see_movie'),
            type: "POST",
                dataType: "json",
                data: {
                // Passage de l'ID de l'entité en paramètre
                "entity-id": entityId
            },
            async: true,
            success: function (data) {

                if (data.message === 'added'){
                    $that.addClass('seen');
                }else{
                    $that.removeClass('seen');
                }
            }
        });

    });

});
