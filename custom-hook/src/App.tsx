import LoadingView from "./LoadingView.tsx";
import {Tab, Tabs} from "react-bootstrap";
import DataView from "./DataView.tsx";
import ErrorView from "./ErrorView.tsx";

function App() {

    return (
        <Tabs
            className="mb-3"
            mountOnEnter
            unmountOnExit
        >
            <Tab eventKey="Loading" title="Loading">
                <LoadingView/>
            </Tab>
            <Tab eventKey="Data" title="Data">
                <DataView/>
            </Tab>
            <Tab eventKey="Error" title="Error">
                <ErrorView/>
            </Tab>
        </Tabs>
    )
}

export default App
