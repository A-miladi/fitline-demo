import FAQItem from "./FAQItem";
import { TREATMENT_FAQ } from "@/constants/treatmentFaq";
import JsonLd from "@/components/seo/JsonLd";

const FAQSection: React.FC = () => {


  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: TREATMENT_FAQ.map((faq) => ({
          "@type": "Question", name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }} />
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-morabba">
            سوالات متداول
          </h2>
          <p className="text-gray-600">
            پاسخ به پرسش‌های رایج درباره فرآیند درمان
          </p>
        </div>

        <div className="space-y-6">
          {TREATMENT_FAQ.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
