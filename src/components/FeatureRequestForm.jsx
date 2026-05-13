'use client';
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import LightbulbIcon from "@/components/icons/LightbulbIcon";
import "../styles/FeatureRequest.css";

const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const FeatureRequestForm = () => {
    const [state, handleSubmit, reset] = useForm(FORMSPREE_FORM_ID);

    return (
        <div className="fr-card">
            <div className="fr-header">
                <div className="fr-icon">
                    <LightbulbIcon width={40} height={40} />
                </div>
                <h1 className="fr-title">Request a Feature</h1>
                <p className="fr-subtitle">
                    Have an idea that would make Cube Crafter better? We&apos;d love
                    to hear it. Fill out the form below and the team will review it.
                </p>
            </div>

            {state.succeeded ? (
                <div className="fr-success" role="status">
                    <h2>Thanks for the suggestion!</h2>
                    <p>Your feature request has been received. We&apos;ll take a look soon.</p>
                    <button
                        type="button"
                        className="fr-secondary-btn"
                        onClick={reset}
                    >
                        Submit another
                    </button>
                </div>
            ) : (
                <form className="fr-form" onSubmit={handleSubmit} noValidate>
                    <div className="fr-field">
                        <label htmlFor="name">Your name <span className="fr-optional">(optional)</span></label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="e.g. Alex"
                            autoComplete="name"
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="fr-error" />
                    </div>

                    <div className="fr-field">
                        <label htmlFor="email">Email <span className="fr-optional">(optional, for follow-up)</span></label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="fr-error" />
                    </div>

                    <div className="fr-field">
                        <label htmlFor="discord">Discord username <span className="fr-optional">(optional)</span></label>
                        <input
                            id="discord"
                            name="discord"
                            type="text"
                            placeholder="username"
                        />
                        <ValidationError prefix="Discord" field="discord" errors={state.errors} className="fr-error" />
                    </div>

                    <div className="fr-field">
                        <label htmlFor="category">Category</label>
                        <select id="category" name="category" defaultValue="General" required>
                            <option value="General">General</option>
                            <option value="Scrambles">Scrambles</option>
                            <option value="Timer">Timer</option>
                            <option value="Stats & Tracking">Stats & Tracking</option>
                            <option value="Leaderboards">Leaderboards</option>
                            <option value="Daily / Reminders">Daily / Reminders</option>
                            <option value="UI / Embeds">UI / Embeds</option>
                            <option value="Other">Other</option>
                        </select>
                        <ValidationError prefix="Category" field="category" errors={state.errors} className="fr-error" />
                    </div>

                    <div className="fr-field">
                        <label htmlFor="title">Feature title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="A short summary"
                            required
                            maxLength={120}
                        />
                        <ValidationError prefix="Title" field="title" errors={state.errors} className="fr-error" />
                    </div>

                    <div className="fr-field">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            rows={6}
                            placeholder="Describe the feature, why it would be useful, and how you imagine it working."
                            required
                            minLength={20}
                            maxLength={4000}
                        />
                        <ValidationError prefix="Description" field="description" errors={state.errors} className="fr-error" />
                    </div>

                    {/* Honeypot field for bot filtering — hidden from users via CSS */}
                    <input
                        type="text"
                        name="_gotcha"
                        tabIndex={-1}
                        autoComplete="off"
                        className="fr-honeypot"
                        aria-hidden="true"
                    />

                    {/* Lets Formspree set a clearer email subject */}
                    <input
                        type="hidden"
                        name="_subject"
                        value="New Cube Crafter feature request"
                    />

                    {/* Generic form-level errors (rate limit, network, etc.) */}
                    <ValidationError errors={state.errors} className="fr-error" />

                    <button
                        type="submit"
                        className="fr-submit-btn"
                        disabled={state.submitting}
                    >
                        {state.submitting ? 'Submitting…' : 'Submit request'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default FeatureRequestForm;
