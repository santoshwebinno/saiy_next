import Link from 'next/link';

interface StatsCardProps {
    title: string;
    value: string;
    items?: { label: string; value: string; imageSrc: string}[];
    highlightColor?: string;
    imageSrc?: string;
}

const StatsCard = ({ title, value, items, imageSrc, highlightColor = "text-black-500" }: StatsCardProps) => {
    return (
        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md min-h-56 ">
            <h3 className="text-black-500 text-sm">{title}</h3>
            <p className={`text-4xl font-bold mt-2  ${highlightColor}`}>{value}</p>
            {items && (
                <ul className="space-y-2 mt-2">
                    {items.map((item, index) => (
                        <div key={index} className="flex gap-2">
                            <img src={item.imageSrc} alt="Device" className="w-5 h-5 rounded-full " />
                            
                            <li key={index} className="flex-1 flex justify-between items-center">
                                <span>{item.label}</span>
                                <Link href="#" className="text-custom-blue underline">{item.value}</Link>
                            </li>
                        </div>
                    ))}
                </ul>
            )}

            {imageSrc && (
                <div className="mt-20 flex justify-left">
                    <img src={imageSrc} alt="Logo" className="w-14 h-14 rounded-full" />
                </div>
            )}
        </div>
    );
};

export default StatsCard;