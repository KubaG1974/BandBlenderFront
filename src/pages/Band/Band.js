
import styles from "./Band.Module.css";

const Band = () => {
    return (
        <div>
           
               <img src="https://scontent.fktw4-1.fna.fbcdn.net/v/t39.30808-6/346945448_957112282373228_1484159013551453028_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=UqZm33DKXNsAX_6s6-x&_nc_ht=scontent.fktw4-1.fna&oh=00_AfC3A91y6_9s_cAKla3jPaSvq4ynejNb77WS2QD5ysYrAg&oe=65097F4C" className={styles.Band} alt="Overflow" width={200} height={150} border-radius={150} ></img>
            
       
          <h3>Name:</h3>Overflow
          <p>City: Kraków </p>
          
          <p>Style: Metal</p>
          
          <p>Members: Aksel Ostrowski, Krzysztof Bochenko, Kamil Mazur, Jakub Śliwiński</p>
          
        <h3>About Us</h3>
        <p>Zespół powstał w 2016... w sumie kogo to obchodzi!
Overflow to grupa czterech pokręconych kumpli, których połączyła wspólna pasja do muzyki.
Inspiracje czerpiemy od szeroko pojętej muzyki metalowej poprzez hard rock aż po samego króla popu MJ-a (ale do tego przyznaje się tylko jeden z nas).
W kwietniu 2022 roku wydaliśmy pierwszą EPkę pod tytułem "ACT ONE" i od tego czasu do teraz aktywnie koncertujemy.
Nasza muzyka charakteryzuje się stosunkowo prostymi, a jednocześnie ciężkimi riffami połączonymi z bardziej rozbudowanymi partiami perkusyjnymi.
Aktualnie intensywnie pracujemy nad drugą płytą, której premiera przewidziana jest na pierwszą połowę 2024 roku.</p>
<h3> Albums</h3>
<ul>
    <li>Act One EP</li>
</ul>
<h3>Looking For</h3>
        </div>
        
    )
}
export default Band;