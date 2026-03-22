import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nikitabharti.app"),
  title: {
    default: "Nikita Bharti | Full-Stack MERN Developer",
    template: "%s | Nikita Bharti",
  },
  description: "Portfolio of Nikita Bharti, a Full-Stack MERN Developer specializing in scalable React, Next.js applications and actively solving 200+ DSA problems.",
  authors: [{ name: "Nikita Bharti", url: "https://nikitabharti.app" }],
  creator: "Nikita Bharti",
  publisher: "Nikita Bharti",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "MERN stack",
    "Full-Stack Developer",
    "Nikita Bharti",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "Nikita Bharti | Full-Stack MERN Developer",
    description: "Portfolio of Nikita Bharti, a Full-Stack MERN Developer specializing in scalable, production-ready applications.",
    url: "https://nikitabharti.app",
    siteName: "Nikita Bharti",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpeg", // Using the uploaded headshot
        width: 1200,
        height: 630,
        alt: "Nikita Bharti Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikita Bharti | Full-Stack MERN Developer",
    description: "Check out my portfolio! I build scalable production-ready MERN stack applications.",
    images: ["/profile.jpeg"],
    creator: "@NikitaBharti27", 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon2.png", // Ensure you add this file to public/
    shortcut: "/favicon2.png",
    apple: "/favicon2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",      
        "name": "Nikita Bharti",
        "url": "https://nikitabharti.app",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://nikitabharti.app/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Person",
        "name": "Nikita Bharti",
        "url": "https://nikitabharti.app",
        "email": "nikitabharti2116@gmail.com",
        "sameAs": [
          "https://github.com/NikitaBharti27",
          "https://www.linkedin.com/in/nikita-bharti-dev/"
        ],
        "jobTitle": "Full-Stack Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance / Open to Work"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Lovely Professional University"
        }
      },
      {
        "@type": "ProfessionalService",
        "name": "Nikita Bharti - Web Development",
        "url": "https://nikitabharti.app",
        "description": "Professional web development services specializing in MERN stack applications.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        }
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
