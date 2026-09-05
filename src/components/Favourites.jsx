import React from 'react'

const fav = [
  {name:'Google', link:'https://www.google.com'},
  {name:'YouTube', link:'https://www.youtube.com'},
  {name:'GitHub', link:'https://github.com'},
  {name:'Reddit', link:'https://www.reddit.com'},
  {name:'Instagram', link:'https://www.instagram.com'},
  {name:'Hackactime',link: 'https://hackatime.hackclub.com'},
  {name:'Discord', link:'https://discord.com'},  
  {name:'Stardance', link:'https://stardance.hackclub.com'},
]
const getFavicon = (url, size=256) =>{
  try {
    const domain = new URL(url).hostname
    return `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=${size}`
  } catch (error) {
    console.error('Error occurred while fetching favicon:', error)
    return ''
  }
}

const Favourites = () => {
  return (
    <div className="grid grid-cols-4 gap-3 p-5 border-2 border-[#3ffc89] rounded-xl">
      {fav.map((item, index) => (
        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="text-white text-lg font-bold hover:text-[#3ffc89] flex flex-col items-center justify-center">
          <img src={getFavicon(item.link)} alt="" className="w-8 h-8"  />
          <span>{item.name}</span>
        </a>
      ))}
    </div>
  )
}

export default Favourites