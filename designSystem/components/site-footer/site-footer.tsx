export function SiteFooter() {
  return (
    <footer className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-hh-l bg-white px-[30px] py-[26px] shadow-hh-20">
      <div className="text-sm leading-[1.7] text-hh-text-secondary">
        © 2005 ~ 2026 高見龍
        <br />
        使用 ♥ 與 Ruby + Rails 打造
      </div>
      <div className="flex gap-[18px] text-hh-text-disabled">
        {/* YouTube */}
        <a
          href="#"
          aria-label="YouTube"
          className="transition-colors hover:text-hh-primary"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C15.8 4.1 12 4.1 12 4.1h0s-3.8 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 8.8 2 10.5v1.6c0 1.6.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.8.8 2.3.9 1.7.2 6.7.2 6.7.2s3.8 0 6.7-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.6c0-1.6-.2-3.3-.2-3.3zM10 14.6V8.9l4.8 2.9-4.8 2.8z" />
          </svg>
        </a>
        {/* GitHub */}
        <a
          href="#"
          aria-label="GitHub"
          className="transition-colors hover:text-hh-primary"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.5-.3s1.7.1 2.5.3c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5C19.1 20.2 22 16.4 22 12c0-5.5-4.5-10-10-10z" />
          </svg>
        </a>
        {/* Mail */}
        <a
          href="#"
          aria-label="Email"
          className="transition-colors hover:text-hh-primary"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
        </a>
        {/* RSS */}
        <a
          href="#"
          aria-label="RSS"
          className="transition-colors hover:text-hh-primary"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 3a2 2 0 0 0-2 2v0a16 16 0 0 1 16 16h0a2 2 0 0 0 2-2A18 18 0 0 0 5 3zM3 10v4a8 8 0 0 1 8 8h-4a4 4 0 0 0-4-4zm1.5 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
