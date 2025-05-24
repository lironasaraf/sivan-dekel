
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import StorySection from "@/components/StorySection";
import TeachingMethodSection from "@/components/TeachingMethodSection";
import OfferSection from "@/components/OfferSection";
import CourseSection from "@/components/CourseSection";
import AthensConsultationSection from "@/components/AthensConsultationSection";
import GreekLivingRoomSection from "@/components/GreekLivingRoomSection";
import TestimonialsSection from "@/components/TestimonialsSection";
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
      <TeachingMethodSection />
      <OfferSection />
      <CourseSection />
      <AthensConsultationSection />
      <GreekLivingRoomSection />
      <TestimonialsSection />
      <BookSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
