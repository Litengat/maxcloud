import Image from "next/image";

export default function Imageviewer({ fileUrl }: { fileUrl: string }) {
    //console.log(fileUrl) 
    return (
        <div className="items-center">
            <Image
                className="rounded-lg"
                src={fileUrl} 
                alt="test"
                objectFit="contain" 
                width={800} 
                height={800}

                />
            
        </div>
    )
}