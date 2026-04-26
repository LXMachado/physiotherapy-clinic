import {
  Activity,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  Clock3,
  Dumbbell,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Waves,
} from 'lucide-react';
import heroImage from '@/assets/surfers-hero.webp';

const phoneNumber = '1300 000 000';

const whyChooseCards = [
  {
    title: 'Fast Pain Relief',
    description:
      'Hands-on treatment and clear diagnosis to help you understand what is causing your pain.',
    icon: Sparkles,
  },
  {
    title: 'Personalised Recovery Plan',
    description:
      'Practical rehab tailored to your body, lifestyle, sport, work, and goals.',
    icon: Activity,
  },
  {
    title: 'Stay Active Long-Term',
    description:
      'Prevention-focused care to reduce flare-ups and keep you moving confidently.',
    icon: ShieldCheck,
  },
];

const conditions = [
  { name: 'Back Pain', icon: Stethoscope },
  { name: 'Neck Pain', icon: Activity },
  { name: 'Shoulder Pain', icon: Activity },
  { name: 'Sports Injuries', icon: Dumbbell },
  { name: 'Running Injuries', icon: Activity },
  { name: 'Surf Injuries', icon: Waves },
  { name: 'Knee Pain', icon: Activity },
  { name: 'Posture Issues', icon: Briefcase },
  { name: 'Work Injuries', icon: Briefcase },
];

const services = [
  {
    title: 'Physiotherapy',
    description: 'Comprehensive assessment, treatment, and movement guidance for everyday pain and injuries.',
    cta: 'Book Now',
  },
  {
    title: 'Sports Injury Rehab',
    description: 'Targeted sports injury physio plans to restore strength, confidence, and performance.',
    cta: 'Get Help',
  },
  {
    title: 'Back & Neck Pain',
    description: 'Practical back pain treatment and neck pain care for desk workers and active adults.',
    cta: 'See Treatment',
  },
  {
    title: 'Post-Surgery Rehab',
    description: 'Structured post-operative rehab focused on mobility, control, and long-term outcomes.',
    cta: 'Get Help',
  },
  {
    title: 'Dry Needling',
    description: 'Skilled dry needling to reduce muscular tension and support faster movement recovery.',
    cta: 'Book Now',
  },
  {
    title: 'Exercise Prescription',
    description: 'Personalised exercise plans to support recovery, prevent recurrence, and build resilience.',
    cta: 'See Treatment',
  },
];

const faqItems = [
  {
    question: 'Do I need a referral to see a physio?',
    answer:
      'No referral is required for private physiotherapy appointments. You can book directly with Surfers Physio.',
  },
  {
    question: 'Do you treat sports and surf injuries?',
    answer:
      'Yes. We regularly help with sports injury physio and surf injury rehab for active Gold Coast locals.',
  },
  {
    question: 'Can I claim with private health?',
    answer:
      'Yes. Private health claiming is available for eligible policies. Bring your card and we can guide you through it.',
  },
  {
    question: 'What should I expect in my first appointment?',
    answer:
      'Your first session includes assessment, explanation of likely pain drivers, and a practical treatment plan you can follow.',
  },
  {
    question: 'Do you help with back and neck pain?',
    answer:
      'Absolutely. Back pain treatment and neck pain management are common reasons people visit our clinic.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'Use the Book Appointment buttons on this page or call the clinic directly to schedule your session.',
  },
];

const trustStatements = [
  'Local clinic feel',
  'Evidence-based treatment',
  'Clear communication',
  'Practical recovery plans',
];

export function HomePage() {
  return (
    <main id="top" className="overflow-x-hidden bg-[#F8FAFC] pb-24 md:pb-0">
      <section className="border-b border-[#d9e5f1] bg-[radial-gradient(circle_at_top_left,_rgba(14,165,198,0.12),_transparent_55%),linear-gradient(to_bottom,_#ffffff,_#f8fafc)]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c9dbee] bg-white px-4 py-2 text-sm font-semibold text-[#0A2342]">
              <Waves size={16} />
              Surfers Paradise physiotherapy for active locals
            </p>

            <h1 className="text-balance font-[Manrope] text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0A2342] sm:text-5xl lg:text-[3.45rem]">
              Move Better. Recover Faster. Stay Active.
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#334155]">
              Trusted physiotherapy in Surfers Paradise for surfers, workers, gym-goers, and active adults.
              We deliver hands-on care and evidence-based rehab for confident recovery.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#book"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#0A2342] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#12345f]"
              >
                Book Appointment
              </a>
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#0EA5C6] bg-white px-8 py-3.5 text-base font-semibold text-[#0EA5C6] transition-colors hover:bg-[#ecfbff]"
              >
                Call Now
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-[#0F172A]">
              <span className="inline-flex items-center gap-1.5"><BadgeCheck size={15} className="text-[#14B8A6]" />5-Star Local Care</span>
              <span className="inline-flex items-center gap-1.5"><Clock3 size={15} className="text-[#14B8A6]" />Same Week Appointments</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#14B8A6]" />Private Health Accepted</span>
            </div>

            <p className="mt-4 text-sm font-semibold text-[#0A2342]">★★★★★ Rated by Gold Coast locals</p>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-[#d5e4f2] bg-white shadow-[0_24px_55px_rgba(10,35,66,0.14)]">
              <img
                src={heroImage}
                alt="Physiotherapist treating a patient in a modern Surfers Paradise clinic"
                className="aspect-[3/4] h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-[Manrope] text-3xl font-bold text-[#0A2342] sm:text-4xl">Why Locals Choose Surfers Physio</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {whyChooseCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-2xl border border-[#d8e6f3] bg-white p-6 shadow-[0_10px_30px_rgba(10,35,66,0.05)]"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#e9f8fc] text-[#0EA5C6]">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 font-[Manrope] text-xl font-semibold text-[#0A2342]">{card.title}</h3>
                  <p className="mt-3 text-[#334155]">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="conditions" className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-[Manrope] text-3xl font-bold text-[#0A2342] sm:text-4xl">Conditions We Help With</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((condition) => {
              const Icon = condition.icon;
              return (
                <button
                  key={condition.name}
                  type="button"
                  className="group flex items-center justify-between rounded-xl border border-[#d7e5f1] bg-[#f8fcff] px-4 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-[#a9cbe4] hover:bg-white hover:shadow-[0_12px_22px_rgba(10,35,66,0.06)]"
                >
                  <span className="font-semibold text-[#0F172A]">{condition.name}</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e4f6fb] text-[#0EA5C6] transition-colors group-hover:bg-[#d7f2f8]">
                    <Icon size={16} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <h2 className="font-[Manrope] text-3xl font-bold text-[#0A2342] sm:text-4xl">Built for the Gold Coast Lifestyle</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#334155]">
              Whether you surf at sunrise, train after work, run the esplanade, work long hours at a desk,
              or simply want to move without pain, Surfers Physio helps your body keep up.
            </p>
            <p className="mt-4 text-[#334155]">
              As a local Gold Coast physio clinic, we combine clinical reasoning with practical treatment that fits
              real life.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#d7e5f1] bg-white shadow-[0_10px_30px_rgba(10,35,66,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1643392405779-83f0f1f6abfa?auto=format&fit=crop&w=1400&q=80"
              alt="Gold Coast coastline lifestyle in Surfers Paradise"
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-[Manrope] text-3xl font-bold text-[#0A2342] sm:text-4xl">Our Services</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-[#d8e6f3] bg-white p-6 shadow-[0_10px_26px_rgba(10,35,66,0.05)]"
              >
                <h3 className="font-[Manrope] text-xl font-semibold text-[#0A2342]">{service.title}</h3>
                <p className="mt-3 text-[#334155]">{service.description}</p>
                <p className="mt-5 text-sm font-semibold text-[#0EA5C6]">{service.cta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A2342] py-16 text-white sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-[Manrope] text-3xl font-bold sm:text-4xl">Your Journey to Recovery</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-[#2a4d73] bg-[#0f315a] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#7ddcec]">Step 1</p>
              <h3 className="mt-3 font-[Manrope] text-2xl font-semibold">Assess</h3>
              <p className="mt-3 text-[#c8d9ea]">We identify the likely cause of your pain and explain what is happening clearly.</p>
            </article>
            <article className="rounded-2xl border border-[#2a4d73] bg-[#0f315a] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#7ddcec]">Step 2</p>
              <h3 className="mt-3 font-[Manrope] text-2xl font-semibold">Treat</h3>
              <p className="mt-3 text-[#c8d9ea]">Hands-on care, movement correction, and practical strategies to reduce symptoms.</p>
            </article>
            <article className="rounded-2xl border border-[#2a4d73] bg-[#0f315a] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#7ddcec]">Step 3</p>
              <h3 className="mt-3 font-[Manrope] text-2xl font-semibold">Perform</h3>
              <p className="mt-3 text-[#c8d9ea]">Rehab and prevention planning to help you return stronger and stay active.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#d8e6f3] bg-white p-7 shadow-[0_10px_30px_rgba(10,35,66,0.05)] sm:p-10">
            <h2 className="font-[Manrope] text-3xl font-bold text-[#0A2342] sm:text-4xl">Expert Care You Can Trust</h2>
            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-[#334155]">
              Surfers Physio provides professional physiotherapy care for people who want clear answers,
              practical treatment, and a plan they can follow.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="mt-0.5 text-[#14B8A6]" />Clear assessment and explanation</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="mt-0.5 text-[#14B8A6]" />Hands-on treatment where appropriate</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="mt-0.5 text-[#14B8A6]" />Practical rehab exercises</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="mt-0.5 text-[#14B8A6]" />Return-to-sport and return-to-work focus</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={18} className="mt-0.5 text-[#14B8A6]" />Prevention-focused care</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#cde2ee] bg-[linear-gradient(145deg,#f6fcff,#edf6fb)] p-8 sm:p-10">
            <h2 className="font-[Manrope] text-3xl font-bold text-[#0A2342]">Stay Ahead of Pain</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#334155]">
              Physiotherapy is not only for injury recovery. Regular mobility check-ins, posture resets,
              sports maintenance, and recovery tune-ups can help active people reduce flare-ups and keep performing.
            </p>
            <a
              href="/#book"
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#0A2342] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12345f]"
            >
              Book a Maintenance Session
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-[Manrope] text-3xl font-bold text-[#0A2342] sm:text-4xl">Trusted by Local Patients</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#334155]">
            No inflated claims. No fake reviews. Just consistent care quality for locals seeking reliable outcomes.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trustStatements.map((item) => (
              <article key={item} className="rounded-xl border border-[#d9e6f3] bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#0EA5C6]">Trust Signal</p>
                <p className="mt-2 font-semibold text-[#0F172A]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-[Manrope] text-3xl font-bold text-[#0A2342] sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-xl border border-[#dbe7f3] bg-[#fbfdff] p-5 sm:p-6">
                <h3 className="font-[Manrope] text-lg font-semibold text-[#0A2342]">{item.question}</h3>
                <p className="mt-2 text-[#334155]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="pb-16 pt-16 sm:pb-20 sm:pt-20">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0A2342] p-8 text-center text-white shadow-[0_20px_50px_rgba(10,35,66,0.24)] sm:p-12">
            <h2 className="font-[Manrope] text-3xl font-bold sm:text-4xl">Ready to Move Pain-Free Again?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-[#d7e7f7]">
              Book an appointment with Surfers Physio and take the next step toward better movement,
              less pain, and stronger recovery.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/#book"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-[#0A2342] transition-colors hover:bg-[#edf4fb]"
              >
                Book Appointment
              </a>
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#8cb6da] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#13385f]"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#c9dceb] bg-white/98 p-3 shadow-[0_-8px_22px_rgba(10,35,66,0.15)] backdrop-blur-sm md:hidden">
        <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-2">
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#0EA5C6] bg-[#ecfbff] px-4 text-sm font-semibold text-[#0EA5C6]"
          >
            <Phone size={16} />
            Call
          </a>
          <a
            href="/#book"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#0A2342] px-4 text-sm font-semibold text-white"
          >
            Book
          </a>
        </div>
      </div>
    </main>
  );
}
