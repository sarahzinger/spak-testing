import ReactDOM from "react-dom";
import React from "react";
import { App } from "spak";
import { ProvidedAppDelegate } from "spak/providers";


class Main extends React.Component {
    render() {
        return <div>Spak It</div>
    }
}


var presentIt = () => ReactDOM.render(<Main />, document.querySelector("main"));

App.run(
    new App.Components(
    ),
    new App.Config(),
    new ProvidedAppDelegate({
        createSpecsBuilder() {
            // return new DIBuilder();
        },
        onReady() {
            presentIt()
        }
    })
);
