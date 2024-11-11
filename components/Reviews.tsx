import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";


const reviews = [
    {
        name: "Shibasankar",
        body: "Clean UI and fast transactions make recharges easy; great support and security.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "N Akash Yadav",
        body: "User-friendly and reliable with no hidden charges, perfect for quick payments.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "Ramesh Babu",
        body: "No convenience fees, smooth transactions, highly recommended.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Vikas V ",
        body: "Convenient, secure billing with multiple payment options and no fees.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Ashwini Anu",
        body: "Makes payments easy, with no fees and intuitive design.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "Sandesh Rao Shirole",
        body: "Saves bill details, making recharges easier.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "Sindhu N S",
        body: "User-friendly, no extra charges, very simple to use.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Hemananda Tandi",
        body: "Great credit card payment experience and secure.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jayasri T ",
        body: "Quick, efficient recharges without extra fees.",
        img: "https://avatar.vercel.sh/james",
    },
];

const firstRow = reviews;

const ReviewCard = ({
    img,
    name,
    body,
}: {
    img: string;
    name: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // dark styles
                "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-mediumtext-white">
                        {name}
                    </figcaption>
                </div>
            </div>
            <blockquote className="mt-2 text-sm line-clamp-3">{body}</blockquote>
        </figure>
    );
};

export default function Reviews() {
    return (
        <div className="relative flex h-[150px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:40s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-zinc-950   from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-zinc-950 from-background"></div>
        </div>
    );
}
