import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'
import { LayerMaterial, Depth } from 'lamina'

interface AnimatedBoxProps {
    size: [number, number, number],
    color: string
}

export default function AnimatedBox({ size, color }: AnimatedBoxProps) {
    const myMesh = useRef<Mesh>(null!)
    useFrame(({ clock }) => {
        myMesh.current.rotation.y = clock.elapsedTime;
    })

    return (
        <mesh ref={myMesh}>
            <boxGeometry args={size}/>
            <LayerMaterial
                color="purple" //
                lighting="physical"
                transmission={1}
            >
                <Depth
                    colorA="pink" //
                    colorB="pink"
                    alpha={0.5}
                    mode="multiply"
                    near={0}
                    far={2}
                    origin={[1, 1, 1]}
                />
            </LayerMaterial>
            {/* <meshBasicMaterial color={color} /> */}
        </mesh>
    )

}