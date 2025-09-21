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
            title="Award Winning Digital Agency."
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            buttonText="Know More About Us"
            buttonLink="/about"
        />


        {/* Text Move Section */}
        <TextMoveSection
            textItems={[
                "Development",
                "Studio",
                "Strategy",
                "Branding",
                "Agency",
                "Typography",
                "Design",
                "Digital Solution",
            ]}
        />

        {/* Features Area */}
        <FeaturesSection
            items={[
                {
                    title: "Who we are & what we do",
                    text: "Lorem Ipsum is simply dummy text of the printing typesetting industry.",
                    link: "#",
                },
                {
                    title: "We'll design your projects",
                    text: "We create digital solutions tailored to your needs.",
                    link: "#",
                },
                {
                    title: "Drop us your message!",
                    text: "Feel free to reach out and collaborate with us.",
                    link: "#",
                },
            ]}
        />


        {/* About Area */}
        <AboutSection />

        {/* Video Area */}
        <VideoSection />

        {/* Partner Area */}
        <PartnerSection />

        {/* Portfolio Area */}
        <PortfolioSection />

        {/* Service Area */}
        <ServiceSection />

        {/* Team Area */}

        {/* Testimonial Area */}
        <TestimonialSection />

        {/* Blog Area */}
        <BlogSection />

        {/* Text Move Style 2 */}
        <TextMove2 />
    </>)
}