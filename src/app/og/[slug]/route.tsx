import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { CLINIC } from "@/constants/clinic";
import { SEO_PAGES, SITE_URL } from "@/lib/seo";

export const runtime = "nodejs";
export const dynamic = "force-static";

export function generateStaticParams() {
  return Object.keys(SEO_PAGES).map((pagePath) => ({
    slug: pagePath.split("/").filter(Boolean).pop() || "home",
  }));
}

function PersianText({ text, fontSize, color }: { text: string; fontSize: number; color: string }) {
  // Each word is shaped by the font; explicit flex order preserves RTL wrapping.
  return <div style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", columnGap: fontSize * 0.25, rowGap: 0, fontSize, lineHeight: 1.65, color }}>
    {text.split(/\s+/).map((word, index) => <span key={index} style={{ whiteSpace: "pre" }}>{word}</span>)}
  </div>;
}

let assets: Promise<[Buffer, Buffer]> | undefined;
function loadAssets() {
  assets ??= Promise.all([
    readFile(path.join(process.cwd(), "public/fonts/Morabba/Morabba-Bold.ttf")),
    readFile(path.join(process.cwd(), "public/icon/logo512.png")),
  ]);
  return assets;
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pagePath = Object.keys(SEO_PAGES).find((value) => (value.split("/").filter(Boolean).pop() || "home") === slug);
  if (!pagePath) return new Response("Not found", { status: 404 });
  const page = SEO_PAGES[pagePath];
  const [font, logo] = await loadAssets();
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#faf9fd", border: "16px solid #583f99", padding: "54px 64px", fontFamily: "Morabba" }}>
        <div style={{ display: "flex", flexDirection: "row-reverse", alignItems: "center", gap: 22 }}>
          {/* ImageResponse uses its own image renderer, not the Next.js image optimizer. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`data:image/png;base64,${logo.toString("base64")}`} width={88} height={88} alt="" style={{ objectFit: "contain" }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 7 }}>
            <PersianText text={CLINIC.name} fontSize={32} color="#583f99" />
            <PersianText text="اراک / حرکات اصلاحی و توانبخشی ورزشی" fontSize={21} color="#64748b" />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 26 }}>
          <PersianText text={pagePath === "/" ? "حرکات اصلاحی و توانبخشی ورزشی در اراک" : page.title} fontSize={54} color="#182033" />
          <div style={{ display: "flex", width: 120, height: 7, borderRadius: 8, background: "#32bcce" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", fontSize: 23, color: "#583f99" }}>
          <PersianText text="ارزیابی تخصصی / برنامه تمرینی / پیگیری" fontSize={23} color="#583f99" />
          <span style={{ direction: "ltr", color: "#475569" }}>{new URL(SITE_URL).hostname}</span>
        </div>
      </div>
    ),
    {
      width: 1200, height: 630,
      fonts: [{ name: "Morabba", data: font, weight: 700, style: "normal" }],
      headers: { "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800" },
    },
  );
}
