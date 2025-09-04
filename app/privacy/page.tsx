import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ArrowLeft, Zap } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground relative overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="inline-flex items-center gap-2 group" aria-label="BAKNODE home">
            <div
              className="h-8 w-8 rounded-lg border-2 border-primary/50 bg-primary/10 flex items-center justify-center group-hover:border-primary transition-all duration-300 glow-effect"
              aria-hidden
            >
              <Zap className="h-4 w-4 text-primary" />
            </div>
            <span className="font-bold tracking-tight text-xl">BAKNODE</span>
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="fade-in-up">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-balance bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We collect information you provide directly to us, such as when you contact us for services, fill out
                forms, or communicate with our team.
              </p>
              <p>
                This may include your name, email address, company information, project details, and any other
                information you choose to provide.
              </p>
            </CardContent>
          </Card>

          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We use the information we collect to provide, maintain, and improve our services, communicate with you,
                and respond to your inquiries.
              </p>
              <p>
                We may also use your information to send you technical notices, updates, security alerts, and
                administrative messages.
              </p>
            </CardContent>
          </Card>

          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">3. Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy.
              </p>
              <p>
                We may share information with trusted service providers who assist us in operating our business,
                provided they agree to keep this information confidential.
              </p>
            </CardContent>
          </Card>

          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot
                guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">5. Client Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                When providing services, we may have access to client systems and data. We treat all client data with
                the highest level of confidentiality and security.
              </p>
              <p>
                We implement strict access controls, encryption, and other security measures to protect client data
                throughout our engagement.
              </p>
            </CardContent>
          </Card>

          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">6. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our website may use cookies and similar tracking technologies to enhance your experience and analyze
                website usage.
              </p>
              <p>
                You can control cookie settings through your browser preferences, though some features may not function
                properly if cookies are disabled.
              </p>
            </CardContent>
          </Card>

          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">7. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                You have the right to access, update, or delete your personal information. You may also opt out of
                certain communications from us.
              </p>
              <p>To exercise these rights, please contact us using the information provided on our website.</p>
            </CardContent>
          </Card>

          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">8. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page with an updated date.
              </p>
            </CardContent>
          </Card>

          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">9. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                If you have any questions about this privacy policy or our data practices, please contact us through our
                website contact form.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Link href="/">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
