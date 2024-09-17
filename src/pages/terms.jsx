import React from "react";
import '../styles/Features.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  return(
    <>
      <Navbar/>
      <div className="term">
        <h1 className="header">Terms of Service for Cube Crafter</h1>

        <h2>1. Acceptance of Terms</h2>
        <p>By using Cube Crafter (the "Bot"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Bot.</p>

        <h2>2. Description of Service</h2>
        <p>Cube Crafter provides various features and services within the Discord platform, including but not limited to timers and tracking solve times.</p>

        <h2>3. User Responsibilities</h2>
        <ul>
            <li><strong>Compliance:</strong> You agree to use the Bot in compliance with all applicable laws and regulations.</li>
            <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your Discord account and any activities that occur under your account.</li>
        </ul>

        <h2>4. Data Collection and Use</h2>
        <p>We collect and use your data as described in our Privacy Policy. By using the Bot, you consent to the collection and use of your data in accordance with the Privacy Policy.</p>

        <h2>5. Prohibited Activities</h2>
        <p>You agree not to engage in any of the following prohibited activities:</p>
        <ul>
            <li>Using the Bot for any illegal or unauthorized purpose.</li>
            <li>Interfering with or disrupting the Bot or servers or networks connected to the Bot.</li>
            <li>Attempting to gain unauthorized access to any part of the Bot.</li>
        </ul>

        <h2>6. Termination</h2>
        <p>We reserve the right to terminate or suspend your access to the Bot at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the Bot, us, or third parties, or for any other reason.</p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>The Bot is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the Bot, including but not limited to its availability, reliability, or suitability for any particular purpose.</p>

        <h2>8. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (i) your use or inability to use the Bot; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein; (iii) any interruption or cessation of transmission to or from the Bot; (iv) any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Bot by any third party; or (v) any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Bot.</p>

        <h2>9. Changes to Terms</h2>
        <p>We may modify these Terms from time to time. We will notify you of any changes by posting the new Terms on this page. You are advised to review these Terms periodically for any changes. Your continued use of the Bot after any modifications to the Terms constitutes your acceptance of the new Terms.</p>
      </div>
      <Footer/>
    </>
  )
}

export default Terms;