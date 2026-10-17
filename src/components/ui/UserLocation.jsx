import { useEffect, useState } from "react";

function UserLocation() {
  const [location, setLocation] = useState(null);
  // const [error, setError] = useState("");

  function getLocation() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude  } = position.coords;
      console.log(latitude, longitude)
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&accept-language=en`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch location");
        }

        const data = await res.json();

        setLocation({
          city:
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.state ||
            "Unknown city",
          country: data.address.country || "Unknown country",
        });
      } catch (e) {
        console.log(e.message)
        // setError("could not get city and country");
      }
    },
  () => {
    // setError("Location permission denied or unavailable.")
  });
  }

  useEffect(() => {
    getLocation();
  }, [])
  return (
    <div>
      {location && <span className="text-5xl font-bold">{location.city}, {location.country}</span>}
    </div>
  );
}

export default UserLocation;
