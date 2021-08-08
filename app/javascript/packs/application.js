// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.



require("trix")
require("@rails/actiontext")

// import { ActionTextSyntaxHighlighter } from "@ayushn21/actiontext-syntax-highlighter"
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap'
import "@fortawesome/fontawesome-free/js/all"
import 'prismjs';
import 'copy-to-clipboard'

Rails.start()
Turbolinks.start()
ActiveStorage.start()
// Support component names relative to this directory:
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);


// ActionTextSyntaxHighlighter.start()

document.addEventListener('turbolinks:load', () => {
    Prism.highlightAll();
});

import "../trix-editor-overrides"
