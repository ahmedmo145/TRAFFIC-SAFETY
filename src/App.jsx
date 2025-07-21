export default function TrafficSafetyHome() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6" dir="rtl" lang="ar">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-red-600 mb-2">دليل السلامة المرورية</h1>
        <p className="text-lg text-gray-600">مصدر موثوق للتوعية بالسلامة على الطرق وفي مناطق العمل</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-8">
        <Card title="السلامة العامة على الطرق" desc="قواعد وممارسات القيادة الآمنة وتوعية المشاة." />
        <Card title="السلامة في مناطق العمل" desc="إرشادات التنقل في مناطق الإنشاء وخطط المرور المؤقتة." />
        <Card title="الإشارات والعلامات المرورية" desc="تعرّف على معاني الإشارات، الإشارات الضوئية، وعلامات الطريق." />
        <Card title="الموارد والتحميلات" desc="الوصول إلى ملصقات قابلة للطباعة، قوائم السلامة، ومواد التدريب." />
        <Card title="أمثلة لخطط المرور" desc="عرض نماذج من خطط إدارة الحركة المستخدمة في المشاريع." />
        <Card title="تواصل معنا" desc="تواصل معنا للاستفسارات أو الاقتراحات أو طلب التعاون." />
      </section>

      <footer className="text-center mt-12 border-t pt-6 text-sm text-gray-500">
        © 2025 ترافيك سيف أرابيا. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div className="border p-4 rounded-2xl shadow hover:shadow-md transition bg-yellow-50">
      <h2 className="text-xl font-semibold text-red-700 mb-1">{title}</h2>
      <p className="text-gray-700 text-sm">{desc}</p>
    </div>
  );
}
