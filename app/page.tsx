"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Check, ChevronRight, Cpu, Sparkles, Wrench, Zap, Globe, Shield, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { useState } from "react"

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-xl fade-in-up">
      <h2 className="text-pretty text-2xl font-semibold tracking-tight md:text-3xl text-balance">{title}</h2>
      {subtitle ? <p className="mt-2 text-muted-foreground leading-relaxed">{subtitle}</p> : null}
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 fade-in-up">
      <CardHeader className="flex flex-row items-center gap-3 space-y-0">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/50 glow-effect">
          {icon}
        </div>
        <CardTitle className="text-base font-medium group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
      </CardContent>
    </Card>
  )
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 leading-relaxed slide-in-left">
      <Check className="mt-0.5 h-4 w-4 flex-none text-primary" aria-hidden />
      <span>{children}</span>
    </li>
  )
}

function MobileSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-background border-l border-primary/20 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-primary/20">
          <span className="font-bold tracking-tight text-xl">Menu</span>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <nav className="p-4" aria-label="Mobile navigation">
          <ul className="space-y-4">
            <li>
              <a
                className="block py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                href="#services"
                onClick={onClose}
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="block py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                href="#products"
                onClick={onClose}
              >
                Products
              </a>
            </li>
            <li>
              <a
                className="block py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                href="#clients"
                onClick={onClose}
              >
                Clients
              </a>
            </li>
            <li>
              <a
                className="block py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                href="#reviews"
                onClick={onClose}
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                className="block py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                href="#about"
                onClick={onClose}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="block py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                href="#contact"
                onClick={onClose}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="mt-6 pt-6 border-t border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Theme</span>
              <ThemeToggle />
            </div>
            <a href="#contact" onClick={onClose}>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
                Get Started
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <main className="bg-background text-foreground relative overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="#home" className="inline-flex items-center gap-2 group" aria-label="BAKNODE home">
            <div
              className="h-8 w-8 rounded-lg border-2 border-primary/50 bg-primary/10 flex items-center justify-center group-hover:border-primary transition-all duration-300 glow-effect"
              aria-hidden
            >
              <Zap className="h-4 w-4 text-primary" />
            </div>
            <span className="font-bold tracking-tight text-xl">BAKNODE</span>
          </Link>

          <nav aria-label="Primary">
            <ul className="hidden items-center gap-8 text-sm md:flex">
              <li>
                <a
                  className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                  href="#services"
                >
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                  href="#products"
                >
                  Products
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                  href="#clients"
                >
                  Clients
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                  href="#reviews"
                >
                  Reviews
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                  href="#about"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                  href="#contact"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <div className="hidden md:block">
              <a href="#contact">
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
                >
                  Get Started
                </Button>
              </a>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-8 w-8 p-0"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <MobileSidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <section id="home" className="mx-auto max-w-6xl px-4 py-12 md:py-16 lg:py-24 relative">
        <div className="grid items-center gap-8 lg:gap-10 lg:grid-cols-2">
          <div className="slide-in-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 md:px-4 md:py-2 text-xs uppercase tracking-widest text-primary mb-4 md:mb-6">
              <Sparkles className="h-3 w-3" />
              <span className="hidden sm:inline">Automation • Integration • Scale</span>
              <span className="sm:hidden">Automation</span>
            </div>
            <h1 className="text-pretty text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-balance text-foreground [background:linear-gradient(to_right,_hsl(var(--foreground)),_hsl(var(--primary)))] bg-clip-text  [&:not(:hover)]:text-foreground">
              Automate your business with precision
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              BAKNODE delivers robust products and services to streamline operations, integrate systems, and unlock new
              efficiencies—so your team can focus on what matters.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a href="#contact" className="flex-1 sm:flex-none">
                <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 text-sm md:text-base px-4 md:px-6 py-2.5 md:py-3">
                  Talk to an expert
                  <ChevronRight className="ml-2 h-4 md:h-5 w-4 md:w-5" aria-hidden />
                </Button>
              </a>
              <a href="#services" className="flex-1 sm:flex-none">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 text-sm md:text-base px-4 md:px-6 py-2.5 md:py-3 bg-transparent"
                >
                  Explore services
                </Button>
              </a>
            </div>
            <ul className="mt-6 md:mt-8 grid gap-2 md:gap-3 text-sm">
              <ListItem>Rapid discovery and roadmap in under 2 weeks</ListItem>
              <ListItem>Secure, scalable architectures from day one</ListItem>
              <ListItem>Transparent delivery with measurable outcomes</ListItem>
            </ul>
          </div>
          <div className="relative float-effect order-first lg:order-last">
            <div className="aspect-[4/3] w-full rounded-xl border border-primary/30 overflow-hidden bg-gradient-to-br from-primary/5 to-transparent">
              <img
                src="/Web devices-amico.svg"
                alt="Futuristic digital network representing BAKNODE automation"
                className="h-full w-full rounded-xl object-cover opacity-80"
              />
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div
                className="absolute bottom-6 left-6 w-2 h-2 bg-primary/60 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-1/2 left-4 w-1 h-1 bg-primary/40 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-12 md:py-14 lg:py-20">
        <SectionHeading
          title="Services that accelerate transformation"
          subtitle="From process discovery to end‑to‑end automation, we deliver outcomes—not just deliverables."
        />
        <div className="mt-8 md:mt-12 grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Zap className="h-6 w-6 text-primary" />}
            title="Automation Engineering"
            text="Eliminate manual workflows with resilient automations across tools, teams, and environments."
          />
          <FeatureCard
            icon={<Wrench className="h-6 w-6 text-primary" />}
            title="Systems Integration"
            text="Unify data and platforms via robust APIs, event streams, and secure identity patterns."
          />
          <FeatureCard
            icon={<Cpu className="h-6 w-6 text-primary" />}
            title="AI Enablement"
            text="Deploy practical AI copilots and assistants with clear ROI, governance, and observability."
          />
          <FeatureCard
            icon={<Globe className="h-6 w-6 text-primary" />}
            title="Apps & Websites"
            text="Design and build performant web apps and sites that scale with your business."
          />
          <FeatureCard
            icon={<Sparkles className="h-6 w-6 text-primary" />}
            title="Business Automation"
            text="Automate repetitive tasks, integrate tools, and reduce operational overhead."
          />
          <FeatureCard
            icon={<Shield className="h-6 w-6 text-primary" />}
            title="Business Solutions"
            text="Tailored solutions that solve core business problems end‑to‑end."
          />
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-4 py-12 md:py-14 lg:py-20">
        <SectionHeading
          title="Products that deliver immediate value"
          subtitle="Modular solutions you can deploy quickly—and customize as you scale."
        />
        <div className="mt-8 md:mt-12 grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 fade-in-up">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                BAKNODE Flow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A lightweight workflow engine to orchestrate business processes across your stack.
              </p>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-3 leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-primary" aria-hidden />
                  <span>Event-driven and resilient</span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-primary" aria-hidden />
                  <span>Human-in-the-loop steps</span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-primary" aria-hidden />
                  <span>Dashboard and audit trails</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 fade-in-up">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.3s" }}></div>
                BAKNODE Sync
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Unified connectors to keep critical systems synchronized with confidence.
              </p>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-3 leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-primary" aria-hidden />
                  <span>Prebuilt SaaS integrations</span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-primary" aria-hidden />
                  <span>Schema mapping and transforms</span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-primary" aria-hidden />
                  <span>Observability and alerts</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 fade-in-up">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.6s" }}></div>
                BAKNODE Copilot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Practical AI assistants embedded into workflows for better decision-making.
              </p>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-3 leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-primary" aria-hidden />
                  <span>Secure data access</span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-primary" aria-hidden />
                  <span>Role-based responses</span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-primary" aria-hidden />
                  <span>Usage analytics</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl px-4 py-12 md:py-14 lg:py-20">
        <SectionHeading
          title="What clients say"
          subtitle="Real feedback from teams we've helped automate, integrate, and scale."
        />
        <div className="mt-6 md:mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                “BAKNODE automated our onboarding, cutting time by 70%. The clarity and speed of delivery were
                outstanding.”
              </blockquote>
              <p className="mt-4 text-sm font-medium">Priya Sharma</p>
              <p className="text-xs text-muted-foreground">Operations Lead, Fintech</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                “Their integrations finally unified our data. We can ship faster and make decisions with confidence.”
              </blockquote>
              <p className="mt-4 text-sm font-medium">Daniel Kim</p>
              <p className="text-xs text-muted-foreground">VP Engineering, SaaS</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                “The team built a new customer portal and automated billing—ROI was visible within weeks.”
              </blockquote>
              <p className="mt-4 text-sm font-medium">Aisha Khan</p>
              <p className="text-xs text-muted-foreground">COO, Retail</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 py-12 md:py-14 lg:py-20">
        <SectionHeading
          title="Built by engineers who deliver outcomes"
          subtitle="We pair senior engineering with product thinking to ship what actually moves the business."
        />
        <div className="mt-6 md:mt-8 grid gap-4 md:gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-border/50 p-6">
            <h3 className="font-medium">Our Approach</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              We start with discovery and a measurable success plan. You’ll see transparent milestones, weekly demos,
              and pragmatic engineering that de‑risks delivery.
            </p>
          </div>
          <div className="rounded-lg border border-border/50 p-6">
            <h3 className="font-medium">Security & Reliability</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              From identity and access to observability and backup strategy, security is baked into every layer of the
              system—never an afterthought.
            </p>
          </div>
        </div>
      </section>

      <section id="clients" className="mx-auto max-w-6xl px-4 py-12 md:py-14 lg:py-20">
        <SectionHeading
          title="Trusted by ambitious teams"
          subtitle="We partner with forward‑thinking companies to ship reliable systems that scale."
        />
        <div className="mt-6 md:mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          <Card className="border-border/60">
            <CardContent className="flex items-center justify-center py-8">
              <img
                src="/tailorbuddy-logo.jpeg"
                alt="Client logo"
                className="h-10 w-auto grayscale opacity-80 transition-opacity motion-safe:animate-pulse"
              />
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="flex items-center justify-center py-8">
              <img
                src="/enterprise-logo-black-white.jpg"
                alt="Client logo"
                className="h-10 w-auto grayscale opacity-80 transition-opacity motion-safe:animate-pulse"
              />
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="flex items-center justify-center py-8">
              <img
                src="/generic-tech-logo.png"
                alt="Client logo"
                className="h-10 w-auto grayscale opacity-80 transition-opacity motion-safe:animate-pulse"
              />
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="flex items-center justify-center py-8">
              <img
                src="/fintech-logo-monochrome.jpg"
                alt="Client logo"
                className="h-10 w-auto grayscale opacity-80 transition-opacity motion-safe:animate-pulse"
              />
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="flex items-center justify-center py-8">
              <img
                src="/retail-brand-black-white.jpg"
                alt="Client logo"
                className="h-10 w-auto grayscale opacity-80 transition-opacity motion-safe:animate-pulse"
              />
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="flex items-center justify-center py-8">
              <img
                src="/startup-logo-monochrome.jpg"
                alt="Client logo"
                className="h-10 w-auto grayscale opacity-80 transition-opacity motion-safe:animate-pulse"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-12 md:py-14 lg:py-20">
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent p-6 md:p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 border border-primary/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border border-primary/10 rounded-full translate-y-12 -translate-x-12"></div>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:items-center relative z-10">
            <div className="fade-in-up">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-balance">
                Ready to automate your business?
              </h3>
              <p className="mt-2 md:mt-3 text-muted-foreground leading-relaxed">
                Tell us about your goals. We'll propose an actionable plan within 5 business days.
              </p>
            </div>
            <form
              className="grid gap-4 fade-in-up"
              onSubmit={(e) => {
                e.preventDefault()
                alert("Thanks! We'll get back to you shortly.")
              }}
              aria-label="Contact form"
            >
              <label className="grid gap-2 text-sm">
                <span className="text-foreground font-medium">Work email</span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="h-12 rounded-lg border border-primary/30 bg-background/50 px-4 outline-none ring-0 focus:border-primary focus:bg-background transition-all duration-300"
                  aria-label="Work email"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="text-foreground font-medium">Project brief</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="What problem are you solving?"
                  className="rounded-lg border border-primary/30 bg-background/50 px-4 py-3 outline-none ring-0 focus:border-primary focus:bg-background transition-all duration-300 resize-none"
                  aria-label="Project brief"
                />
              </label>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-2">
                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
                >
                  Request proposal
                </Button>
                <p className="text-xs text-muted-foreground">No spam. We respond within 2–5 business days.</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/20 bg-gradient-to-r from-background to-primary/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:py-8 text-sm md:flex-row">
          <p className="text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} BAKNODE. All rights reserved.
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <li>
                <a className="text-muted-foreground hover:text-primary transition-colors duration-300" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-primary transition-colors duration-300" href="#products">
                  Products
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-primary transition-colors duration-300" href="#clients">
                  Clients
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-primary transition-colors duration-300" href="#reviews">
                  Reviews
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-primary transition-colors duration-300" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-primary transition-colors duration-300" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </main>
  )
}
