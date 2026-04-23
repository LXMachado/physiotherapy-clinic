import { Check, Clock, DollarSign, Target } from 'lucide-react';
import { DetailedServiceCard } from '../components/DetailedServiceCard';

export function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Comprehensive Physiotherapy Services
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              Evidence-based treatment tailored to your unique needs. From sports injuries to chronic pain, we have the expertise to get you moving pain-free.
            </p>
            <a
              href="#book"
              className="inline-block bg-brand-teal text-white px-8 py-4 rounded-lg hover:bg-brand-teal-dark transition-colors font-semibold shadow-lg"
            >
              Book Your Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="text-brand-teal" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Evidence-Based</h3>
                <p className="text-sm text-neutral-600">Treatment backed by latest research</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="text-brand-teal" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Personalized Care</h3>
                <p className="text-sm text-neutral-600">Custom plans for your goals</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="text-brand-teal" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Same-Day Appointments</h3>
                <p className="text-sm text-neutral-600">Get seen when you need it</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="text-brand-teal" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Health Fund Rebates</h3>
                <p className="text-sm text-neutral-600">HICAPS on-site claiming</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <DetailedServiceCard
              title="General Physiotherapy"
              icon="🏥"
              description="Comprehensive musculoskeletal assessment and treatment for a wide range of conditions affecting bones, joints, muscles, and ligaments."
              whatWetreat={[
                "Acute and chronic pain conditions",
                "Muscle strains and joint sprains",
                "Arthritis and joint degeneration",
                "Postural dysfunction",
                "Movement disorders",
                "Injury prevention and wellness"
              ]}
              whatToExpect={[
                "Thorough initial assessment (45-60 minutes)",
                "Hands-on manual therapy techniques",
                "Customized exercise prescription",
                "Education on self-management strategies",
                "Progress tracking and plan adjustments",
                "Home exercise programs with video demonstrations"
              ]}
              whoItsFor="Anyone experiencing musculoskeletal pain, reduced mobility, or wanting to optimize their physical function and prevent future injuries."
              duration="Initial: 60 min | Follow-up: 45 min"
              price="Initial: $120 | Follow-up: $95"
              image="https://images.unsplash.com/photo-1764314138160-5f04f4a50dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
            />

            <DetailedServiceCard
              title="Sports Injury Rehabilitation"
              icon="⚽"
              description="Specialized treatment for athletes of all levels, from weekend warriors to elite competitors. We focus on not just recovery, but returning you to peak performance."
              whatWetreat={[
                "ACL, MCL, and other ligament injuries",
                "Muscle tears and strains",
                "Tendinopathies (tennis elbow, Achilles, etc.)",
                "Stress fractures and bone injuries",
                "Concussion management",
                "Overuse and repetitive strain injuries"
              ]}
              whatToExpect={[
                "Sport-specific movement analysis",
                "Progressive loading and strengthening programs",
                "Return-to-sport testing protocols",
                "Performance optimization strategies",
                "Biomechanical assessment and correction",
                "Coordination with coaches and trainers"
              ]}
              whoItsFor="Athletes recovering from injury, experiencing performance limitations, or seeking injury prevention and performance enhancement."
              duration="Initial: 60 min | Follow-up: 45-60 min"
              price="Initial: $120 | Follow-up: $95-$110"
              image="https://images.unsplash.com/photo-1770653927355-2ba81c1522df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
            />

            <DetailedServiceCard
              title="Back & Neck Pain Treatment"
              icon="🦴"
              description="Expert care for spinal conditions using evidence-based manual therapy, exercise, and education. We address the root cause, not just symptoms."
              whatWetreat={[
                "Lower back pain and sciatica",
                "Neck pain and whiplash",
                "Disc herniation and bulges",
                "Spinal stenosis",
                "Tension headaches and migraines",
                "Postural-related pain"
              ]}
              whatToExpect={[
                "Comprehensive spinal assessment",
                "Joint mobilization and manipulation",
                "Soft tissue release techniques",
                "Core stability and strengthening exercises",
                "Ergonomic and postural advice",
                "Pain neuroscience education"
              ]}
              whoItsFor="Office workers, manual laborers, and anyone suffering from acute or chronic spinal pain, stiffness, or postural dysfunction."
              duration="Initial: 60 min | Follow-up: 45 min"
              price="Initial: $120 | Follow-up: $95"
              image="https://images.unsplash.com/photo-1772122028843-9139d23af4fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
            />

            <DetailedServiceCard
              title="Post-Surgery Rehabilitation"
              icon="🏥"
              description="Structured recovery programs designed to restore function, strength, and confidence after surgical procedures. We work closely with your surgeon's protocols."
              whatWetreat={[
                "Post-orthopedic surgery (knee, hip, shoulder)",
                "Joint replacement rehabilitation",
                "Arthroscopic surgery recovery",
                "Spinal surgery rehabilitation",
                "Scar tissue management",
                "Post-operative complications"
              ]}
              whatToExpect={[
                "Phase-appropriate rehabilitation protocols",
                "Progressive mobilization and strengthening",
                "Scar tissue mobilization techniques",
                "Range of motion restoration",
                "Functional movement retraining",
                "Regular communication with your surgeon"
              ]}
              whoItsFor="Patients recovering from orthopedic or spinal surgery who want to optimize their recovery and return to full function."
              duration="Initial: 60 min | Follow-up: 45 min"
              price="Initial: $120 | Follow-up: $95"
              image="https://images.unsplash.com/photo-1754941622138-b3c3671f2fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
            />

            <DetailedServiceCard
              title="Dry Needling & Trigger Point Therapy"
              icon="💉"
              description="Advanced technique using fine needles to release myofascial trigger points, reduce muscle tension, and improve movement patterns. Highly effective for stubborn muscle pain."
              whatWetreat={[
                "Myofascial trigger points",
                "Chronic muscle tension and knots",
                "Tension headaches and migraines",
                "Muscle imbalances",
                "Restricted movement patterns",
                "Chronic pain conditions"
              ]}
              whatToExpect={[
                "Assessment to identify trigger points",
                "Insertion of fine sterile needles into affected muscles",
                "Immediate muscle relaxation and pain relief",
                "Improved range of motion",
                "Combination with manual therapy and exercise",
                "Mild post-treatment soreness (24-48 hours)"
              ]}
              whoItsFor="Those with persistent muscle pain, trigger points, or movement restrictions that haven't responded to other treatments."
              duration="30-45 min (as part of treatment)"
              price="Included in standard consultation"
              image="https://images.unsplash.com/photo-1754941622136-6664a3f50b2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
            />

            <DetailedServiceCard
              title="Exercise Prescription & Rehabilitation"
              icon="💪"
              description="Customized strength and conditioning programs designed to restore function, prevent re-injury, and optimize long-term health and performance."
              whatWetreat={[
                "Weakness and muscle imbalances",
                "Poor movement patterns",
                "Injury prevention needs",
                "Post-rehabilitation maintenance",
                "Performance optimization",
                "Age-related decline in function"
              ]}
              whatToExpect={[
                "Movement screening and assessment",
                "Individualized exercise programs",
                "Video demonstrations and written instructions",
                "Progressive program modifications",
                "Performance tracking and monitoring",
                "Education on proper form and technique"
              ]}
              whoItsFor="Anyone wanting to build strength, improve movement quality, prevent injuries, or maintain the gains achieved through rehabilitation."
              duration="Initial: 60 min | Follow-up: 30-45 min"
              price="Initial: $120 | Follow-up: $75-$95"
              image="https://images.unsplash.com/photo-1764314484083-cbd0de7e512c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Your Recovery?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Book your initial assessment today and take the first step towards a pain-free life.
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

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-12 text-center">
            What to Expect at Your First Visit
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Comprehensive Assessment</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We'll take a detailed history, understand your goals, and conduct a thorough physical examination to identify the root cause of your condition.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Clear Diagnosis & Plan</h3>
                <p className="text-neutral-600 leading-relaxed">
                  You'll receive a clear explanation of your condition, what's causing it, and a personalized treatment plan with realistic timelines and outcomes.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Initial Treatment</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We start treatment immediately using hands-on techniques, exercise prescription, and education to begin your recovery on day one.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Take-Home Tools</h3>
                <p className="text-neutral-600 leading-relaxed">
                  You'll leave with exercises, self-management strategies, and clear next steps to continue your progress between sessions.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-neutral-50 rounded-xl border border-neutral-200">
            <h3 className="font-semibold text-neutral-900 mb-3">What to Bring:</h3>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start gap-2">
                <Check size={20} className="text-brand-teal mt-0.5 flex-shrink-0" />
                <span>Any relevant medical imaging (X-rays, MRI, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="text-brand-teal mt-0.5 flex-shrink-0" />
                <span>Referral letter if you have one (not required)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="text-brand-teal mt-0.5 flex-shrink-0" />
                <span>Health fund card for on-site claiming</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="text-brand-teal mt-0.5 flex-shrink-0" />
                <span>Comfortable clothing suitable for assessment</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
