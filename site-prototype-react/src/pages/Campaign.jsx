import React from 'react';

const Campaign = () => {
    return (
        <div className="container mt-5">
            <h1>The Campaign</h1>
            <h2>Find Your Place in the Remnant Project</h2>
            <p>We're building something powerful — a digital movement to preserve Black history and culture, and we want you on the team. Whether you're a creative, a techie, an organizer, or just someone who cares, there's a role for you.</p>
            
            <h4 className="mt-5">Here's how you can get involved:</h4>
            <div className="row mt-4">
                <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded shadow-sm">📞 Phone bank to connect with the community</div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded shadow-sm">✍️ Write letters to senators to make change happen</div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded shadow-sm">🗂️ Help digitize endangered archives</div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded shadow-sm">🖼️ Co-create virtual exhibits that tell our stories</div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded shadow-sm">📈 Boost our message through social media</div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded shadow-sm">👕 Help design or promote merch that supports the mission</div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded shadow-sm">🧑‍🤝‍🧑 Support or sponsor healing circles</div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded shadow-sm">📚 Build curriculum to teach and empower</div>
                </div>
            </div>

            <div className="text-center my-4">
                <p>Not sure where you fit yet? No pressure — just take our quick “What’s Your Role in the Movement?” survey.
                    <br></br>It’s like a vibe check for how you can plug in. Whether you’re a Memory Keeper, Digital Griot, Healing Builder, or Message Amplifier, we’ll help you find your lane.</p>
                <a href="#" className="btn btn-primary btn-lg">👉 Take the Survey Now!</a>
            </div>

            <div className="text-center my-4">Or just fill out the form — we’ll be in touch to help you get started.<br />
            This is a community effort, and we need each other to win.
            </div>
        </div>
    );
};

export default Campaign;