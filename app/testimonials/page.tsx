import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function TestimonialsPage() {
  return (
    <main className="relative bg-obsidian">
      <Navbar />
      <div className="pt-20">
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
