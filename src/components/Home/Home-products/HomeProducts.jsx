import { useContext, useEffect, useState } from "react"
import { Data } from "../../../App"
import ProductCard from "./ProductCard"
import ProductMenu from "./ProductMenu"

const HomeProducts = () => {
    const data = useContext(Data)
    const [showingData, setShowingData] = useState([])
    const [isShow, setIsShow] = useState('')

    useEffect(() => {
        const x = data.slice(1, 10);
        setShowingData(x)
    }, [])
    return (
        <div className=" mt-[450px]">
            <h1 className="text-4xl font-bold text-black mb-10 text-center">Explore Cutting-Edge Gadgets</h1>
            <div className="flex gap-6">
                <div>
                    <ProductMenu show={[showingData, setShowingData, setIsShow]} />
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {
                        showingData.map(data => <ProductCard data={data} />)
                    }
                    <button className={`btn btn-outline w-fit mx-auto col-span-3 ${isShow}`} onClick={() => {
                        setShowingData(data)
                        setIsShow('hidden')
                    }}>Show All</button>
                </div>
            </div>
        </div>
    )
}

export default HomeProducts