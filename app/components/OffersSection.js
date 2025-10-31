export default function OffersSection({ offers }) {
return (
<section className="bg-white py-20">
<div className="max-w-1300 mx-auto px-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10">
{offers.map((offer, index) => (
<div key={index} className="bg-gray-100 p-10 md:p-10 rounded-xl text-left">
<h3 className="text-2xl font-bold text-black mb-4">{offer.heading}</h3>
<p className="text-base text-black mb-6 leading-relaxed">{offer.text}</p>
<button className="bg-white text-black border border-black py-3 px-10 rounded text-sm font-semibold cursor-pointer no-underline hover:bg-black hover:text-white">
{offer.buttonText}
</button>
</div>
))}
</div>
</div>
</section>
);
}
