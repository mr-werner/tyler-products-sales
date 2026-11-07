import React, { useMemo, useState } from "react";
import { ArrowRight, Check, Download, ExternalLink, FileText, Mail, MapPin, Menu, Phone, Search, X } from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import { DRAWINGS } from "./drawings.js";
import logo from "./assets/tps-logo.jpg";
import photoTeam from "./assets/photo-team.jpg";
import photoAerial from "./assets/photo-aerial.jpg";
import photoYard from "./assets/photo-yard.jpg";
import photoCrew from "./assets/photo-crew.jpg";
import photoShow from "./assets/photo-show.jpg";
import photoDelivery from "./assets/photo-delivery.jpg";
import photoOffice from "./assets/photo-office.jpg";
import thumbTanks from "./assets/thumb-tanks.jpg";
import thumbAerobic from "./assets/thumb-aerobic.jpg";
import thumbManholes from "./assets/thumb-manholes.jpg";
import assocTyler from "./assets/assoc-tyler.png";
import assocBBB from "./assets/assoc-bbb.png";
import assocTOWA from "./assets/assoc-towa.png";
import assocTABA from "./assets/assoc-taba.png";

const COMPANY = "Tyler Products & Sales";
const ABBR = "tps";
const END_DATE = "2026-12-12T23:59:59-06:00";
const PHONE = "903-593-8633";
const PHONE_TEL = "+19035938633";
const GM_EMAIL = "paul@tylerproductssales.com";
const ADDRESS = ["10383 Spur 164", "Tyler, TX 75709"];
const OLD_SITE = "https://www.tylerproductssales.com/";
const MAP_QUERY = "Tyler+Products+Sales+10383+Spur+164+Tyler+TX+75709";
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const FOUNDED = 1982;

const NAV = [["Products", "#products"], ["Drawings", "#drawings"], ["Our story", "#story"], ["Who to call", "#team"], ["Quote", "#quote"]];

const LINES = [
  { key: "septic", no: "01", title: "Septic tanks", img: thumbTanks, alt: "Round precast septic tanks stamped TPS", specs: ["250 – 2,000 gal", "60/40 two-tank", "IM-540"], text: "The tank that started the company. Concrete septic tanks for East Texas contractors, plus ADS 8\" gravelless pipe, EZ Flow by Infiltrator and Q4/Arc 36 leaching chambers." },
  { key: "aerobic", no: "02", title: "Aerobic systems", img: thumbAerobic, alt: "A precast aerobic tank with risers", specs: ["500 – 1,500 GPD", "Aqua-Safe", "Aqua-Aire"], text: "One of the state's larger builders of concrete aerobic treatment units since the mid '90s: Aqua-Safe and Aqua-Aire models, plus Geoflow Wasteflow drip dispersal." },
  { key: "manhole", no: "03", title: "Sanitary manholes", img: thumbManholes, alt: "Precast manhole sections in the yard", specs: ["48\"", "60\"", "72\""], text: "Round structures built to the engineer's spec: with or without inverts, flexible pipe-to-manhole connectors in a wide range of sizes, and interior or exterior coatings. Same sizes for lift stations." },
  { key: "storm", no: "04", title: "Utility & storm water", img: photoYard, alt: "Steel forms on the plant floor", specs: ["Catch basins 18\"+", "Curb inlets 5' – 20'", "ADS N-12 pipe"], text: "Storm manholes 48\" to 72\", catch basins, curb inlet boxes and tops, Y inlets and custom valve boxes, built to the plans with pipe-to-pipe connectors wherever possible." },
  { key: "grease", no: "05", title: "Grease interceptors & sand traps", img: photoDelivery, alt: "A precast delivery on a company flatbed", specs: ["750 – 1,500 gal", "Traffic rated"], text: "Precast interceptors and separators that keep oil, grease, sand and lint out of wastewater lines. Cleanout access in the lid, and they take traffic-bearing ring and cover assemblies." },
  { key: "misc", no: "06", title: "Miscellaneous precast", img: photoCrew, alt: "The Tyler Products crew with a company truck", specs: ["Burial boxes", "Car stops", "Specialty boxes"], text: "Burial boxes, 72\" concrete car stops, Tuf-Tite car stops in safety yellow or handicap blue, and specialty boxes of just about any size and shape." },
];

const CATS = Object.fromEntries(LINES.map((l) => [l.key, l.title]));

const TIMELINE = [
  { year: "1982", title: "Two forms in a backyard", text: "Lynn and Ann White start building concrete septic tanks behind their house, with a 250-gallon and a 400-gallon form, because local septic contractors wanted a quality concrete tank.", img: photoAerial },
  { year: "Early '90s", title: "Out of the “septic” comfort zone", text: "Sanitary manholes (48\", then 60\" and 72\"), catch basins, meter vaults, junction boxes and grease interceptors join the line.", img: photoYard },
  { year: "Mid '90s", title: "Aerobic systems", text: "Tyler Products becomes one of the largest makers of concrete aerobic systems in Texas, building the Aqua-Safe and Aqua-Aire units.", img: photoShow },
  { year: "Today", title: "Still a family business", text: "John and Kim Redfern, son-in-law and daughter, own the company. Tanks now reach 2,000 gallons, and specialty boxes and storm water products serve contractors across East Texas.", img: photoTeam },
];

const SUPPLIES = [
  ["Aerobic compressors", "Hiblow, Medo, Secoh"], ["Repair kits", "Hiblow, Medo, Secoh, Gast"], ["Chlorinators", "Liquid and tablet"], ["Control boxes", "Timed, demand and drip"],
  ["Filters", "Drip and septic"], ["Tuf-Tite risers & lids", "24\", 20\", 16\", 12\""], ["Water pumps", "Sta-Rite, Goulds, Little Giant"], ["Rotary vane sprinklers", "Pipe and fittings too"],
];

const TEAM = [
  ["Paul", "General Manager", "paul@tylerproductssales.com", "manager"],
  ["Jordan", "Septic sales and repair", "jordan@tylerproductssales.com", "septic"],
  ["Devin", "Scheduling and aerobic sales", "devin@tylerproductssales.com", "aerobic"],
  ["Barry", "Sanitary manhole sales", "barry@tylerproductssales.com", "manhole"],
  ["Sean", "Utility structure sales", "sean@tylerproductssales.com", "storm"],
  ["Patti", "On-site wastewater commercial sales, accounts receivable", "patti@tylerproductssales.com", "commercial"],
  ["Judy", "Human resources, accounts payable, insurance", "judy@tylerproductssales.com", "office"],
  ["John", "Owner", "john@tylerproductssales.com", "owner"],
];

const MEMBERS = [
  { img: assocTyler, name: "City of Tyler", href: "http://www.cityoftyler.org" },
  { img: assocBBB, name: "East Texas Better Business Bureau", href: "http://www.bbb.org" },
  { img: assocTOWA, name: "Texas On-Site Wastewater Association", href: "http://txowa.org" },
  { img: assocTABA, name: "Tyler Area Builders Association", href: "http://www.tylerareabuilders.com" },
];

function Rings({ className = "" }) {
  return (
    <svg className={`rings ${className}`} viewBox="0 0 200 200" aria-hidden="true">
      {[96, 80, 64, 48].map((r, i) => <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth={i === 0 ? 4 : 1.5} strokeDasharray={i === 1 ? "4 6" : undefined} />)}
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="wrap nav-row">
        <a href="#top" className="brand" aria-label="Tyler Products Sales home"><img src={logo} alt="Tyler Products Sales, Inc. TPS pre-cast concrete products" width="464" height="154" /></a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a className="btn btn-blue nav-call" href={`tel:${PHONE_TEL}`}><Phone size={16} /> {PHONE}</a>
        </nav>
        <button type="button" className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="dome" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="stamp-line">Pre-cast concrete products · Tyler, Texas</p>
          <h1>Precast concrete, <span>poured in East Texas.</span></h1>
          <p className="lede">Septic tanks, aerobic systems, sanitary manholes and storm water structures from a family-owned plant on Spur 164. The main supplier of concrete tanks to a vast majority of contractors throughout East Texas.</p>
          <div className="hero-ctas">
            <a className="btn btn-blue" href="#quote">Get a quote <ArrowRight size={18} /></a>
            <a className="btn btn-concrete" href="#drawings"><FileText size={18} /> Engineered drawings</a>
          </div>
          <a className="hero-phone" href={`tel:${PHONE_TEL}`}><Phone size={22} /><span><small>Call now</small>{PHONE}</span></a>
        </div>
        <div className="manhole">
          <Rings className="manhole-rings" />
          <div className="manhole-lid"><img src={photoAerial} alt="Aerial view of the Tyler Products Sales precast plant" /></div>
          <div className="stamp" aria-label={`Family owned since ${FOUNDED}`}><span>Family owned</span><strong>{FOUNDED}</strong><span>Tyler · TX</span></div>
        </div>
      </div>
      <div className="hero-lines">
        <div className="wrap hero-lines-in">
          {LINES.map((l) => <a key={l.key} href="#products"><span>{l.no}</span>{l.title}</a>)}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="section products" id="products">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Product lines</p>
          <h2>Six lines, cast on site.</h2>
          <p>Every structure can be quoted to the plans. Call and talk to someone on the sales team who handles that line.</p>
        </div>
        <div className="prod-grid">
          {LINES.map((l) => (
            <article className="prod" key={l.key}>
              <div className="prod-img"><img src={l.img} alt={l.alt} loading="lazy" /><span className="prod-no">{l.no}</span></div>
              <div className="prod-body">
                <h3>{l.title}</h3>
                <ul className="chips">{l.specs.map((s) => <li key={s}>{s}</li>)}</ul>
                <p>{l.text}</p>
                <a href="#drawings" className="prod-link">Drawings for this line <ArrowRight size={15} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Drawings() {
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const [all, setAll] = useState(false);
  const full = useMemo(() => DRAWINGS.filter(([c, l]) => (cat === "all" || c === cat) && l.toLowerCase().includes(q.trim().toLowerCase())), [cat, q]);
  const clipped = cat === "all" && !q.trim() && !all;
  const list = clipped ? full.slice(0, 12) : full;
  const counts = useMemo(() => DRAWINGS.reduce((a, [c]) => ({ ...a, [c]: (a[c] || 0) + 1 }), {}), []);
  return (
    <section className="section drawings" id="drawings">
      <div className="wrap">
        <div className="section-head light">
          <p className="eyebrow">Engineered drawings & cut sheets</p>
          <h2>All {DRAWINGS.length} drawings. One list.</h2>
          <p>On the old site each drawing sat behind two dropdown menus. Here every sheet is one tap away, ready for the engineer or the inspector.</p>
        </div>
        <div className="dw-controls">
          <label className="dw-search"><Search size={18} /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search: 1500, catch basin, 48&quot;…" aria-label="Search drawings" /></label>
          <div className="dw-cats">
            <button type="button" className={cat === "all" ? "is-on" : ""} onClick={() => setCat("all")}>All <small>{DRAWINGS.length}</small></button>
            {LINES.map((l) => <button type="button" key={l.key} className={cat === l.key ? "is-on" : ""} onClick={() => setCat(l.key)}>{l.title} <small>{counts[l.key] || 0}</small></button>)}
          </div>
        </div>
        <p className="dw-count" aria-live="polite">{full.length} sheet{full.length === 1 ? "" : "s"}{clipped ? " · showing 12" : ""}</p>
        <ul className="dw-list">
          {list.map(([c, label, href]) => (
            <li key={href}>
              <a href={OLD_SITE + encodeURI(href)} target="_blank" rel="noopener noreferrer">
                <span className="dw-sheet">{CATS[c].split(" ")[0].slice(0, 3).toUpperCase()}-{String(DRAWINGS.findIndex((d) => d[2] === href) + 1).padStart(2, "0")}</span>
                <span className="dw-label">{label}</span>
                <span className="dw-cat">{CATS[c]}</span>
                <Download size={17} className="dw-icon" />
              </a>
            </li>
          ))}
          {!list.length && <li className="dw-empty">No sheet matches. Call {PHONE} and we'll send it.</li>}
        </ul>
        {clipped && <button type="button" className="btn btn-concrete dw-more" onClick={() => setAll(true)}>Show all {DRAWINGS.length} sheets</button>}
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="section story" id="story">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Our story</p>
          <h2>It started with two forms.</h2>
          <p>“While some people work to create a better mouse trap, we have worked to produce a better concrete tank.”</p>
        </div>
        <ol className="timeline">
          {TIMELINE.map((t) => (
            <li key={t.year}>
              <div className="tl-photo"><img src={t.img} alt="" loading="lazy" /></div>
              <span className="tl-year">{t.year}</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </li>
          ))}
        </ol>
        <div className="plant-strip">
          <figure><img src={photoOffice} alt="The Tyler Products Sales office on Spur 164" loading="lazy" /><figcaption>The office at 10383 Spur 164</figcaption></figure>
          <figure><img src={photoCrew} alt="The Tyler Products Sales crew with a company truck" loading="lazy" /><figcaption>The crew and the fleet</figcaption></figure>
          <figure><img src={photoDelivery} alt="A precast delivery on a flatbed" loading="lazy" /><figcaption>Delivered on our own trucks</figcaption></figure>
        </div>
      </div>
    </section>
  );
}

function Supplies() {
  return (
    <section className="supplies">
      <div className="wrap supplies-grid">
        <div>
          <p className="eyebrow">Septic supply counter</p>
          <h2>Parts for the systems you install.</h2>
          <p>A complete line of septic supplies, from PVC pipe and fittings to aerobic air compressors and pumps. Call for price and shipping.</p>
          <a className="btn btn-blue" href={`tel:${PHONE_TEL}`}><Phone size={18} /> {PHONE}</a>
        </div>
        <ul className="supply-list">
          {SUPPLIES.map(([h, s]) => <li key={h}><Check size={18} /><span><strong>{h}</strong>{s}</span></li>)}
        </ul>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section team" id="team">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Who to call</p>
          <h2>Talk to the person who handles your line.</h2>
          <p>Office {PHONE}. Or email the right person directly.</p>
        </div>
        <div className="team-grid">
          {TEAM.map(([n, role, e, k]) => (
            <a className={`person p-${k}`} key={n} href={`mailto:${e}`}>
              <span className="person-initial" aria-hidden="true">{n[0]}</span>
              <strong>{n}</strong>
              <span className="person-role">{role}</span>
              <span className="person-mail"><Mail size={14} /> {e}</span>
            </a>
          ))}
        </div>
        <div className="members">
          <p className="eyebrow">Memberships &amp; affiliations</p>
          <div className="members-row">
            {MEMBERS.map((m) => <a key={m.name} href={m.href} target="_blank" rel="noopener noreferrer" title={m.name}><img src={m.img} alt={m.name} loading="lazy" /><span>{m.name}</span></a>)}
            <a href="http://www.precast.org" target="_blank" rel="noopener noreferrer" className="npca"><strong>NPCA</strong><span>National Precast Concrete Association</span></a>
          </div>
          <p className="small">Reviews: the current site shows none, so none are quoted here. <a href={MAP_URL} target="_blank" rel="noopener noreferrer">See Tyler Products Sales on Google</a>. Need a licensed installer? Search the <a href="https://www.tceq.texas.gov/" target="_blank" rel="noopener noreferrer">TCEQ licensed contractor list <ExternalLink size={12} /></a>.</p>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  const [f, setF] = useState({ name: "", company: "", phone: "", email: "", product: LINES[0].title, job: "", needed: "", notes: "", website: "" });
  const [status, setStatus] = useState("idle");
  const [msg, setMsg] = useState("");
  const set = (k, v) => setF((p) => ({ ...p, [k]: v }));
  async function submit(e) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok || !d.success) throw new Error(d.message || "Could not send.");
      setStatus("sent");
      setMsg(d.demo ? "Concept preview: nothing was sent. On the live site this goes to the sales team." : "Thanks. Someone from the sales team will call you with a quote.");
    } catch (err) { setStatus("error"); setMsg(err.message || `Please call ${PHONE}.`); }
  }
  return (
    <section className="section quote" id="quote">
      <div className="wrap quote-grid">
        <div className="quote-info">
          <p className="eyebrow">Request a quote</p>
          <h2>Send the plans. We'll quote what's on them.</h2>
          <p>Tell us the structure, sizes and job site. One of the experienced sales team will quote the structures stated on your plans and call you back.</p>
          <div className="visit">
            <a href={`tel:${PHONE_TEL}`} className="visit-phone"><Phone size={22} /> {PHONE}</a>
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer"><MapPin size={18} /> Tyler Products Sales, Inc., {ADDRESS.join(", ")}</a>
            <a href={`mailto:${GM_EMAIL}`}><Mail size={18} /> {GM_EMAIL} (Paul, General Manager)</a>
          </div>
          <div className="map"><div className="map-fallback" aria-hidden="true"><MapPin size={34} /><strong>10383 Spur 164</strong><span>Tyler, TX 75709</span></div><iframe title="Map to Tyler Products Sales, 10383 Spur 164, Tyler, TX" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
        <form className="quote-form" onSubmit={submit}>
          <div className="qf-head"><Rings className="qf-rings" /><span>Quote request</span><strong>TPS</strong></div>
          {status === "sent" ? (
            <div className="qf-done"><Check size={40} /><p>{msg}</p><button type="button" className="btn btn-blue" onClick={() => setStatus("idle")}>Send another</button></div>
          ) : (
            <div className="qf-fields">
              <label>Name *<input required value={f.name} onChange={(e) => set("name", e.target.value)} maxLength={120} autoComplete="name" /></label>
              <label>Company<input value={f.company} onChange={(e) => set("company", e.target.value)} maxLength={120} autoComplete="organization" /></label>
              <label>Phone *<input required type="tel" value={f.phone} onChange={(e) => set("phone", e.target.value)} maxLength={40} autoComplete="tel" /></label>
              <label>Email<input type="email" value={f.email} onChange={(e) => set("email", e.target.value)} maxLength={254} autoComplete="email" /></label>
              <label className="full">Product line
                <select value={f.product} onChange={(e) => set("product", e.target.value)}>{LINES.map((l) => <option key={l.key}>{l.title}</option>)}<option>Septic supplies / parts</option></select>
              </label>
              <label>Job / location<input value={f.job} onChange={(e) => set("job", e.target.value)} maxLength={160} /></label>
              <label>Needed by<input value={f.needed} onChange={(e) => set("needed", e.target.value)} maxLength={60} placeholder="Date or week" /></label>
              <label className="full">What do you need?<textarea rows={4} value={f.notes} onChange={(e) => set("notes", e.target.value)} maxLength={3000} placeholder="Sizes and quantities, e.g. 3 x 48&quot; manholes, 1000 gal tank, delivery…" /></label>
              <div className="hp" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={f.website} onChange={(e) => set("website", e.target.value)} /></label></div>
              {status === "error" && <p className="form-error full" role="alert">{msg}</p>}
              <button type="submit" className="btn btn-blue full" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send quote request"}</button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div><img className="footer-logo" src={logo} alt="Tyler Products Sales, Inc." width="464" height="154" loading="lazy" /><p>Family-owned precast concrete plant in the heart of East Texas.</p></div>
        <div><h4>Products</h4>{LINES.map((l) => <a key={l.key} href="#products">{l.title}</a>)}</div>
        <div><h4>Contact</h4><a href={`tel:${PHONE_TEL}`}>{PHONE}</a><span>{ADDRESS[0]}</span><span>{ADDRESS[1]}</span><a href="#drawings">Engineered drawings</a></div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} Tyler Products Sales, Inc. · Concept redesign by Blueprint WebStudio · Independent concept, not for official use</span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Drawings />
        <Story />
        <Supplies />
        <Team />
        <Quote />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
