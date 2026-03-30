export default function Footer() {
  return (
    <footer className="py-6 px-6 border-t border-[#d2d2d7]/60 bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto">
        <p className="text-[#86868b] text-xs">
          &copy; {new Date().getFullYear()} Anirudh Raj Sharma
        </p>
      </div>
    </footer>
  );
}
