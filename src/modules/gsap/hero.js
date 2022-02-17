
import gsap from 'gsap';


// gsap animations for hero page - leaving page via cta
const ctaClickAnimations = () =>
{
    let ctas = gsap.utils.toArray(".cta-target"); 
    const heroTL = gsap.timeline({
        onComplete: ()=>{
            // location.href = "localhost:3000/presetroom/"
        }
    });

    ctas.forEach((cta)=>{
        cta.addEventListener('click', (e)=>{
            heroTL
                .set('.underline', {transformOrigin: "100% 0%"})
                .to('.underline', {duration: 0.7, scaleX: 0, ease: "power3.inOut"})
                .to('.hero__cover', {duration: 0.7, scaleY: 1, ease: "power3.inOut"}, "-=0.1")
                .set('.hero__cover', {transformOrigin: "50% 0%"})
                .to('.hero__cover', {duration: 0.7, scaleY: 0, ease: "power3.inOut"})
                // .to('.hero', {opacity: 0}, '-=0.7')
                // .set('.hero', {display: 'none'})
        })
    })

}

export default ctaClickAnimations;
