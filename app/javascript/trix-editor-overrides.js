
// trix.config.blockAttributes.bold = { tagName: 'b' };

// document.addEventListener("trix-change", function (event) {
//     var element = document.querySelector("trix-editor")
//     var document = element.editor.getDocument()
//
// })
window.addEventListener("trix-file-accept", function(event) {
    const acceptedTypes = ['image/jpeg', 'image/png']
    if (!acceptedTypes.includes(event.file.type)) {
        event.preventDefault()
        alert("Only support attachment of jpeg or png files")
    }

    const maxFileSize = 1024 * 1024 // 1MB
    if (event.file.size > maxFileSize) {
        event.preventDefault()
        alert("Only support attachment files upto size 1MB!")
    }
})


const applyFormattingToPreBlocks = function () {
    const preElements = document.querySelector("trix-editor").querySelectorAll('pre');
    preElements.forEach(function(preElement) {
        const regex = /(?!lang\-\\w\*)lang-\w*\W*/gm;
        const codeElement = document.createElement('code');
        if (preElement.childNodes.length > 1) {
            console.error('<pre> element contained nested inline elements (probably styling) and could not be processed. Please remove them and try again.')
        }
        let preElementTextNode = preElement.removeChild(preElement.firstChild);
        let language = preElementTextNode.textContent.match(regex);
        if (language) {
            language = language[0].toString().trim();
            preElementTextNode.textContent = preElementTextNode.textContent.replace(language, '');
            codeElement.classList.add(language, 'line-numbers');
        }
        codeElement.append(preElementTextNode)
        preElement.append(codeElement)
    })
};