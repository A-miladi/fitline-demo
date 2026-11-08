interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
        <span className="ml-2">📋</span>
        {question}
      </h3>
      <p className="text-gray-600 border-t pt-3 border-gray-100 mt-3">
        {answer}
      </p>
    </div>
  );
};

export default FAQItem;
