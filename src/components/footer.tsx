export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Anirudh Raj Sharma. Built with
          Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
