import AboutSection from "@/components/template/index/About";
import BlogSection from "@/components/template/index/Blog";
import FeaturesSection from "@/components/template/index/Features";
import HeroSection from "@/components/template/index/Hero";
import PartnerSection from "@/components/template/index/Partner";
import PortfolioSection from "@/components/template/index/Portfolio";
import ServiceSection from "@/components/template/index/Service";
import TestimonialSection from "@/components/template/index/Testimonial";
import TextMoveSection from "@/components/template/index/TextMove";
import TextMove2 from "@/components/template/index/TextMove2";
import VideoSection from "@/components/template/index/Video";

export default function Page() {
    return (<>
        {/* Hero Area */}
        <HeroSection
            title="Excellence Digital"
            text="Équipe jeune et dynamique. Nous transformons vos idées en solutions web exceptionnelles."
            buttonText="Découvrez Notre Univers"
            buttonLink="/about"
        />

        {/* Text Move Section */}
        <TextMoveSection
            textItems={[
                "Innovation",
                "Créativité",
                "Solutions Web",
                "Digital",
                "Digiplex",
                "Développement",
                "Design",
                "Expérience Utilisateur",
            ]}
        />

        {/* Features Area */}
        <FeaturesSection
            items={[
                {
                    title: "Une équipe jeune et passionnée",
                    text: "Nos développeurs et designers apportent une vision fraîche et innovante à chaque projet digital.",
                    link: "#",
                },
                {
                    title: "À l'écoute de vos idées",
                    text: "Nous croyons que les meilleures solutions naissent de la collaboration et de l'écoute active.",
                    link: "#",
                },
                {
                    title: "Donnons vie à vos projets !",
                    text: "De l'idée à la réalisation, nous vous accompagnons dans toute votre transformation digitale.",
                    link: "#",
                },
            ]}
            actionText={'Commencez Votre Projet'}
        />

        {/* About Area */}
        <AboutSection
            sectionSubtitle="Qui sommes-nous"
            sectionTitle="Digiplex transforme vos idées en solutions web performantes."
            counterText="Plus de 50 projets digitaux réalisés avec succès"
            description="Digiplex, votre partenaire digital de confiance. Notre équipe créative combine expertise technique et vision moderne pour des expériences web uniques."
            buttonLabel="En Savoir Plus Sur Nous"
            buttonLink="/about"
        />

        {/* Video Area */}
        <VideoSection
            titlePrefix="Digiplex a créé"
            titleMain="une solution bien au-delà de mes attentes les plus optimistes"
            videoUrl="https://www.youtube.com/watch?v=gyGsPlt06bo"
            speakerName="Témoignage de Sarah M."
            speakerRole="Directrice Marketing, TechStart"
        />

        {/* Partner Area */}
        <PartnerSection
            title={'Des Entreprises Visionnaires Nous Font Confiance'}
            subTitle={"Rejoignez-nous et construisons ensemble l'avenir digital de votre entreprise"}
        />

        {/* Portfolio Area */}
        <PortfolioSection
            sectionContent={{
                header: {
                    smallTitle: "Nos Réalisations",
                    title: "Découvrez nos <br /> projets digitaux",
                },
                cta: {
                    title: "Inspiré par nos créations ?",
                    text: "Parlons de votre projet et créons ensemble quelque chose d'extraordinaire",
                    button: {
                        label: "Lancez Votre Projet",
                        link: "contact.html",
                    },
                    background: "assets/images/cta/cta-bg.png",
                },
            }}

            portfolioItems={[
                {
                    id: 'item-1',
                    image: 'assets/images/portfolio/portfolio-1.png',
                    year: '2024',
                    author: 'EcoStart',
                    title: "Refonte Complète de l'Écosystème Digital d'EcoStart",
                    delay: 300,
                    tags: ["E-commerce", "Développement Web"],
                },
                {
                    id: 'item-2',
                    image: 'assets/images/portfolio/portfolio-2.png',
                    year: '2024',
                    author: 'TechFlow',
                    title: 'Application SaaS pour la Gestion de Projets',
                    delay: 500,
                    tags: ["SaaS", "Interface Utilisateur"],
                },
                {
                    id: 'item-3',
                    image: 'assets/images/portfolio/portfolio-3.png',
                    year: '2024',
                    author: 'ArtisanLocal',
                    title: 'Plateforme Marketplace pour Artisans',
                    delay: 300,
                    tags: ["Marketplace", "Mobile-First"],
                },
                {
                    id: 'item-4',
                    image: 'assets/images/portfolio/portfolio-4.png',
                    year: '2024',
                    author: 'FinnovatePay',
                    title: 'Solution de Paiement Innovante',
                    delay: 500,
                    tags: ["Fintech", "API Integration"],
                },
                {
                    id: 'item-5',
                    image: 'assets/images/portfolio/portfolio-5.png',
                    year: '2025',
                    author: 'GreenSpace',
                    title: 'Révolution de l\'Immobilier Écologique',
                    delay: 300,
                    tags: ["PropTech", "Développement Durable"],
                },
                {
                    id: 'item-6',
                    image: 'assets/images/portfolio/portfolio-6.png',
                    year: '2025',
                    author: 'CreativeStudio',
                    title: 'Portfolio Interactif pour Studio Créatif',
                    delay: 500,
                    tags: ["Portfolio", "Animation Web"],
                },
            ]}
        />

        {/* Service Area */}
        <ServiceSection
            header={{
                smallTitle: "Nos Solutions",
                title: "Ce que nous proposons",
                description: [
                    "Avec chaque client, nous apportons une passion profonde pour la", 
                    "résolution créative de problèmes", 
                    "et l'innovation digitale qui repousse les limites"
                ],
                button: { label: "Explorer", link: "service.html" },
            }}

            services={[
                { 
                    num: '01', 
                    title: 'Développement Web Sur-Mesure', 
                    img: 'service-1.png', 
                    description: "Nous créons des sites web et applications uniques, adaptés à votre vision et optimisés pour vos objectifs business.", 
                    link: "#" 
                },
                { 
                    num: '02', 
                    title: 'Expérience Utilisateur (UX/UI)', 
                    img: 'service-2.png', 
                    description: "Notre équipe design conçoit des interfaces intuitives et engageantes qui transforment vos visiteurs en clients fidèles.", 
                    link: "#" 
                },
                { 
                    num: '03', 
                    title: 'Solutions E-commerce', 
                    img: 'service-3.png', 
                    description: "Développement de plateformes de vente en ligne performantes avec intégration complète des outils de gestion.", 
                    link: "#" 
                },
                { 
                    num: '04', 
                    title: 'Maintenance & Support', 
                    img: 'service-4.png', 
                    description: "Un accompagnement continu pour maintenir vos solutions digitales à jour et optimales en performance.", 
                    link: "#" 
                }
            ]}
        />

        {/* Testimonial Area */}
        <TestimonialSection />

        {/* Blog Area */}
        <BlogSection />

        {/* Text Move Style 2 */}
        <TextMove2 />
    </>)
}