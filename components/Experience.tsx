"use client"
import { Canvas } from "@react-three/fiber"
import Modal from "./Overlay"
import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Office } from "./Office"
import Overlay from "./Overlay"

const Experience = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <OrbitControls enableZoom={false} />
            <ScrollControls pages={3} damping={0.25} >
                <Office />
                <Overlay />
            </ScrollControls>
        </>
    )
}

export default Experience
