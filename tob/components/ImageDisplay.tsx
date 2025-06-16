import Image from "next/image";

const ImageDisplay = () => {
    return (
        <div className="grid grid-cols-3 gap-4 p-10 scale-75">
            <div className="col-span-3 flex justify-center"><Image src="/sampleImg.png" alt="Item Image" height={300} width={300} /></div>
            <div><Image src="/sampleImg.png" alt="Item Image" height={100} width={100} /></div>
            <div><Image src="/sampleImg.png" alt="Item Image" height={100} width={100} /></div>
            <div><Image src="/sampleImg.png" alt="Item Image" height={100} width={100} /></div>
        </div>
    );
}

export default ImageDisplay;