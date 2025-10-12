
interface params {
projectName: string,
content: string,
owener: string,
postiton:string
}

export default function cardsMarquee(param : params) {
    return (<div className="rounded-sm bg-white/15 backdrop-blur-2xl w-60  py-4 px-2 mx-2">
        <h1 className='font-bold text-sm' >{param.projectName}</h1>
        <p className="text-xs text-gray-200/80">{param.content}</p>
        <h2 className="pt-2 font-medium text-sm text-white/80">{param.owener}</h2>
        <h3 className="text-xs font-light text-gray-200/80">{param.postiton}</h3>
    </div>
    )
}
