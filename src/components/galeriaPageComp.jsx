import React from 'react'

const GalleryPageComp = () => {

    const img1 = './assets/Erick WEB/FOTOS MURANO/Parties.jpg';
    const img2 = './assets/Erick WEB/FOTOS MURANO/gallery5.jpg';
    const img3 = './assets/Erick WEB/FOTOS MURANO/gallery6.jpg';
    const img4 = './assets/Erick WEB/FOTOS MURANO/gellery1.jpeg';
    const img5 = './assets/Erick WEB/FOTOS MURANO/gallery9.jpg';
    const img6 = './assets/Erick WEB/FOTOS MURANO/gallery8.jpg';
    const img7 = './assets/Erick WEB/FOTOS MURANO/gallery4.jpg';
    const img8 = './assets/Erick WEB/FOTOS MURANO/gallery12.jpeg';
    const img9 = './assets/Erick WEB/FOTOS MURANO/gallery7.jpg';
    const img10 = './assets/Erick WEB/FOTOS MURANO/servicios adicionales/servicios adicionales/gallery11.jpeg';
    const img11 = './assets/Erick WEB/FOTOS MURANO/servicios adicionales/servicios adicionales/gallery10.jpeg';
    const img12 = './assets/Erick WEB/FOTOS MURANO/gellery2.jpeg';
    const img13 = './assets/Erick WEB/FOTOS MURANO/galeria.jpg'
    const img14 = './assets/Erick WEB/FOTOS MURANO/galeria2.jpg'
    const img15 = './assets/Erick WEB/FOTOS MURANO/gallery7.jpg'
    const img16 = './assets/Erick WEB/FOTOS MURANO/galeria3.jpg'
    const img17 = './assets/Erick WEB/FOTOS MURANO/gellery1.jpeg'
    const img18 = './assets/Erick WEB/FOTOS MURANO/pastel.jpg'
    const img19 = './assets/Erick WEB/FOTOS MURANO/eventos2.jpg'
    const img20 = './assets/Erick WEB/FOTOS MURANO/casados.jpg'
    const img21 = './assets/Erick WEB/FOTOS MURANO/copa.jpeg'
    const img23 = './assets/Erick WEB/FOTOS MURANO/florMorada.jpg'

    return (
        <div className="w-screen h- font-serif p-16">
            <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col gap-5 ">
                    <img className="w-full -mb-3 aspect-auto object-cover" src={img1} />
                    <img className="w-full -mb-3 aspect-video object-cover" src={img4} />
                    <img className="w-full -mb-3 aspect-auto object-cover" src={img7} />
                    <img className='w-full -mb-3 aspect-square object-cover' src={img10} />
                    <img className="w-full -mb-3 aspect-auto object-cover" src={img13} />
                    <img className="w-full -mb-3 aspect-square object-cover" src={img16} />
                    <img className="w-full -mb-3 aspect-auto object-cover" src={img19} />
                </div>
                <div className="flex flex-col gap-5 ">
                    <img className="w-full -mb-3 aspect-videp object-cover" src={img2} />
                    <img className="w-full -mb-3 aspect-auto object-cover" src={img5} />
                    <img className="w-full -mb-3 aspect-video object-cover" src={img8} />
                    <img className='w-full -mb-3 aspect-auto object-cover' src={img11} />
                    <img className="w-full -mb-3 aspect-auto object-cover" src={img14} />
                    <img className="w-full -mb-3 aspect-auto object-cover" src={img17} />
                    <img className="w-full -mb-3 aspect-square object-cover" src={img20} />
                    <img className="w-full -mb-3 aspect-auto object-cover" src={img23} />
                </div>
                <div className="flex flex-col gap-5 ">
                    <img className="w-full -mb-3 aspect-auto object-cover" src={img3} />
                    <img className="w-full -mb-3 aspect-video object-cover" src={img6} />
                    <img className="w-full -mb-3 aspect-square object-cover" src={img9} />
                    <img className='w-full -mb-3 aspect-auto object-cover' src={img12} />
                    <img className="w-full -mb-3 aspect-auto object-cover" src={img15} />
                    <img className="w-full -mb-3 aspect-auto object-cover" src={img18} />
                    <img className="w-full -mb-3 aspect-auto object-cover" src={img21} />
                </div>                
            </div>
        </div>
    )
}

export default GalleryPageComp
