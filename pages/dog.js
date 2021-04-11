function Dog({data}) {
  // get the first dog from the array & make variables for info
  const dogInfo = data[0];
  const dogNames = ["Lucky", "Fido", "Spot", "Teddy", "Cheyenne 2.0", "Rocky 2.0"]
  const imgUrl = dogInfo.url;
  console.log(dogInfo)
  return (
    <div>
    <h2>Oops this isn't a drink!</h2>
    <p>Meet {dogNames[0]}</p>
      <img src={imgUrl} height="400"></img>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.thedogapi.com/v1/images/search`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Dog;
