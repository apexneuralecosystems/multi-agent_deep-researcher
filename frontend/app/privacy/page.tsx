import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream font-sans text-burgundy">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        <Link href="/" className="inline-flex items-center text-sm text-burgundy/60 hover:text-salmon mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <article className="prose prose-burgundy prose-lg max-w-none bg-white p-8 md:p-16 rounded-2xl shadow-xl border border-burgundy/5">
          <h1 className="text-3xl font-bold text-burgundy mb-6 pb-2 border-b border-burgundy/10">
            Privacy Policy
          </h1>
          <p className="text-burgundy/60 mb-6">Last updated: December 2025</p>
          
          <div className="space-y-6 text-burgundy/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">1. Introduction</h2>
              <p>
                AgenticDeepSearch ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our multi-agent deep research platform.
              </p>
              <p>
                By using our service, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our service.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-burgundy/90 mt-6 mb-3">2.1 Information You Provide</h3>
              <ul className="list-disc list-outside ml-6 space-y-2 mb-4">
                <li>Research queries and topics you submit</li>
                <li>Account information (if applicable)</li>
                <li>Communication data when you contact us</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-burgundy/90 mt-6 mb-3">2.2 Automatically Collected Information</h3>
              <ul className="list-disc list-outside ml-6 space-y-2 mb-4">
                <li>IP addresses and device information</li>
                <li>Usage patterns and interaction data</li>
                <li>Log files and timestamps</li>
                <li>Browser type and version</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 mb-4">
                <li>To provide, maintain, and improve our research services</li>
                <li>To process and respond to your research queries</li>
                <li>To monitor and analyze usage patterns</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">4. Data Protection and Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
              <p>
                We use industry-standard encryption and security protocols to safeguard your data. Access to personal information is restricted to authorized personnel only.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">5. Data Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 mb-4">
                <li>With service providers who assist in operating our platform (under strict confidentiality agreements)</li>
                <li>When required by law or to respond to legal processes</li>
                <li>To protect our rights, property, or safety, or that of our users</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">6. Your Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 mb-4">
                <li><strong>Access:</strong> Request access to your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Objection:</strong> Object to processing of your personal data</li>
                <li><strong>Portability:</strong> Request transfer of your data</li>
                <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p>To exercise these rights, please contact us using the information provided in the Contact Us section.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">7. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Research queries and results may be stored temporarily to improve service quality.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">8. Third-Party Services</h2>
              <p>
                Our service integrates with third-party APIs (LinkUp, OpenRouter) to provide research capabilities. These services have their own privacy policies governing the collection and use of information. We encourage you to review their privacy policies.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">9. Children's Privacy</h2>
              <p>
                Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-burgundy mt-8 mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-salmon/5 p-4 rounded-lg mt-4 border-l-4 border-salmon/50">
                <p className="mb-2"><strong>Email:</strong> privacy@agenticdeepsearch.com</p>
                <p className="mb-2"><strong>Website:</strong> <a href="https://researcherai.apexneural.cloud" className="text-salmon hover:underline">https://researcherai.apexneural.cloud</a></p>
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

