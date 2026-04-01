import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-main flex flex-col gap-4 text-sm text-[#97A1C7] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-[#D7DDF7]">Feras Hababa</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
