import React, { useRef, useState, useEffect, forwardRef } from 'react';
import emailjs from '@emailjs/browser';
import { gsap } from 'gsap';

const Contact = forwardRef((props, ref) => {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState(''); // 'success' ou 'error'

  // Références pour chaque champ du formulaire
  const nameRef = useRef();
  const prenomRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const buttonRef = useRef();

  // Fonction pour l'animation des champs
  const animateFields = () => {
    gsap.fromTo(nameRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5 });
    gsap.fromTo(prenomRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5, delay: 0.1 });
    gsap.fromTo(emailRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5, delay: 0.2 });
    gsap.fromTo(messageRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5, delay: 0.3 });
    gsap.fromTo(buttonRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.4 });
  };

  // Observer qui détecte la visibilité du formulaire
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateFields();
      }
    }, { threshold: 0.5 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_l45ly3w', 'template_54rd909', form.current, 'Dd1NmoQL0oW1-JdYW')
      .then(
        (result) => {
          console.log('Message envoyé avec succès:', result.text);
          showPopup('Votre message a été envoyé avec succès !', 'success');
          form.current.reset();
        },
        (error) => {
          console.log('Erreur lors de l\'envoi du message:', error.text);
          showPopup('Une erreur est survenue, veuillez réessayer.', 'error');
        }
      );
  };

  const showPopup = (message, type) => {
    setPopupMessage(message);
    setPopupType(type);

    setTimeout(() => {
      setPopupMessage('');
      setPopupType('');
    }, 3000);
  };

  return (
    <div ref={ref} className="relative items-left text-left flex flex-col gap-8 py-8 sm:py-16 lg:py-32 text-gray-700">
      <h2 className="text-6xl">Vous souhaitez échanger avec moi</h2>

      <form ref={form} className="contact grid grid-cols-1 sm:grid-cols-3 gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 col-span-1 sm:col-span-1" ref={nameRef}>
          <label htmlFor="name">Nom</label>
          <input
            className="bg-transparent px-4 p-2 rounded-md border border-black w-full"
            type="text"
            id="name"
            name="user_name"
            placeholder="Nom"
            required
          />
        </div>
        <div className="flex flex-col gap-2 col-span-1 sm:col-span-1" ref={prenomRef}>
          <label htmlFor="prenom">Prénom</label>
          <input
            className="bg-transparent px-4 p-2 rounded-md border border-black w-full"
            type="text"
            id="prenom"
            name="user_prenom"
            placeholder="Prénom"
            required
          />
        </div>
        <div className="flex flex-col gap-2 col-span-1 sm:col-span-1" ref={emailRef}>
          <label htmlFor="email">E-mail</label>
          <input
            className="bg-transparent px-4 p-2 rounded-md border border-black w-full"
            type="email"
            id="email"
            name="user_email"
            placeholder="E-mail"
            required
          />
        </div>
        <div className="flex flex-col gap-2 col-span-1 sm:col-span-3" ref={messageRef}>
          <label htmlFor="message">Message</label>
          <textarea
            className="bg-transparent px-4 p-2 rounded-md border border-black h-32 w-full"
            id="message"
            name="message"
            placeholder="Message"
            required
          />
        </div>
        <div className="col-span-1 sm:col-span-3 flex justify-end" ref={buttonRef}>
          <button type="submit" className="mt-4 px-12 py-2 bg-black text-white rounded-md">
            Envoyer
          </button>
        </div>
      </form>

      {popupMessage && (
        <div className={`popup ${popupType}`}>
          {popupMessage}
        </div>
      )}
    </div>
  );
});

export default Contact;