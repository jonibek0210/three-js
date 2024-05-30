import { Scroll, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"

const Section = (props: any) => {
    return (
        <section
            className={`h-screen flex flex-col justify-center p-10 ${props.right ? "items-end" : "items-start"}`}
            style={{
                opacity: props.opacity,
            }}
        >
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="bg-white  rounded-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
}

const Overlay = () => {
    const scroll = useScroll()
    const [OpacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacityLastSection, setOpacityLastSection] = useState(1);

    useFrame(() => {
        setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3))
        setOpacityFirstSection(1 - scroll.range(0, 1 / 3))
        setOpacityLastSection(scroll.range(2 / 3, 1 / 3))
    })

    return (
        <Scroll html>
            <div className="w-screen">
                <Section opacity={opacityFirstSection}>
                    <h1 className="font-serif text-2xl">
                        Three js
                    </h1>
                </Section>
                <Section right opacity={OpacitySecondSection}>
                    <h1 className="font-serif text-2xl">
                        Gsab
                    </h1>
                </Section>
                <Section opacity={opacityLastSection}>
                    <h1 className="font-serif text-2xl">
                        Next js
                    </h1>
                </Section>
            </div>
        </Scroll >
    )
}

export default Overlay
