import React from 'react';
import { motion } from "motion/react"

const Card = ({ title, description="", imageUrl="", delay="" }) => {
    return (
        <motion.div
            className="text-gray-700 m-auto py-12 border-t-[1px] border-black card grid grid-cols-1 sm:grid-cols-3 gap-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
        >
            {/* L'image */}
            <div className="col-span-1">
                <img src={imageUrl} alt={title} className="w-full h-auto card-image" />
            </div>

            {/* Le contenu */}
            <div className="col-span-2 flex flex-col sm:flex-row items-start justify-between card-content mx-4">
                <h2 className="w-1/3 text-3xl card-title mb-4 sm:mb-0">{title}</h2>
                <p className="w-1/3 card-description mb-4 sm:mb-0">{description}</p>
                <div className="w-1/3 card-extra-content">
                    <p>Technologies/Logiciels utilisés</p>
                </div>
            </div>
        </motion.div>
    );
};

const cardData = [
    {
        title: 'Projet 1',
        description: 'Description de mon projet 1.',
        imageUrl: '/public/assets/header.jpg'
    },
    {
        title: 'Projet 2',
        description: 'Description de mon projet 2.',
        imageUrl: '/public/assets/header.jpg'
    },
    {
        title: 'Projet 3',
        description: 'Description de mon projet 3.',
        imageUrl: '/public/assets/header.jpg'
    },
];

const CardList = () => {
    return (
        <div className="card-list">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                    delay={index * 0.2} // Ajout d'un décalage pour chaque carte
                />
            ))}
        </div>
    );
};

export default Card;
