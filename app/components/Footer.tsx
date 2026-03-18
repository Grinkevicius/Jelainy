export default function Footer() {
  return (
    <footer className="bg-heading">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-xs text-white">
        &copy; {new Date().getFullYear()} Jelainy. All rights reserved.
      </div>
    </footer>
  );
}
