

const PriceOptions = () => {
    const priceOptions = [
  {
    id: 1,
    name: "Basic Fit",
    price: 29.99,
    features: [
      "Access to gym equipment",
      "Locker room access",
      "1 guest pass per month",
      "Free Wi-Fi",
      "Open 6 AM – 10 PM",
      "Mobile app access",
      "Monthly progress tracking"
    ]
  },
  {
    id: 2,
    name: "Standard Plus",
    price: 49.99,
    features: [
      "Everything in Basic Fit",
      "Unlimited guest passes",
      "Free group classes (Yoga, Zumba, HIIT)",
      "1 personal training session/month",
      "Access to cardio & strength zones",
      "Nutrition tips via app",
      "Open 24/7"
    ]
  },
  {
    id: 3,
    name: "Pro Elite",
    price: 79.99,
    features: [
      "Everything in Standard Plus",
      "Dedicated locker",
      "Sauna & steam room access",
      "3 personal training sessions/month",
      "Nutrition consultation with expert",
      "Body composition analysis",
      "Free protein shake (1/day)",
      "Priority class booking"
    ]
  },
  {
    id: 4,
    name: "Student Saver",
    price: 19.99,
    features: [
      "Access to gym equipment",
      "Student ID required",
      "Valid only Mon–Fri (8 AM – 6 PM)",
      "Free group classes (limited slots)",
      "Mobile app access",
      "Monthly student challenges",
      "Discounts on merchandise"
    ]
  },
  {
    id: 5,
    name: "Family Plan",
    price: 99.99,
    features: [
      "Access for up to 4 family members",
      "Free kids’ classes (ages 6–12)",
      "Weekend family fitness events",
      "Group personal training available",
      "1 nutrition session for family/month",
      "Free access to pool area",
      "Priority event invitations",
      "Family locker access"
    ]
  }
];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-24 my-12">
           {
            priceOptions.map(priceOption=><PriceOption priceOption={priceOption}></PriceOption>)
           } 
        </div>
    );
};
 function PriceOption({priceOption}){
    const{name,price}=priceOption
    const[a,b,c,d,e,f,g,h]=priceOption.features;
    return(
<div className="flex flex-col p-4 border-2 rounded-2xl bg-sky-500 border-white text-white">
<div>
        <h2 className="my-4 text-center"><span className="text-7xl font-bold">{price}</span><span className="text-xl">/mon</span></h2>
        <h1 className="text-3xl font-semibold text-center">{name}</h1>
<ul className="my-4 flex flex-col gap-2 text-base">
    <li>{a}</li>
<li>{b}</li>
<li>{c}</li>
<li>{d}</li>
<li>{e}</li>
<li>{f}</li>
<li>{g}</li>
<li>{h}</li>
</ul>
</div>
<div className="flex-grow flex items-end">
    <button className="  h-12 w-full bg-lime-600 rounded-2xl">Purchase</button>
</div>
</div>
    )
 }
export default PriceOptions;