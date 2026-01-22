import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
                    <h1 className="text-xl font-bold text-philia-purple">
                        Philia Technologies
                    </h1>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-philia-purple hover:text-philia-accent transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto max-w-3xl px-6 py-12">
                <article className="prose prose-purple prose-lg mx-auto">
                    <h1>Privacy Policy</h1>
                    <p className="text-gray-600">
                        <strong>Effective Date:</strong> January 22, 2026
                    </p>

                    <p>
                        At <strong>Philia Technologies</strong>, we are committed to
                        protecting your privacy and ensuring transparency in how we collect,
                        use, and safeguard your personal information. This Privacy Policy
                        governs the use of our AI Sales Agent services and Merchant
                        Dashboard platform.
                    </p>

                    <h2>1. Information We Collect</h2>
                    <p>
                        To provide our AI Sales Agent services, we may collect the following
                        types of information:
                    </p>
                    <ul>
                        <li>
                            <strong>Business Information:</strong> Business name, contact
                            details, and product/inventory data submitted via the Merchant
                            Dashboard.
                        </li>
                        <li>
                            <strong>Customer Interaction Data:</strong> Messages exchanged
                            between your customers and the AI Sales Agent on platforms such as
                            WhatsApp (Meta), Instagram (Meta), and TikTok.
                        </li>
                        <li>
                            <strong>Usage Analytics:</strong> Data on how the AI Sales Agent
                            performs, including response times, common queries, and sales
                            conversions.
                        </li>
                        <li>
                            <strong>Payment Metadata:</strong> Transaction IDs and timestamps
                            from M-Pesa payments (processed securely by Safaricom). We do{" "}
                            <strong>not</strong> store or have access to your M-Pesa PIN or
                            sensitive financial credentials.
                        </li>
                    </ul>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use the collected information for the following purposes:</p>
                    <ul>
                        <li>
                            <strong>Service Delivery:</strong> To operate the AI Sales Agent,
                            process orders, and sync inventory across platforms.
                        </li>
                        <li>
                            <strong>Performance Optimization:</strong> To analyze usage data
                            and improve the accuracy, speed, and reliability of the AI Sales
                            Agent.
                        </li>
                        <li>
                            <strong>Customer Support:</strong> To respond to inquiries,
                            troubleshoot issues, and provide technical assistance.
                        </li>
                        <li>
                            <strong>Legal Compliance:</strong> To comply with applicable laws
                            and regulations, including the Data Protection Act of Kenya (2019).
                        </li>
                    </ul>

                    <h2>3. Data Sharing and Third-Party Integrations</h2>
                    <p>
                        We integrate with the following third-party platforms to deliver our
                        services:
                    </p>
                    <ul>
                        <li>
                            <strong>WhatsApp Business API (Meta):</strong> Customer messages
                            are processed via Meta's infrastructure. Please review{" "}
                            <a
                                href="https://www.whatsapp.com/legal/privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WhatsApp's Privacy Policy
                            </a>
                            .
                        </li>
                        <li>
                            <strong>M-Pesa (Safaricom):</strong> Payment processing is handled
                            securely by Safaricom. We do not store your M-Pesa PIN or account
                            credentials. Please review{" "}
                            <a
                                href="https://www.safaricom.co.ke/privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Safaricom's Privacy Policy
                            </a>
                            .
                        </li>
                        <li>
                            <strong>Instagram & TikTok:</strong> Messages on these platforms
                            are subject to their respective privacy policies.
                        </li>
                    </ul>
                    <p>
                        <strong>We do not sell your personal data to third parties.</strong>
                    </p>

                    <h2>4. Data Security</h2>
                    <p>
                        We implement industry-standard security measures to protect your
                        data, including:
                    </p>
                    <ul>
                        <li>Encrypted data transmission (HTTPS/TLS).</li>
                        <li>Secure cloud storage with access controls.</li>
                        <li>Regular security audits and monitoring.</li>
                    </ul>
                    <p>
                        However, no method of transmission over the internet is 100% secure.
                        We cannot guarantee absolute security.
                    </p>

                    <h2>5. Data Retention</h2>
                    <p>
                        We retain your data only for as long as necessary to provide our
                        services or comply with legal obligations:
                    </p>
                    <ul>
                        <li>
                            <strong>Active Accounts:</strong> Data is retained while your
                            subscription is active.
                        </li>
                        <li>
                            <strong>Terminated Accounts:</strong> Data is deleted within{" "}
                            <strong>90 days</strong> of account termination, unless required by
                            law to retain it longer.
                        </li>
                    </ul>

                    <h2>6. Your Rights (Data Protection Act of Kenya)</h2>
                    <p>
                        Under the Data Protection Act of Kenya (2019), you have the following
                        rights:
                    </p>
                    <ul>
                        <li>
                            <strong>Access:</strong> Request a copy of the personal data we hold about you.
                        </li>
                        <li>
                            <strong>Rectification:</strong> Request correction of inaccurate or incomplete data.
                        </li>
                        <li>
                            <strong>Deletion:</strong> Request deletion of your data (subject to legal obligations).
                        </li>
                        <li>
                            <strong>Data Portability:</strong> Request your data in a structured, machine-readable format.
                        </li>
                        <li>
                            <strong>Objection:</strong> Object to the processing of your data for specific purposes.
                        </li>
                    </ul>
                    <p>
                        To exercise any of these rights, please contact us at{" "}
                        <a href="mailto:philiatechnologieske@gmail.com">
                            philiatechnologieske@gmail.com
                        </a>{" "}
                        or call <strong>+254 708 116 809</strong>.
                    </p>

                    <h2>7. Cookies and Tracking Technologies</h2>
                    <p>
                        Our Merchant Dashboard may use cookies and similar technologies to
                        improve user experience and analyze usage patterns. You can control
                        cookie preferences through your browser settings.
                    </p>

                    <h2>8. Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will
                        be posted on this page with an updated "Effective Date." Continued
                        use of our services after changes constitutes acceptance of the
                        updated policy.
                    </p>

                    <h2>9. Contact Information</h2>
                    <p>
                        If you have any questions or concerns about this Privacy Policy or our
                        data practices, please contact us:
                    </p>
                    <ul>
                        <li>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:philiatechnologieske@gmail.com">
                                philiatechnologieske@gmail.com
                            </a>
                        </li>
                        <li>
                            <strong>Phone:</strong> +254 708 116 809
                        </li>
                        <li>
                            <strong>Business Name:</strong> Philia Technologies
                        </li>
                    </ul>

                    <hr className="my-8" />

                    <p className="text-sm text-gray-500">
                        This Privacy Policy is governed by the <strong>Data Protection Act of Kenya (2019)</strong> and applies to all users of Philia Technologies' AI Sales Agent services.
                    </p>
                </article>
            </main>
        </div>
    );
}
