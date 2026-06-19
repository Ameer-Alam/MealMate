import { FormEvent, useState } from "react";

const whatsappLink = "https://wa.me/923349420959";
const whatsappNumber = "+92 334 9420959";

const menu = [
  { day: "Monday", image: "/images/chicken-qorma.jpg", dish: "Chicken Qorma", lunch: "Chicken Qorma", dinner: "Dhaba Style Daal" },
  { day: "Tuesday", image: "/images/chicken-biryani.jpg", dish: "Chicken Biryani", lunch: "Lobia Tarka", dinner: "Chicken Biryani" },
  { day: "Wednesday", image: "/images/mixsabzi.png", dish: "Mix Sabzi", lunch: "Special Mix Veg", dinner: "Signature Bhindi" },
  { day: "Thursday", image: "/images/chicken-karahi.jpg", dish: "Chicken Karahi", lunch: "Chana Masala", dinner: "Signature Chicken Karahi" },
  { day: "Friday", image: "/images/anda-kari.jpg", dish: "Special Anda Kari", lunch: "Egg Masala", dinner: "Homestyle Bhindi" },
  { day: "Saturday", image: "/images/mixsabzi.png", dish: "Mix Sabzi", lunch: "Sabzi Tarka", dinner: "MealMate Special Chawal" },
  { day: "Sunday", image:  "/images/lazeez-chanay.jpg", dish: "Lazeez Chanay", lunch: "Lazeez Chanay", dinner: "Aalo Chicken" },
];

const plans = [
  { name: "Weekly Plan", price: "PKR 4,900", detail: "A simple trial for one full week." },
  { name: "14 Day Plan", price: "PKR 8,900", detail: "Best for short stays and busy schedules." },
  { name: "Monthly Plan", price: "PKR 14,900", detail: "Daily lunch and dinner with the best monthly value.", popular: true },
  { name: "Group Plan", price: "PKR 13,500", detail: "Per student. Minimum 3 students required." },
];

const reasons = [
  "Freshly cooked daily",
  "Home style taste",
  "Healthy and stomach friendly",
  "Affordable subscription plans",
  "Reliable room delivery",
  "Consistent quality",
];

const testimonials = [
  {
    name: "Hamza Ali",
    role: "Hostel student",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
    text: "Nani ke hath Ka Khana yaad aagya.",
  },
  {
    name: "Ayesha Khan",
    role: "Working professional",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
    text: "Clean, tasty, and consistent. I do not have to worry about lunch during office days anymore.",
  },
  {
    name: "Usman Raza",
    role: "Bachelor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=80",
    text: "Hostel ke boring khane se jaan chhuti 😄. MealMate ka khana fresh, tasty aur proper ghar ke khane wali feeling deta hai.",
  },
];

const faqs = [
  { q: "What meals are included?", a: "MealMate includes lunch and dinner, delivered daily according to the weekly menu." },
  { q: "How does the group plan work?", a: "The group plan is PKR 13,500 per student and requires a minimum of 3 students from the same hostel or nearby location." },
  { q: "What payment methods are accepted?", a: "You can pay with cash, Easypaisa, or NayaPay. No online checkout is required." },
  { q: "Do you deliver daily?", a: "Yes. MealMate delivers lunch and dinner directly to your room, hostel, office, or location in Bhara Kahu, Islamabad." },
  { q: "Is there a refund policy?", a: "Refunds and pauses are handled case by case. Message us on WhatsApp and our team will guide you before you subscribe." },
];

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
      <path d="M16.04 3.2A12.77 12.77 0 0 0 5.2 22.75L3.6 28.8l6.2-1.58A12.8 12.8 0 1 0 16.04 3.2Zm0 23.4c-2.12 0-4.08-.62-5.74-1.7l-.4-.25-3.68.94.98-3.58-.27-.42a10.59 10.59 0 1 1 9.1 5.01Zm5.82-7.92c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.52-.16-.74.16-.22.32-.84 1.05-1.03 1.27-.19.22-.38.24-.7.08-.32-.16-1.35-.5-2.58-1.59-.95-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.65.15-.14.32-.38.48-.57.16-.19.22-.32.32-.54.11-.22.06-.4-.03-.57-.08-.16-.74-1.79-1.02-2.45-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.57.08-.87.4-.3.32-1.14 1.11-1.14 2.72 0 1.6 1.17 3.15 1.33 3.37.16.22 2.3 3.51 5.57 4.92.78.34 1.38.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38Z" />
    </svg>
  );
}

function App() {
  const [form, setForm] = useState({ name: "", phone: "", hostel: "", room: "", plan: "Monthly Plan" });

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = encodeURIComponent(
      `Assalam o Alaikum MealMate, I want to subscribe.\nName: ${form.name}\nPhone: ${form.phone}\nHostel: ${form.hostel}\nRoom: ${form.room}\nPlan: ${form.plan}`,
    );
    window.open(`${whatsappLink}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2b1c12]">
      <header className="absolute left-0 right-0 top-0 z-20 px-4 py-5 sm:px-6 lg:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/85 px-4 py-3 shadow-sm backdrop-blur md:px-6">
          <a href="#top" className="flex items-center gap-3" aria-label="MealMate home">
           <img
              src="/images/logo.png"
              alt="MealMate Logo"
              className="h-10 w-auto"
            />
  <span className="text-xl font-black tracking-tight">
    <span className="text-[#F7931E]">Meal</span>
    <span className="text-[#4CAF50]">Mate</span>
  </span>
</a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-[#6d5a4b] md:flex">
            <a className="transition hover:text-[#df5b13]" href="#menu">Menu</a>
            <a className="transition hover:text-[#df5b13]" href="#pricing">Plans</a>
            <a className="transition hover:text-[#df5b13]" href="#contact">Contact</a>
          </div>
          <a href={whatsappLink} className="inline-flex items-center gap-2 rounded-full bg-[#e95d17] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-[#cf4c0f]">
            <WhatsAppIcon /> WhatsApp
          </a>
        </nav>
      </header>

      <section id="top" className="relative min-h-screen overflow-hidden bg-white">
        <img src="/images/mealmate-hero.jpg" alt="Pakistani dining spread with chicken karahi, biryani, qorma, raita, salad and roti" className="absolute inset-0 h-full w-full scale-[1.03] object-cover motion-safe:animate-[slowZoom_18s_ease-in-out_infinite_alternate]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/88 via-white/58 to-[#fffaf2] md:bg-gradient-to-r md:from-white/92 md:via-white/70 md:to-white/10" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-16 pt-32 sm:px-6 lg:px-10">
          <div className="max-w-2xl motion-safe:animate-[fadeUp_.9s_ease-out_both]">
            <img
  src="/images/logo3.png"
  alt="MealMate Logo"
  className="mb-4 h-24 w-auto sm:h-32 lg:h-40 "

/>
<h1 className="max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[#2b1c12] sm:text-6xl lg:text-7xl">
  Har Bite Me <span className="text-green-600">Ghar</span> Ka{" "}
  <span className="text-orange-500">Zaiqa</span>
</h1>            <p className="mt-6 max-w-lg text-lg leading-8 text-[#6d5a4b] sm:text-xl">Fresh homemade meals delivered daily to students, bachelors and professionals.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink} className="inline-flex items-center justify-center gap-3 rounded-full bg-[#e95d17] px-7 py-4 text-base font-black text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1 hover:bg-[#cf4c0f]"><WhatsAppIcon className="h-6 w-6" /> Order on WhatsApp</a>
              <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-black text-[#2b1c12] shadow-lg shadow-orange-100 transition hover:-translate-y-1 hover:text-[#df5b13]">View Weekly Menu</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#24a05a]">Why choose MealMate</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#2b1c12] sm:text-5xl">Daily meals that feel safe, fresh and familiar.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#6d5a4b]">Built for Bhara Kahu hostels, shared flats and office routines where reliable home style food matters every day.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="group flex items-center gap-4 rounded-3xl bg-white px-5 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#eaf8ef] text-[#24a05a] transition group-hover:scale-110">
                  <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                    <path d="m4 10 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="font-bold text-[#3a2a20]">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f26b1d]">Subscription plans</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Choose a plan. Confirm on WhatsApp.</h2>
            <p className="mt-5 text-lg leading-8 text-[#6d5a4b]">Lunch and dinner are included. Pay with cash, Easypaisa or NayaPay.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <article key={plan.name} className={`relative rounded-[2rem] border p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-100 ${plan.popular ? "border-[#f26b1d] bg-[#fff4e7]" : "border-[#f1e5d8] bg-[#fffdf8]"}`}>
                {plan.popular && <span className="absolute right-5 top-5 rounded-full bg-[#24a05a] px-3 py-1 text-xs font-black uppercase tracking-wide text-white">Most Popular</span>}
                <h3 className="pr-24 text-2xl font-black tracking-tight">{plan.name}</h3>
                <p className="mt-6 text-4xl font-black tracking-[-0.04em] text-[#e95d17]">{plan.price}</p>
                {plan.name === "Group Plan" && <p className="mt-1 text-sm font-bold text-[#6d5a4b]">per student</p>}
                <p className="mt-5 min-h-14 leading-7 text-[#6d5a4b]">{plan.detail}</p>
                <a href={`${whatsappLink}?text=I%20want%20to%20subscribe%20to%20${encodeURIComponent(plan.name)}`} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#e95d17] px-5 py-3.5 font-black text-white shadow-lg shadow-orange-200 transition hover:bg-[#cf4c0f]"><WhatsAppIcon /> Get this plan</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#fffaf2] px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#24a05a]">Weekly menu</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-6xl">A premium food catalog for your week.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6d5a4b]">Every card shows what is cooking for lunch and dinner, with homemade Pakistani dishes prepared fresh daily.</p>
            </div>
            <a href={whatsappLink} className="inline-flex items-center justify-center gap-3 rounded-full bg-[#e95d17] px-7 py-4 font-black text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1 hover:bg-[#cf4c0f]"><WhatsAppIcon className="h-6 w-6" /> Order from menu</a>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {menu.map((item) => (
              <article key={item.day} className="group overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-orange-100/70 transition duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-200">
                <div className="relative h-64 overflow-hidden">
                  <img src={item.image} alt={item.dish} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2b1c12]/45 to-transparent" />
                  <h3 className="absolute bottom-5 left-5 text-3xl font-black tracking-[-0.04em] text-white drop-shadow">{item.day}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f26b1d]">{item.dish}</p>
                  <div className="mt-5 space-y-4">
                    <div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#24a05a]">Lunch</p><p className="mt-1 text-lg font-black text-[#2b1c12]">{item.lunch}</p></div>
                    <div className="h-px bg-[#f0e1d2]" />
                    <div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#24a05a]">Dinner</p><p className="mt-1 text-lg font-black text-[#2b1c12]">{item.dinner}</p></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl"><p className="text-sm font-black uppercase tracking-[0.28em] text-[#f26b1d]">Reviews</p><h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Trusted by students and professionals.</h2></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((review) => (
              <article key={review.name} className="rounded-[2rem] bg-[#fffaf2] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100">
                <div className="flex items-center gap-4"><img src={review.image} alt={review.name} className="h-16 w-16 rounded-full object-cover" /><div><h3 className="text-lg font-black">{review.name}</h3><p className="font-semibold text-[#24a05a]">{review.role}</p></div></div>
                <p className="mt-6 text-lg leading-8 text-[#6d5a4b]">"{review.text}"</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#24a05a]">FAQ</p><h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Questions before you subscribe?</h2><p className="mt-5 text-lg leading-8 text-[#6d5a4b]">If anything is unclear, WhatsApp us and we will help you choose the right plan.</p></div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-3xl bg-white px-6 py-5 shadow-sm open:shadow-lg open:shadow-orange-100">
                <summary className="cursor-pointer list-none text-lg font-black marker:hidden"><span className="flex items-center justify-between gap-4">{faq.q}<span className="text-2xl text-[#e95d17] transition group-open:rotate-45">+</span></span></summary>
                <p className="mt-4 leading-7 text-[#6d5a4b]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f26b1d]">Contact</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Ready for daily ghar ka khana?</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#6d5a4b]">Fill the details and we will open WhatsApp with your subscription message. Delivery is available in Bhara Kahu, Islamabad.</p>
            <div className="mt-8 rounded-[2rem] bg-[#fff4e7] p-6"><p className="font-black text-[#2b1c12]">Payment methods</p><p className="mt-2 text-[#6d5a4b]">Cash, Easypaisa (0326 9975316), NayaPay (0307 8003425). No online checkout required.</p></div>
          </div>
          <form onSubmit={submitContact} className="rounded-[2rem] bg-[#fffaf2] p-5 shadow-xl shadow-orange-100 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block"><span className="text-sm font-black text-[#3a2a20]">Name</span><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="mt-2 w-full rounded-2xl border border-[#ead9c7] bg-white px-4 py-4 outline-none transition focus:border-[#f26b1d]" placeholder="Your name" /></label>
              <label className="block"><span className="text-sm font-black text-[#3a2a20]">Phone Number</span><input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="mt-2 w-full rounded-2xl border border-[#ead9c7] bg-white px-4 py-4 outline-none transition focus:border-[#f26b1d]" placeholder="03XX XXXXXXX" /></label>
              <label className="block"><span className="text-sm font-black text-[#3a2a20]">Hostel Name</span><input value={form.hostel} onChange={(e) => setForm({ ...form, hostel: e.target.value })} required className="mt-2 w-full rounded-2xl border border-[#ead9c7] bg-white px-4 py-4 outline-none transition focus:border-[#f26b1d]" placeholder="Hostel or location" /></label>
              <label className="block"><span className="text-sm font-black text-[#3a2a20]">Room Number</span><input value={form.room} onChange={(e) => setForm({ ...form, room: e.target.value })} className="mt-2 w-full rounded-2xl border border-[#ead9c7] bg-white px-4 py-4 outline-none transition focus:border-[#f26b1d]" placeholder="Room number" /></label>
              <label className="block sm:col-span-2"><span className="text-sm font-black text-[#3a2a20]">Plan Selection</span><select value={form.plan} onChange={(e) => setForm({ ...form, plan: e.target.value })} className="mt-2 w-full rounded-2xl border border-[#ead9c7] bg-white px-4 py-4 outline-none transition focus:border-[#f26b1d]">{plans.map((plan) => <option key={plan.name}>{plan.name}</option>)}</select></label>
            </div>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#e95d17] px-7 py-4 text-base font-black text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1 hover:bg-[#cf4c0f]"><WhatsAppIcon className="h-6 w-6" /> Chat on WhatsApp</button>
          </form>
        </div>
      </section>

      <footer className="bg-[#fffaf2] px-4 pb-24 pt-12 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-[#ead9c7] pt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start">
  <img
    src="/images/logo3.png"
    alt="MealMate Logo"
    className="h-20 w-auto"
  />
  <p className="mt-3 text-lg font-bold">
  <span className="text-[#6d5a4b]">Har Bite Me </span>
  <span className="text-[#4CAF50]">Ghar</span>
  <span className="text-[#6d5a4b]"> Ka </span>
  <span className="text-[#F7931E]">Zaiqa</span>
</p>
</div>
          <div className="space-y-2 text-[#6d5a4b] md:text-right"><p><span className="font-black text-[#2b1c12]">Service Area:</span> Bhara Kahu, Islamabad</p><p><span className="font-black text-[#2b1c12]">WhatsApp:</span> {whatsappNumber}</p></div>
          <a href={whatsappLink} className="inline-flex items-center justify-center gap-3 rounded-full bg-[#e95d17] px-7 py-4 font-black text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1 hover:bg-[#cf4c0f]"><WhatsAppIcon className="h-6 w-6" /> Contact on WhatsApp</a>
        </div>
      </footer>

      <a href={whatsappLink} className="fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-2xl shadow-green-300 transition hover:-translate-y-1 hover:scale-105 sm:bottom-7 sm:right-7 sm:h-auto sm:w-auto sm:gap-3 sm:px-6 sm:py-4 sm:font-black" aria-label="Chat with MealMate on WhatsApp">
        <WhatsAppIcon className="h-8 w-8" /> <span className="hidden sm:inline">Order on WhatsApp</span>
      </a>
    </main>
  );
}

export default App;
