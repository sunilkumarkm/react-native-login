"use strict";

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import login from './login';

module.exports = combineReducers({
  form: formReducer,
  auth: login
});