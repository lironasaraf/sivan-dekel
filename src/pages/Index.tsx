
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import StorySection from "@/components/StorySection";
import GreekLivingRoomSection from "@/components/GreekLivingRoomSection";
import OfferSection from "@/components/OfferSection";
import CourseSection from "@/components/CourseSection";
import BookSection from "@/components/BookSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      <Hero />
      <AboutSection />
      <StorySection />
      <GreekLivingRoomSection />
      <OfferSection />
      <CourseSection />
      <BookSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
