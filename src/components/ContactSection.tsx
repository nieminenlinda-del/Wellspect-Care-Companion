import { useEffect, useState } from "react";
import {
  CONTACT_COUNTRY_STORAGE_KEY,
  contactCountryOptions,
  defaultContactCountry,
  englishContactFor,
  isContactCountry,
  type ContactCountry,
  type ContactInfo,
} from "@/data/contact";

function ContactFields({ contact }: { contact: ContactInfo }) {
  return (
    <dl className="mt-8 grid gap-6 sm:grid-cols-2">
      <div>
        <dt className="text-muted-foreground text-[11px] tracking-[0.2em] uppercase">
          {contact.phoneLabel}
        </dt>
        <dd className="mt-1">
          <a
            href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
            className="text-primary text-base font-medium underline-offset-4 hover:underline"
          >
            {contact.phone}
          </a>
        </dd>
      </div>
      <div>
        <dt className="text-muted-foreground text-[11px] tracking-[0.2em] uppercase">
          {contact.emailLabel}
        </dt>
        <dd className="mt-1">
          <a
            href={`mailto:${contact.email}`}
            className="text-primary text-base font-medium break-all underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>
        </dd>
      </div>
      <div>
        <dt className="text-muted-foreground text-[11px] tracking-[0.2em] uppercase">
          {contact.hoursLabel}
        </dt>
        <dd className="text-card-foreground mt-1 text-base">{contact.hours}</dd>
      </div>
      <div>
        <dt className="text-muted-foreground text-[11px] tracking-[0.2em] uppercase">
          {contact.websiteLabel}
        </dt>
        <dd className="text-card-foreground mt-1 text-base">{contact.website}</dd>
      </div>
      <div className="sm:col-span-2">
        <dt className="text-muted-foreground text-[11px] tracking-[0.2em] uppercase">
          {contact.addressLabel}
        </dt>
        <dd className="text-card-foreground mt-1 text-base">{contact.address}</dd>
      </div>
    </dl>
  );
}

export function ContactDetails({ contact }: { contact: ContactInfo }) {
  return (
    <div className="border-border bg-card mt-6 rounded-3xl border p-7 shadow-soft sm:p-9">
      <p className="text-card-foreground text-lg font-semibold">{contact.company}</p>
      <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed">
        {contact.intro}
      </p>
      <ContactFields contact={contact} />
    </div>
  );
}

export function EnglishContactSection() {
  const [country, setCountry] = useState<ContactCountry>(defaultContactCountry);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONTACT_COUNTRY_STORAGE_KEY);
    if (isContactCountry(stored)) setCountry(stored);
  }, []);

  const select = (next: ContactCountry) => {
    setCountry(next);
    try {
      window.localStorage.setItem(CONTACT_COUNTRY_STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
  };

  const contact = englishContactFor(country);

  return (
    <div className="border-border bg-card mt-6 rounded-3xl border p-7 shadow-soft sm:p-9">
      <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">{contact.intro}</p>
      <div role="radiogroup" aria-label="Country" className="mt-5 flex flex-wrap gap-2">
        {contactCountryOptions.map((option) => {
          const selected = option.code === country;
          return (
            <button
              key={option.code}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => select(option.code)}
              className={`focus-visible:ring-primary min-h-11 rounded-full px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none ${
                selected
                  ? "bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:bg-muted border"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
      <p className="text-card-foreground mt-8 text-lg font-semibold">{contact.company}</p>
      <ContactFields contact={contact} />
    </div>
  );
}
