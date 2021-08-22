import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import LoadData from "./LoadData";

const App = () => {
    return (
      <>
        <Header />
        <main>
          <h1>My Documents</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th className="name">Name</th>
                <th className="added">Uploaded</th>
              </tr>
            </thead>
            <tbody>
              <LoadData />
            </tbody>
          </table>
        </main>
        <Footer />
      </>
    );
}

render(<App />, document.getElementById('root'));