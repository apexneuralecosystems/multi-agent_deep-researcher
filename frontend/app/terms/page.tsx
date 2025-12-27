import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream font-sans text-burgundy">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        <Link href="/" className="inline-flex items-center text-sm text-burgundy/60 hover:text-salmon mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <article className="prose prose-burgundy prose-lg max-w-none bg-white p-8 md:p-16 rounded-2xl shadow-xl border border-burgundy/5">
          <h1 className="text-3xl font-bold text-burgundy mb-6 pb-2 border-b border-burgundy/10">
            Terms of Use
          </h1>
          <p className="text-burgundy/60 mb-6">Last Updated: 15-Dec-2025</p>
          
          <div className="space-y-6 text-burgundy/80 leading-relaxed">
            <section>
              <p className="mb-4">
                These Terms of Use ("Terms") govern your access to and use of this website, its related domains, subdomains, product-specific websites, mobile applications, APIs, dashboards, communications, and any related products and services operated by ApexNeural Private Limited ("ApexNeural", "we", "us", or "our") (collectively, the "Platform" or "Services").
              </p>
              <p className="mb-4">
                This website is owned and operated by ApexNeural Private Limited. All product websites, domains, and subdomains are properties of ApexNeural unless expressly stated otherwise.
              </p>
              <p className="mb-4">
                If you do not agree with these Terms or the applicable Privacy Policy available on this Website, you must not access or use the Platform.
              </p>
              <p className="mb-4">
                Accessing the Platform with or without creating an account constitutes your acceptance of these Terms.
              </p>
              <p className="mb-4">
                If you are accepting these Terms on behalf of a company or other legal entity, you represent that you are authorized to bind that entity. If you lack such authority, you must not access or use the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">1. Changes to Terms</h2>
              <p className="mb-4">
                We may revise these Terms at any time. Changes will be posted on the Platform, and the "Last Updated" date will be revised. Your continued use of the Platform following any update constitutes acceptance of the revised Terms.
              </p>
              <p className="mb-4">
                Your sole remedy if you do not agree with the revised Terms is to discontinue use of the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">2. Description of Services</h2>
              <p className="mb-4">
                ApexNeural provides artificial intelligence, machine learning, neural network–based tools, data processing, automation, and related software services.
              </p>
              <p className="mb-4">
                The Platform may contain experimental AI features, and may generate content that is inaccurate, biased, incomplete, or unreliable.
              </p>
              <p className="mb-4">
                The form, features, algorithms, and functionality of the Services may change or be discontinued at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">3. Eligibility</h2>
              <p className="mb-4">
                You must be at least 18 years old and legally capable of entering into binding contracts to use the Platform. By using the Services, you represent that you meet this requirement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">4. User Accounts</h2>
              <p className="mb-4">
                You are responsible for maintaining the confidentiality of your login credentials and for activities occurring under your account. You must notify us immediately at <a href="mailto:info@apexneural.com" className="text-salmon hover:underline">info@apexneural.com</a> of any unauthorized use.
              </p>
              <p className="mb-4">
                We are not responsible for any loss arising due to unauthorized access resulting from your failure to secure your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">5. Acceptable Use and Prohibited Activities</h2>
              <p className="mb-3">
                You agree not to (and not to permit others to):
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 mb-4">
                <li>use the Services for any illegal, unauthorized, harmful, or unethical purpose;</li>
                <li>upload, submit, or generate content that is defamatory, obscene, discriminatory, harmful, violates privacy, infringes intellectual property, or breaches any law;</li>
                <li>upload or use data without lawful rights, consents, or other valid legal basis as required under applicable laws, including the Digital Personal Data Protection Act, 2023 (India) and other relevant data protection laws;</li>
                <li>use the Services for high-risk activities such as autonomous weapons, medical or legal decision-making, critical infrastructure, scientific accuracy-critical systems, or applications requiring error-free outputs without independent verification;</li>
                <li>probe, scan, test vulnerability, breach or attempt to bypass security controls, rate limits, access restrictions, or authentication mechanisms;</li>
                <li>crawl, scrape, mine, or systematically copy data or outputs without explicit written consent;</li>
                <li>reverse-engineer, decompile, disassemble, reproduce, or attempt to derive source code, models, architecture, or underlying algorithms;</li>
                <li>resell, sublicense, rent, lease, white-label, or commercially exploit the Services without a separate written agreement;</li>
                <li>remove or alter any proprietary, copyright, or trademark notices;</li>
                <li>use the Services to generate deepfakes, discriminatory content, deceiving content, or misleading content intended to manipulate, harm, or defraud others.</li>
              </ul>
              <p className="mb-4">
                We may suspend or terminate your access immediately, with or without notice, for violation of this section.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">6. User Content and Outputs</h2>
              
              <h3 className="text-xl font-semibold text-burgundy/90 mt-6 mb-3">User Content</h3>
              <ul className="list-disc list-outside ml-6 space-y-2 mb-4">
                <li>User Content means any content (text, data, files, images, etc.) you submit to the Platform.</li>
                <li>You retain ownership of your User Content.</li>
                <li>By submitting User Content, you grant ApexNeural a worldwide, non-exclusive, royalty-free, irrevocable license to store, host, analyze, process, modify, adapt, aggregate, anonymize, distribute, and create derivative works from such User Content for the purposes of operating, delivering, securing, maintaining, analyzing, researching, developing, improving, and enhancing the Services, including training, tuning, and improving artificial intelligence and machine learning models, internal business operations, analytics, and product development, subject to applicable laws.</li>
              </ul>
              
              <p className="mb-3">You represent and warrant that you:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 mb-4">
                <li>own or have lawful rights to upload User Content; and</li>
                <li>have obtained necessary consents, including for personal data uploaded.</li>
              </ul>

              <h3 className="text-xl font-semibold text-burgundy/90 mt-6 mb-3">Output</h3>
              <p className="mb-3">
                "Outputs" means content generated by the Services.
              </p>
              <p className="mb-3">
                Outputs are licensed (not owned) by you for personal or internal business use only, subject to these Terms.
              </p>
              <p className="mb-3">
                Outputs may not be unique and may resemble content generated for others. ApexNeural does not guarantee accuracy, reliability, or third-party rights relating to Outputs.
              </p>
              <p className="mb-3">You are solely responsible for:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 mb-4">
                <li>use of Outputs, and</li>
                <li>verifying accuracy, legality, and suitability for intended use.</li>
              </ul>
              <p className="mb-4">
                ApexNeural may retain User Content for as long as reasonably necessary to fulfill the purposes outlined in these Terms, including operational, analytical, research, development, security, compliance, audit, and backup purposes. Aggregated or anonymized data that does not identify individuals may be retained indefinitely.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">7. Intellectual Property</h2>
              <p className="mb-4">
                All rights, title, and interest in the Platform, Services, algorithms, models, training data (excluding User Content), trademarks, software, and technology belong exclusively to ApexNeural or licensors.
              </p>
              <p className="mb-4">
                No rights are granted to you other than those expressly stated in these Terms. No implied rights or licenses are granted.
              </p>
              <p className="mb-4">
                All websites, domains, subdomains, and product-specific platforms operated under the ApexNeural brand are the exclusive property of ApexNeural Private Limited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">8. Payments and Refunds</h2>
              <p className="mb-4">
                Certain features may be free; others may require payment. Taxes are additional unless expressly stated.
              </p>
              <p className="mb-4">
                Payments are non-refundable unless required by applicable law or explicitly stated.
              </p>
              <p className="mb-4">
                In the case of chargebacks, failed payments, or non-payment, ApexNeural may suspend account access immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">9. Privacy</h2>
              <p className="mb-4">
                ApexNeural processes personal data in accordance with the applicable Privacy Policy published on the respective website. By using the Platform, you acknowledge and consent to such processing in accordance with applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">10. Third-Party Links and Integrations</h2>
              <p className="mb-4">
                The Platform may contain links or integrations to third-party services. ApexNeural is not responsible for the content, privacy practices, or availability of such third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">11. Termination</h2>
              <p className="mb-4">
                We may suspend or terminate your access with or without cause or notice.
              </p>
              <p className="mb-4">
                Upon termination, your right to use the Services ceases immediately.
              </p>
              <p className="mb-4">
                We may retain User Content and account information as required by law, fraud prevention, backup integrity, or audit purposes.
              </p>
              <p className="mb-4">
                Sections 5–17 survive termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">12. Disclaimer</h2>
              <p className="mb-4 font-semibold">
                THE PLATFORM AND SERVICES (INCLUDING AI OUTPUTS) ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND—EXPRESS, IMPLIED, OR STATUTORY—INCLUDING WARRANTIES OF ACCURACY, FITNESS, NON-INFRINGEMENT, MERCHANTABILITY, RELIABILITY, OR ERROR-FREE OPERATION.
              </p>
              <p className="mb-4 font-semibold">
                OUTPUTS DO NOT CONSTITUTE PROFESSIONAL (LEGAL, MEDICAL, FINANCIAL, TECHNICAL, OR SCIENTIFIC) ADVICE AND SHOULD NOT BE USED WITHOUT INDEPENDENT VERIFICATION.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">13. Limitation of Liability</h2>
              <p className="mb-4 font-semibold">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, APEXNEURAL AND ITS DIRECTORS, OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR LOSS OF PROFITS, DATA, REVENUE, OR BUSINESS.
              </p>
              <p className="mb-4">
                OUR TOTAL AGGREGATE LIABILITY RELATING TO THE PLATFORM OR THESE TERMS SHALL NOT EXCEED THE GREATER OF:
              </p>
              <p className="mb-4 ml-6">
                (A) INR 30,000; OR (B) THE FEES PAID BY YOU IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
              <p className="mb-4">
                This limitation does not apply to liability that cannot legally be excluded, including willful misconduct or fraud.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">14. Indemnification</h2>
              <p className="mb-3">
                You agree to defend, indemnify, and hold harmless ApexNeural, its employees, directors, officers, and agents from any losses, liabilities, damages, penalties, or expenses (including reasonable attorney fees) arising from:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 mb-4">
                <li>your use of the Services or Outputs,</li>
                <li>your breach of these Terms, or</li>
                <li>unlawful submission or misuse of personal data, confidential data, or third-party rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">15. Governing Law & Dispute Resolution</h2>
              <p className="mb-4">
                These Terms are governed by the laws of India.
              </p>
              <p className="mb-4">
                Disputes shall first be attempted to be resolved amicably within 30 days.
              </p>
              <p className="mb-4">
                Failing resolution, disputes shall be referred to final and binding arbitration in Hyderabad, Telangana, under the Arbitration and Conciliation Act, 1996 by a sole arbitrator mutually appointed by the parties.
              </p>
              <p className="mb-4">
                If the parties fail to agree within 15 days, the arbitrator shall be appointed in accordance with the Act.
              </p>
              <p className="mb-4">
                The seat and venue of arbitration shall be Hyderabad, Telangana.
              </p>
              <p className="mb-4">
                Subject to arbitration, courts in Hyderabad shall have exclusive jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">16. Miscellaneous</h2>
              
              <h3 className="text-xl font-semibold text-burgundy/90 mt-6 mb-3">Force Majeure</h3>
              <p className="mb-4">
                We are not liable for delayed performance caused by circumstances beyond our reasonable control.
              </p>

              <h3 className="text-xl font-semibold text-burgundy/90 mt-6 mb-3">Severability</h3>
              <p className="mb-4">
                If any provision is invalid, the remaining provisions remain in force.
              </p>

              <h3 className="text-xl font-semibold text-burgundy/90 mt-6 mb-3">No Waiver</h3>
              <p className="mb-4">
                Failure to enforce a right does not constitute a waiver.
              </p>

              <h3 className="text-xl font-semibold text-burgundy/90 mt-6 mb-3">Entire Agreement</h3>
              <p className="mb-4">
                These Terms and the Privacy Policy constitute the entire agreement between you and ApexNeural.
              </p>

              <h3 className="text-xl font-semibold text-burgundy/90 mt-6 mb-3">Contact</h3>
              <div className="bg-salmon/5 p-4 rounded-lg mt-4 border-l-4 border-salmon/50">
                <p className="mb-2">
                  ApexNeural Private Limited<br />
                  5th Floor, Shantha Sriram Building, PRS Towers,<br />
                  Gachibowli, K.V. Rangareddy,<br />
                  Telangana - 500032
                </p>
                <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@apexneural.com" className="text-salmon hover:underline">info@apexneural.com</a></p>
              </div>
            </section>
          </div>
        </article>
        
        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-burgundy/10">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="text-center text-sm text-burgundy/60">
              <p className="mb-2">© 2025 ApexNeural. All rights reserved.</p>
              <div className="flex justify-center gap-6">
                <Link href="/privacy" className="hover:text-salmon transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-salmon transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
