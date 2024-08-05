document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const logo = document.getElementById('logo');
    const mainContent = document.getElementById('mainContent');
    const profileContainer = document.getElementById('profileContainer');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = e.target.getAttribute('href').substring(1);
            loadSection(sectionId);
        });
    });

    logo.addEventListener('click', () => {
        profileContainer.classList.toggle('active');
    });

    function loadSection(section) {
        let content = '';
        let className = '';

        switch (section) {
            case 'home':
                content = `
                    <section class="hero" id="home" role="banner">
                        <div class="overlay">
                            <h1 data-aos="fade-up" data-aos-duration="1000">Welcome to Keith Pixel</h1>
                            <p data-aos="fade-up" data-aos-duration="1000">Explore my unique T-shirt designs</p>
                        </div>
                    </section>
                    <section class="content featured-designs" id="designs" role="main">
                        <h2 data-aos="fade-up" data-aos-duration="1000">Featured T-Shirt Designs</h2>
                        <div class="gallery">
                            <a href="image/HUMMS CLUSTER B.png" data-lightbox="gallery" aria-label="HUMMS Cluster Design">
                                <img src="image/HUMMS CLUSTER B.png" alt="HUMMS Cluster Design" class="zoom" data-aos="zoom-in" data-aos-duration="1500">
                            </a>
                            <a href="image/EAGL ESCOUT.png" data-lightbox="gallery" aria-label="Eagle Scout Design">
                                <img src="image/EAGL ESCOUT.png" alt="Eagle Scout Design" class="zoom" data-aos="zoom-in" data-aos-duration="1500">
                            </a>
                            <a href="image/NSPC SOX.png" data-lightbox="gallery" aria-label="NSPC Sox Design">
                                <img src="image/NSPC SOX.png" alt="NSPC Sox Design" class="zoom" data-aos="zoom-in" data-aos-duration="1500">
                            </a>
                            <a href="image/DEMOLAY.png" data-lightbox="gallery" aria-label="DeMolay Design">
                                <img src="image/DEMOLAY.png" alt="DeMolay Design" class="zoom" data-aos="zoom-in" data-aos-duration="1500">
                            </a>
                        </div>
                    </section>
                `;
                break;
            case 'designs':
                className = 'design-background';
                content = `
                    <section class="content" id="designs" role="main">
                        <h2 data-aos="fade-up" data-aos-duration="1000">All T-Shirt Designs</h2>
                        <div class="gallery">
                            <a href="image/HUMMS CLUSTER B.png" data-lightbox="gallery" aria-label="HUMMS Cluster Design">
                                <img src="image/HUMMS CLUSTER B.png" alt="HUMMS Cluster Design" class="zoom" data-aos="zoom-in" data-aos-duration="1500">
                            </a>
                            <a href="image/EAGL ESCOUT.png" data-lightbox="gallery" aria-label="Eagle Scout Design">
                                <img src="image/EAGL ESCOUT.png" alt="Eagle Scout Design" class="zoom" data-aos="zoom-in" data-aos-duration="1500">
                            </a>
                            <a href="image/NSPC SOX.png" data-lightbox="gallery" aria-label="NSPC Sox Design">
                                <img src="image/NSPC SOX.png" alt="NSPC Sox Design" class="zoom" data-aos="zoom-in" data-aos-duration="1500">
                            </a>
                            <a href="image/DEMOLAY.png" data-lightbox="gallery" aria-label="DeMolay Design">
                                <img src="image/DEMOLAY.png" alt="DeMolay Design" class="zoom" data-aos="zoom-in" data-aos-duration="1500">
                            </a>
                            <a href="image/sps.png" data-lightbox="gallery" aria-label="SPS Design">
                                <img src="image/sps.png" alt="SPS Design" class="zoom" data-aos="zoom-in" data-aos-duration="1500">
                            </a>
                            <a href="image/SSLG.png" data-lightbox="gallery" aria-label="SSLG Design">
                                <img src="image/SSLG.png" alt="SSLG Design" class="zoom" data-aos="zoom-in" data-aos-duration="1500">
                            </a>
                            <a href="image/nvcnursing.png" data-lightbox="gallery" aria-label="NVC Nursing Design">
                                <img src="image/nvcnursing.png" alt="NVC Nursing Design" class="zoom" data-aos="zoom-in" data-aos-duration="1500">
                            </a>
                            <a href="image/stem f.jpg" data-lightbox="gallery" aria-label="stem f">
                                <img src="image/stem f.jpg" alt="stem f" class="zoom" data-aos="zoom-in" data-aos-duration="1500">
                            </a>
                            <a href="image/ste.jpg" data-lightbox="gallery" aria-label="ste">
                                <img src="image/ste.jpg" alt="ste" class="zoom" data-aos="zoom-in" data-aos-duration="1500">
                            </a>
                            <a href="image/humss.jpg" data-lightbox="gallery" aria-label="humss">
                                <img src="image/humss.jpg" alt="humss" class="zoom" data-aos="zoom-in" data-aos-duration="1500">
                            </a>
                            <a href="image/dd.jpg" data-lightbox="gallery" aria-label="dd">
                                <img src="image/dd.jpg" alt="dd" class="zoom" data-aos="zoom-in" data-aos-duration="1500">
                            </a>
                            <a href="image/abm.jpg" data-lightbox="gallery" aria-label="abm">
                                <img src="image/abm.jpg" alt="abm" class="zoom" data-aos="zoom-in" data-aos-duration="1500">
                            </a>
                        </div>
                    </section>
                `;
                break;
            case 'contact':
                className = 'contact-background';
                content = `
                    <section class="content" id="contact" role="main">
                        <h2 data-aos="fade-up" data-aos-duration="1000">Contact Me</h2>
                        <form>
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required>
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" required></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </section>
                `;
                break;
        }

        mainContent.className = className;
        mainContent.innerHTML = content;
        AOS.init(); // Reinitialize AOS animations after updating the content
        lightbox.init(); // Reinitialize Lightbox after updating the content
    }
});
