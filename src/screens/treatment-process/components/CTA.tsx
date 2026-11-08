import Link from "next/link";

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTA: React.FC<CTAProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-36 translate-x-36"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full translate-y-48 -translate-x-48"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2
          className="text-3xl font-bold text-white mb-6 font-morabba"
        >
          {title}
        </h2>
        <p
          className="text-white/90 mb-10 text-xl"
        >
          {description}
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href={buttonLink} className="bg-white text-primary w-full py-4 px-8 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
            
              {buttonText}
            
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
