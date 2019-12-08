"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.resource("/files", "FileController");

Route.get("/", "UserClientController.index");

Route.post("register_client", "UserClientController.store");

Route.post("register_epilator", "UserEpilatorController.store");

Route.post("session", "SessionController.store");

//Route.post("session_epilator", "SessionEpilatorController.store");

//fazer o que o client faz
