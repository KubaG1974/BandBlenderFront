import React from 'react';
import styles from './BandCreator.module.css';
const BandCreator = () => {
     
        return (
            <div className={styles.content}>
               <h3> Create Your Band</h3>
               <form >
                <input type='Name' name='Name' placeholder='Name'></input><br/>
                <label>
          Pick your Music taste:
          <select >
            <option value="grapefruit">Pop</option>
            <option value="lime">Rock</option>
            <option value="coconut">Metal</option>
            <option value="mango">Indie</option>
            <option value="mango">House</option>
            <option value="mango">EDM</option>
            <option value="mango">Hip-Hop</option>
            <option value="mango">Rap</option>
            <option value="mango">reggae</option>
            <option value="mango">disco</option>
            <option value="mango">Classic</option>

          </select>
        </label> <br/>
        <label>City:<input type='City' name='City' placeholder='City'></input>  </label>
        <br/><label> About me<input type='Aboutme' name='Aboutme' placeholder='About-me'></input>  </label>
        <br/><label> Albums<input type='Albums' name='Albums' placeholder='Albums'></input>  </label>
        <br/><label> Looking for<input type='Looking for' name='Looking for' placeholder='Looking for'></input>  </label>

        <br/> <button type="submit">Create</button>

                </form>
               




            </div>
        );
    
}

export default BandCreator;

