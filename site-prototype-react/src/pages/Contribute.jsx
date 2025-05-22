import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, InputGroup, Collapse, Alert } from 'react-bootstrap';

// Import images
import demoSubmissionImg from '../assets/images/demo_submission.jpg';

const Contribute = () => { // Removed props
    const [exampleVisible, setExampleVisible] = useState(false);
    const [tagFormVisible, setTagFormVisible] = useState(false);
    const [optionalInfoOpen, setOptionalInfoOpen] = useState(false);

    const toggleExample = () => {
        setExampleVisible(!exampleVisible);
    };

    const toggleTagForm = () => {
        setTagFormVisible(!tagFormVisible);
    };

    const toggleOptionalInfo = () => {
        setOptionalInfoOpen(!optionalInfoOpen);
    };

    return (
        <> {/* Use Fragment instead of div */}
            {/* Removed AccessibilityPanel and Navbar */}
            <main className="container my-5" id="main-content">

                <Alert variant="info" className="mt-3 mb-5 alert-subtle-info">
                    This section is a demonstration of archive design and functionality. The items and data presented are for illustrative purposes only.
                </Alert>

                <h1 >Want to be part of the archive?</h1>

                <p className="lead">Share your story, images, or artifacts to help preserve our collective history for future generations.</p>

                {/* Example Submission Toggle */}
                <div className="alert alert-info mt-4 d-flex justify-content-between align-items-center" onClick={toggleExample} style={{ cursor: 'pointer' }}>
                    <div>
                        <i className="fas fa-question-circle me-2"></i>
                        <strong>Not sure what to do?</strong> Click here to see examples of how to submit items
                    </div>
                    <i className={`fas ${exampleVisible ? 'fa-chevron-up' : 'fa-chevron-down'} ms-auto`}></i>
                </div>

                {/* Example Submission */}
                <Collapse in={exampleVisible}>
                    <div className="example-submission">
                        <div className="example-header">
                            Both ways of sharing are valuable - you decide how much detail to provide!
                        </div>
                        <div className="example-content">
                            <div className="example-side">
                                <h4>Basic Submission</h4>
                                <img src={demoSubmissionImg} alt="Sample submission image" />
                                <p><strong>Your story:</strong> This photo shows my grandparents and extended family at our annual reunion in 1967. The photo was taken at Jefferson Park. My grandfather was one of the first Black business owners in the Central District, running a barbershop from 1946-1975. This was one of the few times the whole family was together.</p>
                            </div>
                            <div className="example-side">
                                <h4>Detailed Submission</h4>
                                <img src={demoSubmissionImg} alt="Sample submission image" />
                                <p><strong>Title:</strong> Johnson Family Reunion, 1967</p>
                                <p><strong>Your story:</strong> This photo shows my grandparents and extended family at our annual reunion in 1967. The photo was taken at Jefferson Park. My grandfather was one of the first Black business owners in the Central District, running a barbershop from 1946-1975.</p>
                                <p><strong>Date:</strong> June 14, 1967</p>
                                <p><strong>Location:</strong> Jefferson Park, Seattle</p>
                                <p><strong>People:</strong> Robert Johnson (grandfather), Martha Johnson (grandmother), and their six children with families</p>
                                <p><strong>Tags:</strong> Family History, Central District, 1960s, Community Gatherings</p>
                                <p><strong>Historical Context:</strong> During this time, the Central District was the center of Black culture in Seattle, as redlining had restricted where Black families could purchase homes.</p>
                            </div>
                        </div>
                    </div>
                </Collapse>

                <Form>
                    {/* File Upload Section */}
                    <Card className="my-4">
                        <Card.Body>
                            <h3>1. Upload Your Media</h3>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="mediaUpload">Upload photos, documents, videos, or audio files:</Form.Label>
                                <Form.Control type="file" id="mediaUpload" multiple />
                            </Form.Group>
                        </Card.Body>
                    </Card>

                    {/* Story Information Section */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h3>2. Tell Us Your Story</h3>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="contributionText">Describe your item or share your story:</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    id="contributionText"
                                    rows={5}
                                    placeholder="Tell us about this item. What is it? Why is it important? When and where is it from? Who is involved?"
                                />
                                <small className="text-muted mt-2 d-block">This is the most important part of your submission - please share as much detail as you feel comfortable with.</small>
                            </Form.Group>
                        </Card.Body>
                    </Card>

                    {/* Optional Information Section */}
                    <Card className="mb-4">
                        <Card.Header
                            role="button"
                            onClick={toggleOptionalInfo}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="mb-0">3. Optional Details (Click to Expand)</h3>
                                <i className={`fas fa-chevron-${optionalInfoOpen ? 'up' : 'down'}`}></i>
                            </div>
                        </Card.Header>

                        <Collapse in={optionalInfoOpen}>
                            <div>
                                <Card.Body>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="contributorName">Your Name (leave blank to submit anonymously):</Form.Label>
                                        <Form.Control type="text" id="contributorName" placeholder="Your name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="contributionTitle">Title for this item:</Form.Label>
                                        <Form.Control type="text" id="contributionTitle" placeholder="Give your submission a descriptive title" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="dateField">Date or Time Period:</Form.Label>
                                        <Form.Control type="text" id="dateField" placeholder="When did this happen? (year, decade, etc.)" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="locationField">Location:</Form.Label>
                                        <Form.Control type="text" id="locationField" placeholder="Where did this take place?" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="peopleField">People:</Form.Label>
                                        <Form.Control type="text" id="peopleField" placeholder="Who is in this story or image?" />
                                    </Form.Group>

                                    {/* Tags Section */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Suggested Tags:</Form.Label>
                                        <div className="d-flex flex-wrap mb-2">
                                            <button type="button" className="tag-button">Family</button>
                                            <button type="button" className="tag-button">Photo</button>
                                            <button type="button" className="tag-button">Central District</button>
                                            <button type="button" className="tag-button">1950s</button>
                                            <button
                                                type="button"
                                                className="tag-button"
                                                onClick={toggleTagForm}
                                            >
                                                + Add Tag
                                            </button>
                                        </div>

                                        {tagFormVisible && (
                                            <div className="tag-form">
                                                <InputGroup className="mb-2">
                                                    <Form.Control placeholder="Enter a tag..." />
                                                    <Button variant="secondary">Add</Button>
                                                </InputGroup>
                                            </div>
                                        )}
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="contextField">Historical Context:</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            id="contextField"
                                            rows={3}
                                            placeholder="Any historical background that helps understand this item?"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="permissionsField">Usage Permissions:</Form.Label>
                                        <Form.Select id="permissionsField">
                                            <option>Public domain - anyone can use this content</option>
                                            <option>Educational use only - can be used for teaching and research</option>
                                            <option>Private - viewable in the archive but not for reuse</option>
                                            <option>Custom - please describe below</option>
                                        </Form.Select>
                                        <Form.Control
                                            as="textarea"
                                            className="mt-2"
                                            id="customPermissions"
                                            rows={2}
                                            placeholder="If you selected 'Custom', please explain your usage preferences here"
                                        />
                                    </Form.Group>
                                </Card.Body>
                            </div>
                        </Collapse>
                    </Card>

                    <Button type="submit" size="lg" variant="primary">Submit Your Story</Button>
                </Form>
            </main>

            {/* Removed Footer */}
        </>
    );
};

export default Contribute;