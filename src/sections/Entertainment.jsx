import { shows } from '../constants';
import EntertainmentCard from '../components/EntertainmentCard';

const Entertainment = () => {
  return (
    <section className='w-full flex flex-col justify-start
    items-start'>
      {shows.map((show, index) => (
        <EntertainmentCard key={index}
          index={index} imgURL={show.imgUrl} {...show} />

      ))}

    </section>
  )
}

export default Entertainment;