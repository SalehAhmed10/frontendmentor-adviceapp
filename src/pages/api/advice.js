// Next.js API route support: https://nextjs.org/docs/api-routes/introductio


// 	https://api.adviceslip.com/advice -  API endpoint for random advice slip




const name = async (req, res) => {

  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  res.status(200).json(data);
  console.log(data);
  res.end();
};

export default name
