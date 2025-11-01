export default function Hero({ title, backgroundImage, buttons, showSchedule, isActive }) {
if (!isActive) return null;

return (
<section 
className="hero-section"
style={{ backgroundImage: `url(${backgroundImage})` }}
>
<div className="hero-content">
<h1 className="hero-title">{title}</h1>
<p className="hero-subtitle">Order Online for Touchless Delivery</p>

<div className="cta-buttons">
{buttons.map((button, index) => (
<button
key={index}
className={`btn ${button.primary ? 'btn-primary' : 'btn-secondary'}`}
>
{button.text}
</button>
))}
</div>

{showSchedule && (
<div className="schedule-drive">
Schedule a Drive Today
</div>
)}
</div>
</section>
);
}
