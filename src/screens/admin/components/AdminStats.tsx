"use client";

import {
  FaCalendar,
  FaUser,
  FaShieldAlt,
  FaClock,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

interface AdminStatsProps {
  count: number;
  latest: string;
  isAuthenticated: boolean;
  todayCount?: number;
  weekCount?: number;
}

export default function AdminStats({
  count,
  latest,
  isAuthenticated,
  todayCount = 0,
  weekCount = 0,
}: AdminStatsProps) {
  const stats = [
    {
      id: 1,
      title: "تعداد کل نوبت‌ها",
      value: count,
      icon: FaCalendar,
      bgColor: "from-purple-200 to-purple-100/50",
      iconBg: "bg-purple-100",
      textColor: "text-purple-700",
      borderColor: "border-purple-100/50",
      description: "کل نوبت‌های ثبت شده",
      change: "+12%",
      changeType: "up",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "آخرین ثبت‌کننده",
      value: latest,
      icon: FaUser,
      bgColor: "from-blue-200 to-blue-100/50",
      iconBg: "bg-blue-100",
      textColor: "text-blue-700",
      borderColor: "border-blue-100/50",
      description: "آخرین کاربر ثبت‌کننده",
      change: "امروز",
      changeType: "neutral",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "وضعیت دسترسی",
      value: isAuthenticated ? "فعال" : "غیرفعال",
      icon: FaShieldAlt,
      bgColor: isAuthenticated
        ? "from-emerald-200 to-emerald-100/50"
        : "from-red-50 to-red-100/50",
      iconBg: isAuthenticated ? "bg-emerald-100" : "bg-red-100",
      textColor: isAuthenticated ? "text-emerald-700" : "text-red-700",
      borderColor: isAuthenticated
        ? "border-emerald-100/50"
        : "border-red-100/50",
      description: isAuthenticated ? "دسترسی کامل" : "نیاز به ورود",
      change: isAuthenticated ? "آنلاین" : "آفلاین",
      changeType: isAuthenticated ? "up" : "down",
      gradient: isAuthenticated
        ? "from-emerald-500 to-teal-500"
        : "from-red-500 to-rose-500",
    },
    {
      id: 4,
      title: "نوبت‌های امروز",
      value: todayCount,
      icon: FaClock,
      bgColor: "from-amber-200 to-amber-100/50",
      iconBg: "bg-amber-100",
      textColor: "text-amber-700",
      borderColor: "border-amber-100/50",
      description: "ثبت شده در امروز",
      change: `${weekCount} این هفته`,
      changeType: "neutral",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`group relative overflow-hidden rounded-2xl border ${stat.borderColor} bg-gradient-to-b ${stat.bgColor} p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${stat.gradient} opacity-5 blur-2xl transition-all duration-300 group-hover:opacity-10 group-hover:scale-150" />

          <div className="relative">
            <div className="flex items-start justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconBg} ${stat.textColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
              >
                <stat.icon className="h-6 w-6" />
              </div>

              {stat.changeType && (
                <div
                  className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
                    stat.changeType === "up"
                      ? "bg-emerald-50 text-emerald-700"
                      : stat.changeType === "down"
                        ? "bg-red-50 text-red-700"
                        : "bg-white/70 text-gray-700"
                  }`}
                >
                  {stat.changeType === "up" && (
                    <FaArrowUp className="h-2.5 w-2.5" />
                  )}
                  {stat.changeType === "down" && (
                    <FaArrowDown className="h-2.5 w-2.5" />
                  )}
                  {stat.change}
                </div>
              )}
            </div>

            <p className="mt-4 text-sm font-medium text-gray-600">
              {stat.title}
            </p>

            <div className="mt-1">
              {typeof stat.value === "number" ? (
                <p
                  className={`text-2xl font-bold ${stat.textColor} transition-all duration-300 group-hover:scale-105 origin-right`}
                >
                  {stat.value.toLocaleString()}
                </p>
              ) : (
                <p
                  className={`text-xl font-bold ${stat.textColor} transition-all duration-300 group-hover:scale-105 origin-right`}
                >
                  {stat.value}
                </p>
              )}
            </div>

            <p className="mt-1 text-xs text-gray-500">{stat.description}</p>

            {stat.id === 1 && (
              <div className="mt-4">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/60">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${stat.gradient} transition-all duration-1000`}
                    style={{ width: `${Math.min((count / 100) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
