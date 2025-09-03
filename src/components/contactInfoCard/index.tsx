import { ContactInfo } from "@/types";

interface ContactInfoCardProps {
  contactInfo: ContactInfo;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ contactInfo }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 font-morabba">
        اطلاعات تماس مرکز
      </h3>

      <div className="space-y-6">
        {/* Phone Section - Horizontal Layout */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 mb-2">تلفن تماس</h4>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
              {contactInfo.phone.map((phone, index) => (
                <p key={index} className="text-gray-600 py-1">
                  {phone}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Address Section - Horizontal Layout */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 mb-2">آدرس مرکز</h4>
            <p className="text-gray-600">{contactInfo.address}</p>
          </div>
        </div>

        {/* Working Hours Section - Horizontal Layout */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 mb-2">ساعات کاری</h4>
            <div className="space-y-1">
              <p className="text-gray-600">
                {contactInfo.workingHours.regular}
              </p>
              <p className="text-gray-600">
                {contactInfo.workingHours.thursday}
              </p>
              <p className="text-gray-600 text-sm">
                {contactInfo.workingHours.friday}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notes Section */}
      <div className="mt-8 p-6 bg-primary/10 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-3">
          📋 نکات مهم قبل از مراجعه:
        </h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• لطفاً ۱۰ دقیقه قبل از وقت مقرر در مرکز حضور داشته باشید</li>
          <li>
            • کارشناسان ما حداکثر تا ۲۴ ساعت آینده با شما تماس خواهند گرفت
          </li>
          <li>
            • در صورت نیاز به تغییر وقت، لطفاً حداقل ۱۲ ساعت قبل اطلاع دهید
          </li>
          <li>• همراه داشتن مدارک پزشکی مرتبط (در صورت وجود) توصیه می‌شود</li>
          <li>• لباس راحت و مناسب ورزش بپوشید</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfoCard;
