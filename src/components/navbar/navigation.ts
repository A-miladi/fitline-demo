export const ScreenLinks = [
  {
    name: "صفحه اصلی",
    link: "/",
  },
  {
    name: "معرفی مرکز",
    link: "/about",
  },
  {
    name: "متخصصین ما",
    link: "/specialists",
  },
  {
    name: "خدمات ما",
    link: "/services",
    children: [
      {
        name: "حرکات اصلاحی",
        link: "/services/corrective-exercises",
        description: "اصلاح ناهنجاری‌های اسکلتی-عضلانی",
      },
      {
        name: "توانبخشی ورزشی",
        link: "/services/sports-rehabilitation",
        description: "بازگشت به ورزش پس از آسیب‌های ورزشی",
      },
      {
        name: "درمان دردهای اسکلتی-عضلانی",
        link: "/services/pain-treatment",
        description: "با تجویز و ارجاع پزشک متخصص",
      },
      {
        name: "تیپینگ و ماساژ",
        link: "/services/taping-massage",
        description: "خدمات تخصصی تیپینگ و ماساژ درمانی",
      },
    ],
  },
  {
    name: "فرآیند درمان",
    link: "/treatment-process",
  },
  {
    name: "ثبت نوبت",
    link: "/appointment",
    highlight: true,
  },
];
