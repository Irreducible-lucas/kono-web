import { useState } from 'react'
import { ChiefdomProps } from '../types'
import styles from '../style'

const ChiefdomPresenter = ({ item }: { item: ChiefdomProps }) => {
    const [showAllContent, setShowAllContent] = useState<{
        [key: number]: boolean;
    }>({});

    const toggleContentVisibility = (id: number) => {
        setShowAllContent((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="mb-8 flex flex-col gap-2 p-4 bg-gray-50 rounded-lg">
            {item.image && (
                <img
                    src={item.image}
                    alt={`${item.name} image`}
                    className="h-[300px] lg:h-[350px] w-full object-cover object-top"
                />
            )}
            <h1 className={` ${styles.heading3} `}>{item.title}</h1>
            <p
                className={`font-poppins text-justify leading-8`}
            >
                {showAllContent[item.id]
                    ? item.content
                    : `${item.content.substring(0, 500)}...`}{" "}
                <span
                    className="text-blue-500 cursor-pointer ml-2"
                    onClick={() => toggleContentVisibility(item.id)}
                >
                    {showAllContent[item.id] ? " Show Less" : " See More"}
                </span>
            </p>
            {item.summary && (
                <p className={`text-sm`}>
                    <span className="font-bold">Key Summary: </span> {item.summary}
                </p>
            )}
        </div>
    )
}

export default ChiefdomPresenter;