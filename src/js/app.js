import { Application } from './config/pixi';
import setting from './config/default_settings';
import AppController from './controller/controller';
import ViewController from './view/view';
import ModelController from './model/model';

let app;

// SETUP APP WIDTH AND HEIGHT
setting.app = setting.app || {};
setting.app.width = window.innerWidth;
setting.app.height = window.innerHeight / 1.2;

// INIT PIXI APPLICATION
app = new Application({
  width: setting.app.width,
  height: setting.app.height,
  antialias: true,
  transparent: true,
  resolution: 1,
});

// INIT VIEW CONTROLLER
const view = new ViewController();
const model = new ModelController();
// INIT APP CONTROLLER
const controller = new AppController(app, view, model);
controller.startAction();

export default app;
