interface tools{
    title: string
}
export default function ToolsProjects(tools : tools) {
    return (
        <div className="bg-gray-800 w-fit p-1 scale-95
         rounded text-xs flex flex-row gap-0.5
        items-center justify-center ">
        <span >{tools.title}</span>
        </div>
    )
}
