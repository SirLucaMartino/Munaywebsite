import FadeInOnScroll from '../animations/FadeInOnScroll';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-dark-green text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeInOnScroll>
            <ContactInfo />
          </FadeInOnScroll>

          <FadeInOnScroll delay={200}>
            <ContactForm />
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}