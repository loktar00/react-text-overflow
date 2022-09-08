import React from 'react';
import TextOverflow from 'react-text-overflow';

import './style.css';

const App = () => (
    <main className="main-container">
        <h2>Default</h2>
        <section>
            <p className="text-content">
                <TextOverflow text="this is some text that we want to truncate." />
            </p>
            <p>
                <TextOverflow text="this is some text that we want to truncate. Change the size of the window to check the truncation, it should truncate at the end." />
            </p>
        </section>
        <h2>Middile truncatation</h2>
        <section>
            <p className="text-content">
                <TextOverflow text="this is some text that we want to truncate." truncatePosition="middle" />
            </p>
            <p>
                <TextOverflow text="this is some text that we want to truncate. Change the size of the window to check the truncation, it should truncate in the center." truncatePosition="middle" />
            </p>
        </section>
        <h2>Start after the first character</h2>
        <section>
            <p className="text-content">
                <TextOverflow
                    truncatePosition="middle"
                    startLen={1}
                    text="this is some text that we want to truncate. Change the size of the window to check the truncation, it should truncate in the center."
                />
            </p>
            <p>
                <TextOverflow
                    truncatePosition="middle"
                    startLen={1}
                    text="this is some text that we want to truncate. Change the size of the window to check the truncation, it should truncate in the center."
                />
            </p>
        </section>
        <h2>Beginning of string truncate</h2>
        <section>
            <p className="text-content">
                <TextOverflow text="this is some text that we want to truncate." truncatePosition="start" />
            </p>
            <p>
                <TextOverflow text="this is some text that we want to truncate. Change the size of the window to check the truncation, it should truncate at the start." truncatePosition="start" />
            </p>
        </section>
    </main>
);

export default App;
