import Image from 'next/image'
import { useRef } from 'react'
import Link from 'next/link'
import LinkText from '../atoms/LinkText'

export default function Double({projects, reversed}) {
    const firstImage = useRef(null)
    const secondImage = useRef(null)
    let requestAnimationFrameId = null;
    let xPercent = reversed ? 100 : 0;
    let currentXPercent = reversed ? 100 : 0;
    const speed = 0.15;
    
    const manageMouseMove = (e) => {
        if (window.innerWidth <= 1024) return;

        const { clientX } = e;
        xPercent = (clientX / window.innerWidth) * 100;
        
        if(!requestAnimationFrameId){
            requestAnimationFrameId = window.requestAnimationFrame(animate);
        }
    }

    const animate = () => {
        //Add easing to the animation
        const xPercentDelta = xPercent - currentXPercent;
        currentXPercent = currentXPercent + (xPercentDelta * speed)
        
        //Change width of images between 33.33% and 66.66% based on cursor
        const firstImagePercent = 66.66 - (currentXPercent * 0.33);
        const secondImagePercent = 33.33 + (currentXPercent * 0.33);
        console.log(secondImagePercent)
        firstImage.current.style.width = `${firstImagePercent}%`
        secondImage.current.style.width = `${secondImagePercent}%`
        
        if(Math.round(xPercent) == Math.round(currentXPercent)){
            window.cancelAnimationFrame(requestAnimationFrameId);
            requestAnimationFrameId = null;
        }
        else{
            window.requestAnimationFrame(animate)
        }
    }

    return (
        <div onMouseMove={(e) => {manageMouseMove(e)}} className='flex flex-col gap-y-[40px] 768:gap-y-0 768:flex-row double'>
            {/* Primeiro Projeto */}
            <Link href={projects[0].href} target='_blank' ref={firstImage} className='imageContainer'>
                <div className='stretchyWrapper'>
                    {projects[0].src.endsWith('.mov') ? (
                    <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                    >
                        <source src={`/${projects[0].src}`} type="video/mp4" />
                    </video>
                    ) : (
                    <Image 
                        src={`/${projects[0].src}`}
                        fill={true}
                        alt={projects[0].name}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        style={{ objectFit: 'cover' }}
                    />
                    )}
                </div>
                <div className='body'>
                    <h3>{projects[0].name}</h3>
                    <p>{projects[0].description}</p>
                    <p>{projects[0].year}</p>
                </div>
            </Link>
      
            {/* Segundo Projeto */}
            <Link href={projects[1].href}  target='_blank' ref={secondImage} className='imageContainer'>
                <div className='stretchyWrapper'>
                    {projects[1].src.endsWith('.mov') ? (
                    <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                    >
                        <source src={`/${projects[1].src}`} type="video/mp4" />
                    </video>
                    ) : (
                    <Image 
                        src={`/${projects[1].src}`}
                        fill={true}
                        alt={projects[1].name}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        style={{ objectFit: 'cover' }}
                    />
                    )}
                </div>
                <div className='body'>
                    <h3>{projects[1].name}</h3>
                    <p>{projects[1].description}</p>
                    <p>{projects[1].year}</p>
                </div>
            </Link>
        </div>
    )
}