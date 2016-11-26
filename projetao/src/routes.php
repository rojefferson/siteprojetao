<?php
// Routes

use Firebase\FirebaseLib;



$app->get('/index', function ($request, $response, $args) {

		
	return $this->renderer->render($response, 'index.html', $args);
});

$app->get('/forms', function ($request, $response, $args) {

		
	return $this->renderer->render($response, 'forms.html', $args);
});

$app->get('/blank', function ($request, $response, $args) {

		
	return $this->renderer->render($response, 'blank.html', $args);
});


$app->get('/login', function ($request, $response, $args) {

		
	return $this->renderer->render($response, 'login.html', $args);
});


$app->get('/table', function ($request, $response, $args) {

		
	return $this->renderer->render($response, 'table.html', $args);
});

$app->get('/ui', function ($request, $response, $args) {

		
	return $this->renderer->render($response, 'ui.html', $args);
});