"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import CustomDropdown from "@/components/DropDown";
import type { DropdownOption } from "@/types";

export default function DoctorPicker({ options }: { options: DropdownOption[] }) {
  const fromUrl = useSearchParams().get("doctorId") || "";
  const [selection, setSelection] = useState({ source: fromUrl, value: fromUrl });
  const value = selection.source === fromUrl ? selection.value : fromUrl;
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">انتخاب پزشک</label>
      <CustomDropdown
        options={options}
        value={value}
        onSelect={(option) => setSelection({ source: fromUrl, value: option.value })}
        placeholder="پزشک مورد نظر را انتخاب کنید"
        disabled={options.length === 0}
      />
      <input type="hidden" name="doctor_id" value={value} />
    </div>
  );
}
