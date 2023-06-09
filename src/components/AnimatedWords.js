import React from "react";
import {motion} from "framer-motion";

const tagMap = {
    paragraph: "p",
    heading1: "h1",
    heading2: "h2",
    heading3: "h3"
};


const AnimatedWords = (props) => {

    // Framer Motion variant object, for controlling animation
    const item = {
        hidden: {
            y: props.y ,
            opacity: 0,
            transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85}
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85},
        }
    };

    const splitWords = props.text.split(" ");
    const words = [];
    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }

    // Add a space ("\u00A0") to the end of each word
    words.map((word) => {
        return word.push("\u00A0");
    });

    // Get the tag name from tagMap
    const Tag = tagMap[props.type];

    return (
        <Tag>
            {words.map((word, index) => {
                return (

                    <motion.span
                        style={{
                            overflow: "hidden",
                            display: "inline-block"
                        }} variants={item}
                    >
                        {word}
                    </motion.span>
                );
            })}
            {/* {} */}
        </Tag>
    );
};

export default AnimatedWords;
