export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">Let’s build together</h2>
          <p className="mx-auto mt-3 max-w-2xl desc">
            Ready to start your next project or have questions? Reach out to Alpha 4 Labs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:info@alpha4labs.com"
              className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-white shadow hover:opacity-95"
            >
              Email us
            </a>
            <a
              href="#home"
              className="rounded-full px-6 py-3 font-semibold text-foreground/90 ring-1 ring-white/15 hover:bg-white/5"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


