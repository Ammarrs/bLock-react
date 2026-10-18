import DisplayDate from '../components/ui/DisplayDate';
import UserLocation from '../components/ui/UserLocation';
import Clock from './../components/ui/Clock';

function Home() {
  return (
    <div className="h-175 flex flex-col gap-2 m-16 py-15 justify-center">
      <Clock/>
      <DisplayDate/>
      <UserLocation/>
      <span className="lg:w-1/2 font-medium text-4xl my-7 py-12">
        a some qoute from some api to make a smiley face
      </span>
    </div>
  );
}

export default Home;
