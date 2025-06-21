export default function Footer() {
  return (
    <footer className="bg-white text-center py-6 shadow-inner">
      <p className="max-w-3xl mx-auto text-[0.75rem] leading-relaxed">
        Disclaimer: This website contains affiliate links. We may earn a small
        commission if you make a purchase through these links — at no extra cost
        to you. We only recommend products we trust and believe in. Thank you
        for supporting our work.
      </p>
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} AIN ZONE. All rights reserved.
      </p>
    </footer>
  );
}
