import { Routes, Route } from "react-router-dom";
import Dashboard from '../content/dashboard.component';
import NoMatch from "../content/nomatch.component";
import Test from "../content/test.component";
import Test2 from "../content/test2.component";

function Content() {
    return (
        <div className="container-fluid">
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/test" element={<Test />} />
                <Route path="/test2" element={<Test2 />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    );
}

export default Content;