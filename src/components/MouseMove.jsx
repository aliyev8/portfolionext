'use client'

import PaintPage from "./PaintPage"
import { useState, useEffect } from "react";

function MouseMove() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.pageX,
                y: e.pageY ,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div style={{ position: "relative" }}>
            <div
                className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute max-sm:hidden"
                style={{
                    background: `radial-gradient(180px at ${position.x}px ${position.y}px, rgba(26, 90, 200, 0.200), transparent 90%)`,
                }}
            ></div>
            <PaintPage />
        </div>
    );
}

export default MouseMove;
