import FastMarquee from 'react-fast-marquee'
import CardsMarquee from './cardsMarquee'
export default function MarqueeRight() {
  return ( <div className='relative pt-2'>
          <FastMarquee
            speed={20}
            direction="right"
            pauseOnHover={true}
            className=' absolute z-0 w-full overflow-hidden inset-0'>
            <CardsMarquee
              owener="Alice Johnson"
              content="Amazing experience collaborating, the workflow was super smooth!"
              projectName="Cafe POS System"
              postiton="Product Manager"
            />

            <CardsMarquee
              owener="Michael Chen"
              content="Delivered the project on time with excellent quality, highly recommend!"
              projectName="E-Library Platform"
              postiton="CTO"
            />

            <CardsMarquee
              owener="Sophia Martinez"
              content="The app design was modern and easy to use, clients loved it."
              projectName="Event Booking App"
              postiton="UI/UX Designer"
            />

            <CardsMarquee
              owener="David Kim"
              content="Their team provided outstanding support even after launch."
              projectName="Inventory Management"
              postiton="Operations Director"
            />

            <CardsMarquee
              owener="Emily Brown"
              content="Professional work and great communication throughout the process."
              projectName="Employee Attendance System"
              postiton="HR Manager"
            />
          </FastMarquee>
          <div className="absolute z-10 flex w-full justify-between top-0">
            <div className="w-10 h-[20%] bg-gradient-to-r from-red-600 "></div>
            <div className="w-10  bg-gradient-to-l from-black/65"></div>
          </div>
        </div>
  )
}
