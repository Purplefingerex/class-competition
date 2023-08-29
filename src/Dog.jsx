import Image from "./Image.jsx"

const Dog = ({name, breed, gender}) => {
  const dogData = {
    name,
    breed,
    gender,
  };

  return (
    <div>
      <Image />
      <h3>{dogData.name}</h3>
      <h4>{dogData.breed}</h4>
      <h4>{dogData.gender}</h4>
    </div>
  )
}

export default Dog