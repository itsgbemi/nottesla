export default function Hero({ title, subtitle, linkText, backgroundImage, buttons, showSchedule, isActive }) {
if (!isActive) return null;

return (
<section 
className="h-[80vh] bg-cover bg-center flex flex-col relative"
style={{ backgroundImage: `url(${backgroundImage})` }}
>
<div className="flex-1 flex flex-col justify-start items-center text-center pt-30">
<h1 className="text-4xl font-bold mb-2.5">{title}</h1>
{subtitle && <p className="text-base mb-7.5">{subtitle}</p>}
{linkText && <p className="text-base mb-7.5 underline cursor-pointer">{linkText}</p>}

<div className="flex gap-5 mb-7.5">
{buttons.map((button, index) => (
<button
key={index}
className={`py-3 px-15 rounded text-sm font-semibold cursor-pointer transition-all duration-300 ${button.primary ? 'bg-primary text-white border-none' : 'bg-white text-black border-none'}`}
>
{button.text}
</button>
))}
</div>

{showSchedule && (
<div className="text-sm underline cursor-pointer">
Schedule a Drive Today
</div>
)}
</div>
</section>
);
  }
