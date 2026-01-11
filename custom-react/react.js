
function createElement(element, container){
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children;
    domElement.setAttribute('href',element.props.href);
    domElement.setAttribute('target',element.props.target);

    container.appendChild(domElement)
}

const reactElement = {
    type: "a",
    childern:"Click to go to Google",
    props: {
        href:"https://google.com",
        target:"_blank"
    }
};

const mainContainer = document.getElementById("root")

createElement(reactElement,mainContainer)