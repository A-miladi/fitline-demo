import React, { useState } from "react";

export default function SpecialistContent() {
  const [specialists, setSpecialists] = useState([
    {
      id: 1,
      name: "دکتر علی رضایی",
      field: "قلب و عروق",
      experience: "۱۰ سال",
    },
    { id: 2, name: "دکتر سارا احمدی", field: "چشم‌پزشکی", experience: "۷ سال" },
    { id: 3, name: "دکتر مهدی محمدی", field: "ارتوپدی", experience: "۱۲ سال" },
    {
      id: 4,
      name: "دکتر نگین کریمی",
      field: "پوست و زیبایی",
      experience: "۹ سال",
    },
    {
      id: 5,
      name: "دکتر علی رضایی",
      field: "قلب و عروق",
      experience: "۱۰ سال",
    },
    { id: 6, name: "دکتر سارا احمدی", field: "چشم‌پزشکی", experience: "۷ سال" },
    { id: 7, name: "دکتر مهدی محمدی", field: "ارتوپدی", experience: "۱۲ سال" },
    {
      id: 8,
      name: "دکتر نگین کریمی",
      field: "پوست و زیبایی",
      experience: "۹ سال",
    },
    {
      id: 9,
      name: "دکتر علی رضایی",
      field: "قلب و عروق",
      experience: "۱۰ سال",
    },
    {
      id: 10,
      name: "دکتر سارا احمدی",
      field: "چشم‌پزشکی",
      experience: "۷ سال",
    },
    { id: 11, name: "دکتر مهدی محمدی", field: "ارتوپدی", experience: "۱۲ سال" },
    {
      id: 12,
      name: "دکتر نگین کریمی",
      field: "پوست و زیبایی",
      experience: "۹ سال",
    },
    {
      id: 13,
      name: "دکتر علی رضایی",
      field: "قلب و عروق",
      experience: "۱۰ سال",
    },
    {
      id: 14,
      name: "دکتر سارا احمدی",
      field: "چشم‌پزشکی",
      experience: "۷ سال",
    },
    { id: 15, name: "دکتر مهدی محمدی", field: "ارتوپدی", experience: "۱۲ سال" },
    {
      id: 16,
      name: "دکتر نگین کریمی",
      field: "پوست و زیبایی",
      experience: "۹ سال",
    },
  ]);

  const [newSpecialist, setNewSpecialist] = useState({
    name: "",
    field: "",
    experience: "",
  });

  const handleDelete = (id: number) => {
    setSpecialists(specialists.filter((s) => s.id !== id));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewSpecialist({ ...newSpecialist, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = specialists.length
      ? Math.max(...specialists.map((s) => s.id)) + 1
      : 1;

    setSpecialists([...specialists, { ...newSpecialist, id: newId }]);
    setNewSpecialist({ name: "", field: "", experience: "" });
  };

  return (
    <div
      className="md:p-6 p-4 w-full h-screen overflow-hidden mx-auto font-tahoma z-10"
      dir="rtl"
    >
      <h1 className="text-2xl w-full max-md:text-center mb-4 md:mb-8 font-bold text-neutral-800">
        مدیریت متخصصین
      </h1>

      <div className="bg-white/20 flex items-center justify-center backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-6">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-md:flex-col items-center justify-center gap-2"
        >
          <input
            type="text"
            name="name"
            value={newSpecialist.name}
            onChange={handleInputChange}
            required
            placeholder="نام متخصص"
            className="w-full rounded-xl border px-3 border-neutral-400 h-12 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="text"
            name="field"
            value={newSpecialist.field}
            onChange={handleInputChange}
            required
            placeholder="تخصص"
            className="w-full rounded-xl border px-3 border-neutral-400 h-12  focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="text"
            name="experience"
            value={newSpecialist.experience}
            onChange={handleInputChange}
            required
            placeholder="سابقه کار"
            className="w-full rounded-xl border border-neutral-400 h-12 px-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <div className="flex max-md:w-full justify-end gap-1">
            <button
              type="button"
              className="px-4 max-md:w-1/2 h-12 rounded-xl cursor-pointer border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
            >
              انصراف
            </button>
            <button
              type="submit"
              className="px-4 max-md:w-1/2 h-12 rounded-xl cursor-pointer bg-gradient-to-br from-primary to-secondary text-white transition"
            >
              افزودن
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-h-full overflow-y-scroll pb-96">
        {specialists.map((specialist) => (
          <div
            key={specialist.id}
            className="bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition p-6"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-800">
                {specialist.name}
              </h3>
              <button
                onClick={() => handleDelete(specialist.id)}
                className="text-red-500 hover:text-red-600 transition"
                aria-label="حذف"
              >
                ✕
              </button>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-gray-600">
                <span className="font-medium">تخصص: </span>
                {specialist.field}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">سابقه: </span>
                {specialist.experience}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
