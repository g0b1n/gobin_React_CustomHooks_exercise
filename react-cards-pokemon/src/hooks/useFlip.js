import React, { useState } from "react";

const useFLip = () => {
    const [isFlip, setIsFlip] = useState(true)
    const toggleFlip = () => {
        setIsFlip(flip => !flip)
    }

    const flipCard = () => {
        setIsFlip(isFlip => !isFlip)
    }

    return [isFlip, toggleFlip, flipCard]
}

export default useFLip;