import style from "./services.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
const Services = () => {

    return (
        <>
<section className={style.sectionComponents}>
<span className={style.spanTittle}>

<h1>You certainly want to know what we offer and what we work for.</h1>

<FontAwesomeIcon  className={style.iconarrow} icon={faArrowTurnDown} />
</span>

<h2 className={style.htwo}>Plant Disease Diagnosis</h2>
<p className={style.ppal}>Upload Plant Photos
Use our advanced AI-powered tool to upload a photo of your plant. We analyze the image to detect potential diseases and offer accurate results within seconds.</p>

<h2 className={style.htwo}>Customized Treatment Plans</h2>
<p className={style.ppal}>Get a detailed treatment plan tailored to your plant's specific needs, including remedies, best practices, and preventive measures to ensure your plants stay healthy.</p>

<h2 className={style.htwo}> Plant Care Guidance</h2>
<p className={style.ppal}>Access expert advice and resources to care for your plants. Whether you're a beginner or a seasoned gardener, we provide tips for watering, fertilizing, pruning, and more.</p>

<h2 className={style.htwo}>Pest Identification and Solutions</h2>
<p className={style.ppal}>Identify pests harming your plants and receive eco-friendly and effective solutions to manage them.</p>

<h2 className={style.htwo}>Seasonal Plant Care Alerts</h2>
<p className={style.ppal}>Receive reminders and guidance on how to care for your plants during different seasons, ensuring optimal growth year-round.</p>

<h2 className={style.htwo}>Consultation with Experts</h2>
<p className={style.ppal}>Schedule a virtual consultation with plant experts for personalized advice on plant health, garden management, and landscaping.</p>

<h2 className={style.htwo}> Plant Disease Knowledge Hub</h2>
<p className={style.ppal}>Browse our extensive database of plant diseases, symptoms, and solutions to stay informed and proactive in managing plant health.</p>

<img className={style.imagesa} src="Images/llll.jpg" />
<img className={style.imagesa} src="Images/dect.jpg" />


<h2 className={style.htwo}>Community Support and Forums
</h2>
<p className={style.ppal}>Join a community of plant enthusiasts. Share your experiences, ask questions, and get advice from fellow plant lovers and experts.</p>

<h2 className={style.htwo}>Mobile App for On-the-Go Plant Care</h2>
<p className={style.ppal}>Use our mobile app for easy access to our services, whether you’re in your garden or out shopping for plants.</p>

<h2 className={style.htwo}>Plant-Friendly Products</h2>
<p className={style.ppal}>Discover curated, eco-friendly products such as fertilizers, pest control solutions, and gardening tools to help your plants thrive.</p>

<h2 className={style.hthreee}>
In summary, we offer an exceptional service designed to care for you and your plant. By examining your plant daily or whenever needed, you can upload a photo, take a picture, or describe the symptoms of the disease. For more information about your plant, our exclusive library is at your disposal. All of this is powered by an advanced machine learning and artificial intelligence model, combined with insights from experts in plant disease treatment and extensive modern databases. By creating an account, you’ll receive regular advice tailored to your plant, delivered weekly or periodically, and gain access to our photography service directly on the website. If you prefer not to create an account, you can still enjoy our services by downloading our mobile application.
</h2>
<img className={style.imggg} src="Images/mpo.jpg"/>

<h2 className={style.hthreee}>
A website and application featuring a user-friendly interface, offering a unique experience not commonly found in most companies or institutions. Our mission is to ensure you feel confident about the health of your plants and help keep them in optimal condition, making our platform accessible and valuable to a wide range of users and plant enthusiasts.
</h2>

</section>

        </>
    );
}
export default Services ;