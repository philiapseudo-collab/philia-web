import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
                    <h1>Terms of Service</h1>
                    <p className="text-gray-600">
                        <strong>Effective Date:</strong> January 22, 2026
                    </p>

                    <p>
                        Welcome to <strong>Philia Technologies</strong>. These Terms of
                        Service ("Terms") govern your use of our AI Sales Agent Integration
                        services, Merchant Dashboard, and related software (collectively, the
                        "Services"). By subscribing to or using our Services, you agree to be
                        bound by these Terms.
                    </p>

                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using the Services, you ("Merchant" or "Client")
                        agree to these Terms, our Privacy Policy, and any additional
                        guidelines we provide. If you do not agree, you must discontinue use
                        immediately.
                    </p>

                    <h2>2. Service Description</h2>
                    <p>
                        Philia Technologies provides <strong>AI Sales Agent Integration</strong> software that:
                    </p>
                    <ul>
                        <li>
                            Automates customer interactions on WhatsApp, Instagram, and TikTok.
                        </li>
                        <li>
                            Syncs product inventory and processes M-Pesa payments.
                        </li>
                        <li>
                            Provides a Merchant Dashboard for business management, analytics,
                            and reporting.
                        </li>
                    </ul>
                    <p>
                        <strong>Important Disclaimer:</strong> Philia Technologies provides
                        the software (AI Sales Agent) only. We are <strong>not</strong> a
                        party to any transaction between you (the Merchant) and your
                        customers (Buyers). You are solely responsible for:
                    </p>
                    <ul>
                        <li>Product quality, fulfillment, and delivery.</li>
                        <li>
                            Customer service, refunds, and dispute resolution related to your
                            products or services.
                        </li>
                        <li>Compliance with all applicable consumer protection laws.</li>
                    </ul>

                    <h2>3. Subscription and Payment Terms</h2>
                    <h3>3.1 Subscription Fees</h3>
                    <p>
                        Our Services are offered on a subscription basis. Pricing is
                        communicated at the time of sign-up and may vary based on the plan
                        selected (e.g., Starter, Professional, Enterprise).
                    </p>

                    <h3>3.2 Payment Method</h3>
                    <p>
                        Subscription fees are payable via M-Pesa or bank transfer. You
                        authorize us to charge your selected payment method on a recurring
                        basis (monthly or annually, as applicable).
                    </p>

                    <h3>3.3 Refund Policy</h3>
                    <p>
                        <strong>7-Day Refund Window:</strong> If you are not satisfied with
                        our Services, you may request a full refund within{" "}
                        <strong>7 days</strong> of your initial subscription payment.
                    </p>
                    <p>
                        After the 7-day grace period, all subscription fees are{" "}
                        <strong>non-refundable</strong>. Refund requests must be submitted in
                        writing to{" "}
                        <a href="mailto:philiatechnologieske@gmail.com">
                            philiatechnologieske@gmail.com
                        </a>
                        .
                    </p>

                    <h3>3.4 Auto-Renewal</h3>
                    <p>
                        Subscriptions automatically renew at the end of each billing period
                        unless you cancel before the renewal date. You may cancel your
                        subscription at any time via the Merchant Dashboard or by contacting
                        support.
                    </p>

                    <h2>4. Service Availability and Uptime</h2>
                    <p>
                        We strive to provide <strong>99% uptime</strong> for our Services.
                        However, we do <strong>not guarantee</strong> uninterrupted or
                        error-free service. Downtime may occur due to:
                    </p>
                    <ul>
                        <li>Scheduled maintenance (notified in advance).</li>
                        <li>
                            Third-party platform outages (e.g., WhatsApp, M-Pesa, TikTok).
                        </li>
                        <li>Force majeure events (e.g., natural disasters, cyberattacks).</li>
                    </ul>
                    <p>
                        We are not liable for any loss of revenue, data, or business
                        opportunities resulting from service interruptions.
                    </p>

                    <h2>5. Limitation of Liability</h2>
                    <p>
                        <strong>Critical Disclaimer:</strong> Philia Technologies provides
                        the AI Sales Agent as a software tool. We accept{" "}
                        <strong>no liability</strong> for:
                    </p>
                    <ul>
                        <li>
                            <strong>Failed Deliveries:</strong> If your products are not
                            delivered to customers, it is your responsibility to resolve the
                            issue.
                        </li>
                        <li>
                            <strong>Product Disputes:</strong> Disputes regarding product
                            quality, pricing, or descriptions must be handled between you and
                            the customer.
                        </li>
                        <li>
                            <strong>Lost Revenue:</strong> We are not responsible for financial
                            losses due to incorrect AI responses, payment failures, or platform
                            downtimes.
                        </li>
                        <li>
                            <strong>Third-Party Actions:</strong> We are not liable for actions
                            taken by WhatsApp, Instagram, TikTok, or Safaricom (M-Pesa) that
                            may affect your business.
                        </li>
                    </ul>
                    <p>
                        <strong>Maximum Liability:</strong> In no event shall Philia
                        Technologies' total liability exceed the amount of subscription fees
                        you paid in the 12 months preceding the claim.
                    </p>

                    <h2>6. Merchant Responsibilities</h2>
                    <p>
                        By using our Services, you agree to:
                    </p>
                    <ul>
                        <li>
                            Provide accurate product information, pricing, and inventory data.
                        </li>
                        <li>
                            Respond to customer inquiries and complaints in a timely manner.
                        </li>
                        <li>
                            Comply with all applicable laws, including the Consumer Protection
                            Act of Kenya, tax regulations, and platform policies (WhatsApp,
                            Instagram, TikTok).
                        </li>
                        <li>
                            Use the AI Sales Agent ethically and not to spam, mislead, or
                            defraud customers.
                        </li>
                    </ul>
                    <p>
                        <strong>Prohibited Uses:</strong> You may not use our Services to
                        sell illegal products, engage in fraudulent activities, or violate any
                        third-party rights.
                    </p>

                    <h2>7. Data Ownership and Privacy</h2>
                    <p>
                        <strong>Your Data:</strong> You retain ownership of all customer
                        data, product catalogs, and business information you provide to the
                        AI Sales Agent.
                    </p>
                    <p>
                        <strong>Our Use:</strong> We may use anonymized, aggregated data to
                        improve our Services and for internal analytics. For details, see our{" "}
                        <Link href="/privacy-policy" className="text-philia-purple hover:underline">
                            Privacy Policy
                        </Link>
                        .
                    </p>

                    <h2>8. Termination</h2>
                    <h3>8.1 Termination by You</h3>
                    <p>
                        You may cancel your subscription at any time. Access to the AI Sales
                        Agent and Merchant Dashboard will continue until the end of the
                        current billing period. No refunds will be issued for partial months.
                    </p>

                    <h3>8.2 Termination by Us</h3>
                    <p>
                        We reserve the right to suspend or terminate your account if:
                    </p>
                    <ul>
                        <li>You violate these Terms or engage in prohibited activities.</li>
                        <li>Payment fails after multiple attempts.</li>
                        <li>Your use of the Services poses a security risk or legal liability.</li>
                    </ul>
                    <p>
                        Upon termination, your data will be deleted within 90 days unless
                        required by law to retain it longer.
                    </p>

                    <h2>9. Intellectual Property</h2>
                    <p>
                        All software, code, algorithms, and branding (including the "Philia
                        Technologies" name and logo) are the exclusive property of Philia
                        Technologies. You are granted a limited, non-transferable license to
                        use the Services for your business purposes only.
                    </p>
                    <p>
                        You may not reverse-engineer, copy, resell, or redistribute our
                        software without written permission.
                    </p>

                    <h2>10. Governing Law and Jurisdiction</h2>
                    <p>
                        These Terms are governed by the <strong>laws of Kenya</strong>. Any
                        disputes arising from these Terms or the use of our Services shall be
                        resolved in the courts of Kenya.
                    </p>

                    <h2>11. Modifications to Terms</h2>
                    <p>
                        We reserve the right to update these Terms at any time. Changes will
                        be posted on this page with an updated "Effective Date." Continued
                        use of the Services after changes constitutes acceptance of the
                        updated Terms.
                    </p>

                    <h2>12. Contact Information</h2>
                    <p>
                        For questions, support, or to request a refund, please contact us:
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
                        By using Philia Technologies' AI Sales Agent Integration, you
                        acknowledge that you have read, understood, and agree to be bound by
                        these Terms of Service.
                    </p>
                </article>
            </main>
        </div>
    );
}
