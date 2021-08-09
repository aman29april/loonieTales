// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.



require("trix")
require("@rails/actiontext")
require("jquery")

// import { ActionTextSyntaxHighlighter } from "@ayushn21/actiontext-syntax-highlighter"
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"


import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap'
import "@fortawesome/fontawesome-free/js/all"
import 'prismjs';
import 'copy-to-clipboard'
import "../trix-editor-overrides"


Rails.start()
Turbolinks.start()
ActiveStorage.start()
// Support component names relative to this directory:
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);


// ActionTextSyntaxHighlighter.start()

document.addEventListener('turbolinks:load', () => {
    // Prism.highlightAll();

    document.querySelectorAll('pre').forEach((element) => {
        // element.setAttribute("data-src", "plugins/toolbar/prism-toolbar.js");
        // element.setAttribute("data-prismjs-copy", "Copy");
        // element.classList.add("line-numbers");
        Prism.highlightElement(element);
    });
});


import 'bootstrap-tagsinput'
