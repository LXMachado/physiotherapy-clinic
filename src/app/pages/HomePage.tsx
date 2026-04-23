import { Link } from 'react-router';
import { MapPin, Star, Check } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { ProcessStep } from '../components/ProcessStep';
import { TestimonialCard } from '../components/TestimonialCard';
import { FAQItem } from '../components/FAQItem';
import { WhoWeHelpCard } from '../components/WhoWeHelpCard';

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/50 text-accent-foreground px-4 py-2 rounded-full mb-6">
                <MapPin size={16} />
                <span className="text-sm font-medium">Serving Gold Coast, Brisbane & Sunshine Coast</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
                Fix Pain. Move Better. Get Back to What You Love.
              </h1>

              <p className="text-lg sm:text-xl text-neutral-600 mb-8 leading-relaxed">
                Expert physiotherapy care for office workers, athletes, and anyone living with pain. Evidence-based treatment that gets results.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#book"
                  className="bg-brand-teal text-white px-8 py-4 rounded-lg hover:bg-brand-teal-dark transition-all font-semibold text-center shadow-lg hover:shadow-xl"
                >
                  Book Appointment
                </a>
                <a
                  href="tel:1300000000"
                  className="bg-white border-2 border-brand-teal text-brand-teal px-8 py-4 rounded-lg hover:bg-accent transition-colors font-semibold text-center"
                >
                  Call Now
                </a>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-neutral-900">4.9/5</p>
                  <p className="text-sm text-neutral-600">Google Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">15+</p>
                  <p className="text-sm text-neutral-600">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">5,000+</p>
                  <p className="text-sm text-neutral-600">Patients Helped</p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1770653927355-2ba81c1522df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Physiotherapist treating patient"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-neutral-200 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center">
                    <Check className="text-brand-teal" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Evidence-Based</p>
                    <p className="text-sm text-neutral-600">Treatment Plans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-lg text-neutral-600">
              See what our patients say about their recovery journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Sarah M."
              condition="Chronic Back Pain"
              quote="After years of back pain, I'm finally pain-free. The team took time to understand my condition and create a personalized plan. Couldn't recommend them more!"
              rating={5}
            />
            <TestimonialCard
              name="James L."
              condition="Sports Injury"
              quote="Tore my ACL playing football. The rehab program got me back on the field stronger than ever. Professional, knowledgeable, and genuinely care about results."
              rating={5}
            />
            <TestimonialCard
              name="Michelle K."
              condition="Neck Pain"
              quote="Working from home destroyed my neck and shoulders. After just 6 sessions, I'm sleeping better and working pain-free. Life-changing experience."
              rating={5}
            />
          </div>

          {/* Health Fund Logos */}
          <div className="mt-16 pt-12 border-t border-neutral-200">
            <p className="text-center text-sm text-neutral-600 mb-8">We accept all major health funds</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-neutral-100 px-6 py-3 rounded-lg text-neutral-700 font-medium">Medibank</div>
              <div className="bg-neutral-100 px-6 py-3 rounded-lg text-neutral-700 font-medium">Bupa</div>
              <div className="bg-neutral-100 px-6 py-3 rounded-lg text-neutral-700 font-medium">HCF</div>
              <div className="bg-neutral-100 px-6 py-3 rounded-lg text-neutral-700 font-medium">NIB</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive physiotherapy solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Physiotherapy"
              description="Comprehensive assessment and treatment for musculoskeletal conditions, injury prevention, and performance optimization."
              icon="🏥"
            />
            <ServiceCard
              title="Sports Injury Rehab"
              description="Specialized rehabilitation programs to get athletes back to peak performance safely and effectively."
              icon="⚽"
            />
            <ServiceCard
              title="Back & Neck Pain"
              description="Expert treatment for chronic and acute spinal conditions using evidence-based manual therapy techniques."
              icon="🦴"
            />
            <ServiceCard
              title="Post-Surgery Rehab"
              description="Structured recovery programs to restore function and mobility after surgical procedures."
              icon="🏥"
            />
            <ServiceCard
              title="Dry Needling"
              description="Advanced trigger point therapy to release muscle tension, reduce pain, and improve movement patterns."
              icon="💉"
            />
            <ServiceCard
              title="Exercise Prescription"
              description="Customized strength and conditioning programs to prevent re-injury and enhance long-term health."
              icon="💪"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-brand-teal text-white px-8 py-4 rounded-lg hover:bg-brand-teal-dark transition-colors font-semibold shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Who We Help
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Specialized care for every stage of life and activity level
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <WhoWeHelpCard
              title="Office Workers"
              problems={["Chronic neck pain", "Lower back strain", "Poor posture", "Headaches"]}
              image="https://images.unsplash.com/photo-1764314138160-5f04f4a50dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
            />
            <WhoWeHelpCard
              title="Athletes"
              problems={["Sports injuries", "Performance issues", "Joint instability", "Recovery needs"]}
              image="https://images.unsplash.com/photo-1770653927355-2ba81c1522df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
            />
            <WhoWeHelpCard
              title="Chronic Pain"
              problems={["Persistent pain", "Mobility issues", "Reduced quality of life", "Sleep problems"]}
              image="https://images.unsplash.com/photo-1772122028843-9139d23af4fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
            />
            <WhoWeHelpCard
              title="Post-Surgery"
              problems={["Limited mobility", "Weakness", "Scar tissue", "Recovery plateau"]}
              image="https://images.unsplash.com/photo-1754941622138-b3c3671f2fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Your Journey to Recovery
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A simple, proven process to get you moving pain-free
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ProcessStep
              step={1}
              title="Assessment"
              description="Comprehensive evaluation of your condition, movement patterns, and goals. We take time to understand the root cause, not just symptoms."
            />
            <ProcessStep
              step={2}
              title="Treatment Plan"
              description="Evidence-based treatment combining manual therapy, exercise prescription, and education tailored specifically to your needs."
            />
            <ProcessStep
              step={3}
              title="Recovery & Prevention"
              description="Ongoing support to achieve your goals and prevent future injuries. You'll leave with tools to stay pain-free long-term."
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1764314484083-cbd0de7e512c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Our clinic and team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Expert Care You Can Trust
              </h2>

              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                With over 15 years of experience treating thousands of patients across Gold Coast and Brisbane, our team combines advanced clinical expertise with genuine care for your wellbeing.
              </p>

              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                We stay at the forefront of physiotherapy research and techniques, ensuring you receive the most effective, evidence-based treatment available.
              </p>

              {/* Credentials */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-brand-teal" size={14} />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Registered Physiotherapists</p>
                    <p className="text-neutral-600">AHPRA accredited with ongoing professional development</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-brand-teal" size={14} />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Evidence-Based Practice</p>
                    <p className="text-neutral-600">Treatment protocols backed by latest research</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-brand-teal" size={14} />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Personalized Approach</p>
                    <p className="text-neutral-600">Every treatment plan is tailored to your unique goals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="py-20 bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Start Your Recovery Today
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Take the first step towards a pain-free life. Book your initial assessment now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-brand-teal px-8 py-4 rounded-lg hover:bg-neutral-100 transition-colors font-semibold text-lg shadow-xl inline-block"
            >
              Book Online
            </a>
            <a
              href="tel:1300000000"
              className="bg-brand-teal-dark border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors font-semibold text-lg inline-block"
            >
              Call 1300 000 000
            </a>
          </div>

          <p className="mt-8 text-sm opacity-80">
            New patients welcome • No referral required • Same-day appointments available
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600">
              Everything you need to know about your first visit
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="Do I need a referral to see a physiotherapist?"
              answer="No referral is required. You can book directly with us. However, if you have a referral from your GP or specialist, please bring it along as it may help with health fund rebates."
            />
            <FAQItem
              question="Will physiotherapy work for my condition?"
              answer="Physiotherapy is highly effective for a wide range of musculoskeletal conditions including back pain, neck pain, sports injuries, post-surgery rehabilitation, and chronic pain. During your initial assessment, we'll evaluate your condition and discuss realistic outcomes."
            />
            <FAQItem
              question="What are your fees? Do you accept health insurance?"
              answer="Initial consultations are $120, follow-up sessions are $95. We accept all major health funds and provide HICAPS on-site claiming for immediate rebates. We also offer payment plans for those without insurance."
            />
            <FAQItem
              question="What should I expect in my first session?"
              answer="Your first session includes a comprehensive assessment (45-60 minutes) covering your medical history, current symptoms, movement evaluation, and treatment goals. We'll start treatment on day one and provide you with a clear plan moving forward."
            />
            <FAQItem
              question="How many sessions will I need?"
              answer="This varies by individual and condition. Many patients see improvement within 3-6 sessions. We'll give you an honest assessment after your first visit and update you throughout treatment. Our goal is to get you better as efficiently as possible."
            />
            <FAQItem
              question="What should I wear to my appointment?"
              answer="Wear comfortable, loose-fitting clothing that allows easy access to the area being treated. Athletic wear or shorts and a t-shirt work well. We have private treatment rooms if you need to change."
            />
          </div>
        </div>
      </section>
    </>
  );
}
