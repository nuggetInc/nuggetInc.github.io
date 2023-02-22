const elements = document.querySelectorAll(".float,.float-hover,.wave,.wave-hover");

for (const element of elements) {
    const innerHTML = element.innerHTML;
    element.innerHTML = "";

    let index = 0
    for (const char of innerHTML) {
        if (char === " ") {
            element.innerHTML += "&nbsp;";
            continue;
        }

        const child = document.createElement("span");
        child.innerHTML = char;

        if (element.classList.contains("float") || element.classList.contains("float-hover")) {
            child.classList.add("floaty");

            // const translateX = (index / innerHTML.length * 5 - 2.5) + (Math.random() * 0.5 - 0.25);
            // let translateY = (1 - Math.abs(index / innerHTML.length - 0.5)) * (Math.random() - 0.5);

            // if (element.classList.contains("float-up")) {
            //     translateY -= 0.25;
            // }
            // if (element.classList.contains("float-down")) {
            //     translateY += 0.25;
            // }

            // child.style.setProperty("--translate", `${translateX}em, ${translateY}em`);


            const floatyDelay = Math.random() * 2 - 2;
            child.style.setProperty("--floaty-delay", `${floatyDelay}s`);
        }

        if (element.classList.contains("wave") || element.classList.contains("wave-hover")) {
            child.classList.add("wavy");

            const wavyDelay = index * 50 % 1200 - 1200;
            child.style.setProperty("--wavy-delay", `${wavyDelay}ms`);
        }

        element.appendChild(child);

        index++;
    }
}

const explodes = document.querySelectorAll(".explode,.explode-hover");

for (const element of explodes) {
    let index = 0

    for (const child of element.children) {
        const wrapper = document.createElement("span");
        wrapper.className = "explody";

        const translateX = (index / element.children.length * 5 - 2.5) + (Math.random() * 0.5 - 0.25);
        let translateY = (1 - Math.abs(index / element.children.length - 0.5)) * (Math.random() - 0.5);

        if (element.classList.contains("explode-up")) {
            translateY -= 0.25;
        }
        if (element.classList.contains("explode-down")) {
            translateY += 0.25;
        }

        wrapper.style.setProperty("--translate", `${translateX}em, ${translateY}em`);

        const rotate = Math.random() * 30 - 15;
        wrapper.style.setProperty("--rotate", `${rotate}deg`);

        element.insertBefore(wrapper, child);
        wrapper.appendChild(child);

        // if (element.classList.contains("float") || element.classList.contains("float-hover")) {
        //     inner.classList.add("floaty");

        //     const translateX = (index / innerHTML.length * 5 - 2.5) + (Math.random() * 0.5 - 0.25);
        //     let translateY = (1 - Math.abs(index / innerHTML.length - 0.5)) * (Math.random() - 0.5);

        //     if (element.classList.contains("float-up")) {
        //         translateY -= 0.25;
        //     }
        //     if (element.classList.contains("float-down")) {
        //         translateY += 0.25;
        //     }

        //     outer.style.setProperty("--translate", `${translateX}em, ${translateY}em`);

        //     const rotate = Math.random() * 30 - 15;
        //     outer.style.setProperty("--rotate", `${rotate}deg`);

        //     const floatyDelay = Math.random() * 2 - 2;
        //     outer.style.setProperty("--floaty-delay", `${floatyDelay}s`);
        // }

        // if (element.classList.contains("wave") || element.classList.contains("wave-hover")) {
        //     inner.classList.add("wavy");

        //     const wavyDelay = index * 50 % 1200 - 1200;
        //     outer.style.setProperty("--wavy-delay", `${wavyDelay}ms`);
        // }

        // outer.appendChild(inner);

        index++;
    }
}
