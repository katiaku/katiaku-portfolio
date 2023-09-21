import React, { useState, useEffect } from 'react';

export default function Cursor() {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);
    const [cursorWidth, setCursorWidth] = useState(0);
    const [cursorHeight, setCursorHeight] = useState(0);

    const speedFactor = 5;
    const easingFactor = 0.2;
    const xOffset = 150;
    const yOffset = 0;

    useEffect(() => {
        const cursor = document.getElementById('cursor');

        if (cursor) {
            setCursorWidth(cursor.offsetWidth);
            setCursorHeight(cursor.offsetHeight);
        }

        function animate() {
            const dx = mouseX - (xPos + xOffset);
            const dy = mouseY - (yPos + yOffset);

            const easeDx = dx * easingFactor;
            const easeDy = dy * easingFactor;

            setXPos(xPos + easeDx / speedFactor);
            setYPos(yPos + easeDy / speedFactor);

            if (cursor) {
                cursor.style.transform = `translate(${xPos - cursorWidth / 2}px, ${yPos - cursorHeight / 2}px)`
            }

            requestAnimationFrame(animate);
        }

        animate();

        document.addEventListener('mousemove', (e) => {
            setMouseX(e.pageX);
            setMouseY(e.pageY);
        });

        return () => {
            document.removeEventListener('mousemove', (e) => {
                setMouseX(e.pageX);
                setMouseY(e.pageY);
            });
        };
    }, [mouseX, mouseY, xPos, yPos, cursorWidth, cursorHeight]);

    return(
        <div id="cursor"></div>
    );
}
