import { ProcessStep } from "@/types";

interface ProcessInfoProps {
  steps: ProcessStep[];
}

const ProcessInfo: React.FC<ProcessInfoProps> = ({ steps }) => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
            پس از ثبت درخواست چه اتفاقی می‌افتد؟
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.step}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessInfo;
