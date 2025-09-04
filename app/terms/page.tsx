import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ArrowLeft, Zap } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
            Terms and Conditions
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                By accessing and using BAKNODE's services, you accept and agree to be bound by the terms and provision
                of this agreement.
              </p>
              <p>If you do not agree to abide by the above, please do not use this service.</p>
            </CardContent>
          </Card>

          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">2. Services Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                BAKNODE provides business automation solutions, system integrations, web applications, and related
                technology services.
              </p>
              <p>
                Our services include but are not limited to: automation engineering, systems integration, AI enablement,
                web application development, and custom business solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">3. Client Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Clients are responsible for providing accurate information, timely feedback, and necessary access to
                systems required for project completion.
              </p>
              <p>
                Clients must ensure they have proper authorization to integrate or modify systems as part of our
                services.
              </p>
            </CardContent>
          </Card>

          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">4. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                All custom solutions developed by BAKNODE remain the intellectual property of the client upon full
                payment.
              </p>
              <p>
                BAKNODE retains rights to general methodologies, frameworks, and non-client-specific innovations
                developed during the course of providing services.
              </p>
            </CardContent>
          </Card>

          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">5. Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Payment terms are specified in individual service agreements. Generally, payments are due within 30 days
                of invoice date unless otherwise agreed.
              </p>
              <p>Late payments may incur additional fees as specified in the service agreement.</p>
            </CardContent>
          </Card>

          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">6. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                BAKNODE's liability is limited to the amount paid for services. We are not liable for indirect,
                incidental, or consequential damages.
              </p>
              <p>
                Clients are responsible for maintaining backups and ensuring business continuity during system
                modifications.
              </p>
            </CardContent>
          </Card>

          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">7. Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Either party may terminate services with 30 days written notice. Termination does not affect payment
                obligations for services already provided.
              </p>
            </CardContent>
          </Card>

          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">8. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For questions about these terms, please contact us through our website contact form or email us
                directly.
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
