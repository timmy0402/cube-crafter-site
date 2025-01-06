import React from "react";
import '../../styles/Features.css';

const Policy = () => {
  return (
    <>
      <div className="policy">
        <h1 className="header">Privacy Policy for Cube Crafter</h1>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Cube Crafter! We value your privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and safeguard your data when you use our Discord bot.
        </p>
        <h2>2. Information We Collect</h2>
        <p>
          When you use Cube Crafter, we may collect the following information:
        </p>
        <ul>
          <li><strong>Discord User ID:</strong> A unique identifier assigned to you by Discord.</li>
          <li><strong>Solve Time:</strong> The time it takes for you to complete a task using our timer feature.</li>
          <li><strong>Command Usage:</strong> The command that you used.</li>
        </ul>
        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information for the following purposes: </p>
        <ul>
          <li><strong>To Provide and Improve Our Services:</strong> We use your Discord User ID and solve time to track your progress and enhance your experience with our bot</li>
          <li><strong>Analytics:</strong> We analyze the collected data to understand user average time.</li>
        </ul>
        <h2>4. Data Storage and Security</h2>
        <p>
          We take reasonable measures to protect your data from unauthorized access, alteration, or destruction. Your data is stored securely and is only accessible by authorized personnel.
        </p>
        <h2>5. Data Sharing and Disclosure</h2>
          <p>We do not share, sell, or disclose your personal information to third parties, except as required by law or with your explicit consent.</p>
        <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li><strong>Access Your Data:</strong> Request a copy of the data we hold about you.</li>
            <li><strong>Delete Your Data:</strong> Request the deletion of your data from our records.</li>
            <li><strong>Update Your Data:</strong> Request corrections to any inaccurate or incomplete data.</li>
          </ul>
        <h2>7. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
      </div>
    </>
  )
}

export default Policy;