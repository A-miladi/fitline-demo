"use client";

import FAQItem from "./FAQItem";

interface FAQData {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqData: FAQData[] = [
    {
      question: "چه مدارکی برای اولین جلسه نیاز است؟",
      answer:
        "بهتر است مدارک پزشکی مرتبط، نتایج آزمایشات و تصویربرداری‌های قبلی (در صورت وجود) را همراه داشته باشید.",
    },
    {
      question: "هر جلسه درمانی چقدر زمان می‌برد؟",
      answer:
        "جلسات بین ۴۵ تا ۹۰ دقیقه بسته به نوع خدمت و مرحله درمان متفاوت است.",
    },
    {
      question: "هر چند وقت یکبار نیاز به ارزیابی مجدد است؟",
      answer:
        "معمولاً هر ۴-۶ هفته یکبار بر اساس پیشرفت و نوع ناهنجاری نیاز به ارزیابی مجدد است.",
    },
    {
      question: "آیا بیمه هزینه‌ها را پرداخت می‌کند؟",
      answer:
        "بسته به نوع بیمه و پوشش آن متفاوت است. بهتر است با شرکت بیمه خود مشورت کنید.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
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
          {faqData.map((faq, index) => (
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
