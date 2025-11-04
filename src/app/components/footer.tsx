export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-foreground/70">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <p className="mt-6">&copy; {new Date().getFullYear()} Alpha 4 Labs. All rights reserved.</p>
      </div>
    </footer>
  );
} 