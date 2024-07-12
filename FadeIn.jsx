import { useState, useEffect } from 'react'

/*usage: 
return (
<>
    <FadeIn Component={INSERTCOMPONENTNAMEHERE} />
</>
)
*/
function FadeIn({ Component }) {
    const [opacity, setOpacity] = useState(.1);
    useEffect(() => {
        /*const intervalId = setInterval(() => {
            setOpacity((a) => Math.min(1, a + .03))
        }, 100);

        const timeoutId = setTimeout(() => {
            clearInterval(intervalId);
        }, 1000 / .3 + 500);
        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, []);
    */
        const clickHandler = () => {
            setOpacity(1);
        }
        document.addEventListener("click", clickHandler);

        const intervalId = setInterval(() => {
            setOpacity((a) => Math.min(1, a * 1.1))
        }, 100);
        const timeoutId = setTimeout(() => {
            clearInterval(intervalId);
            document.removeEventListener("click", clickHandler);
        }, 1000 / .3 + 500);
        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
            document.removeEventListener("click", clickHandler);
        };
    }, []);
    return (
        <div style={{ opacity }}> {/* ES6 shorthand */}
            <Component /> {/* Render the passed component inside a div with applied styles */}
        </div>
    );
}

export default FadeIn