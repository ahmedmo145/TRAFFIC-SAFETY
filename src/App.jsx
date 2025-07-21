import { useState } from "react";
import { CarFront, Construction, TrafficCone, Download, LayoutList, Mail } from "lucide-react";

export default function TrafficSafetyHome() {
  const [lang, setLang] = useState("ar");

  const content = {
    ar: {
      dir: "rtl",
      title: "دليل السلامة المرورية",
      subtitle: "مصدر موثوق للتوعية بالسلامة على الطرق وفي مناطق العمل",
      nav: ["الرئيسية", "الموارد", "خطط المرور", "اتصل بنا"],
      cards: [
        { title: "السلامة العامة على الطرق", desc: "قواعد وممارسات القيادة الآمنة وتوعية المشاة.", icon: <CarFront /> },
        { title: "السلامة في مناطق العمل", desc: "إرشادات التنقل في مناطق الإنشاء وخطط المرور المؤقتة.", icon: <Construction /> },
        { title: "الإشارات والعلامات المرورية", desc: "تعرّف على معاني الإشارات، الإشارات الضوئية، وعلامات الطريق.", icon: <TrafficCone /> },
        { title: "الموارد والتحميلات", desc: "الوصول إلى ملصقات قابلة للطباعة، قوائم السلامة، ومواد التدريب.", icon: <Download /> },
        { title: "أمثلة لخطط المرور", desc: "عرض نماذج من خطط إدارة الحركة المستخدمة في المشاريع.", icon: <LayoutList /> },
        { title: "تواصل معنا", desc: "تواصل معنا للاستفسارات أو الاقتراحات أو طلب التعاون.", icon: <Mail /> },
      ],
      footer: "© 2025 ترافيك سيف أرابيا. جميع الحقوق محفوظة."
    },
    en: {
      dir: "ltr",
      title: "Traffic Safety Guide",
      subtitle: "A trusted source for road and work zone safety awareness",
      nav: ["Home", "Resources", "Traffic Plans", "Contact"],
      cards: [
        { title: "General Road Safety", desc: "Rules and practices for safe driving and pedestrian awareness.", icon: <CarFront /> },
        { title: "Work Zone Safety", desc: "Guidelines for movement in construction zones and temporary traffic plans.", icon: <Construction /> },
        { title: "Traffic Signs and Symbols", desc: "Learn the meaning of signs, traffic lights, and road markings.", icon: <TrafficCone /> },
        { title: "Resources and Downloads", desc: "Access printable posters, safety checklists, and training materials.", icon: <Download /> },
        { title: "Traffic Plan Examples", desc: "View examples of traffic management plans used in projects.", icon: <LayoutList /> },
        { title: "Contact Us", desc: "Reach out for inquiries, suggestions, or cooperation requests.", icon: <Mail /> },
      ],
      footer: "© 2025 Traffic Safe Arabia. All rights reserved."
    },
    ur: {
      dir: "rtl",
      title: "ٹریفک سیفٹی گائیڈ",
      subtitle: "سڑکوں اور کام کی جگہوں پر سیفٹی کی آگاہی کا معتبر ذریعہ",
      nav: ["ہوم", "وسائل", "ٹریفک پلانز", "رابطہ"],
      cards: [
        { title: "سڑکوں پر عمومی حفاظت", desc: "محفوظ ڈرائیونگ اور پیدل چلنے والوں کی آگاہی کے لیے اصول و ضوابط۔", icon: <CarFront /> },
        { title: "کام کی جگہوں پر حفاظت", desc: "تعمیراتی علاقوں میں نقل و حرکت اور عارضی ٹریفک منصوبوں کے لیے ہدایات۔", icon: <Construction /> },
        { title: "ٹریفک علامات اور نشانات", desc: "اشاروں، سگنلز، اور سڑک کے نشانات کا مطلب جانیں۔", icon: <TrafficCone /> },
        { title: "وسائل اور ڈاؤن لوڈز", desc: "پرنٹ ایبل پوسٹرز، سیفٹی چیک لسٹ، اور تربیتی مواد تک رسائی۔", icon: <Download /> },
        { title: "ٹریفک منصوبوں کی مثالیں", desc: "پروجیکٹس میں استعمال ہونے والے ٹریفک مینجمنٹ پلانز کی مثالیں دیکھیں۔", icon: <LayoutList /> },
        { title: "ہم سے رابطہ کریں", desc: "استفسارات، تجاویز یا تعاون کی درخواست کے لیے رابطہ کریں۔", icon: <Mail /> },
      ],
      footer: "© 2025 ٹریفک سیف عربیہ۔ جملہ حقوق محفوظ ہیں۔"
    }
  };

  const { dir, title, subtitle, nav, cards, footer } = content[lang];

  return (
    <div className="min-h-screen bg-white text-gray-900" dir={dir} lang={lang}>
      <nav className="bg-red-600 text-white py-3 px-6 flex justify-between items-center">
        <h1 className="font-bold text-xl">TrafficSafe</h1>
        <ul className="flex gap-4 text-sm">
          {nav.map((item, i) => (
            <li key={i} className="hover:underline cursor-pointer">{item}</li>
          ))}
        </ul>
      </nav>

      <header className="text-center py-6">
        <div className="flex justify-center gap-4 mb-4">
          <button onClick={() => setLang("ar")} className="text-sm border px-2 py-1 rounded">العربية</button>
          <button onClick={() => setLang("en")} className="text-sm border px-2 py-1 rounded">English</button>
          <button onClick={() => setLang("ur")} className="text-sm border px-2 py-1 rounded">اردو</button>
        </div>
        <h2 className="text-3xl font-bold text-red-600 mb-2">{title}</h2>
        <p className="text-lg text-gray-600">{subtitle}</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-8 px-6">
        {cards.map((card, idx) => (
          <Card key={idx} title={card.title} desc={card.desc} icon={card.icon} />
        ))}
      </section>

      <footer className="text-center mt-12 border-t pt-6 text-sm text-gray-500">
        {footer}
      </footer>
    </div>
  );
}

function Card({ title, desc, icon }) {
  return (
    <div className="border p-4 rounded-2xl shadow hover:shadow-md transition bg-yellow-50">
      <div className="text-3xl mb-2 text-red-600">{icon}</div>
      <h2 className="text-xl font-semibold text-red-700 mb-1">{title}</h2>
      <p className="text-gray-700 text-sm">{desc}</p>
    </div>
  );
}
