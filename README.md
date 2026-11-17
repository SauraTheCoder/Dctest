# DC TUTORIAL – Complete Educational Coaching Management Platform

> **Building Strong Foundations for a Brighter Future**  
> Official Web & Enterprise Portal for DC Tutorial Coaching Institute.

---

## 🎨 Brand Identity & Color System
Extracted directly from the official **DC Tutorial** logo:
- **Primary Navy Blue**: `#012060` (Institute trust, authority, prestige)
- **Primary Accent Azure / Electric Blue**: `#0071C1` (Dynamic energy, clarity, tech-enabled learning)
- **Soft Ice Tint**: `#E8F4FC` / `#F0F7FF` (Pill badges, subtle active states)
- **Page Background**: `#F8FAFC` (Clean, professional educational readability)
- **Pure White**: `#FFFFFF` (High contrast card surfaces)

The official logo is located at `/public/images/dc-logo.png` and is rendered prominently in navigation bars, footers, login portals, and official fee receipts.

---

## 🚀 Key Functional Modules

### 1. Main Website
- **Home Page**: Hero section, Director's Welcome, Course Highlights, Why Choose DC Tutorial, Faculty Directory, Student Hall of Fame & Testimonials, Free Counseling Inquiry Form, Footer.
- **About Us**: Founder's message (Prof. D.C. Sharma), 4 Pillars of DC Pedagogy, Mission & Vision, Student-to-Teacher Ratio standards.
- **Courses**: Comprehensive catalog with filters (JEE Main & Advanced, NEET Medical Achievers, Class 10 CBSE Board & Foundation, Class 12 Boards & CUET), syllabus topics, fee breakdown, and 1-click enrollment.
- **Faculty / Teachers**: Profiles of senior educators with qualifications (IIT Delhi, Ph.D.), subjects, experience, and recorded lecture counts.
- **Contact Us**: Campus address, interactive inquiry form, helpline telephone numbers, and counseling operating hours.

### 2. Multi-Role Authentication
- **Admin**: Institute director oversight, student & teacher CRUD, batch management, fee records, attendance reports, automated fee reminder engine, and notification gateway configuration.
- **Teacher**: Teacher dashboard, upload/manage recorded classes (subject, chapter, batch, video file/URL, thumbnail, publish toggle), upload PDF study materials, take batch attendance, post announcements.
- **Student**: Watch batch-assigned recorded classes in custom HTML5 video player (speed controls, rewind/forward, synchronized notes, progress), download study materials, inspect fee records, pay online, download official PDF receipts, track attendance regularity.
- **Instant Demo Switcher**: 1-click quick-login buttons on every page for immediate evaluator testing without typing passwords.

### 3. Recorded Classes / Video Upload System
- Dedicated video upload form with validation.
- Video parameters: Title, Subject, Chapter/Topic, Target Batch, Description, Duration, Video source (supports MP4, cloud storage, YouTube, Vimeo), and Thumbnail.
- Publish / Unpublish visibility toggles.
- Student player includes:
  - Play / Pause / Seek / 10s Rewind / 10s Fast-Forward
  - Playback Speed: 0.75x, 1.0x, 1.25x, 1.5x, 2.0x
  - Real-time timecode tracking
  - Embedded Synchronized Revision Notes pad
  - Student views counter.

### 4. Fees Management & Automatic Reminder Engine
- Complete fee ledger with statuses: `Paid`, `Pending`, `Overdue`, `Partial`.
- **Automatic Reminder Engine** runs against active fee records with exact time rules:
  - 5 Days before due date (`upcoming_5`)
  - 2 Days before due date (`upcoming_2`)
  - On Due Date (`due_date`)
  - After Due Date (`overdue`)
- Supported channels:
  - **WhatsApp** (via Meta WhatsApp Cloud API or Twilio)
  - **Email** (via Resend, SendGrid, or custom SMTP)
  - **SMS** (via Fast2SMS / MSG91)
  - **In-App Portal Notifications**
- **Permanent Reminder Ledger**: Logs every sent reminder with timestamp, channel, and message preview.
- **Verifiable Fee Receipts**: Complete printable format with institute seal, transaction reference, receipt number (`DC-REC-2026-XXXX`), and authorized signatory.

### 5. Attendance Management
- Teachers select batch and date to log student presence (`Present`, `Absent`, `Late`).
- "Mark All Present" 1-click shortcut.
- Automatic percentage calculation and status badges on student dashboards.

### 6. Study Materials (E-Library)
- Categorized uploads: Lecture Notes, DPP Worksheets, Solved Mock Papers, Practice Papers, Formula Sheets.
- Filterable by subject and document type.

---

## 🛠️ Technology Stack
- **Frontend Framework**: Next.js 14 (App Router) + React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom Brand Theme + Lucide Icons
- **Database**:
  - **Local Zero-Config Storage**: `lib/db.ts` file-backed relational JSON database with atomic transactions and pre-seeded realistic data.
  - **Cloud Ready**: Complete PostgreSQL DDL schema with Row Level Security (RLS) policies provided in `supabase/schema.sql`.

---

## 🔑 Default Demo Accounts

| Role | Name | Email | Password |
|---|---|---|---|
| **Admin** | Prof. D.C. Sharma (Director) | `admin@dctutorial.com` | `admin123` |
| **Teacher** | Er. Rajiv Verma (Senior Physics) | `rajiv.physics@dctutorial.com` | `teacher123` |
| **Student** | Aarav Patel (Class 12 NEET) | `aarav.patel@student.com` | `student123` |
| **Student** | Priya Sharma (Class 12 JEE) | `priya.sharma@student.com` | `student123` |
| **Student** | Rohan Gupta (Class 10 Board) | `rohan.gupta@student.com` | `student123` |

*Note: You can also use the **"Instant Demo Switcher"** button in the top navbar or login page to switch roles with a single click.*

---

## 💻 Local Development Setup

1. **Install Dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

3. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

---

## 🌐 Supabase Deployment Guide
To deploy this project to Supabase:
1. Create a new project in [Supabase](https://supabase.com).
2. Go to the **SQL Editor** tab in your Supabase project dashboard.
3. Open `supabase/schema.sql` from this repository, copy its contents, and execute the SQL script.
4. Create two public storage buckets in the Supabase Storage tab:
   - `lecture-videos`
   - `study-documents`
5. Add your Supabase project URL and anon public key to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```
