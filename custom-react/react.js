
function createElement(element, container){
    /*
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children;
    domElement.setAttribute('href',element.props.href);
    domElement.setAttribute('target',element.props.target);

    container.appendChild(domElement)
    */

    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children;
    for (const prop in element.props) {
        if (prop === "children") continue
        domElement.setAttribute(prop, element.props[prop])
    };

    container.appendChild(domElement)
}  

const reactElement = {
    type: "a",
    children:"Click to go to Google",
    props: {
        href:"https://google.com",
        target:"_blank"
    }
};

const mainContainer = document.getElementById("root")

createElement(reactElement,mainContainer)