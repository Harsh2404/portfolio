import classes from './AboutContent.module.css';

const AboutContent=(props)=>{
    return(
    <div className={classes.AboutContent}>
        <p className={classes.AboutTitle}>Curious about me? Here you have it:</p>
        <p className={classes.AboutText}>
        I'm a passionate, self-proclaimed designer who specializes in full stack development 
        (React.js & Node.js). I am very enthusiastic about bringing the technical and visual 
        aspects of digital products to life. User experience, pixel perfect design, and writing 
        clear, readable, highly performant code matters to me.
        <br/><br/>
        I began my journey as a web developer in 2015, and since then, 
        I've continued to grow and evolve as a developer, taking on new 
        challenges and learning the latest technologies along the way. 
        Now, in my early thirties, 7 years after starting my web development 
        journey, I'm building cutting-edge web applications using modern 
        technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
        Supabase and much more.
        <br/><br/>
        I am very much a progressive thinker and enjoy working on products end 
        to end, from ideation all the way to development.        
        <br/><br/>
        I am very much a progressive thinker and enjoy working on
        products end to end, from ideation all the way to development.
        </p>
    </div>
    )
}
export default AboutContent;