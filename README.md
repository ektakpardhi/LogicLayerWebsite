# LogicLayer Website

A modern, responsive website built with **Next.js 15**, **React 18**, **TypeScript**, and **Tailwind CSS**.

## Design Inspiration

This project recreates the structure and visual design of the GP Bootstrap Template into a modern Next.js application.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **CMS** (Coming soon): Sanity CMS

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── about/page.tsx     # About page
│   ├── services/page.tsx  # Services page
│   ├── solutions/page.tsx # Solutions page
│   ├── industries/page.tsx # Industries page
│   ├── case-studies/page.tsx # Case Studies page
│   └── contact/page.tsx   # Contact page
├── components/            # React components
│   ├── Navbar.tsx        # Navigation component
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services section
│   ├── About.tsx         # About section
│   ├── CTA.tsx           # Call to action
│   ├── Footer.tsx        # Footer component
│   └── ...               # Other components
└── globals.css           # Global styles
```

## Available Routes

- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/solutions` - Solutions page
- `/industries` - Industries page
- `/case-studies` - Case Studies page
- `/contact` - Contact page

## Styling

The project uses Tailwind CSS with custom color configuration:

- **Primary Color**: Gold (#D4AF37)
- **Dark Background**: #0f0f0f
- **Dark Gray**: #2d2d2d
- **Light Gray**: #9ca3af

Custom Tailwind classes are defined in `src/globals.css`:
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.section-title` - Section heading style
- `.section-subtitle` - Section subtitle style

## Building for Production

```bash
npm run build
npm run start
```

## Next Steps

1. ✅ Design implementation
2. ⏳ Sanity CMS integration
3. ⏳ Dynamic content management
4. ⏳ Enhanced animations with Framer Motion
5. ⏳ Contact form functionality

## License

MIT
