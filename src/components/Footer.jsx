export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} Premium Garlic Brand. All Rights
        Reserved.
      </p>
      <p className="text-sm mt-1">Handcrafted with ❤️ in India</p>
    </footer>
  );
}
